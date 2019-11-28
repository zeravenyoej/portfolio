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

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    text-shadow: 1px 1px black;
`;



function NavBarTop () {
    return (
        <StyledNav>
            <Link to='/'>
                <FlexDiv>
                    <FontAwesomeIcon icon="arrow-alt-circle-up" />
                    &nbsp;&nbsp;
                    Home
                </FlexDiv>
                </Link>
            <Link to='/about'>
                <FlexDiv>
                    <FontAwesomeIcon icon="coffee" />
                    &nbsp;
                    About Me
                </FlexDiv>
            </Link>
            <Link to='/skills'>
                <FlexDiv>
                    <FontAwesomeIcon icon="code" />
                    &nbsp;
                    Skills
                </FlexDiv>
            </Link>
            <Link to='/projects'>
                <FlexDiv>
                    <FontAwesomeIcon icon="hammer" />
                    &nbsp;
                    Projects
                </FlexDiv>
            </Link>
            <Link to='/contact'>
                <FlexDiv>
                    <FontAwesomeIcon icon="phone" />
                    &nbsp;
                    Contact Me
                </FlexDiv>
            </Link>
        </StyledNav>
    );
}

export default NavBarTop;