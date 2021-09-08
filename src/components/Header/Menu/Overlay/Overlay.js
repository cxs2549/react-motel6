import styled from "styled-components";
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: visibility 300ms, display 1s;
`;
const Overlay = ({ open, close }) => {
  return <StyledOverlay open={open} onClick={close}></StyledOverlay>;
};
export default Overlay;
