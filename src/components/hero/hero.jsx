// import React from 'react'
import "./hero.scss"
import { animate, motion } from "framer-motion"

const textVariants = {
  initial: {
    x:-500, opacity:0
  },
  animate: {
    x:0, opacity:1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
 }
};
const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x:"-220%", 
    transition: {
      repeatType: "mirror",
      duration: 20,
      repeat: Infinity,
    },
 },
};



const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>OluwaJuwon Olofe</motion.h2>
            <motion.h1 variants={textVariants}>Software Developer</motion.h1>
            <motion.div variants={textVariants} className="button">
                <motion.button variants={textVariants} animate={{scale:1}} whileTap={{scale:0.9}} whileHover={{scale:1.1}}>Download CV</motion.button>
                <motion.button variants={textVariants} animate={{scale:1}} whileTap={{scale:0.9}} whileHover={{scale:1.1}}>Contact Me</motion.button>
            </motion.div>
        </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
          Full stack Developer 
        </motion.div>
        <div className="imageContainer">
            <img src="/Juwon.png" alt=""/>
        </div>
    </div>
  )
}

export default Hero