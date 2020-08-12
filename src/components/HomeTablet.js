import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faCamera, faFileAlt } from '@fortawesome/free-solid-svg-icons';




const HomeTablet = () => {
    const history = useHistory();
    let intViewportWidth = window.innerWidth;

    return (
        <div id={intViewportWidth > 400 ? "homeTablet" : "homeMobile"}>
            <div className={intViewportWidth > 400 ? "mainContentTablet" : "mainContentMobile"}>
                <h1 id="name">Joseph Nevarez</h1>
                    <hr/>
                <h2>Software Engineer</h2>

                <div id={intViewportWidth > 400 ? "iconsDivTablet" : "iconsDivMobile"}>
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

                    <a target="_blank" className="letterboxd" rel="noopener noreferrer" href="https://letterboxd.com/zeravenyoej">
                        <FontAwesomeIcon className="icon" icon={faCamera}/>
                        <p className="letterboxd">Movies</p>
                    </a>
                </div>

                <div onClick={()=>history.push("/about")} className={intViewportWidth > 400 ? "mainContentTablet" : "mainContentMobile"}>
                    <h1>ABOUT ME</h1>
                    <div id={intViewportWidth > 400 ? "mainAboutImageTablet" : "mainAboutImageMobile"}></div>
                </div>

                <div onClick={()=>history.push("/projects")} className={intViewportWidth > 400 ? "mainContentTablet" : "mainContentMobile"}>
                    <h1>PROJECTS</h1>
                    <div id={intViewportWidth > 400 ? "mainProjectImageTablet" : "mainProjectImageMobile"}></div>
                </div>

                <div onClick={()=>history.push("/skills")} className={intViewportWidth > 400 ? "mainContentTablet" : "mainContentMobile"}>
                    <h1>SKILLS</h1>
                    <div id={intViewportWidth > 400 ? "mainSkillsImageTablet" : "mainSkillsImageMobile"}></div>
                </div>
            </div>
        </div>
    );
};

export default HomeTablet;