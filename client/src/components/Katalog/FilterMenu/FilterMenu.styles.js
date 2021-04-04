import styled from 'styled-components';

export const Section = styled.section `
    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 0 auto;
    max-width: 1200px;
    @media(max-width: 623px) {
        flex-direction: column;
    }
`;

export const OptionDiv = styled.div `
    flex: 1;
`;

export const CenaDiv = styled.div `
    display: flex;
    align-items: center;
`;

export const CenaOpcije = styled.div ``;

export const BrojeviPatika = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

export const BrojPatika = styled.button `
    max-width: 50px;
    &:hover {
        cursor: pointer;
    }
`;

export const ApplyFiltersButton = styled.button `
    margin-top: 5px;
    height: fit-content;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: 623px) {
        padding: 3px;
        align-self: center;
        width: 30%;
        min-width: 100px;
    }
`;