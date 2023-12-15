import ProjectCard from "./ProjectCard";
import {ProjectsData} from "./ProjectsData";

function Projects() {
  return (
    <>
      <h2 className="title">Proyectos</h2>
      <div className="projects-grid-container">
        {ProjectsData.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            image={proyecto.image}
            title={proyecto.title}
            description={proyecto.description}
            link={proyecto.link}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
