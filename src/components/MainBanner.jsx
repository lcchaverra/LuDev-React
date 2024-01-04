import BannerImg from '/src/img/baitface/1.jpeg';

const MainBanner = () => {
    return (
        <>
        <section className="main-section-banner" data-aos="zoom-in">
            <div className="main-section-content">
                <p>Hola, soy <strong>Luis Carlos Chaverra C.</strong><br/> Desarrollador FullStack, ¡Bienvenid@!</p>
            </div>
            <div className="main-section-img">
                <img src={BannerImg} alt="Foto de Perfil" />
            </div>
        </section>
        </>    
    )
} 

export default MainBanner
