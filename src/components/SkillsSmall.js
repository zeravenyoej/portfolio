import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { Slide } from 'react-reveal';

import reactImg from '../images/skills/react.png';
import JavascriptImg from '../images/skills/JavaScript.png';
import sassImg from '../images/skills/sass.png';
import knexImg from '../images/skills/knex.png';
import reduxImg from '../images/skills/redux.png';
import styledcompImg from '../images/skills/styledcomponents.png';
import bootstrapImg from '../images/skills/bootstrap.png';
import htmlImg from '../images/skills/HTML.png';
import pythonImg from '../images/skills/python.png';
import nodeImg from '../images/skills/node.png';
import materialImg from '../images/skills/MaterialUI.png';
import cssImg from '../images/skills/css.png';
import jestImg from '../images/skills/Jest.png';
import gitImg from '../images/skills/git.png';
import lessImg from "../images/skills/less.png";
import npmImg from '../images/skills/npm.png';
import sqliteImg from '../images/skills/sqlite.png';


const SkillsSmall = () => {
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);
    const [styling, setStyling] = useState(false);

    let intViewportWidth = window.innerWidth;
  
    return (
        <div id="skillsTablet">
            <Hamburger/>
            <Slide top>
                <h1 className="titleh1 skillsTitle">tech skills I've aquired</h1>
                <div className={`skillButtons ${intViewportWidth > 415 ? "" : "skillButtonsMobile"}`}>
                    <button id="frontButton" onClick={()=>setFront(!front)}>Frontend <br/> technologies</button>
                    <button id="stylingButton" onClick={()=>setStyling(!styling)}> Styling <br/> libraries</button>
                    <button id="backButton" onClick={()=>setBack(!back)}>Backend <br/>technologies</button>
                </div>
            </Slide>

            <Slide bottom cascade>
                <div className={`skillsContent ${intViewportWidth > 415 ? "" : "skillsContentMobile"}`}>
                    <div className={`skills ${front ? "front" : null}`}>
                        <b>ReactJS</b>
                        <img src={reactImg} alt="React logo"/>
                    </div>

                    <div className={`skills ${front ? "front": null} ${back ? "back": null}`}>
                        <b>Javascript</b>
                        <img src={JavascriptImg} alt="JavaScript logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null}`}>
                        <b>Sass</b>
                        <img src={sassImg} alt="Sass logo"/>
                    </div>

                    <div className={`skills ${back ? "back": null}`}>
                        <b>Knex</b>
                        <img src={knexImg} alt="Knex logo"/>
                    </div>

                    <div className={`skills ${front ? "front": null}`}>
                        <b>Redux</b>
                        <img src={reduxImg} alt="Redux logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null} smallerText`}>
                        <b>Styled Components</b>
                        <img src={styledcompImg} alt="Styled Components logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null}`}>
                        <b>Bootstrap</b>
                        <img src={bootstrapImg} alt="Bootstrap logo"/>
                    </div>

                    <div className={`skills ${front ? "front": null}`}>
                        <b>HTML 5</b>
                        <img src={htmlImg} alt="HTML logo"/>
                    </div>

                    <div className={`skills  ${front ? "front": null} ${back ? "back": null}`}>
                        <b>Python</b>        
                        <img src={pythonImg} alt="Python logo"/>
                    </div>

                    <div className={`skills ${back ? "back": null}`}>
                        <b>Express</b>
                        <img src={nodeImg} alt="Node logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null} smallerText`}>
                        <b>Material UI</b>
                        <img src={materialImg} alt="Material UI logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null}`}>
                        <b>CSS</b>
                        <img src={cssImg} alt="CSS logo"/>
                    </div>

                    <div className={`skills ${front ? "front": null}`}>
                        <b>Jest</b>
                        <img src={jestImg} alt="Jest logo"/>
                    </div>

                    <div className="skills">
                        <b>Git</b>
                        <img src={gitImg} alt="Git logo"/>
                    </div>

                    <div className={`skills ${styling ? "styling": null}`}>
                        <b>Less</b>
                        <img src={lessImg} alt="Less logo"/>
                    </div>

                    <div className="skills">
                        <b>npm</b>
                        <img src={npmImg} alt="Npm logo"/>
                    </div>

                    <div className={`skills ${back ? "back": null}`}>
                        <b>Sqlite</b>
                        <img src={sqliteImg} alt="Sqlite logo"/>
                    </div>
                </div>
            </Slide>     
        </div>
    );
};

export default SkillsSmall;