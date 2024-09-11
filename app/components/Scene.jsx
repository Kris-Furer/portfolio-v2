'use client';

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from 'react';
import { OrbitControls, ScrollControls, shaderMaterial, MeshWobbleMaterial, MeshDistortMaterial, Float, Sparkles, MeshPhysicalMaterial } from "@react-three/drei";
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MorphingPlane() {
    const planeRef = useRef();

    useEffect(() => {
        const mesh = planeRef.current;

        gsap.to(mesh.rotation, {
            y: 1,
            x:1,
            z:1, // Final value of rotation
            ease: "none", // Linear easing for smooth animation
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true, // Link animation to the scroll position
                onUpdate: (self) => {
                    const progress = self.progress;
                    mesh.rotation.y = progress * Math.PI * .5; // Rotate based on scroll progress
                    mesh.rotation.x = progress * Math.PI * .3; // Rotate based on scroll progress
                    mesh.rotation.z = progress * Math.PI * .6; // Rotate based on scroll progress
                },
            },
        });
    }, []);

    return (
        <mesh ref={planeRef} position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1, 20, 20, 10, 10, 10]} />
            <MeshDistortMaterial wireframe />
        </mesh>
    );
}

function MouseFollowLight() {
    const lightRef = useRef();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            setMouse({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        if (lightRef.current) {
            lightRef.current.position.set(mouse.x * 10, mouse.y * 10, 10); // Adjust multiplier as needed
        }
    });

    return <directionalLight ref={lightRef} intensity={2} color='cyan' />;
}



export default function Scene() {
    return (
        <div className="canvas-wrap">
            <Canvas camera={{ position: [3, 3, 3] }}>
                {/* Lighting setup */}
                <ambientLight intensity={.3} />
                <directionalLight position={[5, 5, 5]} intensity={2} color='#f7255d' />
                <MouseFollowLight />  Light following the mouse
                <directionalLight position={[-10, 5, 5]} intensity={2} color='cyan' />

                <Suspense fallback={null}>
                    {/* Spheres ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

                    <Sparkles
                        count={80}
                        speed={3}
                        size={10}
                        color="cyan"
                        scale={[90, 90, 90]}  // Larger scale to cover more area
                        position={[0, 0, 0]} // Position them closer to the camera or objects
                    />


                    <ScrollControls damping={0.2} pages={2}>
                      
                        <Float speed={1}         // Animation speed
                            rotationIntensity={1} // Intensity of rotation
                            floatIntensity={1}    // Intensity of float
                            floatingRange={[1, 1.5]} >
                            
                            <MorphingPlane />
                        </Float>

                        <OrbitControls enableZoom={false} />
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
}
