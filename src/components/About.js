import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import { Fade, LightSpeed, Slide } from 'react-reveal';

function About () {
    const [showContent, setShowContent] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    let intViewportWidth = window.innerWidth;

    useEffect(()=> {
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
            {intViewportWidth > 1024 ? <NavBar/> : <Hamburger/>}

            {intViewportWidth > 1024 ? (
                <LightSpeed right when={showTitle}>
                    <h1 className="titleh1 aboutTitle">about me</h1>
                </LightSpeed>
                ) : (
                <Slide right>
                    <h1 className="titleh1 aboutTitle">about me</h1>
                </Slide>
                )
            }

            <div className="about">
                {intViewportWidth > 1024 ? (
                    <Fade top when={showContent}>
                        <div id="aboutImage"></div>
                    </Fade>
                ) : (
                    <Fade top>
                        <div id="aboutImage"></div>
                    </Fade>
                )}

                {intViewportWidth > 1024 ? (
                    <Fade bottom when={showContent}>
                        <div id="aboutText">
                            <p>Hello! My name is Joseph, but everyone calls me Joey. After 9 years of teaching English as a Second Language (ESL), I decided to pursue a career change in software engineering. Not until entering this field could I truly blend my talents for meticulous detail-orientation and solution-based creativity. Working with international students taught me to think globally; working with software has taught me to think granularly.</p><br/>
                            <p>These days, you can find me coding in a cafe, where I contribute regularly to robust web applications. I work best when balancing independent and communal work. I value space to think through problems by myself, as well as communities that invite respectful collaboration. And though I am not a trained designer, I always code with user-friendliness in mind. To me, that means intuitive functionality and appealing interfaces.</p><br/>
                            <p>When I’m not building a site, I’m typically watching, listening to podcasts about, and reading/writing about movies. You can read my short movie reviews <a target="_blank" rel="noopener noreferrer" href="https://letterboxd.com/zeravenyoej">here</a> and more about my experience at Lambda School <a target="_blank" className="medium" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">here</a>. Looking forward to hearing from you! </p>
                        </div>
                    </Fade>
                    ) : (
                    <Fade bottom>
                        <div id="aboutText">
                            <p>Hello! My name is Joseph, but everyone calls me Joey. After 9 years of teaching English as a Second Language (ESL), I decided to pursue a career change in software engineering. Not until entering this field could I truly blend my talents for meticulous detail-orientation and solution-based creativity. Working with international students taught me to think globally; working with software has taught me to think granularly.</p><br/>
                            <p>These days, you can find me coding in a cafe, where I contribute regularly to robust web applications. I work best when balancing independent and communal work. I value space to think through problems by myself, as well as communities that invite respectful collaboration. And though I am not a trained designer, I always code with user-friendliness in mind. To me, that means intuitive functionality and appealing interfaces.</p><br/>
                            <p>When I’m not building a site, I’m typically watching, listening to podcasts about, and reading/writing about movies. You can read my short movie reviews <a target="_blank" rel="noopener noreferrer" href="https://letterboxd.com/zeravenyoej">here</a> and more about my experience at Lambda School <a target="_blank" className="medium" rel="noopener noreferrer" href="https://medium.com/@josephnevarez12">here</a>. Looking forward to hearing from you! </p>
                        </div>
                </Fade>
                )}
            </div>
        </>
    );
};

export default About;