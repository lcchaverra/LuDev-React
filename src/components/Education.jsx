import React from 'react'
import EducationImg from '/src/img/stickers/grafico-de-barras.png';
import '/src/styles/css/styles.css'

const Education = () => {
    return (
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Educación</h1>
                <div className="flex-container-2">
                    <img className="empty-2" src={EducationImg} alt="Mi foto" />
                        <ul>
                            <li><strong>Ingeniero de Sistemas (2023)</strong> - Fundacion Universitaria Claretiana "Uniclaretiana"</li>
                            <li><strong>Bootcamp de Desarrollo de software (2023)</strong> - RioSoftware</li>
                            <li><strong>Curso de Desarrollo Web Front end HTML y CSS (2021)</strong> - Crehana</li>
                            <li>Nivel <strong>B1</strong> en Inglés (Certificado)</li>
                            <br /><em>Autodidacta A termino indefinido</em>
                        </ul>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>    
    )
} 

export default Education
