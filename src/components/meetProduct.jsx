import Wrapper from "../layout/wrapper";
import MeetProductCard from "../shared/meetProductCard";

function MeetProduct() {
  return (
    <>
      <div className="mx-[20px] xl:mx-0">
        <Wrapper>
          <div className="flex flex-col items-center mt-[100px] text-center justify-center">
            <span className="text-[#cbfb45] uppercase font-Apfel tracking-[5.6px]">
              MEET THE PRODUCT
            </span>
            <h2 className="text-[#f3f3f3] font-[800] font-Neue text-[28px] leading-[36px] md:text-[37px] mt-2">
              Beautiful, functional and nearly ready to launch
            </h2>
          </div>
          <div>
            <MeetProductCard />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default MeetProduct;
