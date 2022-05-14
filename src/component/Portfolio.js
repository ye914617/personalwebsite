import React from "react";
import bigdata from "./photo/bigdata.png";
import calculator from "./photo/calculator.png";
import chatapp from "./photo/chatapp.png";
import fakebook from "./photo/fakebook.png";
import lang from "./photo/lang.png";
import todo from "./photo/todo.png";
import { useInView } from "react-intersection-observer";
import galaxy from "./photo/galaxy.png";

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });
  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className="w-auto h-auto md:h-screen p-2 pt-4"
      id="portfolio"
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      <h2
        className={
          inView
            ? "slide-in-appear text-white text-4xl text-center mb-8"
            : "slide-in text-4xl text-center mb-8"
        }
      >
        Portfolio
      </h2>

      <div className="portfolio-gallery">
        <div
          ref={ref}
          className={inView ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={lang} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Pet Shelter</h3>
            <p className="portfolio-description">ReactJS / Firebase / API</p>
            <div className="portfolio-button">
              <a
                href="https://ye914617.github.io/lang/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div
          ref={ref2}
          className={inView2 ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={todo} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Todo List</h3>
            <p className="portfolio-description">NodeJS / Express / MongoDB</p>
            <div className="portfolio-button">
              <a
                href="https://nodejs-todolist914617.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div
          ref={ref3}
          className={inView3 ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={bigdata} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Big Data</h3>
            <p className="portfolio-description">
              ReactJS / TailwindCSS / API / ChartJS
            </p>
            <div className="portfolio-button">
              <a
                href="https://ye914617.github.io/bigdata/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div
          ref={ref4}
          className={inView4 ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={chatapp} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Chat App</h3>
            <p className="portfolio-description">
              ReactJS / Socket.io / NodeJS / TailwindCSS / Heroku / Netlify
            </p>
            <div className="portfolio-button">
              <a
                href="https://ye914617-makes-great-sites.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div
          ref={ref5}
          className={inView5 ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={fakebook} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Fakebook</h3>
            <p className="portfolio-description">
              NextJS / Firebase / Redux / TailwindCSS / Facebook Login
            </p>
            <div className="portfolio-button">
              <a
                href="https://fakebook-umber.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div
          ref={ref6}
          className={inView6 ? "fade-in-appear portfolio" : "fade-in portfolio"}
        >
          <img className="portfolio-image" src={calculator} alt="lang" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Calculator</h3>
            <p className="portfolio-description">ReactJS / TailwindCSS</p>
            <div className="portfolio-button">
              <a
                href="https://ye914617.github.io/Calculator/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
