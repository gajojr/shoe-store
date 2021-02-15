import styled from 'styled-components';

export const Section = styled.section `
    width: 80%;
    text-align: center;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const Article = styled.article `
    width: 92%;
    height: 500px;
    margin: 10px;
    box-sizing: border-box;
    display: inline-block;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    transition: 1s;

    &:hover {
        transform: scale(1.1);
    }
`;