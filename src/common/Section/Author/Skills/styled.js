import styled from "styled-components";

export const Container = styled.div`
  max-width: 90vw;
  margin: 60px auto;
  //background-color: grey;
`;

export const Title = styled.h2`
    font-size: 1.5vw;
    margin: 20px;
    padding: 10px;
    border-bottom: solid 1px;
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media(max-width: ${({theme}) => theme.media.tablet}){
      grid-template-columns: 1fr 1fr;
    }

    @media(max-width: ${({theme}) => theme.media.phone}){
      grid-template-columns: 1fr;
    }
`;

export const List = styled.li`

`;
