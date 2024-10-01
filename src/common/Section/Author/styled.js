import styled from "styled-components";

export const AuthorPhoto = styled.img`
  width: 20vw;
  border-radius: 100%;
  //max-height: 300px;
  text-align: center;
  box-shadow: 5px 5px 5px 0px #E8E8E8;
`;

export const Header = styled.header`
  max-width: 90vw;
  height: 20vw;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2vw;
`;

export const Title = styled.h1`
  font-size: 2vw;
  margin-top: 0px;
`;

export const Subtitle = styled.h2``;

export const SubText = styled.p`
  font-size: 1vw;
`;

export const Text = styled.p`
  font-size: 1.3vw;
`;
