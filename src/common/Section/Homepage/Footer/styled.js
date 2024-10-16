import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  margin-top: 20px;
  bottom: 0;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BlockRight = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const BlockLeft = styled.div`
  display: grid;
  padding: 50px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.dm_serif};
  font-style: italic;
  font-size: 50px;
  margin-bottom: 5px;
  margin-top: 0px;
  

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 40px;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 30px;
  }
`;

export const Text = styled.p``;

export const ContactLogo = styled.svg`
  width: 40px;
  height: 40px;

  fill: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 20px;
  }
`;

export const ContactText = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 1vw;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 1.5vw;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 50px;
  width: 18vw;
  background-color: white;
  border-radius: 20px 0 20px 0;
  margin: 20px;
  text-align: center;
  box-shadow: 10px 10px 0px 0px #998674;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 25vw;
    padding: 25px;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 30vw;
    padding: 10px;
  }
`;

// logo

export const LogoGH = styled.svg`
  width: 75px;
  fill: ${({ theme }) => theme.color.white};

  :hover {
    fill: ${({ theme }) => theme.color.gray};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;

    :hover {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;

export const LogoLk = styled.svg`
  width: 75px;
  fill: ${({ theme }) => theme.color.white};
  :hover {
    fill: ${({ theme }) => theme.color.linkedine};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;

    :hover {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }
`;
