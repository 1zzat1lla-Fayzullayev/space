/* eslint-disable react/prop-types */
function ButtonYellowBorder({yellowButtonText}) {
  return (
    <>
      <div className="relative cursor-pointer">
        <img src="/button_border.svg" alt="" />
        <button className="text-white text-[15px] font-Finlandica absolute top-0 left-0 mx-auto text-center right-0 bottom-0">
          {yellowButtonText}
        </button>
      </div>
    </>
  );
}

export default ButtonYellowBorder;
