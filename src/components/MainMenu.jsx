import React from 'react'
import { Link } from "react-router-dom";
function MainMenu() {
    return (
        <>
            <nav className="main-nav" id="main-nav">
                <ul className="main-menu">
                <li className="main-menu__item"><Link to="/" className="main-menu__link">Inicio</Link></li>
                    <li className="main-menu__item"><Link to="/ProjectsPage" className="main-menu__link">Proyectos</Link></li>
                    <li className="main-menu__item"><Link to="/ExperiencePage" className="main-menu__link">Experiencias</Link></li>
                    <li className="main-menu__item"><Link to="/" className="main-menu__link">Habilidades</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default MainMenu
