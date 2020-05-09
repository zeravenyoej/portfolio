import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ME from '../images/ME.jpg';
import NavBarSide from './NavBarSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Home () {
    const history = useHistory();
//***************** OUTTERMOST DIV ***************** */
const HomeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
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
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    width: 30%;
    border: 1px solid black;
    /* margin: auto; */
`;

//***************************  CONTAINER WITH TEXT *************
const StyledHero = styled.div`
    font-family: 'Audiowide', cursive;
    letter-spacing: 3px;
    background: #1F2833;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2% 0 ;
`;

//************************* CONTAINED WITH LINKS, INSIDE OF CONTAINER WITH TEXT */

const LinkCont = styled.div`
    background-color: #C5C6C7;
    width: 80%;
    align-self: center;
    border: 2px solid black;
    padding: 2%;
    display: flex;
    flex-direction: column;
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
                <Route path='/'><NavBarSide/></Route>
                {/* <Route path='/' render={(props)=><NavBarSide {...props}/>}/> */}
            </NavDiv>

            <PhotoDiv/>

            <StyledHero>
                <div>
                    <H1>Joseph Nevarez</H1> <br/> <br/>
                    <hr></hr>
                    <H2> Web Developer</H2>
                </div>

                <LinkCont>
                    <H2>Links</H2>
                    <a href='https://www.letterboxd.com/zeravenyoej'>letterboxd</a>
                    <a href='https://www.github.com/zeravenyoej'>GitHub</a>
                    <a href='https://www.linkedin.com/in/joseph-nevarez/'><FontAwesomeIcon icon={['fab', 'Linkedin']}/></a>
                    <a href='https://medium.com/@josephnevarez12'>Blog</a>
                </LinkCont>
            </StyledHero>
        </HomeDiv>
    );
};

export default Home;