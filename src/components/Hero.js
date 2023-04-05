import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

import { heroData } from '../data';
import Header from './Header';

const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
  <section className='min-h-[980px] bg-hero bg-cover bg-right'>
    {/* HEADER */}
    <Header />
    <div className='container mx-auto bg-pink-200/20 min-h-[980px] flex justify-center items-center'>
      {/* ALL TEXT */}
      <motion.div 
        className='text-center flex flex-col items-center'
        variants={staggerContainer(0.3, 1)}
        initial='hidden'
        whileInView={'show'}
      >

          <motion.div 
            className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'
            variants={fadeIn('down', 'tween', 0.2, 1.1)}
          >
            { pretitle }
          </motion.div>

          <motion.h1 
            className='h1 mb-5'
            variants={fadeIn('down', 'tween', 0.3, 1.1)}
          >
            { title }
          </motion.h1>

          <motion.p 
            className='text-white max-w-[540px] mb-8'
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
          >
            { subtitle }
          </motion.p>

          <motion.div
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
          >
            <button className='btn'>
              { btnText }
            </button>
          </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;
