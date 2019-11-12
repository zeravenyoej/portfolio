import styled from 'styled-components';
import CityMe from '../images/CityMe.png';



export const MainContainer = styled.div`
    margin: auto;
    padding: 5%;
    display: flex;
    flex-direction: row;
`;

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20%;
    background-image: url(${CityMe});
    background-size: cover;
    height: 80vh;
    padding: 2%;
    border-radius: 10px;
`;
