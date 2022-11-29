import React from 'react'
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import react_travel_journal from "../assets/portfolio/react_travel_journal.png";
import meme_generator from "../assets/portfolio/meme_generator.png";

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: react_travel_journal,
        demo: "https://dapper-bunny-6101ca.netlify.app/",
        code: "https://github.com/MontyWilliams/travel_journal",
      },
      {
        id: 2,
        src: meme_generator,
        demo: "https://master--vocal-choux-76ae84.netlify.app/"
        code: "https://github.com/MontyWilliams/portfolio_Z"
      }
      // {
      //   id: 3,
      //   src: navbar,
      // },
      // {
      //   id: 4,
      //   src: reactSmooth,
      // },
      // {
      //   id: 5,
      //   src: installNode,
      // },
      // {
      //   id: 6,
      //   src: reactWeather,
      // },
    ];
  
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, demo, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo}>Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Portfolio
