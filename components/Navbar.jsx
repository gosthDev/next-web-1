//UI Design by Pablo Cuevas
/**
 Developed in next.js by Pablo Cuevas, this project is for personal use, 
 any public use of it is prohibited. In the event that this code and/or web 
 page is published by a pernosa or company other than arkcorporation.es, 
 it will be reported to the competent authorities.
 */

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        SPACE
      </h2>
      <a href="" className='font-extrabold text-[15px] leading-[30.24px] text-white'>Login</a>
    </div>
  </motion.nav>
);

export default Navbar;
