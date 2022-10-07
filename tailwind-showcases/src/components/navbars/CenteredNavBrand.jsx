import React from "react";
import vk_logo from "../../images/vk_logo.png";

const CenteredNavBrand = () => {
  return (
    <div>
      <nav className="bg-red-500 px-2 py-2 flex md:justify-center flex-row-reverse justify-between relative">
        <div className="md:flex md:justify-center items-center justify-between hidden">
          <div className="text-white font-bold text-xl mr-6 hover:text-amber-200 cursor-pointer">Home</div>
          <div className="text-white font-thin text-xl mr-6 hover:text-amber-200 cursor-pointer hover:font-bold">
            Products
          </div>
          <img width={72} src={vk_logo} alt="VK LOGO" />
          <div className="text-white font-thin text-xl mr-6 ml-6 hover:text-amber-200 cursor-pointer hover:font-bold">
            Pricing
          </div>
          <div className="text-white font-thin text-xl mr-6 hover:text-amber-200 cursor-pointer hover:font-bold">
            Company
          </div>
        </div>
        <div className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2.4"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="1" y1="6" x2="20" y2="6" />
            <line x1="6" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </nav>
      <div></div>

      <a href="https://htmljstemplates.com/html/bootstrap-5-navbars#section_2" target="blank">
        Reference Link
      </a>
    </div>
  );
};

export default CenteredNavBrand;
