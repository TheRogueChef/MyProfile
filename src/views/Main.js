import React from 'react';
import { Element } from 'react-scroll';
import Dashboard from '../components/Dashboard';
import Education from '../components/Education';
import WorkRecord from '../components/WorkRecord';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import TechSkills from '../components/TechSkills';
import Projects from '../components/Projects';
import '../components/style.css';

const columns = document.querySelectorAll('.column');

if (window.innerWidth < 768) {
    columns.forEach((column) => {
        column.classList.add('stacked');
    });
}

const DisplayPage = () => {
    return (
        <div>
            <Element name="top">
                <Dashboard />
            </Element>
            <Element name="about">
                <AboutMe />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="techSkills">
                <TechSkills />
            </Element>
            <Element name="education">
                <Education />
            </Element>
            <Element name="experience">
                <WorkRecord />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    )
}
export default DisplayPage;
