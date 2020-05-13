import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home () {
    const history = useHistory();
    const [contactShown, setContactShown] = useState(true);
    const [aboutShown, setAboutShown] = useState(true);
    const [projectShown, setProjectShown] = useState(true);
    const [skillsShown, setSkillsShown] = useState(true);

  return (
    <main>
      <div
        onMouseEnter={()=>setContactShown(false)}
        onMouseOut={()=>setContactShown(true)}
        onClick={()=>history.push("/contact")}
        className="mainContainer">
        
        {contactShown ? (
          <div className="mainTextDiv">
            <h1>Joseph Nevarez</h1>
              <hr/>
            <h2>Software Engineer</h2>
          </div>
          ) : (
          <div className="mainTextDiv">
            <h1>Let's Connect</h1>
          </div>
        )}
      </div>

      <div
        onMouseEnter={()=>setAboutShown(false)}
        onMouseOut={()=>setAboutShown(true)}
        onClick={()=>history.push("/about")}
        className={`mainContainer ${aboutShown ? "mainAboutImage" : null}`}>
        {!aboutShown && (
          <div className="mainTextDiv">
            <h1>ABOUT ME</h1>
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
    </main>
  );
};

export default Home;