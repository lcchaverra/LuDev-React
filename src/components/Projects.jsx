import React from 'react'
import ProjectCard from './ProjectCard'
import '/src/styles/css/styles.css'

const projects = [
    {   
        "id": 1,
        "image": "/src/img/projects/p1.png",
        "title": "Balafón Coffe",
        "description": "Proyecto Universitario para la Asignatura de 'Ingenieria del Sofware I & II'",
        "link": "#"
    },
    {
        "id": 2,
        "image": "/src/img/projects/p2.png",
        "title": "CEI" ,
        "description": "Proyecto entregado al CEI de la UTCH",
        "link": "#"
    },
    {
        "id": 3,
        "image": "/src/img/projects/p3.png",
        "title": "Lu Dev" ,
        "description": "Taller Practico del curso de maquetacion en HTML y CSS de EDTeam",
        "link": "#"
    },
    {
        "id": 4,
        "image": "/src/img/projects/p4.png",
        "title": "Balaffón Coffe v2" ,
        "description": "Pagina Elaborada como practica de conocimientos en Sass",
        "link": "#"
    },
    {
        "id": 5,
        "image": "/src/img/projects/p5.png",
        "title": "Landing Page RWD" ,
        "description": "Taller del curso de Responsive Web Desing de EDTeam",
        "link": "#"
    }
    ,
    {
        "id": 6,
        "image": "/src/img/projects/p7.png",
        "title": "EPSTRACKER" ,
        "description": "Version Final de la Web Ganadora de la Competencia Hack The World 2022",
        "link": "#"
    }
    ,
    {
        "id": 7,
        "image": "/src/img/projects/p6.png",
        "title": "EPSTRACKER Altenrativa" ,
        "description": "Version Preliminar de la Web Ganadora de la Competencia Hack The World 2022",
        "link": "#"
    }
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
                    <ProjectCard/>
            </div>
        </>
    )
}

export default Projects
