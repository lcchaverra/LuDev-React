import React from 'react'
import HTMLImg from '/src/img/tec/html-5.png';
import CssImg from '/src/img/tec/css-3.png';
import JsImg from '/src/img/tec/js.png';
import MongoImg from '/src/img/tec/mongo.png';
import PhpImg from '/src/img/tec/php.png';
import GitImg from '/src/img/tec/git.png';
import CsharpImg from '/src/img/tec/c-sharp.png';
import SqlImg from '/src/img/tec/sql-server.png';
import ReactImg from '/src/img/tec/react.png';

const Skills = () => {
    return(
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Habilidades Tecnicas</h1>
                <div className="flex-container-2">
                    <p>
                        Las siguientes competencias son las que adquiri conocimiento a partir de estudios formales e informales, los cuales mediante practica mejore la comprension y el desempeño del conocimiento.
                    </p>
                </div>
            </div>
            <div className='SkillsGrid'>
                <img src={HTMLImg} />
                <img src={CssImg} />
                <img src={JsImg} />
                <img src={MongoImg} />
                <img src={PhpImg} />
                <img src={GitImg} />
                <img src={CsharpImg} />
                <img src={SqlImg} />
                <img src={ReactImg} />
            </div>
        </section>
        </>
    )
}

export default Skills