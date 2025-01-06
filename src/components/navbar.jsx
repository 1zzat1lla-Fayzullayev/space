import Wrapper from "../layout/wrapper";

function Navbar() {
  return (
    <>
      <Wrapper>
        <nav className="font-Finlandica flex items-center justify-between py-[65px]">
          <img src="/logo.svg" alt="" />
          <ul className="flex items-center gap-10">
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
          <div className="relative cursor-pointer">
            <img src="/button_border.svg" alt="" />
            <button className="text-white text-[15px] font-Finlandica absolute top-0 left-0 mx-auto text-center right-0 bottom-0">
              Get Started
            </button>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
