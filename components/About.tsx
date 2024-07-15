import React from 'react'
import { Spotlight } from './ui/SpotLight'

const About = () => {
  return (
    <div className='pb-20 pt-36'>
        <Spotlight className='-top-40 left-0 md:left-10 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-40 left-1/2 transform -translate-x-1/2 md:-top-20 h-screen' fill='purple' />
        <Spotlight className='-top-40 left-full transform -translate-x-full md:left-auto md:right-10 md:-top-20 h-screen' fill='blue' />

        
      
    </div>
  )
}

export default About
