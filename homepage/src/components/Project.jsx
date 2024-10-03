import React from 'react'

const Project = ({ title, description, image, url }) => {
  return (
    <a href={url} className='md:w-1/3'>
    <div className='flex mb-6 bg-indigo-800 text-white rounded-lg mx-2'>
        <span class="material-symbols-outlined text-7xl p-4">
          {image}
        </span>

        <div className='flex flex-col ml-2 py-4 pr-4'>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='font-semibold'>{description}</p>
        </div>
        
    </div>
    </a>
  )
}

export default Project