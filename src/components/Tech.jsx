import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles'; // Assuming you have a module for styles

const Tech = () => {
  return (
    <>
      <motion.div >
        <h6 className={styles.sectionHeadText}>Professional Skills</h6>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center '>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');