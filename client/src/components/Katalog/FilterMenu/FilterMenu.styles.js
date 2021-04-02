import styled from 'styled-components';

export const Section = styled.section `
    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 0 auto;
    max-width: 1200px;
`;

export const OptionDiv = styled.div `
    flex: 1;
`;

export const BrojeviPatika = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

export const BrojPatika = styled.button `
    /* padding: 2px;
    border: 2px solid #000; */
    &:hover {
        cursor: pointer;
    }
`;