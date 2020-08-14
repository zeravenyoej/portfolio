import React, { useState } from 'react';
import { Slide, Bounce } from 'react-reveal';
import ReactCardFlip from 'react-card-flip';
import NavBar from './NavBar';
import flipArrow from '../images/flipArrow.png';
import internet from '../images/internet.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hamburger from './Hamburger';

const Projects = () => {
    const [signFlipped, setSignFlipped] = useState(false);
    let intViewportWidth = window.innerWidth

    return (
        <div id="projectsDesktop">
            {intViewportWidth > 1024 ? <NavBar/> : <Hamburger/>}

            <Bounce top> 
                <h1 className={`titleh1 projecth1`} >projects I've worked on</h1> 
            </Bounce>

            <div id="projectsMainDiv">
                <Slide left >
                    <div className="projects">
                        <section>
                            <ReactCardFlip isFlipped={signFlipped}>
                                <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                                    <div className="stuffAboveCard">
                                        <p>click to below to learn more</p>
                                        <img src={flipArrow} alt="flip arrow"/>
                                    </div>
                                    <div className="projectCardWithImage"></div>
                                </div>

                                <div onClick={()=>setSignFlipped(!signFlipped)} >
                                    <div className="stuffAboveCard">
                                        <p>click to below to go back</p>
                                        <img src={flipArrow} alt="flip arrow"/>
                                    </div>
                                    <div className="projectCard textSide">
                                        <h3>A mobile-first, <br/>sign language learning platform</h3> <br/><hr/>
                                        <br/><strong>April-May 2020</strong> <br/> <br/> 
                                        <ul>
                                            <li>Built to the specifications of a client on a remote, cross-functional team of 24 over 8 weeks</li> <br/>
                                            <li>Contributed primarily as a front-end engineer, on the app's first team of web developers</li> <br/>
                                            <li>Tech used: React, Redux, Sass, Material UI, React Card Flip, Formik</li>
                                        </ul>
                                    </div>
                                </div>
                            </ReactCardFlip>

                            <div className="projectsUnderCard">
                                <h1>SignLingo</h1>
                                <div className="projectLinks">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Lambda-School-Labs/signlingo-fe">
                                        <FontAwesomeIcon className="link" icon={ faGithub }/>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://master.d2965nx2i7rdu0.amplifyapp.com">
                                        <img src={internet} className="link" alt="link to deployed site"/>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Projects;