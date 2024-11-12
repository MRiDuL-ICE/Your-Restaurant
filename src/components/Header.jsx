import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/Logo.png";
import "../../src/index.css";

const Header = () => {
  return (
    <div className="">
      <div className="navbar fixed md:pt-6 pt-10 px-8 md:px-60 z-10">
        <div className="navbar-start flex  items-center gap-14">
          <span className="">
            <img className="" src={logo} alt="" />
          </span>
          <div className="navbar-center hidden lg:flex items-start justify-start text-left">
            <ul className="flex px-1 gap-4 text-white text-lg">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Clients</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end flex items-center">
          <button className="md:btn hidden md:bg-[#FEBF00] md:border-none md:rounded-sm">
            Book A Table
          </button>
          <div className="dropdown flex flex-row-reverse">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white text-3xl btn-ghost md:hidden"
            >
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-12 w-52 p-2 shadow gap-4"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Clients</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
