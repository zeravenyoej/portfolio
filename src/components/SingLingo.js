import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import internet from '../images/internet.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Slide } from 'react-reveal';

const SingLingo = () => {
    const [signFlipped, setSignFlipped] = useState(false);

    return (
        <Slide left>
            <section>
                <ReactCardFlip isFlipped={signFlipped}>
                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage signLingo"></div>
                    </div>

                    <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                        <div className="projectCardWithImage signLingoBack"></div>
                    </div>
                </ReactCardFlip>
{/* 
                <div className="stuffUnderCard">
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
                </div> */}

                <div className="description">
                    <div className="header">
                        <h1>SignLingo</h1>
                        <h5 className="date">April-May 2020</h5>
                    </div>
                    <h5>Tech Stack: React, Redux, Sass, Material UI, React Card Flip, Formik</h5>
                        <br/><hr/>
                    <div className="descriptionText">
                        <p>SignLingo is a mobile, sign language learning platform built to the specifications of a client on a remote, cross-functional team of 24 over 8 weeks.</p> 
                        <p>I contributed primarily as a front-end engineer, on the app's first team of web developers. Managed flow of the app's development with prior language teaching expertise</p>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default SingLingo;