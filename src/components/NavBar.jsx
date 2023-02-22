import React, { useState }from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    const [nav, setNav] = useState(false);

    return (
        <div >
            <div className="flex justify-between fixed items-center w-full h-20  bg-black text-white">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    className="text-5xl  font-signature ml-2 animate-pulse">Monty W
                </motion.h1>

                <ul className="hidden md:flex">
                    {links.map(link => (
                    <li  key={link.id} className="px-4 cursor-pointer capitalize hover:scale-125 duration-200">
                           <Link to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                    {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black  ">
                    {links.map(link => (
                        <li  key={link.id} className="px-4 cursor-pointer py-6 text-4xl capitalize hover:scale-125 duration-200">
                            <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
                        </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default NavBar
