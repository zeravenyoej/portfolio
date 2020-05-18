import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Fade, LightSpeed } from 'react-reveal'


function About () {
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(()=>{
    const titleTimer = setTimeout(()=>{
      setShowTitle(true)
    }, 800);
    
    const contentTimer = setTimeout(()=>{
      setShowContent(true)
    }, 500);
    
    return () => {
      clearTimeout(titleTimer)
      clearTimeout(contentTimer)
    }
  },[])

  return (
    <>
      <NavBar/>

      <LightSpeed right when={showTitle}>
        <h1 className="titleh1 aboutTitle">about me</h1>
      </LightSpeed>

      <div className="about">
        <Fade top when={showContent}>
          <div id="aboutImage"></div>
        </Fade>
        <Fade bottom when={showContent}>
          <div id="aboutText">Fugiat ullamco aliqua excepteur tempor. Ea et culpa cillum enim est aute ad commodo ut. Enim officia 
            est nisi labore. Irure minim exercitation mollit laborum anim officia ut id fugiat.
            Aliqua ipsum amet nulla incididunt cillum consectetur incididunt. Adipisicing occaecat nisi non eiusmod 
            tempor reprehenderit eiusmod ut amet exercitation aute sunt do. Deserunt ut ad reprehenderit qui voluptate 
            excepteur fugiat. Sunt aliquip veniam minim sint velit est reprehenderit.
            Occaecat commodo sit nisi culpa aute minim dolore magna eu labore dolor. Mollit aute velit quis esse occaecat mollit. 
            Quis tempor et sint qui magna esse deserunt non esse. Id id sunt consequat commodo do nisi laboris sunt amet aliqua eu. 
            Voluptate nisi veniam incididunt id non et ipsum exercitation ex commodo cillum. Quis excepteur dolore reprehenderit 
            in dolor pariatur irure enim esse proident.
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;


{/* <div>
  <p>Hello! My name is Joseph, but most people call me Joey. I am a full-stack web developer at Lambda School. 
  I can usually be found coding in a coffee shop, where I regularly contribute to robust web applications. 
  The marriage of creativity and syntactic detail in coding has breathed new life in my career in exciting ways. 
  You can read more about my transition in <a href='https://medium.com/@josephnevarez12'>my blog</a></p>
  </div>
  <div>
  <p>I have nine years of experience teaching English as a Foreign Language (ESL) in a variety of settings, 
  from community centers, to private language schools and universities. The majority of my students were 
  graduate and undergraduates, but I've also facilitated language learning with diplomats, visiting Harvard 
  scholars, adults on vacation, recent immigrants, and parents of students. Being able to work successfully 
  with diverse populations has been the pride of my career.</p>
  </div>
  <div>
  <p>When I'm not coding, I'm usually watching a movie, or reading or writing about one. I write short reviews 
  of every movie I watch on <a href='https://www.letterboxd.com/zeravenyoej'>my Letterboxd account</a>. If you'd like to know more about me, feel free to get in touch! </p>
  </div> */}