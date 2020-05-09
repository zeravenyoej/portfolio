import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  return (
    <StyledNav>
      <FlexDiv onClick={()=>history.push("/")}>
        <FontAwesomeIcon icon="arrow-alt-circle-up" />
        &nbsp;&nbsp;
        Home
      </FlexDiv>

      <FlexDiv onClick={()=>history.push("/about")}>
        <FontAwesomeIcon icon="coffee" />
        &nbsp;
        About Me
      </FlexDiv>

      <FlexDiv onClick={()=>history.push("/skills")}>
        <FontAwesomeIcon icon="code" />
        &nbsp;
        Skills
      </FlexDiv>

      <FlexDiv onClick={()=>history.push("/projects")}>
        <FontAwesomeIcon icon="hammer" />
        &nbsp;
        Projects
      </FlexDiv>

      <FlexDiv onClick={()=>history.push("/contact")}>
        <FontAwesomeIcon icon="phone" />
        &nbsp;
        Contact Me
      </FlexDiv>
    </StyledNav>
  );
}

export default NavBarTop;