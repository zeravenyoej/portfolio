import styled from 'styled-components';
import trees from '../images/trees.jpg';
import city from '../images/city.jpg';
import street from '../images/street.jpg';


export const MainContainer = styled.div`
    margin: auto;
    padding: 5%;
    background-image: url(${trees});
    /* background-image: url(${city}); */
    /* background-image: url(${street}); */
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
