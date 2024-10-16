import Contact from "./Contact";
import {
  Container,
  Title,
  Text,
  BlockLeft,
  LogoGH,
  LogoLk,
} from "./styled";


const Footer = () => {
  const logoGitHub =
    "M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z";
  const logoLinkedin =
    "M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z";

  return (
    <Container>
      <BlockLeft>
        <Title>Zostańmy w kontakcie!</Title>
        <Text>
          Tworzenie stron internetowych, opierających się na nowoczxesnych
          technologiach
        </Text>
        <span>
          <a
            title="Look my Portfolio on GitHub (Will open in new window) "
            target="_blank"
            href="https://github.com/Pepko0"
          >
            <LogoGH viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d={logoGitHub}></path>
            </LogoGH>
          </a>
          <a
            href="https://www.linkedin.com/in/kacper-lewko-66a165273/"
            target="_blank"
            title="Look my Profile in Linkedine (will open new window!)"
          >
            <LogoLk viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d={logoLinkedin}></path>
            </LogoLk>
          </a>
        </span>
      </BlockLeft>
      <Contact />
      
    </Container>
  );
};

export default Footer;
