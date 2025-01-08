/* eslint-disable react/prop-types */
function GreenButton({buttonTitle, marginTop}) {
  return (
    <>
      <a
        href="#"
        className={`bg-[#cbfb45] ${marginTop} text-black text-[16px] py-[20px] px-[40px] font-[700] transition-all duration-300 font-Neue`}
      >
        {buttonTitle}
      </a>
    </>
  );
}

export default GreenButton;
