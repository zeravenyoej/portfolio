import React from 'react';
import { Bounce } from 'react-reveal';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import SingLingo from './SingLingo';
import SautiAfrica from './SautiAfrica';

const Projects = () => {
    let intViewportWidth = window.innerWidth;

    return (
        <>
            {intViewportWidth > 1024 ? <NavBar/> : <Hamburger/>}

            <Bounce top> 
                <h1 className={`titleh1 projecth1`} >projects</h1> 
                <p id="subtitle">click pictures below to see more</p>
            </Bounce>

            <div className="projects">
                <SingLingo/>
                <SautiAfrica/>
            </div>
        </>
    );
};

export default Projects;