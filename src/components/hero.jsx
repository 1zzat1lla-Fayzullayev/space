import Wrapper from "../layout/wrapper";
import HeroGlassBlock from "../shared/hero/heroGlassBlock";
import HeroYellowButton from "../shared/hero/heroYellowButton";

function Hero() {
  return (
    <>
      <div className="">
        <Wrapper>
          <div className="flex flex-col items-center justify-center mx-[30px] xl:mx-0">
            <h1 className="font-Bowlby hero_heading">Meme Space</h1>
            <p className="hero_p">Buy, Earn, Win on Meme SyperCycle</p>
            <img src="/hero_pic.png" alt="" />
            <div>
              <h3
                className="text-[35px] text-[#FFFFD2] text-center font-Finlandica font-[700]"
                style={{
                  textShadow:
                    "0px -419px 117px rgba(17, 29, 115, 0.02), 0px -268px 107px rgba(17, 29, 115, 0.15), 0px -151px 91px rgba(17, 29, 115, 0.50), 0px -67px 67px rgba(17, 29, 115, 0.85), 0px -17px 37px rgba(17, 29, 115, 0.98)",
                }}
              >
                Next Price
              </h3>
              <div className="flex gap-[14px] items-center">
                <HeroGlassBlock glassNum={"03"} />
                <HeroGlassBlock glassNum={"12"} />
                <HeroGlassBlock glassNum={"23"} />
                <HeroGlassBlock glassNum={"56"} />
              </div>
            </div>
            <HeroYellowButton heroYellowBtnText={"BUY & EARN"}/>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Hero;
