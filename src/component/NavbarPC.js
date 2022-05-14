import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavbarPC = () => {
  const screenHeight = window.innerHeight;
  const [stickyNav, setStickyNav] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > screenHeight) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      className={
        stickyNav
          ? "navbar translate-y-0 duration-300 font-bold text-gray-200 bg-gray-900 sticky top-0 w-full z-10 flex gap-4 justify-center pl-80 items-center"
          : "navbar translate-y-10 font-bold text-gray-200 bg-gray-900 absolute -top-20 w-full z-10 flex gap-4 justify-center pl-80 items-center"
      }
    >
      <Link
        className="p-2 cursor-pointer hover:text-cyan-300 duration-700"
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
        className="p-2 cursor-pointer hover:text-cyan-300 duration-700"
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
        className="p-2 cursor-pointer hover:text-cyan-300 duration-700"
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
        className="p-2 cursor-pointer hover:text-cyan-300 duration-700"
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
  );
};

export default NavbarPC;
