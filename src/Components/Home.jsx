import React from 'react'
import Nav from '../Pages/Nav'
import Banner from '../Pages/Banner'
import Skills from "../Pages/Skills"
import Projects from '../Pages/Projects'
import Footer from '../Pages/Footer'
import About from '../Pages/About'
import Experience from '../Pages/Experience'
import Contact from '../Pages/Contact'

const Home = () => {
    return (
        <>
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home