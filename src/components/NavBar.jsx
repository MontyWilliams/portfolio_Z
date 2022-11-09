import React from 'react';
import {FaBars, FaTimes} from 'react-icons';

const NavBar = () => {

    return (
        <div>
            <div className="flex justify-between items-center w-full h-20 fixed bg-black text-white">
                <h1 className="text-5xl  font-signature ml-2" >Monty W</h1>

                <ul className="flex">
                    <li className="px-4 cursor-pointer capitalize hover:scale-125 duration-200">Home</li>
                    <li className="px-4 cursor-pointer capitalize hover:scale-125 duration-200">Home</li>
                    <li className="px-4 cursor-pointer capitalize hover:scale-125 duration-200">Home</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
