import Wrapper from "../layout/wrapper";
import GreenButton from "../shared/greenButton";

function AboutNtf() {
  return (
    <Wrapper>
      <div className="md:mt-[200px] mx-[20px] xl:mx-0">
        <div className="flex flex-col-reverse mt-[200px] md:flex-row items-center gap-[30px] md:gap-[50px] justify-between">
          <div className="max-w-[600px] md:w-1/2 flex-shrink-0">
            <span className="text-[#cbfb45] uppercase tracking-[5.6px] font-Apfel">
              WHAT IS BLOCKEDGE?
            </span>
            <h1 className="text-[white] font-Neue text-[24px] md:text-[30px] font-bold mt-[10px]">
              Creating a platform for analyzing and trading on DEX and CEX with AI
            </h1>
            <p className="font-Apfel text-[16px] md:text-[18px] text-[#f3f3f3] mt-[20px]">
              AI Ecosystem to quickly and efficiently analyze huge amounts of data
              for safe and profitable trading on DEX and CEX
            </p>
            <p className="font-Apfel text-[14px] md:text-[16px] text-[#898990] mt-[20px]">
              The platform integrates analysis of decentralized (DEX) and
              centralized exchanges (CEX) using artificial intelligence to process
              large data sets. AI technology identifies market patterns, analyzes
              volatility, and optimizes trading strategies.
            </p>
            <div className="mt-[40px] md:mt-[70px] mb-[30px] md:mb-[40px]">
              <GreenButton buttonTitle={"Explore more"} />
            </div>
          </div>

          <div className="relative w-full md:w-auto">
            <img
              src="/Earth-network.webp"
              className="w-full max-w-[400px] md:max-w-[600px] mx-auto transition-transform ease-in-out duration-300 hover:scale-90"
            />
            <img
              src="/darkgreen_right_crypta.webp"
              className="absolute top-[10%] right-[5%] max-w-[80px] md:max-w-[100px]"
            />
            <img
              src="/orange_crypta.webp"
              className="absolute bottom-[10%] right-[5%] max-w-[60px] md:max-w-[100px]"
            />
            <img
              src="/green_crypta.webp"
              className="absolute bottom-[10%] left-[1%] max-w-[60px] md:max-w-[100px]"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AboutNtf;
