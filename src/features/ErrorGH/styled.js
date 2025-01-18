import styled from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.width.component};
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  margin-top: 2px;
  margin-bottom: 0px;
  text-align: center;
  font-weight: bold;    
  font-size: 2.5em;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 3vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 5vw;
  }
`;

export const Text = styled.p`
  font-size: 1.7em;
  text-align: center;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
  }
`

export const Link = styled.a.attrs({
  href: "https://github.com/Pepko0?tab=repositories",
  title: "Open my Github repositories",
  target: "_blank",
  })`
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.mainblue};
  padding: 16px;
  border-radius: 4px;
  transition:  0.2s;

  &:hover {
    background-color: ${({theme}) => theme.color.cornflowerblue};
  }
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 4vw;
  }

`

export const Logo = styled.img.attrs({
  src: "it-page/icons/Danger.png",
  alt: "Danger" ,
})`
  width: 75px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 8vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 10vw;
  }

`;