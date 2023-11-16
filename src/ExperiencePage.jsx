import React,{useEffect} from 'react'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import MainFooter from './components/Footer'
import AOS from 'aos'

const ExperiencePage = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
        <Header />
        <Education/>
        <Experience/>
        <MainFooter/> 
        </>
    )
}

export default ExperiencePage