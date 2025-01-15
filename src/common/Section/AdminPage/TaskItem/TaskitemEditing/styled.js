import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.mainblue};
 padding: 10px;
  font-size: 30px;
  margin: 10px 0px;
`;

export const ImportantText = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainblue};
  font-size: 20px;
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

export const BlockLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const CustomRB = styled.label`
    display: inline-flex;
    align-items: center;
    
    &:before{
        content: '';
        display: block;
        height: 1.25em;
        width: 1.25em;
        border: solid 1px;
        border-radius: 50%;
        margin-right: 0.5em;
    }
        
    &:hover{
        cursor: pointer;
    }
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
    display: none;

    &:checked + ${CustomRB} {
        color: ${({theme}) => theme.color.mainblue};


        &::before{
        background: radial-gradient(
        0.75em circle at center,
        currentColor 50%,
        transparent 55%
        );
    }
}
`;