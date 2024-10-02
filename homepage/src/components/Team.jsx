import React from 'react'

import TeamMember from './TeamMember'

const Team = () => {
  return (
    <div className='flex flex-col pt-16'>
        <div>
            <h1 className='text-4xl font-bold'>🤝 Our Team</h1>
        </div>
        <div>
            <div className="divider w-2/6"></div>
        </div>
        

        <div className='flex'>
          <TeamMember 
          username='JohannesDev'
          rank='Administrator'
          profile_picture_url='https://cdn.discordapp.com/avatars/934103290587807844/1542d028e9f629c55e295f75fff4ad46.png?size=256'
          ></TeamMember>
          <TeamMember 
          username='Sportboot'
          rank='Administrator'
          profile_picture_url='https://cdn.discordapp.com/avatars/652019278203060224/f0400ce017c32b0195ebe6aa195944a1.png?size=256'
          ></TeamMember>
        </div>
        
    </div>
  )
}

export default Team