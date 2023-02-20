import React from "react";
import '/src/styles/css/styles.css'

const Iam = () => {
    return(
        <>
        <section className="i-am">
        <div className="main-container">
            <h1 className="title">Yo Soy</h1>
            <div className="flex-container-2">
                <img src="/src/img/me.jpeg" alt="Mi foto"/>
                <ul>
                    <li>Luis Carlos Chaverra Córdoba</li>
                    <li>A.K.A Lucas Chaverra</li>
                    <li>Soy de Colombia - Quibdó / Chocó</li>
                    <li>Nacido el 15 de Octubre del 2000</li>
                    <li className="floating"><a href="https://drive.google.com/file/d/1jqfr5tE4TOyj_Xy0ivnzBZVLKXyMlIsZ/view?usp=sharing" target={"_blank"}>CV</a></li>
                </ul>
            </div>
        </div>
        <div className="section-divider"></div>
    </section>
        </>
    )
}

export default Iam