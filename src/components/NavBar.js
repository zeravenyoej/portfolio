import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    background: grey;
    width: 20%;
    border: 1px solid black;
`;

const StyledBttn = styled.button`
    padding: 15%;
    font-size: 1.5rem;
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
            
                &nbsp;
                Projects
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('teaching')}>
                <FontAwesomeIcon icon="graduation-cap" />
                &nbsp;
                Teaching Experience
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('blog')}>
            
                &nbsp;
                Blog
            </StyledBttn>
            <StyledBttn onClick={()=>history.push('contact')}>
            
                &nbsp;
                Contact Me
            </StyledBttn>
        </StyledNav>
    );
};

export default NavBar;