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
  margin: 10px 0;
`;