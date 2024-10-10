import styled from "styled-components";

export const RepositoriesContent = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px 0px #eaeaea;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 900;
  font-size: 2vw;
  margin-top: 5px;

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 4vw;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.gray};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.mainblue};
  font-size: 1vw;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 1.6vw;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3.5vw;
  }
`;

export const Text = styled.p`
  font-size: 1vw;
  display: inline;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 1.6vw;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3.5vw;;
  }
`;
