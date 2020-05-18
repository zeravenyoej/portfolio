import React, { useState, useEffect } from 'react';
import { Slide, Bounce } from 'react-reveal';
import { useHistory } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import NavBar from './NavBar';
import flipArrow from '../images/flipArrow.png';
import github from '../images/github.png';
import internet from '../images/internet.png';

function Projects () {
  const history = useHistory();
  const [signFlipped, setSignFlipped] = useState(false);
  const [personalFlipped, setPersonalFlipped] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect (() => {
    const contentTimer = setTimeout(()=>{
      setShowContent(true)
    }, 500)
    
    return () => {
      clearTimeout(contentTimer)
    }
  }, []);

  return (
    <>
      <NavBar/>

      <Bounce bottom when={showContent}> 
        <h1 className={`titleh1 projecth1`} >projects I've worked on</h1> 
      </Bounce>

      <Slide bottom when={showContent}>
        <div className="projects">
          <section id="signLingo">
            <ReactCardFlip isFlipped={signFlipped}>
              <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                <div className="projectCardWithImage">
                  <img src={flipArrow} alt="flip arrow"/>
                </div>
              </div>

              <div onClick={()=>setSignFlipped(!signFlipped)} className="projectCard">
                  <img src={flipArrow} alt="flip arrow"/>
                  <p>description of the project</p>
                  <p>dates I worked on it</p>
                  <p>what I did, specifically</p>
                  <p>Tech used</p>
              </div>
            </ReactCardFlip>

            <div className="projectsUnderCard">
              <h1>SignLingo</h1>
              <div className="projectLinks">
                <img src={github} alt="link to GitHub repo" onClick={()=>history.push("")}/>
                <img src={internet} alt="link to deployed site" onClick={()=>history.push("")}/>
              </div>
            </div>
            
          </section>

          <section id="personalProject">
            <ReactCardFlip isFlipped={personalFlipped}>
              <div onClick={()=>setPersonalFlipped(!personalFlipped)} className="projectCard">
                <div className="projectCardWithImage">
                  <img src={flipArrow} alt="flip arrow"/>
                </div>
              </div>

              <div onClick={()=>setPersonalFlipped(!personalFlipped)} className="projectCard">
                  <img src={flipArrow} alt="flip arrow"/>
                  <p>description of the project</p>
                  <p>dates I worked on it</p>
                  <p>what I did, specifically</p>
                  <p>Tech used</p>
              </div>
            </ReactCardFlip>

            <div className="projectsUnderCard">
              <h1>Personal project</h1>
              <div className="projectLinks">
                <img src={github} alt="link to GitHub repo" onClick={()=>history.push("")}/>
                <img src={internet} alt="link to deployed site" onClick={()=>history.push("")}/>
              </div>
            </div>
          </section>
        </div>
      </Slide>
    </>
  );
};

export default Projects;