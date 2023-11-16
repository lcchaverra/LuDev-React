import React, {useEffect} from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import MainFooter from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsPage = () => {

    useEffect(() => {
    AOS.init() 
    },[])

    return(
        <>
        <Header />
        <Skills/>
        <MainFooter/> 
        </>
    )
}

export default SkillsPage