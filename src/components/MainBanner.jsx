import React from 'react'
import BannerImg from '/src/img/foto_perfil.jpg';
import '/src/styles/css/styles.css'

const MainBanner = () => {
    return (
        <>
        <section className="main-section-banner">
            <div className="main-section-content">
                <p>Hola, soy <strong>Lucas Chaverra C.</strong><br/> Desarrollador Frontend, ¡Bienvenid@!</p>
            </div>
            <div className="main-section-img">
                <img src={BannerImg} alt="Foto de Perfil" />
            </div>
        </section>
        </>    
    )
} 

export default MainBanner
