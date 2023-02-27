//UI Design by Pablo Cuevas
/**
 Developed in next.js by Pablo Cuevas, this project is for personal use, 
 any public use of it is prohibited. In the event that this code and/or web 
 page is published by a pernosa or company other than arkcorporation.es, 
 it will be reported to the competent authorities.
 */

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about Space</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
