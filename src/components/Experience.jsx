import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { SectionWrapper } from '../hoc'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Experience = () => {
  return (
    <> 
    <motion.div>
    <h6 className={styles.sectionHeadText}>Experience</h6>
  </motion.div></>
   
  )
}

export default SectionWrapper (Experience, "experience")