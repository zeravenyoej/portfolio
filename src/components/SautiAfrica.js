import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Slide } from 'react-reveal';

const SautiAfrica = () => {
    const [signFlipped, setSignFlipped] = useState(false);

    return (
        <Slide right>
            <section>
                <ReactCardFlip isFlipped={signFlipped}>
                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage sauti"></div>
                    </div>

                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="textSide">
                            <h3>Sauti: A platform that empowers women-led, small businesses in Africa</h3>
                            <h5 className="date">December 2019</h5>
                            <h5>Tech Stack: ReactJS, Redux, Formik, Styled-Components, Bootstrap</h5>
                                <br/><hr/><br/>
                            <ul>
                                <li>Provides market information services so small business owners can trade legally, profitably, and safely</li><br/>
                                <li>Collaborated remotely with 5 web developers to build a web application in 1 week</li><br/>                      
                                <li>As a front end engineer, took the lead on the search functionality and navigation bar</li> <br/>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>

                <div className="stuffUnderCard">
                    <h1>Sauti</h1>
                    <div className="projectLinks">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/BWPT-African-Marketplace-Lambda/React-Front-End">
                            <FontAwesomeIcon className="link" icon={ faGithub }/>
                        </a>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default SautiAfrica;