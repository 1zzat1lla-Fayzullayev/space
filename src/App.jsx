import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NavMenu from "./shared/navMenu";
import AboutNtf from "./components/aboutNtf";

function App() {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Navbar handleOpenMenu={handleOpenMenu} />
      <Hero />
      <NavMenu menu={menu} handleOpenMenu={handleOpenMenu} />
      <AboutNtf />
    </>
  );
}

export default App;
