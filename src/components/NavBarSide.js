import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

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
    margin: 10px;
`;

export default function NavBarSide (props) {
    const history = useHistory();

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


