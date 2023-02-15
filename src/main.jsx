import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Projects from './components/Projects'
import Iam from './components/Iam'
import AboutMe from './components/AboutMe'
import MoreMe from './components/MoreMe'
import MainFooter from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainBanner/>
    <Projects/>
    <AboutMe/>
    <Iam/>
    <MoreMe/>
    <MainFooter/>
  </React.StrictMode>,
)