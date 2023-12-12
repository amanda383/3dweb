import React from 'react'
import { github, linkedin } from '../assets'
import { SectionWrapper } from '../hoc'

const Feedbacks = () => {
  return (
    <div className='absolute inset-0 flex justify-center gap-5'>
    <a href="https://github.com/amanda383" ><img src={github} alt="" className='h-10 w-10' /></a>
    <a href="https://www.linkedin.com/in/amandali6688/"><img src={linkedin} alt="" className='h-10' /></a>
    </div>
    
  )
}

export default SectionWrapper(Feedbacks, '')