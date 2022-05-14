import React from "react";
import galaxy from "./photo/galaxy.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div>
      <div
        ref={ref}
        className="bg-transparent p-8"
        style={{ backgroundImage: `url(${galaxy})` }}
      >
        <h2
          className={
            inView
              ? "fade-in-appear text-4xl mb-4 font-bold text-cyan-400 mt-20"
              : "fade-in text-4xl mb-4 font-bold text-cyan-400 mt-20"
          }
        >
          Welcome to my page
        </h2>

        <p
          className={
            inView
              ? "slide-in-appear about-p relative text-cyan-400 md:w-4/6 lg:w-1/2 font-medium"
              : "slide-in about-p relative text-cyan-400 md:w-4/6 lg:w-1/2 font-medium"
          }
        >
          &nbsp;&nbsp;I'm currently working as a research assistant in
          Kaohsiung, Taiwan. I start learning front-end skills since 2021.
          Creating a website from 0 to 1 can give me a sense of accomplishment.
          Sometimes you have to put a lot of time and effort to solve a little
          problem, it helps me to learn how to solve problems effectively.
          <br />
          <br />
          &nbsp;&nbsp;So far I have some side projects built with ReactJS and
          Firebase as database, layout with TailwindCSS, and some techniques
          such as Socket.io, Redux, Facebook Login API, let's go have a look and
          I hope you will like it.
        </p>
      </div>
    </div>
  );
};

export default About;
