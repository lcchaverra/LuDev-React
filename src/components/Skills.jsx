import React from 'react'

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
                <img src='/src/img/tec/html-5.png' />
                <img src='/src/img/tec/css-3.png' />
                <img src='/src/img/tec/js.png' />
                <img src='/src/img/tec/mongo.png' />
                <img src='/src/img/tec/php.png' />
                <img src='/src/img/tec/git.png' />
                <img src='/src/img/tec/c-sharp.png' />
                <img src='/src/img/tec/sql-server.png' />
                <img src='/src/img/tec/react.png' />
            </div>
        </section>
        </>
    )
}

export default Skills