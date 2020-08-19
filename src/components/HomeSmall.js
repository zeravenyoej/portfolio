import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const HomeSmall = () => {
    const history = useHistory();

    return (
        <div id="homeSmall">
            <div className="mainContent">
                <h1 id="name">Joseph Nevarez</h1>
                    <hr/>
                <h2>Software Engineer</h2>

                <div id="iconsDiv">
                    <a target="_blank" className="linkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-nevarez">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        <p className="linkedIn">LinkedIn</p>
                    </a>
                    <a target="_blank" className="github" rel="noopener noreferrer" href="https://github.com/zeravenyoej">
                        <FontAwesomeIcon className="icon" icon={faGithubSquare}/>
                        <p className="github">GitHub</p>
                    </a>
                    <a target="_blank" className="medium" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">
                        <FontAwesomeIcon className="icon" icon={faMedium}/>
                        <p className="Medium">Blog</p>
                    </a>
                    <a target="_blank" className="email" rel="noopener noreferrer" href="mailto:josephnevarez12@gmail.com">
                        <FontAwesomeIcon className="icon" icon={faEnvelopeSquare}/>
                        <p className="email">Email</p>
                    </a>
                </div>

                <div onClick={()=>history.push("/skills")} className="mainContent">
                    <h1>SKILLS</h1>
                    <div id="mainSkillsImage"></div>
                </div>

                <div onClick={()=>history.push("/projects")} className="mainContent">
                    <h1>PROJECTS</h1>
                    <div id="mainProjectImage"></div>
                </div>

                <div onClick={()=>history.push("/about")} className="mainContent">
                    <h1>ABOUT ME</h1>
                    <div id="mainAboutImage"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeSmall;