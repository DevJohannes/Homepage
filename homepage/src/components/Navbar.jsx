import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="flex-1">
            <a className="btn btn-ghost text-4xl text-white font-bold min-[320px]:hidden md:block">Coding Soul</a>
        </div>
        <div className="flex-none text-white font-semibold min-[320px]:hidden md:block">
            <ul className="menu menu-horizontal px-1">
            <li><a className='text-lg' href='#features'>Features</a></li>
            <li><a className='text-lg' href='#team'>Team</a></li>
            <li><a className='text-lg' href='#projects'>Our Projects</a></li>
            <li><a className='text-lg' href='https://discord.gg/tApBS2QNMj'>Join now</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar