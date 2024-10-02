import React from 'react'

const TeamMember = ({ username, rank, profile_picture_url }) => {
  return (
    <div className='flex border border-gray-500 w-2/3 rounded-xl p-2 mr-3'>
        <img className='w-20 h-20 rounded-xl' src={profile_picture_url}></img>
        
        <div className='flex flex-col pl-3 w-1/2'>
            <p className='text-3xl w-1/3'>{username}</p>
            <p className='text-red-400 text-xl'>{rank}</p>
        </div>
        
    </div>
  )
}

export default TeamMember