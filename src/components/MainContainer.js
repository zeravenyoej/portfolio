import styled from 'styled-components';
import backgroundImage from '../images/background.jpg';

const MainContainer = styled.div`
    margin: auto;
    padding: 5%;
    background-image: url(${backgroundImage});
    background-size: cover;
    display: flex;
    flex-direction: row;

`;

export default MainContainer;