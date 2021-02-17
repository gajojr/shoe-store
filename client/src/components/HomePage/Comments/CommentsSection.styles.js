import styled from 'styled-components';

import { GiConverseShoe } from "react-icons/gi";

export const Wrapper = styled.div `
    width: 100%;
    background-color: #D6D6D6;
`;

export const CommentsComponent = styled.section `
    margin: auto;
    width: 80%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D6D6D6;
    flex-wrap: wrap;
`;

export const Comment = styled.div `
    margin: 10px;
    padding: 5px;
    padding-left: 30px;
    border-radius: 10px;
    min-width: 40%;
    width: 40%;
    height: 400px;
    background-color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 2px 1px rgb(104, 104, 104);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.25rem;

    @media (max-width: 700px) {
        min-width: 90%;
    }
`;

export const GiConverseShoeStyled = styled(GiConverseShoe)
`
    transform: rotate(45deg);
    margin-bottom: auto;
    margin-left: auto;
`;