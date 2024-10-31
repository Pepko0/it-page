import Contact from "./Contact";
import SocialMedia from "../../SocialMedia";
import { Container, Title, Text, BlockLeft, LogoGH, LogoLk } from "./styled";

const Footer = () => (
  <Container>
    <BlockLeft>
      <Title>Zostańmy w kontakcie!</Title>
      <Text>
        Tworzenie stron internetowych, opierających się na nowoczxesnych
        technologiach
      </Text>
      <SocialMedia />
    </BlockLeft>
    <Contact />
  </Container>
);

export default Footer;
