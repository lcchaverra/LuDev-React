import React from 'react'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Iam from './components/Iam'
import AboutMe from './components/AboutMe'
import MoreMe from './components/MoreMe'
import MainFooter from './components/Footer'

const HomePage = () => {
    return(
        <>
        <Header />
        <MainBanner/>
        <AboutMe/>
        <Iam/>
        <MoreMe/>
        <MainFooter/> 
        </>
    )
}

export default HomePage