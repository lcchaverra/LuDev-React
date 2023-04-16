import React from 'react'
import ProjectCard from './ProjectCard'
import '/src/styles/css/styles.css'
// Importacion de Imagenes
import P1Img from '/src/img/projects/p1.png';
import P2Img from '/src/img/projects/p2.png';
import P3Img from '/src/img/projects/p3.png';
import P4Img from '/src/img/projects/p4.png';
import P5Img from '/src/img/projects/p5.png';
import P6Img from '/src/img/projects/p6.png';
import P7Img from '/src/img/projects/p7.png';
import P8Img from '/src/img/projects/p8.png';
import P9Img from '/src/img/projects/p9.png';

const projects = [
        {
        "id": 8,
        "image": P8Img,
        "title": "FlyChallenge" ,
        "description": "App web en React Ganadora del Flychallenge de Helppeople",
        "link": "https://playful-cobbler-fa8de9.netlify.app/"
    },
    {   
        "id": 1,
        "image": P1Img,
        "title": "Balafón Coffe",
        "description": "Proyecto Universitario para la Asignatura de 'Ingenieria del Sofware I & II'",
        "link": "https://resplendent-longma-88c236.netlify.app/"
    },
    {
        "id": 2,
        "image": P2Img,
        "title": "CEI" ,
        "description": "Proyecto entregado al CEI de la UTCH",
        "link": "https://cei-utch.000webhostapp.com/"
    },
    {
        "id": 3,
        "image": P3Img,
        "title": "Lu Dev" ,
        "description": "Taller Practico del curso de maquetacion en HTML y CSS de EDTeam",
        "link": "https://serene-concha-96547c.netlify.app/"
    },
    {
        "id": 4,
        "image": P4Img,
        "title": "Balaffón Coffe v2" ,
        "description": "Pagina Elaborada como practica de conocimientos en Sass",
        "link": "https://heroic-malasada-5be4a2.netlify.app/"
    },
    {
        "id": 5,
        "image": P5Img,
        "title": "Landing Page RWD" ,
        "description": "Taller del curso de Responsive Web Desing de EDTeam",
        "link": "https://dainty-mousse-4ae4bd.netlify.app/"
    }
    ,
    {
        "id": 6,
        "image": P6Img,
        "title": "EPSTRACKER" ,
        "description": "Version Final de la Web Ganadora de la Competencia Hack The World 2022",
        "link": "#"
    }
    ,
    {
        "id": 7,
        "image": P7Img,
        "title": "EPSTRACKER Altenrativa" ,
        "description": "Version Preliminar de la Web Ganadora de la Competencia Hack The World 2022",
        "link": "https://heroic-donut-23023b.netlify.app/"
    },
    {
        "id": 9,
        "image": P9Img,
        "title": "Digital Ocean Home (Test)",
        "description": "Maquetacion de Homepage de Digital Ocean con Tailwind (solo practica)",
        "link": "https://digital-ocean-hometest.netlify.app/"
    },
]

function Projects() {
    return (
        <>
        <h2 className="title">Proyectos</h2>
            <div className="projects-grid-container">
                {
                    projects.map(proyecto => 
                    <ProjectCard 
                    key={proyecto.id}
                    image={proyecto.image} 
                    title={proyecto.title} 
                    description={proyecto.description} 
                    link={proyecto.link} />)
                }
                    {/* <ProjectCard/> */}
            </div>
        </>
    )
}

export default Projects
