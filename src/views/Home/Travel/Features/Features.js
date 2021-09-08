import styled from "styled-components";
import grand from "../../../../assets/grand.jpg";
import hero from "../../../../assets/hero.jpg";
import aarp from "../../../../assets/aarp.jpg";
const StyledFeatures = styled.div`
 h1 {
   font-size: 1.25rem;
   @media (min-width: 1280px) {
     font-size: 2rem;
   }
 }
  #features {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: .5rem;
  }
  h4 {
    color: rgb(23, 107, 178);
  }
  p {
    color: rgb(110, 118, 145);
  }
`;
const Features = () => {
  const feats = [
    {
      title: "The Grand Introduction",
      desc: "Helping grandparents reunite with their grandkids",
      img: grand,
    },
    {
      title: "Samsung Smartphone Offer",
      desc: "Sign up for My6 and Stay to be eligible",
      img: hero,
    },
    { title: "AARP Members", desc: "AARP Members save even more", img: aarp },
  ];
  return (
    <StyledFeatures className="p-4  flex flex-col relative xl:rounded justify-end pb-6  xl:shadow">
      <h1 className=" whitespace-nowrap inline-block capitalize  font-bold mb-4 ">
        features and deals
      </h1>

      <div  className="flex flex-col gap-3 w-full   justify-center py-2 xl:py-2">
        {feats.map((feat, i) => (
          <div id="features" key={i} className="flex cursor-pointer hover:bg-gray-100">
            <img
              src={feat.img}
              className="w-24 h-24 object-top object-cover rounded"
              alt=""
            />
            <div>
              <h4 className='font-medium'>{feat.title}</h4>
              <p className='text-sm'>{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledFeatures>
  );
};
export default Features;
