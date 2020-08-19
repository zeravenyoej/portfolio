import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import HomeSmall from './HomeSmall';

function Home () {
    const history = useHistory();
    const [aboutShown, setAboutShown] = useState(true);
    const [projectShown, setProjectShown] = useState(true);
    const [skillsShown, setSkillsShown] = useState(true);
    
    return (
        <>
            <div id="homeDesktop">
                <main>  
                    <div className="mainContainer">
                        <div className="mainTextDiv">
                            <h1>Joseph Nevarez</h1>
                                <hr/>
                            <h2>Software Engineer</h2>
                            <div id="iconsDiv">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-nevarez">
                                    <FontAwesomeIcon className="icon linkedIn" icon={faLinkedin}/>
                                    <div className="hide">
                                        <FontAwesomeIcon id="linkedInArrow" icon={faCaretDown}/>
                                        <p id="linkedInP">LinkedIn</p>
                                    </div>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/zeravenyoej">
                                    <FontAwesomeIcon className="icon github" icon={faGithubSquare}/>
                                    <div className="hide">
                                        <FontAwesomeIcon id="githubArrow" icon={faCaretDown}/>
                                        <p id="githubP">GitHub</p>
                                    </div>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">  
                                    <FontAwesomeIcon className="icon medium" icon={faMedium}/>
                                    <div className="hide">
                                        <FontAwesomeIcon id="mediumArrow" icon={faCaretDown}/>
                                        <p id="mediumP">Blog</p>
                                    </div>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:josephnevarez12@gmail.com">
                                    <FontAwesomeIcon className="icon email" icon={faEnvelopeSquare}/>
                                    <div className="hide">
                                        <FontAwesomeIcon id="emailArrow" icon={faCaretDown}/>
                                        <p id="emailP">Email</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={()=>setSkillsShown(false)}
                        onMouseLeave={()=>setSkillsShown(true)}
                        onClick={()=>history.push("/skills")}
                        className={`mainContainer ${skillsShown ? "mainSkillsImage" : null}`}>
                        {!skillsShown && (
                        <div className="mainTextDiv">
                            <h1>SKILLS</h1>
                        </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={()=>setProjectShown(false)}
                        onMouseLeave={()=>setProjectShown(true)}
                        onClick={()=>history.push("/projects")}
                        className={`mainContainer ${projectShown ? "mainProjectImage" : null}`}>
                        {!projectShown && (
                        <div className="mainTextDiv">
                            <h1>PROJECTS</h1>
                        </div>
                        )}
                    </div>
                    <div
                        onMouseEnter={()=>setAboutShown(false)}
                        onMouseLeave={()=>setAboutShown(true)}
                        onClick={()=>history.push("/about")}
                        className={`mainContainer ${aboutShown ? "mainAboutImage" : null}`}>
                        {!aboutShown && (
                        <div className="mainTextDiv">
                            <h1>ABOUT ME</h1>
                        </div>
                        )}
                    </div>
                </main>
            </div>
            <HomeSmall/>
        </>
    );
};

export default Home;