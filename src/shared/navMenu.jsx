/* eslint-disable react/prop-types */
function NavMenu({menu, handleOpenMenu}) {
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
        className={`fixed top-0 left-0 bottom-0 w-[90%] bg-[#161617] z-[999] 
        transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src="/close.svg"
          onClick={handleOpenMenu}
          className="w-[40px] cursor-pointer absolute right-2 top-2"
        />
        <ul className="mt-[100px] space-y-4 px-6 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavMenu;
