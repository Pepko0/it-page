import styled from "styled-components";

export const RepositoriesContent = styled.div`
  margin: 10px;
  padding: 25px;
  background-color: white;
  box-shadow: 5px 5px 5px 0px #eaeaea;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 900;
  font-size: 1.7em;
  margin-top: 0px;
  color: ${({theme}) => theme.color.mainblue};
  
  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 3vw;
  }

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
  font-size: 1.2em;
  transition: color 0.2s;

  &:hover {
    color: ${({theme}) => theme.color.cornflowerblue}
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 1.6vw;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3vw;
  }
`;

export const Text = styled.p`
  font-size: 1.2em;
  display: inline;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 1.6vw;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 3vw;;
  }
`;
