import styled from 'styled-components';
import backgroundImage from '../images/background.jpg';

export const MainContainer = styled.div`
    margin: auto;
    padding: 5%;
    background-image: url(${backgroundImage});
    background-size: cover;
    display: flex;
    flex-direction: row;
`;

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20%;
`;
