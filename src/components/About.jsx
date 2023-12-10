import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, title, icon}) => {
  return(
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px max-w-3x1 leading-[30px]'>
      Hi there, I am Amanda Li! I am a 2A Computer Engineering stuudent currently studying at the University of Waterloo.
      Apart from school and work I love to train Muay thai, playing with my cat and try out different restaurants. 

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index ={index}{...service} />
      ))}

    </div>
    </>
  )
}

export default About