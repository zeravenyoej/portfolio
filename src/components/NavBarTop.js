import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNav = styled.div`
    font-family: 'Audiowide', cursive;
    background-color: #129e9e96;
    display: flex;
    justify-content: space-between;
    padding: 1%;
    text-decoration: none;
`;

const StyledP = styled.p`
    text-shadow: 1px 1px black;
    box-shadow: 2px 2px black;
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
                About Me
            </Link>
            <Link to='/skills'>
                <FontAwesomeIcon icon="code" />
                &nbsp;
                Skills
            </Link>
            <Link to='/projects'>
                <FontAwesomeIcon icon="hammer" />
                &nbsp;
                Projects
            </Link>
            <Link to='/contact'>
                <FontAwesomeIcon icon="phone" />
                &nbsp;
                Contact Me
            </Link>
        </StyledNav>
    );
}

export default NavBarTop;