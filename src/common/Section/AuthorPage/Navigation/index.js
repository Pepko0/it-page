import { Container, StyledLink } from "./styled";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <Container>
        {location.pathname !== "/" && <StyledLink to="/">Homepage</StyledLink>}
        {location.pathname !== "/Service" && <StyledLink to="/Service">Service</StyledLink>}
        {location.pathname !== "/Author" && <StyledLink to="/Author">Author</StyledLink>}
    </Container>
  );
};

export default Navigation;
