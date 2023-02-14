import React from 'react'
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import chatAiImg from "../assets/portfolio/chatAiImg.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import react_travel_journal from "../assets/portfolio/react_travel_journal.png";
import meme_generator from "../assets/portfolio/meme_generator.png";
import { motion } from 'framer-motion'

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
        demo: "https://master--vocal-choux-76ae84.netlify.app/",
        code: "https://github.com/MontyWilliams/meme_generator"
      },
      {
        id: 3,
        src: chatAiImg,
        demo: "https://dashing-moxie-09704e.netlify.app/",
        code: "https://github.com/MontyWilliams/Js_ai_chatGP"
      },
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
    const profileVar = {
      hidden: {
        x: -1400
      },
      visible: {
          x: 0,
        transition: {
          duration: 3,
          when: "beforeChildren",
          staggerChildren: 0.3
        }
      }

    }
    const profImgVar = {
      hidden: {
        x: -1500
      },
      visible: {
        x: 0,
        transition: {
          duration: 2,
          delay: 1.3,
          when: "beforeChildren"
        }
      }
    }
    const proBtnVar = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 3,
          duration: 2
        }
      }
    }
  
    return (
      <div 
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <motion.div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full"
          variants={profileVar}
          initial="hidden"
          animate="visible"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          >
            {portfolios.map(({ id, src, demo, code }) => (
              <motion.div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
                variants={profImgVar}
                initial="hidden"
                animate="visible"
             
                >
                <motion.img
                variants={profImgVar}
                initial="hidden"
                animate="visible"
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-[300px] w-[300px]"
                />
                <motion.div
                  className="flex items-center justify-center"
                  variants={proBtnVar}
                  initial="hidden"
                  animate="visible"
                  >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo}>Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={code}>Code</a>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div >
        </motion.div>
      </div>
    );
  };
  

export default Portfolio
