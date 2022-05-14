import React, { useState, useEffect } from "react";
import NavBarM from "./NavBarM";
import NavbarPC from "./NavbarPC";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return <>{isMobile ? <NavBarM /> : <NavbarPC />}</>;
};

export default Navbar;
