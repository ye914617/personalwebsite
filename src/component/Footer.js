import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-12">
      <div className="flex justify-center items-center gap-6">
        <div className="rotate-0 hover:rotate-360 p-2 bg-slate-600 hover:bg-blue-400 ease-in duration-700">
          <a
            href="https://www.linkedin.com/in/lun-ye-529994219/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin className="h-8 w-8" />
          </a>
        </div>
        <div className="rotate-0 hover:rotate-360 p-2 bg-slate-600 hover:bg-blue-400 ease-in duration-700">
          <a
            href="https://github.com/ye914617"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="h-8 w-8 " />
          </a>
        </div>
      </div>
      <div className="font-bold text-center mt-4">
        Copyright © 2022
        <span className="text-orange-400"> YE</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
