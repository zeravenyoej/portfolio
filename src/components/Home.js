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
        onMouseLeave={()=>setContactShown(true)}
        onClick={()=>history.push("/contact")}>
        {contactShown ? (
          <div>
            Joseph Nevarez
            Software Engineer
          </div>
        ) : (
          <div>
            Let's Connect
          </div>
        )}
      </div>

      <div
        onMouseEnter={()=>setAboutShown(false)}
        onMouseLeave={()=>setAboutShown(true)}
        onClick={()=>history.push("/about")}>
        {aboutShown ? (
          <div>
            pic of me
          </div>
        ) : (
          <div>
            ABOUT ME
          </div>
        )}
      </div>

      <div
        onMouseEnter={()=>setProjectShown(false)}
        onMouseLeave={()=>setProjectShown(true)}
        onClick={()=>history.push("/projects")}>
        {projectShown ? (
          <div>
            pic of tripsplit
          </div>
        ) : (
          <div>
            PROJECTS
          </div>
        )}
      </div>


      <div
        onMouseEnter={()=>setSkillsShown(false)}
        onMouseLeave={()=>setSkillsShown(true)}
        onClick={()=>history.push("/skills")}>
        {skillsShown ? (
          <div>
            pic of community
          </div>
        ) : (
          <div>
            SKILLS
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;