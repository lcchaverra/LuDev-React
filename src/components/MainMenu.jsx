import React from 'react'
import { NavLink } from "react-router-dom";
function MainMenu() {
    return (
        <>
            <nav className="main-nav" id="main-nav">
                <ul className="main-menu">
                <li className="main-menu__item"><NavLink to="/" exact className="main-menu__link">Inicio</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/ProjectsPage" exact className="main-menu__link">Proyectos</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/ExperiencePage" exact className="main-menu__link">Experiencias</NavLink></li>
                    <li className="main-menu__item"><NavLink to="/SkillsPage" exact className="main-menu__link">Habilidades</NavLink></li>
                    {/* <li className="main-menu__item"><NavLink to="/RetoPage" exact className="main-menu__link">Reto</NavLink></li> */}
                </ul>
            </nav>
        </>
    )
}

export default MainMenu
