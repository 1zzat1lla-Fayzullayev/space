/* eslint-disable react/prop-types */

function HeroGlassBlock({ glassNum }) {
  return (
    <>
      <div className="relative">
        <img src="/hero_glass_block.svg" alt="" />
        <span className="font-DrukCyr text-[64px] font-[700] text-center text-[#FFFFD2] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          {glassNum}
        </span>
      </div>
    </>
  );
}

export default HeroGlassBlock;
