import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
            <div className="flex flex-col justify-center h-full">
                <h2  className="text-4xl sm:text-7xl font-bold">I'm a full Stack Developer</h2>
                <p>I have years of experience with computers and I have been studying web development since 2020. I regularly use
                    a variety of technologies and tools to build web applications on both ends of the stack and I'm familiar with React, Solidity,
                    NextJS, Tailwind, NodeJs and more.
                </p>
            </div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r ">
                Portfolio
                <span className="group-hover:rotate-90 duration-1000">
                    <MdKeyboardArrowRight  size={25}/>
                </span>
            </button>
        <div>
            <img src={HeroImage} className="rounded-2xl hover:rounded-full duration-[4000ms] ease-in-out mx-auto w-2/3 md:w-full"alt="" />
        </div>
        </div>

    </div>
  )
}

export default Home
