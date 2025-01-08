/* eslint-disable react/prop-types */
const Navbar = ({handleOpenMenu}) => {


  return (
    <div className="site-header p-[1%2.5%1%2.5%] relative z-[100]">
      <div className="content flex flex-row items-center justify-between">
        <div className="lft h-20 flex items-center p-[10px] lg:w-1/4">
          <img
            src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="center-navs w-1/2 justify-center hidden lg:flex">
          <div className="nav-links font-Apfel text-[#F3F3F3] text-[15px] flex flex-row gap-5">
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Home
            </li>
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Buy
            </li>
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Earn
            </li>
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Marketplace
            </li>
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Tokenomics
            </li>
            <li id="navItem" className="cursor-pointer list-none font-Apfel">
              Roadmap
            </li>
            <li className="social list-none group relative">
              <p id="navItem" className="cursor-pointer font-Apfel">
                Socials
              </p>

              <ul className="social-drop opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 border border-solid rounded-[5px] py-[15px] min-w-[232px] bg-[#161617] border-[#CBFB45] flex flex-col z-20 absolute transition-all duration-300 ease-out">
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-normal">
                  X
                </li>
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-norma">
                  Telegram
                </li>
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-norma">
                  Chat
                </li>
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-norma">
                  Medium
                </li>
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer  hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-norma">
                  Youtube
                </li>
                <li className="text-[#f3f3f3] hover:text-[#CBFB45] hover:bg-[#232325] transition-all after:absolute after:w-1 after:left-0 after:top-0 after:bg-[#CBFB45] after:-translate-y-[110%] after:transition-transform cursor-pointer hover:after:!translate-y-0 after:h-full overflow-hidden relative font-Apfel text-[15px] py-[5px] px-[22px] font-norma">
                  Linkedin
                </li>
              </ul>
            </li>
          </div>
        </div>

        <div className="end lg:w-1/4 lg:flex justify-end hidden">
          <button className="font-Neue text-[#151517] text-[15px] font-extrabold leading-[20px] px-[25px] py-[10px] bg-[#B7E82E]">
            Get Started
          </button>
        </div>
        <div className="flex-col gap-[3px] flex lg:hidden" onClick={handleOpenMenu}>
          <div className="w-[30px] h-[2px] rounded-full bg-white"></div>
          <div className="w-[30px] h-[2px] rounded-full bg-white"></div>
          <div className="w-[30px] h-[2px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
