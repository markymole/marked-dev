import { useState, useEffect, useRef, useContext } from 'react'
import { useAnimate, stagger, motion, useScroll } from "framer-motion";
import classNames from 'classnames'

//sections
import Hero from './sections/hero'
import About from './sections/about';
import Experties from './sections/experties'
import Experience from './sections/experience'
import Works from './sections/works'
import Services from './sections/services'
import Testimony from './sections/testimony'
import Traits from './sections/traits'
import Featured from './sections/featured'
import Contact from './sections/contact'
import Footer from './sections/footer'

//provider
import AppContext from './provider/Context'

//components
import NavBar from './components/nav-bar';
import ScrollUpButton from './components/scroll-up-button';

//css
import './App.css'

function App() {


  return (
    <div>
        <div className='block ease-in duration-200 transition-all '>
            <div>

              <NavBar/>
              <ScrollUpButton/>
              <section id="home">
                <Hero/>
                <Featured/>
              </section>      
              <section id="about">
                <Traits/>
                <Experties/>
                {/* <About/> */}
              </section>
              <section id="experience">
                <Experience/>
              </section>
              <section id="works">
                <Works/>
              </section>
              <section id="services">
                <Services/>
                {/* <Testimony/> */}
              </section>
              <section id="contact">
     
                <Contact/>
              </section>
              <Footer/>
        
            </div>
        </div>
    </div>
  
  )
}

export default App
