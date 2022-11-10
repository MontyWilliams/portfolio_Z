import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
            <div>
                <h2>I'm a full Stack Developer</h2>
                <p>yea yae yea</p>
            </div>
            <button>
                Portfolio
                <span>
                    <MdKeyboardArrowRight />
                </span>
            </button>
        <div className="rounded-2xl mx-auto w-2/3 md:w-full">
            <img src={HeroImage} alt="" />
        </div>
        </div>

    </div>
  )
}

export default Home
