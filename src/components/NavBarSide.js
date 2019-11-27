import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { directive } from '@babel/types';
// import { faColumns } from '@fortawesome/free-solid-svg-icons';


const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;


const StyledBttn = styled.button`
    padding: 4%;
    font-size: 1.5rem;
    font-family: 'Audiowide', cursive;
    background-color: #45A29E;
    color: white;
    text-shadow: 1px 1px black;
    box-shadow: 2px 2px black;
    margin: 10px;
`;

export default function NavBarSide ({history}) {
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
            <StyledBttn onClick={()=>history.push('contact')}>
                <FontAwesomeIcon icon="phone" />
                &nbsp;
                Contact Me
            </StyledBttn>
        </StyledNav>
    );
};


