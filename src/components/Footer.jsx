import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Footer() {

    const links = [
        {
            id: 1,
            child: (
                <>
                   LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/monty-williams-304943172/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                   Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/MontyWilliams'
        },
        {
            id: 3,
            child: (
                <>
                   Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:MontyWilliams@918dcx.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                   Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
    <div className="flex justify-center bg-black items-center h-64 px-4 ">
        <ul className="flex flex-row  ">
            {links.map((link) => (
                <li key={link.id} className="p-4 group">
                    <a href={link.href} className="flex justify-between items-center w-full text-white group-hover:animate-pulse"
                download={link.download}
                >
                {link.child}
            </a>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default Footer
