import React from 'react'
import '/src/styles/css/styles.css'

const MainFooter = () => {
    return (
        <>
        <footer className="main-footer">
            <span className="fi fi-sr-envelope"> lucas.cordoba1510@gmail.com</span>
            <p>Mis Redes Sociales: </p>
            <div className="social-networks">
                <a href="https://www.facebook.com/lucas.cord2" target="_blank"><i className="fi fi-brands-facebook"></i></a>
                <a href="https://www.youtube.com/@lucascordoba7421" target="_blank"><i className="fi fi-brands-youtube"></i></a>
                <a href="https://www.linkedin.com/in/lcchaverra/" target="_blank"><i className="fi fi-brands-linkedin"></i></a>
                <a href="https://github.com/lcchaverra" target="_blank"><i className="fi fi-brands-github"></i></a>
            </div>
        </footer>
        </>
    )

}

export default MainFooter
