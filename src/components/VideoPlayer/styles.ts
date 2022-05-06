import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: 'center';
    flex-wrap: wrap;
    
    @media ${theme.mediaQueries.xs} {
        flex-direction: 'column';
    }
  `}
`;

export const Paper = styled.div`
    padding: 10px;
    border: 2px solid black 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.white};
    min-width: 321px;
    width: min-content;

    video {
        margin-top: 7px;
    }
`