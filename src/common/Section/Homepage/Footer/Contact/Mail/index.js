import { Link, ContactLogo, ContactText } from "../styled";
import { useState, useEffect } from "react";

const Mail = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1045);
    };
    handleResize();
    window.removeEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
    }
  };

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href="mailto: k.lewkosga@gmail.com"
    >
      <ContactLogo viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {hovered ? (
          <path d="m21.555 8.168-9-6a1 1 0 0 0-1.109 0l-9 6A1 1 0 0 0 2 9v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-.334-.167-.646-.445-.832ZM12 4.202 19.197 9 12 13.798 4.803 9 12 4.202ZM4 20v-9.131l7.445 4.963a1 1 0 0 0 1.11 0L20 10.869l-.003 9.13H4Z"></path>
        ) : (
          <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2Zm0 2v.511l-8 6.223-8-6.222V6h16ZM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4Z"></path>
        )}
      </ContactLogo>
      <ContactText>k.lewkosga@gmail.com</ContactText>
    </Link>
  );
};

export default Mail;
