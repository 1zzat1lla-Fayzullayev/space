/* eslint-disable react/prop-types */

function HeroYellowButton({ heroYellowBtnText }) {
  return (
    <>
      <button className="relative">
        <img src="/hero_yellow_btn.svg" alt="" className="w-[247px]"/>
        <span className="absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center text-[24px] font-Finlandica font-[700] uppercase">
          {heroYellowBtnText}
        </span>
      </button>
    </>
  );
}

export default HeroYellowButton;
