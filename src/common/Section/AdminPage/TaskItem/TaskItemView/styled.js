import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.mainblue};
  padding: 10px;
  font-size: 30px;
  margin: 10px 0px;

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 6vw;
  }
`;
export const Text = styled.label`
  color: ${({ theme }) => theme.color.gray};
  font-size: 20px;
  
  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 5vw;
  }
`;

export const ImportantText = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainblue};
  font-size: 20px;

    
  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 5vw;
  }
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const BlockItem = styled.div`
  margin: 10px ;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px;
  color: ${({ theme }) => theme.color.mainblue};
`;

export const LogoEdit = styled.svg`
    width: 50px;
    fill: ${({theme}) => theme.color.black};
    transition: fill 0.2s;

    &:hover {
        fill: ${({theme}) => theme.color.cornflowerblue};
        cursor: pointer;
    }

    @media(max-width: ${({theme}) => theme.media.tablet}){
      &:hover{
        fill: ${({theme})=> theme.color.black};
      }
    }

    @media(max-width: ${({theme}) => theme.media.phone}){
      width: 10vw;
    }
`


export const LogoDelete = styled.svg`
    width: 50px;
    fill: ${({theme}) => theme.color.black};
    transition: fill 0.2s;

    &:hover {
        fill: ${({theme}) => theme.color.red};
        cursor: pointer;
    }

    @media(max-width: ${({theme}) => theme.media.tablet}){
      &:hover{
        fill: ${({theme})=> theme.color.black};
      }
    }

    @media(max-width: ${({theme}) => theme.media.phone}){
      width: 10vw;
    }
`