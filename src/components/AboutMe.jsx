import React from "react";
import '/src/styles/css/styles.css'

const AboutMe = () => {
    return(
        <>
        <div className="section-divider"></div>
        <section className="about-me">
            <div className="main-container">
                <h1 className="title">¡Hola!</h1>
                <div className="grid-container">
                    <img src="/src/img/conTraje.PNG" alt="Mi foto" />
                    <p>Hola soy Lucas Chaverra, me dedico al Desarrollo de software con enfoque en el Frontend(En lo web) y apps de
                        Escritorio, estudiante autodidacta con muchos animos de aprender
                        cosas nuevas y fomentar conocimientos ya adquiridos.<br /><br />
                        <em>
                        Como proxima Meta tengo Aprender sobre desarrollo Movil :D
                        </em>
                    </p>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>
    )
}

export default AboutMe