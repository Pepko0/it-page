import SocialMedia from "../../SocialMedia";
import { Container, SubText, Mail, Text } from "./styled";

const Footer = () => {
    return (
    <Container>
      <SubText>LET'S TALK</SubText>
      <Mail href="mailto:k.lewkosga@gmail.com" title="Send e-mail Kacper Lewko">
        k.lewkosga@gmail.com
      </Mail>
      <Text>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or a mobile app in mind and need help making your
        ideas come to life, feel free to contact me!
      </Text>
      <SocialMedia  />
    </Container>
  );
};

export default Footer;
