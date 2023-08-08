import ProjectCard from "./ProjectCard";

// Importacion de Imagenes
import P1Img from "/src/img/projects/p1.png";
import P2Img from "/src/img/projects/p2.png";
import P3Img from "/src/img/projects/p3.png";
import P4Img from "/src/img/projects/p4.png";
import P5Img from "/src/img/projects/p5.png";
import P6Img from "/src/img/projects/p6.png";
import P7Img from "/src/img/projects/p7.png";
import P8Img from "/src/img/projects/p8.png";
import P9Img from "/src/img/projects/p9.png";
import P10Img from "/src/img/projects/p10.png";
import P11Img from "/src/img/projects/p11.png";
import P12Img from "/src/img/projects/p12.png";
import P13Img from "/src/img/projects/p13.png";

const projects = [
  {
    id: 13,
    image: P13Img,
    title: "Blog Fiestas Patronales",
    description: "Blog para las Fiestas Patronales San Roque edicion 2023",
    link: "https://blog-fiestas-patronales.netlify.app/post-details-1",
  },
  {
    id: 12,
    image: P12Img,
    title: "Idiomas en Señas",
    description:
      "Landing Page realizada para el voluntareado de idiomas en señas",
    link: "https://idiomas-en-senas.netlify.app/",
  },
  {
    id: 11,
    image: P11Img,
    title: "CEI",
    description:
      "Aplicativo web para la simulacion de planes de negocios entregado al Centro de emprendimiento e innovacion (CEI)",
    link: "http://centro-de-emprendimiento-e-innovacion-utch.com/",
  },
  {
    id: 8,
    image: P8Img,
    title: "FlyChallenge",
    description: "App web en React Ganadora del Flychallenge de Helppeople",
    link: "https://flychallenge.netlify.app/",
  },
  {
    id: 1,
    image: P1Img,
    title: "Balafón Coffe",
    description:
      "Proyecto Universitario para la Asignatura de 'Ingenieria del Sofware I & II'",
    link: "https://balaffon-v1.netlify.app/",
  },
  {
    id: 10,
    image: P10Img,
    title: "Clon de Instagram",
    description:
      "Proyecto realizado en la culminacion del primer modulo del bootcmap de desarrollo de software / Rio software",
    link: "https://instagram-copy-pf.netlify.app/",
  },
  {
    id: 3,
    image: P3Img,
    title: "Lu Dev",
    description:
      "Taller Practico del curso de maquetacion en HTML y CSS de EDTeam",
    link: "https://lu-developer.netlify.app/",
  },
  {
    id: 4,
    image: P4Img,
    title: "Balaffón Coffe v2",
    description: "Pagina Elaborada como practica de conocimientos en Sass",
    link: "https://balaffon-v2.netlify.app/",
  },
  {
    id: 5,
    image: P5Img,
    title: "Landing Page RWD",
    description: "Taller del curso de Responsive Web Desing de EDTeam",
    link: "https://landing-rwd.netlify.app/",
  },
  {
    id: 6,
    image: P6Img,
    title: "EPSTRACKER",
    description:
      "Version Final de la Web Ganadora de la Competencia Hack The World 2022",
    link: "#",
  },
  {
    id: 7,
    image: P7Img,
    title: "EPSTRACKER Altenrativa",
    description:
      "Version Preliminar de la Web Ganadora de la Competencia Hack The World 2022",
    link: "https://epstracker-v1.netlify.app/",
  },
  {
    id: 9,
    image: P9Img,
    title: "Digital Ocean Home (Test)",
    description:
      "Maquetacion de Homepage de Digital Ocean con Tailwind (solo practica)",
    link: "https://digital-ocean-hometest.netlify.app/",
  },
];

function Projects() {
  return (
    <>
      <h2 className="title">Proyectos</h2>
      <div className="projects-grid-container">
        {projects.map((proyecto) => (
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
