import React from 'react';
import styled from 'styled-components';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Link } from 'react-router-dom';
import { HomeDiv } from './Containers';

const StyledHero = styled.div`
    font-family: 'Audiowide', cursive;
    letter-spacing: 3px;
`;

const H1 = styled.h1`
    font-size: 4rem;
    text-shadow: 2px 2px black;
    color: #e2e1e1;
    `;

const H2 = styled.h2`
    font-size: 1.8rem;
    text-shadow: 2px 2px white;
    color: #12699e96;
    `;

// const LinkCont = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     `;
// <LinkCont>
// <FontAwesomeIcon icon='github' />
// <FontAwesomeIcon icon='Linkedin' />
// <Link to='https://wwww.letterboxd.com/zeravenyoej'><FontAwesomeIcon icon='film' /></Link>
// </LinkCont>

function Home () {

    return (
        <HomeDiv>
            <StyledHero>
                <H1>Joseph Nevarez</H1>
                <hr></hr>
                <H2> Web Developer</H2>
            </StyledHero>
        </HomeDiv>
    );
};

export default Home;