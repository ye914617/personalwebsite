import React from "react";
import aboutcard from "./photo/card.png";
import galaxy from "./photo/galaxy.png";

const AboutCard = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-screen bg-transparent"
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h2 className="mb-4">Website</h2>

          <ul className="flex justfiy-center flex-wrap">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Redux</li>
            <li>Git</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <img src={aboutcard} />
      </div>
    </div>
  );
};

export default AboutCard;
