import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import ME from '../images/ME.jpg';
//import hawaii from '../images/hawaii.jpg';
// import CityMe from '../images/CityMe.png';
import NavBarSide from './NavBarSide';




function Home () {
//***************** OUTTERMOST DIV ***************** */
const HomeDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

// ******************* CONTAINER WITH NAVBAR **********************/
const NavDiv = styled.div`
    background: black;
    padding: 2%;
    /* display: flex;
    justify-content: space-evenly; */
    width: 25%;
`;

//*************************** CONTAINER WITH PHOTO********/
const PhotoDiv = styled.div`
    background-image: url(${ME});
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    width: 30%;
`;


//***************************  CONTAINER WITH TEXT *************
const StyledHero = styled.div`
    font-family: 'Audiowide', cursive;
    letter-spacing: 3px;
    background: #1F2833;
    width: 30%;
`;

// **************************** TEXT *****************************
const H1 = styled.h1`
    font-size: 3.0rem;
    text-shadow: 2px 2px black;
    color: #C5C6C7;
`;

const H2 = styled.h2`
    font-size: 1.3rem;
    text-shadow: 1px 1px white;
    color: #12699e96;
`;

    return (
        <HomeDiv>
            <NavDiv>
                <Route path='/' render={(props)=><NavBarSide {...props}/>}/>
            </NavDiv>

            <PhotoDiv/>

            <StyledHero>
                <H1>Joseph Nevarez</H1>
                <hr></hr>
                <H2> Web Developer</H2>
            </StyledHero>
        </HomeDiv>
    );
};

export default Home;