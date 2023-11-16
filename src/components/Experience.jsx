import ExperienceImg from "/src/img/stickers/oficina.png";

const Experience = () => {
  return (
    <>
      <section className="i-am" data-aos="zoom-out-down">
        <div className="main-container">
          <h1 className="title">Experiencia</h1>
          <div className="flex-container-2">
            <img className="empty" src={ExperienceImg} alt="Mi foto" />
            <ul className="letter-small">
              <li>
                <strong>
                  Fundador, Representante legal y Desarrollador de Software en
                  Facnet (Mar 2022 - Actualidad)
                </strong>
                <p>
                  <ol>
                    <li>
                      Lideré y participé en múltiples proyectos de software,
                      desempeñando roles como Líder de Equipo y Desarrollador
                      Fullstack.
                    </li>
                    <li>
                      Logré cumplir con éxito los requerimientos del cliente y
                      obtener los resultados esperados en cada proyecto.
                    </li>
                    <li>
                      Utilicé tecnologías como HTML, CSS, JavaScript, PHP, SQL,
                      y otras, para el desarrollo de soluciones eficientes y de
                      alta calidad.
                    </li>
                  </ol>
                </p>
              </li>
              <hr />

              <li>
                <strong>
                  Desarrollador de Software en Helppeople Cloud (Feb 2023 - Abr
                  2023)
                </strong>
                <p>
                  Participé en el Flychallenge organizado por la empresa Pdonde
                  salí ganador y obtuve el empleo, Diseñé y desarrollé
                  aplicaciones web utilizando tecnologías como React y .NET, me
                  desenpeñé en ambos roles tanto frontend como el backend.
                </p>
              </li>
              <hr />

              <li>
                <strong>
                  Voluntariado Idiomas en Señas (Jul 2023 - Actualidad)
                </strong>
                <p>
                  Desarrollé una landing page con React Para la iniciativa de
                  idiomas en señas donde desempeñe mi rol como fullstack.
                </p>
              </li>
              <hr />

              <li>
                <strong>Pasante en Rentic SAS (Mar 2023 - Jun 2023)</strong>
                <p>
                  Desarrollé una plataforma web para el monitoreo del
                  funcionamiento de sistemas de energía renovable sostenibles
                  para brindarle una solución escalable a la empresa utilizando
                  Makoserver y el lenguaje Lua.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;
