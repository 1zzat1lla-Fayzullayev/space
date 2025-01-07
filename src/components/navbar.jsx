
const Navbar = () => {
  return (
    <div className="site-header p-[1%2.5%1%2.5%] relative z-[100]">
        <div className="content flex flex-row items-center justify-between">
        <div className="lft p-[10px]">
            <img src="https://crypteck.jwsuperthemes.com/wp-content/uploads/2022/07/Logo.svg" alt="logo" />
        </div>
        <div className="center-navs">
            <div className="nav-links font-Apfel text-white flex flex-row gap-[10px]">
            <p>Home</p>
            <p>Buy</p>
            <p>Earn</p>
            <p>Marketplace</p>
            <p>Tokenomics</p>
            <p>Roadmap</p>
            <div className="social men relative">
            <p>Socials</p>
            </div>
            <div className="social-drop absolute -top-40">
                <p>X</p>
                <p>Telegram</p>
                <p>Chat</p>
                <p>Medium</p>
                <p>Youtube</p>
                <p>Linkedin</p>
            </div>
            </div>
          
        </div>

        <div className="end">
            <button className="font-Neue text-white">Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar