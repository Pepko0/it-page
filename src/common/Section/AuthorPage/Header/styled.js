import styled from "styled-components";

export const Header = styled.header`
    width:  ${({theme}) => theme.width.component};
  margin: 100px auto 40px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    grid-template-columns: 1fr ;
  }
`;

export const AuthorPhoto = styled.img`
  width: 20vw;
  border-radius: 100%;
  //max-height: 300px;
  text-align: center;
  box-shadow: 5px 5px 5px 0px #e8e8e8;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    align-self: center;
    justify-self: center;
    width: 40vw;
  }
`;

export const Title = styled.h1`
  font-size: 2vw;
  margin-top: 0px;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const SubText = styled.p`
  font-size: 1vw;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  font-size: 1.3vw;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3.5vw;
  }
`;