import { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion/Accordion";
import RegLink from "./RegLink/RegLink";
import { GrClose } from "react-icons/gr";

const StyledMenu = styled.div`
  top: 0px;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: var(--brandBlue);
  transition: right 400ms ease-in;
  max-width: 75%;
  z-index: 100;
  color: #fff;
  overflow-y: scroll;
  @media (min-width: 768px) {
    max-width: 40%;
  }
  #list {
    svg {
      font-size: 1.5rem;
      cursor: pointer;
      path, polyline {
        stroke: #fff !important;
      }
    }
  }
  #close {
    svg {
      font-size: 1.7rem;
      transform: translate(-6px, 3px);
      path {
        stroke: #fff;
      }
    }
  }
`;
const Menu = ({ open, close }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const langLinks = ["english", "spanish", "korean"];
  const featLinks = ["military discount", "AARP benefits", "senior rate"];
  const salesLinks = ["corporate plus", "group reservations"];
  return (
    <StyledMenu
      open={open}
      className="fixed p-4 text-black shadow xl:hidden"
    >
      <div id="close" onClick={close} className="flex justify-end ">
        <GrClose fill="red" />
      </div>
      <div id="list" className="flex flex-col justify-between capitalize mt-4">
        <RegLink title="find reservation" />
        <Accordion
          title="Language (EN)"
          links={langLinks}
          open={isOpen1}
          click={() => setIsOpen1(!isOpen1)}
        />
        <Accordion
          title="Features & Deals"
          links={salesLinks}
          open={isOpen2}
          click={() => setIsOpen2(!isOpen2)}
        />
        <RegLink title="motels in canada" />
        <Accordion
          title="Sales"
          links={featLinks}
          open={isOpen3}
          click={() => setIsOpen3(!isOpen3)}
        />
        <RegLink title="new locations" />
        <RegLink title="extended stay" />
        <RegLink title="Call to Book" />
      </div>
    </StyledMenu>
  );
};
export default Menu;
