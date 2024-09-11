import dynamic from "next/dynamic";
import Project from "./components/Project";
import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About"
const Scene = dynamic(() => import("./components/Scene"))
import projects from "./projects";
import Footer from "./components/Footer";


export default function Home() {
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
