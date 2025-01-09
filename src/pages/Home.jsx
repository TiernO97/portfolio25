import React from 'react'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'

const Home = (props) => {

    return (
        <>
          <Hero title="Cian Tiernan" subtitle="Software Engineer" />
          <About refProp={props.aboutRef} />
          <Experience refProp={props.experienceRef} />
          <Showcase refProp={props.projectsRef} />
          <Contact refProp={props.contactRef} />
          <Footer />
        </>
    )
}

export default Home
