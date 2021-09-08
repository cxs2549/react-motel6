import styled from "styled-components";
import hero from "../../../assets/hero.jpg";

const StyledHero = styled.div`
  height: 64vh;
  max-width: 100vw;
  background-image: url(${hero});
  background-position: center center;
  background-position: -60px 0;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  position: relative;
  overflow-x: hidden;
	@media (min-width: 640px) {
		background-position: 0 0;
	}
  @media (min-width: 1280px) {
    height: 70vh;
    background-position: 0px -160px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      transparent
    );
  }
  h1,
  p {
    color: white;
    text-shadow: #000 1px 1px 3px;
    position: relative;
    z-index: 1;
  }
  span {
    text-shadow: #fff 1px 1px 3px;
  }
`;
const Hero = () => {
  return (
    <div>
      <StyledHero className="py-4">
        <div className="mx-auto w-full max-w-6xl relative">
          <div className="flex flex-col items-start justify-center absolute left-0 top-0 xl:top-4 px-4">
            <h1 className="text-4xl xl:text-5xl font-bold  md:max-w-2xl">
              New my<span className="text-brandRed">6</span> Members get a Free
              Samsung Galaxy Smartphone
            </h1>
            <p className="mt-2 text-gray-700 relative z-10 xl:text-xl">
              When you pay for 2 months <br className="md:hidden" /> of wireless
              service.
            </p>
            <button className="px-4 py-2 mt-4 bg-brandBlue rounded text-white font-medium relative z-10 shadow xl:text-lg">
              Join Now
            </button>
          </div>
        </div>
      </StyledHero>
    </div>
  );
};
export default Hero;
