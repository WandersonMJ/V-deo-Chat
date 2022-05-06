import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const AppBar = styled.div`
    ${({theme}) => css`
        position: static;
        border-radius: 15;
        margin: 30px 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 600px;
        
        padding: 20px;
        
        @media ${theme.mediaQueries.xs} {
            width: 90%;
        }
    `}
`;

