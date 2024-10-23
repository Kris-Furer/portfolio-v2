"use client"
import dynamic from "next/dynamic";
import Project from "./components/Project";
import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About"
const Scene = dynamic(() => import("./components/Scene"))
import projects from "./projects";
import Footer from "./components/Footer";
import Lenis from "lenis";
import { useEffect } from "react";


export default function Home() {
  // Slooth
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2, // adjust duration for scroll smoothness
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
        smooth: true,
    });
  
   
  
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    // Clean up function
    return () => lenis.destroy();
  }, []);

  
  return (
    <div className="m-7 text-white">
      <Header />
      <main className="">
        <Scene />
        <Landing />
        <About />

        <div className="pt-8" id="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              id={`project${index + 1}`}
              title={project.title}
              role={project.role}
              subtitle={project.subtitle}
              description={project.description}
              imgs={project.imgs}
              tools={project.tools}
              liveLink={project.link}

            />
          ))}
        </div>



      </main>
      <Footer />
    </div>

  );
}
