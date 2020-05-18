import React, { useState } from 'react';
import NavBar from './NavBar';
import Fade from 'react-reveal/Fade';
import linkedInImg from '../images/linkedIn.png';
import mediumImg from '../images/medium.png';
import resumeImg from '../images/resume.png';
import githubImg from '../images/githubLg.png';
import movieImg from '../images/movie.png';
import emailImg from '../images/email.png';
import down from '../images/down.png';

function Contact () {
  const [linkedIn, setLinkedIn] = useState(false);
  const [medium, setMedium] = useState(false);
  const [resume, setResume] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const [movie, setMovie] = useState(false);
  const [email, setEmail] = useState(false);

  return (
    <>
      <NavBar/>
      <h1 className="titleh1">contact me</h1>

        <section className="contactDiv"> 
          <div
            onMouseEnter={()=>setLinkedIn(true)}
            onMouseLeave={()=>setLinkedIn(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={linkedInImg} alt="linkedIn icon"/>
              <Fade top opposite when={linkedIn}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my Linked In profile</p>
                </>
              </Fade>
            </a>
          </div>

          <div
            onMouseEnter={()=>setResume(true)}
            onMouseLeave={()=>setResume(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={resumeImg} alt="resume icon"/>
              <Fade top opposite when={resume}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my resume</p>
                </>
              </Fade>
            </a>
          </div>

          <div
            onMouseEnter={()=>setMedium(true)}
            onMouseLeave={()=>setMedium(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={mediumImg} alt="Medium icon"/>
              <Fade top opposite when={medium}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my blog</p>
                </>
              </Fade>
            </a>
          </div>

          <div
            onMouseEnter={()=>setGitHub(true)}
            onMouseLeave={()=>setGitHub(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={githubImg} alt="GitHub icon"/>
              <Fade top opposite when={gitHub}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my GitHub account</p>
                </>
              </Fade>
            </a>
          </div>

          <div
            onMouseEnter={()=>setMovie(true)}
            onMouseLeave={()=>setMovie(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={movieImg} alt="Movie icon"/>
              <Fade top opposite when={movie}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my movie reviews</p>
                </>
              </Fade>
            </a>
          </div>

          <div
            onMouseEnter={()=>setEmail(true)}
            onMouseLeave={()=>setEmail(false)}>
            <a 
              target="_blank"
              href="https://www.google.com">
              <img src={emailImg} alt="Email icon"/>
              <Fade top opposite when={email}>
                <>
                  <img src={down} alt="down arrow"/>
                  <p>my email</p>
                </>
              </Fade>
            </a>
          </div>

        </section>
    </>
  )
};

export default Contact;