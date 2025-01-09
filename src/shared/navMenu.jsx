import { useState } from "react";

/* eslint-disable react/prop-types */
function NavMenu({ menu, handleOpenMenu }) {
  const [drp, setDrp] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#00000083] z-[998] transition-opacity duration-300 ${
          menu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOpenMenu}
      />

      <div
        className={`fixed top-0 overflow-auto left-0 bottom-0 w-[90%] bg-[#161617] z-[999] 
        transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="tope flex flex-row justify-between items-center max-w-[90%] mx-auto mb-10 mt-[70px]">
          <img
            src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/Logo.svg"
            alt=""
          />
          <img
            src="/close.svg"
            onClick={handleOpenMenu}
            className="w-[40px] cursor-pointer"
          />
        </div>
        <ul className="max-w-[90%] mx-auto text-white">
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Home
          </li>
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Buy
          </li>
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Earn
          </li>
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Marketplace
          </li>
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Tokenomics
          </li>
          <li className="py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel">
            Roadmap
          </li>
          <div className="dive-drope">
            <li onClick={()=> setDrp((prev)=>!prev)} className={` ${drp && 'text-[#CBFB45]'} flex flex-row justify-between items-center py-[10px] cursor-pointer hover:text-[#CBFB45] transition-colors text-[15px] font-light font-Apfel`}>
              Socials <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 inline transition-transform ${drp ? "rotate-180 text-[#CBFB45] ":""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>

              </span>
            </li>
            <ul className={`social-drop transition-all2 overflow-hidden  ${!drp ? 'h-0 transition-all':'h-[250px] transition-all pb-[10px]'} pl-[30px]`}>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                X
              </li>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                Telegram
              </li>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                Chat
              </li>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                Medium
              </li>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                Youtube
              </li>
              <li className="text-[#f3f3f3] cursor-pointer pb-4 font-Apfel hover:text-[#CBFB45] transition-colors">
                Linkedin
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default NavMenu;
