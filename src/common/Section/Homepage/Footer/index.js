import Contact from "./Contact";
import SocialMedia from "../../SocialMedia";
import { Container, Title, Text, BlockLeft } from "./styled";

const Footer = () => (
  <Container>
    <BlockLeft>
      <Title>Let's stay in touch!</Title>
      <Text>
        Creating websites based on modern
        technologies
      </Text>
      <SocialMedia />
    </BlockLeft>
    <Contact />
  </Container>
);

export default Footer;
