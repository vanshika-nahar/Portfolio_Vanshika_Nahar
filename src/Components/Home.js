import React, { useRef } from 'react';
import NavBar from './MainBody/NavBar';
import Intro from './Sections/Into';
import About from './Sections/About';
import Education from './Sections/Education';
import Skills from './Sections/Skills';
import Work from './Sections/Work';
import Experience from './Sections/Experience';
import Contact from './Sections/Contact';
import { Box } from '@mui/material';

export default function Home() {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    // Function to scroll to a specific section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with id '${id}' not found.`);
        }
      };
    return (
        <Box sx={{ overflowX: "hidden" }}>
            <NavBar scrollToSection={scrollToSection} /> {/* Pass the function as a prop */}
            <Box id="home" ref={homeRef}>
                <Intro />
            </Box>
            <Box id="aboutme" ref={aboutMeRef}>
                <About />
            </Box>
            <Box id="education" ref={educationRef}>
                <Education />
            </Box>
            <Box id="skills" ref={skillsRef}>
                <Skills />
            </Box>
            <Box id="work" ref={workRef}>
                <Work />
            </Box>
            <Box id="experience" ref={experienceRef}>
                <Experience />
            </Box>
            <Box id="contact" ref={contactRef}>
                <Contact />
            </Box>
        </Box>
    )
}

