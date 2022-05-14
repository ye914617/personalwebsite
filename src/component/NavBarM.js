import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const NavBarM = () => {
  const [loadingMenu, setLoadingMenu] = useState(false);

  const openMenu = () => {
    setLoadingMenu(true);
  };

  const closeMenu = () => {
    setLoadingMenu(false);
  };
  return (
    <>
      <GiHamburgerMenu
        onClick={openMenu}
        className={
          loadingMenu
            ? "hidden"
            : "z-20 bg-black rounded cursor-pointer w-12 h-12 text-white fixed right-4 top-2"
        }
      />

      <div
        className={
          loadingMenu
            ? "fade-in-appear bg-zinc-900 h-screen fixed w-full z-20 top-0"
            : "fade-in bg-zinc-900 h-screen fixed w-full -z-20 top-0"
        }
      >
        <div className="flex flex-col w-full h-full relative">
          <AiOutlineClose
            onClick={closeMenu}
            className="cursor-pointer w-12 h-12 text-white absolute right-4 top-2"
          />
          <div className="bg-black h-1/4 flex flex-col gap-4 justify-center items-center">
            <h3 className="text-cyan-300 text-4xl">YE</h3>
            <p className="text-white">Front-end Developer</p>
          </div>
          <div className="navbar flex flex-col justify-center items-center">
            <Link
              onClick={closeMenu}
              className="w-full text-center text-gray-400 text-2xl border-b-2 border-gray-600 p-5 cursor-pointer hover:bg-zinc-700 hover:text-cyan-300 duration-700"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={200}
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              className="w-full text-center text-gray-400 text-2xl border-b-2 border-gray-600 p-5 cursor-pointer hover:bg-zinc-700 hover:text-cyan-300 duration-700"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={200}
              offset={-40}
            >
              About
            </Link>
            <Link
              onClick={closeMenu}
              className="w-full text-center text-gray-400 text-2xl border-b-2 border-gray-600 p-5 cursor-pointer hover:bg-zinc-700 hover:text-cyan-300 duration-700"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={200}
              offset={-40}
            >
              Portfolio
            </Link>
            <Link
              onClick={closeMenu}
              className="w-full text-center text-gray-400 text-2xl border-b-2 border-gray-600 p-5 cursor-pointer hover:bg-zinc-700 hover:text-cyan-300 duration-700"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={200}
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 flex-grow">
            <div className="p-2 hover:bg-blue-400 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/lun-ye-529994219/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsLinkedin className="h-8 w-8" />
              </a>
            </div>
            <div className="p-2 hover:bg-blue-400 ease-in duration-300">
              <a
                href="https://github.com/ye914617"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsGithub className="h-8 w-8 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarM;
