"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import {
  OrbitControls,
  ScrollControls,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Float,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MorphingPlane() {
    const planeRef = useRef();

    useEffect(() => {
        const mesh = planeRef.current;

        gsap.to(mesh.rotation, {
            y: 1,
            x: 1,
            z: 1, // Final value of rotation
            ease: "none", // Linear easing for smooth animation
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true, // Link animation to the scroll position
                onUpdate: (self) => {
                    const progress = self.progress;
                    mesh.rotation.y = progress * Math.PI * .5; // Rotate based on scroll progress
                    mesh.rotation.x = progress * Math.PI * .3;
                    mesh.rotation.z = progress * Math.PI * .6;
                },
            },
        });
    }, []);

    return (
        <mesh ref={planeRef} position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[1, 20, 20, 10, 10, 10]} />
            <MeshDistortMaterial color="cyan"  />
        </mesh>
    );
}
function FloatingSphere() {
  return (
    <Float speed={.5} rotationIntensity={3} floatIntensity={2}>
      <mesh position={[-9, 2, -1]}>
        <sphereGeometry args={[3, 16, 16]} />
        <MeshDistortMaterial color="cyan" speed={0.3} distort={1} radius={1} />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  return (
    <Float
      speed={.5}
      rotationIntensity={1}
      floatIntensity={.6}
      floatingRange={[1, 5]}
    >
      <mesh position={[3, -5, -1]}>
        <torusGeometry args={[1.5, 0.5, 16, 100]} />
        <MeshDistortMaterial color="cyan" speed={0.5} distort={0.8} />
      </mesh>
    </Float>
  );
}
function FloatingTorus2() {
  return (
    <Float
      speed={.5}
      rotationIntensity={1}
      floatIntensity={.6}
      floatingRange={[1, 9]}
    >
      <mesh position={[-3, -1, -2]}>
        <torusGeometry args={[1.5, 0.5, 16, 100]} />
        <MeshDistortMaterial color="pink" speed={0.5} distort={0.8} />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron() {
  return (
    <Float
      speed={0.1}
      rotationIntensity={2}
      floatIntensity={6}
      floatingRange={[1, 10]}
    >
      <mesh position={[0, -3, 1]}>
        <icosahedronGeometry args={[2, 0]} />
        <MeshWobbleMaterial color="cyan" speed={1} factor={1} />
      </mesh>
    </Float>
  );
}

function FloatingCone() {
  return (
    <Float speed={.4} rotationIntensity={4} floatIntensity={4}>
      <mesh position={[-3, 1, -1]}>
        <coneGeometry args={[3, 3, 32]} />
        <MeshDistortMaterial color="cyan" speed={1} distort={1} />
      </mesh>
    </Float>
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(mouse.x * 10, mouse.y * 10, 10); // Adjust multiplier as needed
    }
  });

  return <directionalLight ref={lightRef} intensity={1} color="#f24d6c" />;
}

function CameraController() {
  const { camera } = useThree(); // Access the camera

  useEffect(() => {
    // ScrollTrigger for Project 1
    gsap.to(camera.position, {
      z: 10, // Target position for project1
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          camera.position.z = THREE.MathUtils.lerp(3, 10, progress); // Lerp between initial and target
        },
      },
    });

    // ScrollTrigger for Project 2
    gsap.to(camera.position, {
      z: 5, // Adjust to the position you want for project2
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project2",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          camera.position.z = THREE.MathUtils.lerp(10, 5, progress); // Lerp between project1 and project2 positions
        },
      },
    });
  }, [camera]);

  return null;
}


export default function Scene() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [3, 3, 3] }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color='#f7255d' />
        <MouseFollowLight /> Light following the mouse
        <directionalLight position={[-10, 5, 5]} intensity={2} color="cyan" />
        <Suspense fallback={null}>
          <Sparkles
            count={80}
            speed={3}
            size={10}
            color="cyan"
            scale={[90, 90, 90]} // Larger scale to cover more area
            position={[0, 0, 0]} // Position them closer to the camera or objects
          />
          <ScrollControls damping={0.2} pages={2}>
            {/* <MorphingPlane /> */}
             <FloatingSphere />
             <FloatingTorus /> 
             <FloatingTorus2 /> 
            <FloatingIcosahedron />
            <FloatingCone />
            <OrbitControls enableZoom={false} />
          </ScrollControls>
        </Suspense>
        <CameraController />{" "}
        {/* Include CameraController to manage camera zoom */}
      </Canvas>
    </div>
  );
}
