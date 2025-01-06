/* eslint-disable react/prop-types */

function ButtonWhiteBorder({ whiteButtonText }) {
  return (
    <>
      <button className="relative">
        <img src="/button_border_white.svg" alt="" />
        <span className="absolute font-[Finlandica] text-[15px] font-[700] text-center top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[#FFF]">{whiteButtonText}</span>
      </button>
    </>
  );
}

export default ButtonWhiteBorder;
