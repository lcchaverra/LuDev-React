import React from 'react'
import ProjectCard from './ProjectCard'
import '/src/styles/css/styles.css'

const projects = [
    {
        "image": "/src/img/projects/p1.png",
        "title": "Balafón Coffe",
        "description": "Proyecto Universitario para la Asignatura de 'Ingenieria del Sofware I & II'",
        "link": "#"
    },
    {
        "image": "/src/img/projects/p2.png",
        "title": "CEI" ,
        "description": "Proyecto entregado al CEI de la UTCH",
        "link": "#"
    },
    {
        "image": "/src/img/projects/p3.png",
        "title": "Lu Dev" ,
        "description": "Taller Practico del curso de maquetacion en HTML y CSS de EDTeam",
        "link": "#"
    },
    {
        "image": "/src/img/projects/p4.png",
        "title": "Balaffón Coffe v2" ,
        "description": "Pagina Elaborada como practica de conocimientos en Sass",
        "link": "#"
    },
    {
        "image": "/src/img/projects/p5.png",
        "title": "Landing Page RWD" ,
        "description": "Taller del curso de Responsive Web Desing de EDTeam",
        "link": "#"
    }
]

function Projects() {
    return (
        <>
        <h2 className="title">Proyectos Recientes</h2>
            <div className="projects-grid-container">
                {
                    projects.map(proyecto => 
                    <ProjectCard 
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
