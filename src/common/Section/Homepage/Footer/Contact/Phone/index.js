import { useState, useEffect } from "react";
import {  Link, ContactLogo, ContactText } from "../styled";

const Phone = () => {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () =>{
        setIsMobile(window.innerWidth < 1024);
      }
      handleResize();
      window.removeEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, []);
  
  
  
    const handleMouseEnter = () => {
      if(!isMobile){
        setHovered(true);
      }
    };
  
    const handleMouseLeave = () => {
      if(!isMobile){
        setHovered(false);
      }
    };
  

    return(
        <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href="tel: +48667804407"
      >
        <ContactLogo viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {hovered ? (
            <path d="m20.487 17.142-4.065-3.696a1.001 1.001 0 0 0-1.39.043l-2.394 2.461c-.576-.11-1.734-.47-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.46-2.394a1 1 0 0 0 .042-1.39L6.86 3.514a1 1 0 0 0-1.39-.087L3.298 5.29a1 1 0 0 0-.29.65c-.016.25-.302 6.171 4.29 10.765 4.006 4.005 9.024 4.298 10.406 4.298.202 0 .326-.006.36-.008a.992.992 0 0 0 .647-.29l1.86-2.172a.997.997 0 0 0-.085-1.39Z"></path>
          ) : (
            <path d="M17.707 12.293a1 1 0 0 0-1.414 0L14.7 13.887c-.739-.22-2.118-.72-2.992-1.594-.874-.874-1.374-2.253-1.594-2.992l1.594-1.594a.998.998 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268 3.898 3.898 8.844 4.274 10.27 4.298h.027c.528 0 1.027-.208 1.405-.586l2.712-2.712a.998.998 0 0 0 0-1.414l-4-4Zm-.127 6.712c-1.248-.02-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.65-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502 1.66 1.66 4.387 2.247 4.502 2.271a.99.99 0 0 0 .912-.27L17 14.413 19.586 17l-2.006 2.005Z"></path>
          )}
        </ContactLogo>
        <ContactText>667 804 407</ContactText>
      </Link>
    )
}
export default Phone;