import {motion} from 'framer-motion'
import {styles} from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
            <motion.section 
                variants ={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.25}}
                className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
            >
                
                <span className='hash-span' id={idName}></span> 
                <Component />
            </motion.section>
        )
    }
//span is used for scrolling to the about section when clicked on the scroller

export default SectionWrapper
//wraps the entire rest of the containers about, work etc to ensure that they are centered and not stuck to the left side of screen