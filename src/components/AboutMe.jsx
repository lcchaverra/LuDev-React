import HelloImg from "/src/img/baitface/2.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section className="about-me">
        <div className="main-container" data-aos="fade-up">
          <h1 className="title">¡Hola!</h1>
          <div className="grid-container">
            <img src={HelloImg} alt="Mi foto" />
            <p>
              Hola soy Lucas Chaverra, Soy un desarrollador frontend y de
              aplicaciones de escritorio con ganas de aprender y crecer en mi
              carrera. Siempre estoy dispuesto a asumir nuevos desafíos y a
              trabajar en proyectos emocionantes que me permitan mejorar mis
              habilidades y expandir mis horizontes.
              <br />
              <br />
              <em>Como proxima Meta tengo Aprender sobre desarrollo Movil</em>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default AboutMe;
