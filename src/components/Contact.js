import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Rotate, Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelopeSquare, faCamera, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Route } from 'react-router-dom';

function Contact () {
  const [linkedIn, setLinkedIn] = useState(false);
  const [medium, setMedium] = useState(false);
  const [resume, setResume] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const [movie, setMovie] = useState(false);
  const [email, setEmail] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(()=>{
    const content = setTimeout(()=>{
      setShowContent(true)
    }, 400)

    return () => {
      clearTimeout(content)
    }
  }, []);

  return (
    <>
      <NavBar/>

      <Fade left when={showContent}>
        <h1 className="titleh1 contactTitle">contact me</h1>
      </Fade>

        <section className="contactDiv"> 
          <Rotate top left when={showContent}>
            <div>
              <a 
                target="_blank"
                href="https://www.linkedin.com/in/joseph-nevarez">
                <FontAwesomeIcon 
                  onMouseEnter={()=>setLinkedIn(true)}
                  onMouseLeave={()=>setLinkedIn(false)}
                  className="icon"
                  icon={ faLinkedin }/>
                <Fade top opposite when={linkedIn}>
                  <>
                    <FontAwesomeIcon icon={ faChevronDown}/>
                    <p>my Linked In profile</p>
                  </>
                </Fade>
              </a>
            </div>
          </Rotate>

          <Fade top when={showContent}>
            <div>
              <a 
                target="_blank"
                href="https://www.google.com">
                <FontAwesomeIcon 
                  onMouseEnter={()=>setResume(true)}
                  onMouseLeave={()=>setResume(false)}
                  className="icon" 
                  icon={ faFileAlt }/>
                <Fade top opposite when={resume}>
                  <>
                    <FontAwesomeIcon icon={ faChevronDown}/>
                    <p>my resume</p>
                  </>
                </Fade>
              </a>
              </div>
            </Fade>

        <Rotate top right when={showContent}>
          <div>
            <a 
              target="_blank"
              href="https://medium.com/@josephnevarez12">
              <FontAwesomeIcon 
                onMouseEnter={()=>setMedium(true)}
                onMouseLeave={()=>setMedium(false)}
                className="icon" 
                icon={ faMedium }/>
              <Fade top opposite when={medium}>
                <>
                  <FontAwesomeIcon icon={ faChevronDown}/>
                  <p>my blog</p>
                </>
              </Fade>
            </a>
          </div>
        </Rotate>

        <Rotate bottom right when={showContent}>
          <div>
            <a
              target="_blank"
              href="https://github.com/zeravenyoej">
              <FontAwesomeIcon 
                onMouseEnter={()=>setGitHub(true)}
                onMouseLeave={()=>setGitHub(false)} 
                className="icon" 
                icon={ faGithubSquare }/>
              <Fade top opposite when={gitHub}>
                <>
                  <FontAwesomeIcon icon={ faChevronDown}/>
                  <p>my GitHub account</p>
                </>
              </Fade>
            </a>
          </div>
        </Rotate>

        <Fade bottom when={showContent}>
          <div>
            <a 
              target="_blank"
              href="https://letterboxd.com/zeravenyoej/">
              <FontAwesomeIcon 
                onMouseEnter={()=>setMovie(true)}
                onMouseLeave={()=>setMovie(false)}
                className="icon" 
                icon={ faCamera }/>
              <Fade top opposite when={movie}>
                <>
                  <FontAwesomeIcon icon={ faChevronDown}/>
                  <p>my movie reviews</p>
                </>
              </Fade>
            </a>
          </div>
        </Fade>

        <Rotate bottom left when={showContent}>
          <div>
            <a 
              target="_blank"
              href="mailto:josephnevarez12@gmail.com">
              <FontAwesomeIcon 
                onMouseEnter={()=>setEmail(true)}
                onMouseLeave={()=>setEmail(false)}
                className="icon" 
                icon={ faEnvelopeSquare }/>
              <Fade top opposite when={email}>
                <>
                  <FontAwesomeIcon icon={ faChevronDown}/>
                  <p>joseph<br/>nevarez12<br/>@gmail.com</p>
                </>
              </Fade>
            </a>
          </div>
        </Rotate>
        </section>
    </>
  )
};

export default Contact;