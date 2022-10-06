import vk_logo from "../../images/vk_logo.png";
const Navbar1 = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-600 px-5 py-2">
        {/* Logo placeholder */}
        <img width={64} src={vk_logo} alt="VK LOGO" />

        {/* Center contents */}
        <div className="flex justify-center text-white gap-3 font-medium">
          <div className="bg-blue-200 p-2 rounded-md text-black">Dashboard</div>
          <div className="p-2 rounded-md text-white/90 hover:bg-purple-400 hover:text-red-900">About</div>
          <div className="p-2 rounded-md text-white/90 hover:bg-purple-400 hover:text-red-900">Contact Us</div>
        </div>

        {/* Right contents */}
        <div className="sm:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </nav>

      {/* mobile contents */}
      <div className="flex  flex-col justify-center items-right py-8 text-black gap-4 font-medium text-center bg-red-200">
        <div className="bg-blue-200 p-4 rounded-md text-black w-1/2">Dashboard</div>
        <div className="p-4 rounded-md text-black hover:bg-purple-400 hover:text-red-900 w-1/2">About</div>
        <div className="p-4 rounded-md text-black hover:bg-purple-400 hover:text-red-900 w-1/2">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar1;
