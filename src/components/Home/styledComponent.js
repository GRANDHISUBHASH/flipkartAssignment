import styled from 'styled-components';

export const Container = styled.div``;

export const HoverCard = styled.div`
    position: fixed;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    margin-top: 50px;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 250px;
    z-index: 1000;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const SubcategoryCard = styled.div`
    position: fixed;
    padding: 5px;
    z-index: 1500;
    background-color: rgb(218, 79, 79);
    width: 250px;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    display: none;
    transition: opacity 0.3s ease;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
