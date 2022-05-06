import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme}) => css`
        width: 600px;
        margin: 35px 0;
        padding: 0;
        @media ${theme.mediaQueries.xs} {
            width: 80%;
        }
    `}
`;

export const Paper = styled.div`
    padding: 10px 20px;
    border: 2px solid black;
    background-color: ${({theme}) => theme.colors.white};

    >span {
        margin-bottom: 14px;
    }
`

export const GridWrapper = styled.div`
    ${({theme}) => css`
        width: 100%;
        display: flex;
        gap: 14px;

        @media ${theme.mediaQueries.xs} {
            flex-direction: column;
        }
    `}
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
`