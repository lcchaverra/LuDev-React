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
import TailwindImg from '/src/img/tec/Tailwind.png';
import TSImg from '/src/img/tec/Ts.png';
import FirebaseImg from '/src/img/tec/fire.png';
import ReduxImg from '/src/img/tec/redux.png'
import pyImg from '/src/img/tec/py.png'
import sassImg from '/src/img/tec/sass.png'

const Skills = () => {
    return(
        <>
        <section className="i-am" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
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
                <img src={sassImg}/>
                <img src={JsImg} />
                <img src={TSImg}/>
                <img src={ReactImg} />
                {/* <img src={ReduxImg}/> */}
                <img src={TailwindImg}/>
                <img src={PhpImg} />
                <img src={pyImg}/>
                <img src={CsharpImg} />
                <img src={SqlImg} />
                <img src={MongoImg} />
                <img src={FirebaseImg}/>
                <img src={GitImg} />
            </div>
        </section>
        </>
    )
}

export default Skills