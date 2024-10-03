import React from 'react'

const Heading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen mb-72 '>
        <h1 className='text-6xl text-white font-extrabold'>Coding Soul</h1>
        <p className='pt-5 text-gray-300 text-lg font-bold'>Where Passion Meets Code</p>
        <a href='https://discord.gg/tApBS2QNMj'><button className="btn btn-active btn-link lg:hidden text-xl">Join Now</button></a>

    </div>
  )
}

export default Heading