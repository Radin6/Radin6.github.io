import { projectsData } from "../data/projectsData";
import TechDetails from "../components/Project/TechDetails";
import { Project } from "../components/Project/Project";

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex max-w-[600px] flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl my-5 text-white text-center">Projects</h2>
        {projectsData.map((project, index) =>
          <Project 
            key={project.title} 
            position={index % 2 ? "left" : "right"} 
            title={project.title} 
            src={project.src} 
            href={project.href} 
            targetBlank={project.targetBlank} 
            onClick={project.onClick} 
            link={project.link}
            >
            <p>{project.description}</p>
            {project.madeWith?.backend.length !== 0 &&
              <TechDetails title={"Made on the Back-End with:"} techData={project.madeWith?.backend || [""]} />
            }
            {project.madeWith?.frontend.length !== 0 &&
              <TechDetails title={"Made on the Fron-End with:"} techData={project.madeWith?.frontend || [""]} />
            }
          </Project>
        )}
      </div>
    </section>
  );
}

export default Projects;