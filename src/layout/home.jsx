import Hero from "../components/hero";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <div className="bg-[url('/hero_bg.png')] bg-cover bg-center min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default Home;
