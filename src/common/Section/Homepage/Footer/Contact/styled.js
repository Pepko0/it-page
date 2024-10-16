import styled from "styled-components";

export const BlockRight = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
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