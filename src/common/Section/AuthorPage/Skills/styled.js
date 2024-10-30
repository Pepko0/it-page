import styled from "styled-components";

export const Container = styled.div`
    width:  ${({theme}) => theme.width.component};
  margin: 60px auto;
  background-color: white;
  box-shadow: 5px 5px 5px 0px #eaeaea;
  padding-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 1.8vw;
  margin: 20px;
  padding: 10px;
  border-bottom: solid 1px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.li`
  list-style: none;

  &:before {
    content: "•" ;
    color: ${({ theme }) => theme.color.mainblue};
    margin-right: 10px;
  }

  font-size:1.3vw;
  margin-bottom: 15px;


  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3.5vw;
  }
`;
