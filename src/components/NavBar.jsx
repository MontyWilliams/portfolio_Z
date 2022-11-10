import React, { useState }from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

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
        <div>
            <div className="flex justify-between items-center w-full h-20 fixed bg-black text-white">
                <h1 className="text-5xl  font-signature ml-2" >Monty W</h1>

                <ul className="hidden md:flex">
                    {links.map(link => (
                    <li  key={link.id} className="px-4 cursor-pointer capitalize hover:scale-125 duration-200">{link.link}</li>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
                </div>
                
            </div>
        </div>
    )
}

export default NavBar
