import React from 'react'
import '/src/styles/css/styles.css'

const Experience = () => {
    return (
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Experiencia</h1>
                <div className="flex-container-2">
                    <img className="empty" src="/src/img/stickers/oficina.PNG" alt="Mi foto" />
                        <ul className="letter-small">
                            <li><strong>Programador Freelance (2022)</strong> <br/> Proyecto - Aplicatio Web Para El Centro de Emprendimiento e Innovacion "CEI" <br/> <em>Participe en la elaboracion del aplicativo web para el CEI de la universidad tecnologica del chocó, donde me dedique a ser FullStack</em></li>
                            <li><strong>Facturador de Farmacia (Sep 2019 - Nov 2019)</strong><br/> Drogueria Freymar <br/> <em>Procesamiento de documentación e introducción de datos en bases de datos.Revisión de Idoneidad de documentos y control de archivo.</em></li>
                            <li><strong>Uno de los Ganadores de la Competencia de Desarrollo - Hack The World (2022)</strong> - RioSoftware</li>
                        </ul>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>    
    )
} 

export default Experience
