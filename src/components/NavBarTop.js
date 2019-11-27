import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNav = styled.div`
    font-family: 'Audiowide', cursive;
    background-color: #129e9e96;
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
    width: 100%;
`;

const StyledP = styled.p`
    text-shadow: 1px 1px black;
    font-size: 1.3rem;
    color: white;
    text-decoration: none;
`;


function NavBarTop () {
    return (
        <StyledNav>
            <Link to='/'>
                <FontAwesomeIcon icon="arrow-alt-circle-up" />
                &nbsp;
                <StyledP>Home</StyledP>
            </Link>
            <Link to='/about'>
                <FontAwesomeIcon icon="coffee" />
                &nbsp;
                <StyledP>About Me</StyledP>
            </Link>
            <Link to='/skills'>
                <FontAwesomeIcon icon="code" />
                &nbsp;
                <StyledP>Skills</StyledP>
            </Link>
            <Link to='/projects'>
                <FontAwesomeIcon icon="hammer" />
                &nbsp;
                <StyledP>Projects</StyledP>
            </Link>
            <Link to='/contact'>
                <FontAwesomeIcon icon="phone" />
                &nbsp;
                <StyledP>Contact Me</StyledP>
            </Link>
        </StyledNav>
    );
}

export default NavBarTop;