import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex items-center justify-center'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10`}>
        {/* Left side - Image */}
        <div className='flex justify-center items-center'>
          <img 
            src="../assets/heroprofile.jpeg" // Replace with the actual path to your image
            alt="Amanda"
            className='w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-lg'
          />
        </div>

        {/* Right side - Introduction */}
        <div className='flex flex-col items-start'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Amanda</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Computer Engineering Student <br className='sm:block hidden' /> at University of Waterloo
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;