import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    background: grey;
    width: 20%;
`;

const StyledBttn = styled.button`
    padding: 15%;
    font-size: 1.5rem;
`;

function NavBar ({history}) {
    return (
        <StyledNav>
            <StyledBttn onClick={()=>history.push('about')} >About Me</StyledBttn>
            <StyledBttn onClick={()=>history.push('skills')}>Skills</StyledBttn>
            <StyledBttn onClick={()=>history.push('projects')}>Projects</StyledBttn>
            <StyledBttn onClick={()=>history.push('teaching')}>Teaching Experience</StyledBttn>
            <StyledBttn onClick={()=>history.push('blog')}>Blog</StyledBttn>
            <StyledBttn onClick={()=>history.push('contact')}>Contact Me</StyledBttn>
        </StyledNav>
    );
};

export default NavBar;