import React from 'react';
import styled from 'styled-components';
import NavBarTop from './NavBarTop';


function About () {
    
    const StyledDiv = styled.div`
        background: white;
        border: 1px solid black;
        width: 60%;
        border-radius: 10px;
        font-family: 'Raleway', sans-serif;
        font-family: 'Literata', serif;
        margin-left: 12%;
    `;
    return (
        <div>
            <NavBarTop/>
            <StyledDiv>
                <p>Hello! My name is Joseph, but most people call me Joey. I am a full-stack web developer at Lambda School. 
                I can usually be found coding in a coffee shop, where I regularly contribute to robust web applications. 
                The marriage of creativity and syntactic detail in coding has breathed new life in my career in exciting ways. 
                You can read more about my transition in my blog.</p>
                <p>I have nine years of experience teaching English as a Foreign Language (ESL) in a variety of settings, 
                from community centers, to private language schools and universities. The majority of my students were 
                graduate and undergraduates, but I've also facilitated language learning with diplomats, visiting Harvard 
                scholars, adults on vacation, recent immigrants, and parents of students. Being able to work successfully 
                with diverse populations has been the pride of my career.</p>
                <p>When I'm not coding, I'm usually watching a movie, or reading or writing about one. I write short reviews 
                of every movie I watch on my Letterboxd account. If you'd like to know more about me, feel free to get in touch! </p>
            </StyledDiv>
        </div>
        );
};

export default About;