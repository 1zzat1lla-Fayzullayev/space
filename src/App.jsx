import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NavMenu from "./shared/navMenu";
import AboutNtf from "./components/aboutNtf";
import Ecosystem from "./components/ecosystem";

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
      <Ecosystem />
    </>
  );
}

export default App;
