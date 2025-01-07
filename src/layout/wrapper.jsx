/* eslint-disable react/prop-types */

function Wrapper({ children }) {
  return <div className="mx-auto max-md:max-w-[1024px] max-lg:max-w-[90%] max-2xl:max-w-[1200px]">{children}</div>;
}

export default Wrapper;
