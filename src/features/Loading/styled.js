import styled from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.width.component};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
    font-size: 1.7em;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    font-size: 3vw;
    margin-bottom: 0px;
  }
`;

export const Loader = styled.div`
  width: 10em;
  padding: 8px;
  margin: 20px 0px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.mainblue};
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {to{transform: rotate(1turn)}}

  @media(max-width: ${({theme}) => theme.media.tablet}){
    width: 7em;
  }

  @media(max-width: ${({theme}) => theme.media.phone}){
    width: 4em;
  }
`
