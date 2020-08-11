import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faEnvelopeSquare, faCamera, faFileAlt } from '@fortawesome/free-solid-svg-icons';




const HomeMobile = () => {
    const history = useHistory();

    return (
        <div id="homeMobile">
            <div className="mainContentMobile">
                <h1>Joseph Nevarez</h1>
                    <hr/>
                <h2>Software Engineer</h2>

                <div id="iconsDivMobile">
                    <a target="_blank" className="linkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-nevarez">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="linkedIn">LinkedIn</p>
                    </a>

                    <a target="_blank" className="github" rel="noopener noreferrer" href="https://github.com/zeravenyoej">
                        <FontAwesomeIcon className="icon" icon={faGithubSquare}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="github">GitHub</p>
                    </a>

                    <a target="_blank" className="medium" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">
                        <FontAwesomeIcon className="icon" icon={faMedium}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="Medium">Blog</p>
                    </a>

                    <a target="_blank" className="email" rel="noopener noreferrer" href="mailto:josephnevarez12@gmail.com">
                        <FontAwesomeIcon className="icon" icon={faEnvelopeSquare}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="email">Email</p>
                    </a>

                    <a target="_blank" className="letterboxd" rel="noopener noreferrer" href="https://letterboxd.com/zeravenyoej">
                        <FontAwesomeIcon className="icon" icon={faCamera}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="letterboxd">Movies</p>
                    </a>

                    <a target="_blank" className="resume" rel="noopener noreferrer" href="../images/Resume.png">
                        <FontAwesomeIcon className="icon" icon={faFileAlt}/>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <p className="resume">Resume</p>
                    </a>


                </div>
            </div>

            <div 
                onClick={()=>history.push("/about")}
                className="mainContentMobile"
                >
                <h1>ABOUT ME</h1>
                <div id="mainAboutImageMobile"></div>
            </div>

            <div 
                onClick={()=>history.push("/projects")}
                className="mainContentMobile"
                >
                <h1>PROJECTS</h1>
                <div id="mainProjectImageMobile"></div>
            </div>

            <div 
                onClick={()=>history.push("/skills")}
                className="mainContentMobile"
                >
                <h1>SKILLS</h1>
                <div id="mainSkillsImageMobile"></div>
            </div>
        </div>
    );
};

export default HomeMobile;