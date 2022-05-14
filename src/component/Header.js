import React from "react";
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import galaxy from "./photo/galaxy.png";

const Header = () => {
  return (
    <header
      className="h-screen bg-transparent flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${galaxy})` }}
      id="home"
    >
      <div className="text-center text-4xl font-bold text-gray-100 w-[90%] mb-4">
        Hi, I'm <span className="text-orange-500">YE</span>.<br />
        On the way to become a front-end web developer.
      </div>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={200}
        className="mt-4 btn-slide relative cursor-pointer w-1/2 md:w-2/6 lg:w-1/6 border-2 border-emerald-300 text-gray-100 text-lg flex justify-center items-center"
      >
        Contact Me
        <span className="text-2xl">
          <BsArrowRightShort />
        </span>
      </Link>
    </header>
  );
};

export default Header;
