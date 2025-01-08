const Navbar = () => {
  return (
    <div className="site-header p-[1%2.5%1%2.5%] relative z-[100]">
      <div className="content flex flex-row items-center justify-between">
        <div className="lft h-20 flex items-center p-[10px] w-1/4">
          <img
            src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/Logo.svg"
            alt="logo"
          />
        </div>
        <div className="center-navs w-1/2 flex justify-center">
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

              <ul className="social-drop flex flex-col z-20 absolute transition-all duration-300 ease-out">
              <li>X</li>
              <li>Telegram</li>
              <li>Chat</li>
              <li>Medium</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
            </li>
           
          </div>
        </div>

        <div className="end w-1/4 flex justify-end">
          <button className="font-Neue text-[#151517] text-[15px] font-extrabold leading-[20px] px-[25px] py-[10px] bg-[#B7E82E]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
