import styled from "styled-components";

export const RepositoriesContent = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px 0px #eaeaea;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.inter};
  font-weight: 900;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.gray};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.mainblue};
`;
