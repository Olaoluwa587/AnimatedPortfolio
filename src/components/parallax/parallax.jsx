import React from 'react'
import { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";

const parallax = ({type}) => {

    const ref = useRef

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
         
    const yBg = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);



  return (
    <div className='parallax' 
    style={{background:
        type === "services" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)" 
        : "linear-gradient(180deg, #111132, #505064)"
        }}
    >

        <motion.h1 style={{y:yText}}>{type=== "services" ? "What I Do?" : "Experience"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" 
         style= {{
            // y:yBg,
            backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`
        }}>

        </motion.div>
        <motion.div  className="stars"></motion.div>
        {/* style={{x:yBg}} */}
    </div>
  )
}

export default parallax