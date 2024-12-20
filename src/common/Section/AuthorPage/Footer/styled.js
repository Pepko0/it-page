import styled from "styled-components";

export const Container = styled.footer`
  width: ${({ theme }) => theme.width.component};
  margin: 40px auto;
  height: 100px;
`;

export const SubText = styled.p`
  font-size: 1.5em;
  
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  font-size: 2.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainblue};
  transition: color 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.color.cornflowerblue};
  }
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 3.2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const Text = styled.p`
  font-size: 1.5em;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }
  
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3.5vw;
  }
`;
