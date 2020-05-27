import React, { useState } from 'react';
import NavBar from './NavBar';
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
import mongodbImg from '../images/skills/mongodb.png';

function Skills () {
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [styling, setStyling] = useState(false);

  const [react, setReact] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [sass, setSass] = useState(false);
  const [knex, setKnex] = useState(false);
  const [redux, setRedux] = useState(false);
  const [styledComp, setStyledComp] = useState(false);
  const [bootstrap, setBootstrap] = useState(false);
  const [html, setHtml] = useState(false);
  const [python, setPython] = useState(false);
  const [node, setNode] = useState(false);
  const [material, setMaterial] = useState(false);
  const [css, setCss] = useState(false);
  const [jest, setJest] = useState(false);
  const [git, setGit] = useState(false);
  const [less, setLess] = useState(false);
  const [npm, setNpm] = useState(false);
  const [sqlite, setSqlite] = useState(false);
  const [mongodb, setMongodb] = useState(false);

  return (
    <>
    <NavBar/>

    <div className="skillsDiv">
      <Slide top>
        <h1 className="titleh1 skillsTitle">tech skills <br/> I've aquired</h1>
        <div className="skillButtons">
            <button id="frontButton" onClick={()=>setFront(!front)}>Frontend <br/> technologies</button>
            <button id="stylingButton" onClick={()=>setStyling(!styling)}> Styling <br/> libraries</button>
            <button id="backButton" onClick={()=>setBack(!back)}>Backend <br/>technologies</button>
        </div>
      </Slide>

      <Slide bottom cascade>
        <div className="skillsContent">
          <div 
            className={`skills ${front ? "front" : null}`}
            onMouseEnter={()=>setReact(true)}
            onMouseLeave={()=>setReact(false)}>
            {react ? <b> ReactJS</b> : <img src={reactImg} alt="React logo"/>}
          </div>

          <div
            className={`skills ${front ? "front": null}`}
            onMouseEnter={()=>setJavascript(true)}
            onMouseLeave={()=>setJavascript(false)}>
            {javascript ? <b>JavaScript</b> : <img src={JavascriptImg} alt="JavaScript logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setSass(true)}
            onMouseLeave={()=>setSass(false)}>
            {sass ? <b>Sass</b> : <img src={sassImg} alt="Sass logo"/>}
          </div>

          <div
            className={`skills ${back ? "back": null}`}
            onMouseEnter={()=>setKnex(true)}
            onMouseLeave={()=>setKnex(false)}>
            {knex ? <b>Knex</b> : <img src={knexImg} alt="Knex logo"/>}
          </div>

          <div
            className={`skills ${front ? "front": null}`}
            onMouseEnter={()=>setRedux(true)}
            onMouseLeave={()=>setRedux(false)}>
            {redux ? <b>Redux</b> : <img src={reduxImg} alt="Redux logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setStyledComp(true)}
            onMouseLeave={()=>setStyledComp(false)}>
            {styledComp ? <b>Styled Comp-<br/>onents</b> : <img src={styledcompImg} alt="Styled Components logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setBootstrap(true)}
            onMouseLeave={()=>setBootstrap(false)}>
            {bootstrap ? <b>Bootstrap</b> : <img src={bootstrapImg} alt="Bootstrap logo"/>}
          </div>

          <div
            className={`skills ${front ? "front": null}`}
            onMouseEnter={()=>setHtml(true)}
            onMouseLeave={()=>setHtml(false)}>
            {html ? <b>HTML 5</b> : <img src={htmlImg} alt="HTML logo"/>}
          </div>

          <div
            className={`skills ${back ? "back": null}`}
            onMouseEnter={()=>setPython(true)}
            onMouseLeave={()=>setPython(false)}>
            {python ? <b>Python</b> : <img src={pythonImg} alt="Python logo"/>}
          </div>

          <div
            className={`skills ${back ? "back": null}`}
            onMouseEnter={()=>setNode(true)}
            onMouseLeave={()=>setNode(false)}>
            {node ? <b>Node / <br/> Express</b> : <img src={nodeImg} alt="Node logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setMaterial(true)}
            onMouseLeave={()=>setMaterial(false)}>
            {material ? <b>Material UI</b> : <img src={materialImg} alt="Material UI logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setCss(true)}
            onMouseLeave={()=>setCss(false)}>
            {css ? <b>CSS</b> : <img src={cssImg} alt="CSS logo"/>}
          </div>

          <div
            className="skills"
            onMouseEnter={()=>setJest(true)}
            onMouseLeave={()=>setJest(false)}>
            {jest ? <b>Jest</b> : <img src={jestImg} alt="Jest logo"/>}
          </div>

          <div
            className="skills"
            onMouseEnter={()=>setGit(true)}
            onMouseLeave={()=>setGit(false)}>
            {git ? <b>Git</b> : <img src={gitImg} alt="Git logo"/>}
          </div>

          <div
            className={`skills ${styling ? "styling": null}`}
            onMouseEnter={()=>setLess(true)}
            onMouseLeave={()=>setLess(false)}>
            {less ? <b>Less</b> : <img src={lessImg} alt="Less logo"/>}
          </div>

          <div
            className="skills"
            onMouseEnter={()=>setNpm(true)}
            onMouseLeave={()=>setNpm(false)}>
            {npm ? <b>npm</b> : <img src={npmImg} alt="Npm logo"/>}
          </div>

          <div
            className={`skills ${back ? "back": null}`}
            onMouseEnter={()=>setSqlite(true)}
            onMouseLeave={()=>setSqlite(false)}>
            {sqlite ? <b>Sqlite</b> : <img src={sqliteImg} alt="Sqlite logo"/>}
          </div>

          <div
            className="skills"
            onMouseEnter={()=>setMongodb(true)}
            onMouseLeave={()=>setMongodb(false)}>
            {mongodb ? <b>Mongo DB</b> : <img src={mongodbImg} alt="Mongodb logo"/>}
          </div>
        </div>
      </Slide>
    </div>
  </>
  );
};

export default Skills;