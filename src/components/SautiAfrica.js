import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Slide } from 'react-reveal';

const SautiAfrica = () => {
    const [signFlipped, setSignFlipped] = useState(false);

    return (
        <Slide right>
            <section id="sautiSection">
                <div className="description">
                    <div className="header">
                        <h1>Sauti</h1>
                        <h5 className="date">December 2019</h5>
                    </div>
                    <h5>Tech Stack: ReactJS, Redux, Formik, Styled-Components, Bootstrap</h5>
                        <br/><hr/>
                    <div className="descriptionText">
                        <p>Sauti is a platform that empowers women-led small businesses in Africa by providing market and trade information so business owners can trade legally, profitably, and safely. This project was completed remotely, in 1 week with 5 web developers. Though all developers touched all areas of code, I took the lead on&nbsp; 
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BWPT-African-Marketplace-Lambda/React-Front-End/blob/master/front-end/src/Components/Search.js">the search</a>&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BWPT-African-Marketplace-Lambda/React-Front-End/blob/master/front-end/src/Components/SearchByPrice.js">functionality</a>, and&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BWPT-African-Marketplace-Lambda/React-Front-End/blob/master/front-end/src/Components/NavBar.js">navigation bar</a>.
                        </p>
                        <p>Admittedly, this is not the most polished piece in my portfolio. I’ve omitted a link to the deployed site as design was not prioritized in the brief time my team was allotted to work on this project. Additionally, as it was completed mere months into my transition into web programming, it does not reflect my current GitHub practices (i.e., meaningful commits and pushes, detailed descriptions in pull requests, etc.).</p>
                        <p>That said, the reasons for its inclusion here are two-fold. Firstly, I am proud of the code I contributed. It’s functional, concise, and clean. Secondly, this project is emblematic of the mission-driven work I strive to do. It is my belief that programming is most rewarding when the use case of the product is genuinely worthwhile.</p>
                    </div>
                </div>

                <ReactCardFlip isFlipped={signFlipped}>
                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage sauti"></div>
                    </div>

                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage sautiBack"></div>
                    </div>
                </ReactCardFlip>
            </section>
        </Slide>
    );
};

export default SautiAfrica;