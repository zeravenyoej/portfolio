import React from 'react';
import styled from 'styled-components';
import NavBarTop from './NavBarTop';
import joey from '../images/joey.png'



function About () {
    
    const AboutDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
    `;

    const ContentDiv = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    background: white;
    `;

    const TextDiv = styled.div`
        border: 1px solid black;
        width: 50%;
        border-radius: 10px;
        font-family: 'Raleway', sans-serif;
        font-family: 'Literata', serif;
        padding: 3%;
        line-height: 1.8;
        box-shadow: 2px 2px gray;
        background: #ffffcc;
    `;

    const ImgDiv = styled.div`
        width: auto;
        height: 100%;
    `;

    const Img =styled.img`
        border-radius: 10px;
        border: 1px solid black;
        box-shadow: 2px 2px gray;
    `;


    return (
        <AboutDiv>
            <NavBarTop/>

            <ContentDiv>
                <TextDiv>
                    <div>
                    <p>Hello! My name is Joseph, but most people call me Joey. I am a full-stack web developer at Lambda School. 
                    I can usually be found coding in a coffee shop, where I regularly contribute to robust web applications. 
                    The marriage of creativity and syntactic detail in coding has breathed new life in my career in exciting ways. 
                    You can read more about my transition in my blog.</p>
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
                    of every movie I watch on my Letterboxd account. If you'd like to know more about me, feel free to get in touch! </p>
                    </div>
                </TextDiv>
                
                <ImgDiv>
                    <Img src={joey} alt='Me in Hawaii' />
                </ImgDiv>
            
            </ContentDiv>
        </AboutDiv>
        );
};

export default About;