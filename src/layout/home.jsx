/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <div className="md:bg-[url('/hero_bg.png')] bg-cover bg-center min-h-screen">
      <img src="/mobile_header_stars.png" alt="" className="absolute top-0 left-0 md:hidden" />
        <Navbar handleOpenMenu={handleOpenMenu} />
        <Hero />
        <img src="/second_stars.png" alt="" className="absolute top-[490px] right-0 md:hidden" />
      </div>

      <div
        className={`fixed inset-0 w-full bg-black z-[99] transform transition-opacity duration-300 ease-in-out ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`h-full transform transition-transform duration-300 ease-in-out ${
            openMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src="/close.svg"
            alt="Close menu"
            className="absolute top-4 right-6 w-[10px] cursor-pointer"
            onClick={handleOpenMenu}
          />
          <ul className="flex flex-col items-center justify-center h-full gap-3 font-[Finlandica]">
            {["ABOUT", "AUDIT", "TOKENOMICS", "FEATURES", "FAQS"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#FCAF54] text-[15px] font-[500] leading-[40px] transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
