import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20.5%;
`;

const StyledBttn = styled.button`
    padding: 9%;
    font-size: 1.5rem;
    border-radius: 20px;
    font-family: 'Audiowide', cursive;
    background-color: black;
    color: white;
`;

function NavBar ({history}) {
    return (
        <StyledNav>
            <StyledBttn onClick={()=>history.push('/')}>
                <FontAwesomeIcon icon="arrow-alt-circle-up" />
                &nbsp;
                Home
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('about')}>
                <FontAwesomeIcon icon="coffee" />
                &nbsp;
                About Me
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('skills')}>
                <FontAwesomeIcon icon="code" />   
                &nbsp;
                Skills
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('projects')}>
                <FontAwesomeIcon icon='hammer'/>
                &nbsp;
                Projects
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('teaching')}>
                <FontAwesomeIcon icon="graduation-cap" />
                &nbsp;
                Teaching Experience
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('blog')}>
                <FontAwesomeIcon icon="laptop" />
                &nbsp;
                Blog
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('contact')}>
                <FontAwesomeIcon icon="phone" />
                &nbsp;
                Contact Me
            </StyledBttn>
        </StyledNav>
    );
};

export default NavBar;