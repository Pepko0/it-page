import styled from "styled-components";

export const Task = styled.li`
  background-color: ${({ theme }) => theme.color.mercury};
  list-style: none;
  margin: 20px auto;
  box-shadow: 5px 5px 0px 0px #9b9b9b;
`;
