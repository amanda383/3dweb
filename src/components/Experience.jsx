import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { SectionWrapper } from '../hoc'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'

const Experience = () => {
  return (
    <> 
    <motion.div className='justify-center flex flex-auto -mt-20 '>
    <h6 className={styles.sectionHeadText}>Professional Skills</h6>
  </motion.div></>
   
  )
}

export default SectionWrapper (Experience, "experience")