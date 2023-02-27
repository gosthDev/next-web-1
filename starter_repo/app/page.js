//UI Design by Pablo Cuevas
/**
 Developed in next.js by Pablo Cuevas, this project is for personal use, 
 any public use of it is prohibited. In the event that this code and/or web 
 page is published by a pernosa or company other than arkcorporation.es, 
 it will be reported to the competent authorities.
 */

import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
