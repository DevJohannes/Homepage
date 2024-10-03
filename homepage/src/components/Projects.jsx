import React from 'react'
import Project from './Project'


const Projects = () => {
  return (
    <div>
        <div>
          <h1 className='text-4xl font-bold min-[320px]:max-md:mb-5'>🌍 Our Projects</h1>
          <div className="divider w-2/6 min-[320px]:max-sm:hidden"></div>
          <div className='flex min-[320px]:max-sm:flex-col md:flex-wrap'>
            <Project image='home' url='https://discord.gg/tApBS2QNMj' title='Discord Coding Community' description='A place where developers meet, learn, discover and more...'/>
            <Project image='tactic' url='https://github.com/Coding-Soul/project-creator' title='Project Creator' description='Project Creator is a tool, made for linux command lines, where you can easily create new projects!'/>
            <Project image='code' url='/' title='Coding Soul Network' description='A social media platform, that is made for developers.'/>
        
          </div>
          
        </div>
    </div>
  )
}

export default Projects