import React from 'react'
import MainMenu from './MainMenu'
import '/src/styles/css/styles.css'

function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <a href="/"><img src="/src/img/Logo uwu.png" alt="Logo" /></a>
            </div>
            {/* id="main-menu-toggle" */}
            <div className="main-menu-toggle"  onClick={() => document.getElementById('main-nav').classList.toggle('show')}></div>

            <MainMenu />            

        </header>
        </>
    )
}

export default Header
