// import React from "react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import Resume from "../assets/portfolio.png";

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className=" max-w-screen-xl m-auto z-10 md:px-20  flex p-5 justify-between text-white items-center  backdrop-blur-[200px] bg-blue-950 relative">
        <div className="">
          <img src={Resume} className="w-12" alt="fortfolio logo" />
        </div>
        <ul
          className={
            isMenuOpen
              ? "transition-all duration-300 flex list-none no-underline gap-8 absolute  top-0  left-0 flex-col items-center pt-11 w-3/5 md:pt-0 h-screen bg-black md:w-auto md:flex-row md:h-auto md:static md:bg-inherit backdrop-blur-[200px] z-10"
              : "transform translate-x-[-100%] md:translate-x-[0%]  transition-all duration-300 flex absolute md:static flex-col top-0 left-0 bg-black md:bg-inherit items-center w-[70vw] md:w-auto h-screen md:h-auto md:flex-row list-none no-underline gap-8"
          }
        >
          <li>
            <a
              href="#Home"
              onClick={() => {
                ToggleMenu();
              }}
              className="menu-item"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Aboutme"
              onClick={() => {
                ToggleMenu();
              }}
              className="menu-item "
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              onClick={() => {
                ToggleMenu();
              }}
              className="menu-item"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => {
                ToggleMenu();
              }}
              className="menu-item"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contect"
              onClick={() => {
                ToggleMenu();
              }}
              className={
                isMenuOpen
                  ? "menu-item bg-[#0f9df8] md:bg-inherit my-[10px] m-0 px-[15px] py-[8px] p-0 rounded-md border border-[#0f9df8]  md:border-none"
                  : "menu-item"
              }
            >
              Contect Me
            </a>
          </li>
        </ul>
        <div
          className={
            isMenuOpen
              ? "h-screen w-screen absolute top-0 left-0 bg-transparent z-[2]"
              : "hidden"
          }
          onClick={() => {
            ToggleMenu();
          }}
        ></div>
        <div className="md:hidden relative z-10">
          <button
            onClick={() => {
              ToggleMenu();
            }}
            className="bg-blue-800/30 px-3 py-3 rounded"
          >
            {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default navbar;
