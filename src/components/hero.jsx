import Wrapper from "../layout/wrapper";

const Hero = () => {
  return (
    <section className="relative text-white py-10 min-h-screen px-[30px] xl:px-0">
      <Wrapper>
        <div className="container mx-auto relative flex flex-col items-center">
          <div className="pt-[50px] md:pt-[200px]">
            <img
              src="/part-earth.svg"
              alt=""
              className="absolute z-[-1] bottom-[-100%] md:bottom-0 left-0 right-0 mx-auto"
            />
            <img
              src="/blockchan-animate-bg.svg"
              alt=""
              className="absolute z-[-1] md:bottom-0 left-0 right-0 mx-auto"
            />
            <img
              src="/meteor-shower.webp"
              alt=""
              className="absolute z-[-1] md:bottom-0 left-0 right-0 mx-auto"
              style={{ mixBlendMode: "color-dodge" }}
            />
          </div>

          <div className="w-full flex justify-center mb-8">
            <img src="/yellow_crypta.webp" className="yellow_crypta max-w-[100%] w-[50px] md:w-auto" />
            <img
              src="/green_crypta.webp"
              className="green_crypta bottom-0 left-[8%] max-w-[100%] w-[50px] md:w-auto"
            />
            <img
              src="/orange_crypta.webp"
              className="orange_crypta top-0 right-[17%] max-w-[100%] w-[50px] md:w-auto"
            />
            <img
              src="/darkgreen_right_crypta.webp"
              className="dark_green_crypta right-0 top-[14%] max-w-[100%] w-[50px] md:w-auto"
            />
            <img
              src="/blue_crypta.webp"
              className="blue_crypta right-[8%] bottom-0 max-w-[100%] w-[50px] md:w-auto"
            />
          </div>

          <div className="mt-[50px]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[30px] md:text-[56px] uppercase font-Neue">
              Ultimate AI Trading Ecosystem
            </h1>
            <p className="text-[16px] text-center mb-4 text-[#cbfb45] uppercase font-Apfel">
              Presale Live. Buy and Earn $EDGE tokens, and get an advantage of
              over 500% on the listing
            </p>
          </div>

          <a
            href="/shop"
            className="mt-6 bg-[#cbfb45] text-black text-[16px] py-[20px] px-[40px] font-[700] transition-all duration-300 font-Neue"
          >
            Buy Now
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
