import React from 'react';
import PicOfMe from '../images/joey.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HomeDiv } from './Containers';

const StyledHero = styled.div`
    font-family: 'Audiowide', cursive;
    letter-spacing: 3px;
`;

const H1 = styled.h1`
    font-size: 3.7rem;
    `;

const H2 = styled.h2`
    font-size: 2.7rem;
    `;

const LinkCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    `;

    const StyledImg = styled.img`
        max-height: 80vh;
        width: auto;
        border-radius:110px;
    `;

function Home () {

    return (
        <HomeDiv>
            <StyledHero>
                <H1>Joseph Nevarez</H1>
                <H2> Web Developer</H2>
                <LinkCont>
                    <FontAwesomeIcon icon='github' />
                    <FontAwesomeIcon icon='Linkedin' />
                    <Link to='https://wwww.letterboxd.com/zeravenyoej'><FontAwesomeIcon icon='film' /></Link>
                </LinkCont>
            </StyledHero>
            <div>
                <StyledImg src={PicOfMe} alt='Me'/>
            </div>
        </HomeDiv>
    );
};

export default Home;