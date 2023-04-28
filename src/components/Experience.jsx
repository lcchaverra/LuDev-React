import React from "react";
import ExperienceImg from "/src/img/stickers/oficina.png";
import "/src/styles/css/styles.css";

const Experience = () => {
  return (
    <>
      <section className="i-am">
        <div className="main-container">
          <h1 className="title">Experiencia</h1>
          <div className="flex-container-2">
            <img className="empty" src={ExperienceImg} alt="Mi foto" />
            <ul className="letter-small">
              <li>
                <strong>
                  Desarrollador FullStack(Freelance) (2022 - Actualidad)
                </strong>{" "}
                <br /> Proyecto - Aplicatio Web Para El Centro de Emprendimiento
                e Innovacion "CEI" <br />{" "}
                <em>
                  Participe en la elaboracion del aplicativo web para el CEI de
                  la universidad tecnologica del chocó.
                </em>
              </li>
              <hr />

              <li>
                <strong>Desarrollador Frontend (Nov 2022)</strong>
                <br /> Rio Software - Hackathon/Hack the Word - <br />{" "}
                <ol>
                  <li>
                    Participé en una hackathon organizada por la empresa y
                    obtuve el segundo lugar en la competencia.
                  </li>
                  <li>
                    Desarrollé y diseñé aplicaciones web utilizando tecnologías
                    como HTML, CSS, SASS, JavaScript, y PHP.
                  </li>
                  <li>
                    Colaboré en la creación y mantenimiento de bases de datos
                    SQL.
                  </li>
                </ol>
              </li>

              <hr />

              <li>
                <strong>
                  Desarrollador de Software (Feb 2023 - Abr 2023)
                </strong>
                <br /> Helppeople <br />{" "}
                <ol>
                  <li>
                    Participé en el Flychallenge organizado por la empresa
                    Diseñé y desarrollé aplicaciones web utilizando tecnologías
                    como React y Firebase.
                  </li>
                  <li>
                    Desarrollé tanto el frontend como el backend del proyecto.
                  </li>
                  <li>Gané la competencia y obtuve un empleo en la empresa.</li>
                </ol>
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
