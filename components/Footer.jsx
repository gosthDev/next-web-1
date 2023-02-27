//UI Design by Pablo Cuevas
/**
 Developed in next.js by Pablo Cuevas, this project is for personal use, 
 any public use of it is prohibited. In the event that this code and/or web 
 page is published by a pernosa or company other than arkcorporation.es, 
 it will be reported to the competent authorities.
 */

'use client';

import { motion } from 'framer-motion';
import { twitter } from '../constants';
import { instagram } from '../constants';
import { facebook } from '../constants';
import { linkedin } from '../constants'

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the CyberSpace
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <a href="">
          <span className="font-normal text-[16px] text-white">
            Upload Your App
          </span>
          </a>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Space
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - <span>2023</span> Space. All rights reserved.
          </p>

          <div className="flex gap-4">
            {
              facebook.map((facebook) => (
                <a href="">
                   <img
                key={facebook.name}
                src={facebook.url}
                alt={facebook.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
                </a>
              ))
            }
            {
              instagram.map((instagram) => (
                <a href="">
                   <img
                key={instagram.name}
                src={instagram.url}
                alt={instagram.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
                </a>
              ))
            }
            {
              twitter.map((twitter) => (
                <a href="">
                   <img
                key={twitter.name}
                src={twitter.url}
                alt={twitter.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
                </a>
              ))
            }
            {
              linkedin.map((linkedin) => (
                <a href="">
                   <img
                key={linkedin.name}
                src={linkedin.url}
                alt={linkedin.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
