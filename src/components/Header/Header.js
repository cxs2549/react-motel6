import { useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "../utilities/Wrapper/Wrapper";
import Burger from "./Burger/Burger";
import Icons from "./Icons/Icons";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import useOnClickOutside from "use-onclickoutside";
import Headroom from "react-headroom";
import Overlay from "./Menu/Overlay/Overlay";

const StyledHeader = styled.header`
  color: white;
  padding:  0;
  position: relative;
  z-index: 100;
  background-color: var(--brandBlue);

`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
   
    setIsOpen(!isOpen);
   
		document.body.classList.add('open-menu')
  };
  const handleClose = () => {
    setIsOpen(false);
    
		document.body.classList.remove('open-menu')
   
  };

  const menuRef = useRef();

  useOnClickOutside(menuRef, handleClose);

  const links = [
    "find reservation",
    "features & deals",
    "sales",
    "new locations",
    "extended stay",
    "call to book",
  ];
  return (
    <Headroom>
      <StyledHeader id="myHeader" open={isOpen}>
        <Wrapper>
          <Logo />
          <div className="hidden transform -translate-x-4 xl:flex capitalize justify-between w-full">
            {links.map((link, i) => (
              <a href="/" key={i}>
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Icons />
            <div ref={menuRef} >
              <Burger click={handleOpen} />
              <Menu open={isOpen} close={handleClose} />
            </div>
						<Overlay open={isOpen} close={handleClose} />
          </div>
        </Wrapper>
      </StyledHeader>
    </Headroom>
  );
};
export default Header;
