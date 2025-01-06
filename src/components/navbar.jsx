/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";
import ButtonWhiteBorder from "../shared/navbar/buttonWhiteBorder";
import ButtonYellowBorder from "../shared/navbar/buttonYellowBorder";

function Navbar({handleOpenMenu}) {

  return (
    <>
      <Wrapper>
        <nav className="font-Finlandica flex items-center justify-between py-[65px] mx-[30px] xl:mx-0">
          <img src="/logo.svg" alt="" />
          <ul className="items-center gap-10 hidden md:flex">
            <li>
              <a
                href="#"
                className="text-[#FCAF54] text-[15px] font-[500] leading-[40px]"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#FCAF54] text-[15px] font-[500] leading-[40px]"
              >
                AUDIT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#FCAF54] text-[15px] font-[500] leading-[40px]"
              >
                TOKENOMICS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#FCAF54] text-[15px] font-[500] leading-[40px]"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#FCAF54] text-[15px] font-[500] leading-[40px]"
              >
                FAQS
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <ButtonYellowBorder yellowButtonText={"Get Started"} />
          </div>
          <div className="flex items-center gap-[10px] md:hidden">
            <ButtonWhiteBorder whiteButtonText={"Get Started"} />
            <div className="relative" onClick={handleOpenMenu}>
              <img
                src="/hamburger.png"
                alt=""
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[14px] m-auto"
              />
              <img src="/hamburger_bg.svg" alt="" />
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
