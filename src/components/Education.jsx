import EducationImg from '/src/img/stickers/grafico-de-barras.png';

const Education = () => {
    return (
        <>
        <section className="i-am" data-aos="fade-up" data-aos-duration="1000">
            <div className="main-container">
                <h1 className="title">Educación</h1>
                <div className="flex-container-2">
                    <img className="empty-2" src={EducationImg} alt="Mi foto" />
                        <ul>
                            <li><strong>Ingeniero de Sistemas (2023)</strong> - Fundacion Universitaria Claretiana "Uniclaretiana"</li>
                            <li><strong>Diplomado en Docencia y Didáctica Universitaria</strong> - Politécnico Superior de Colombia</li>
                            <li><strong>Curso de Desarrollo Web Front end HTML y CSS (2021)</strong> - Crehana</li>
                            <li><strong>Bootcamp de Desarrollo de software (2023)</strong> - Rio Software / Escuela de Robótica del Chocó</li>
                            <li>Nivel <strong>B1</strong> en Inglés</li>
                        </ul>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>    
    )
} 

export default Education
