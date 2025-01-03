import styled from "styled-components";

export const Container = styled.div`
  width: ${({theme}) => theme.width.component};
  padding:50px;
  margin: auto;
  display: flex;
  background-color:  #D6D6D6 ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px #EAEAEA;
`;

export const Title = styled.h2`
  font-size: 2em;
  padding: 10px;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    font-size: 2.5vw;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    font-size: 5vw;
  }
`;

export const Loader = styled.div`
width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({theme}) => theme.color.mainblue};
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {to{transform: rotate(1turn)}}
`
