import { useRef } from 'react'
import './services.scss'
import { motion, useInView} from 'framer-motion'

const variants = {
    intial: {
        x:-500,
        y:100,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    }
}
const services = () => {

    const ref = useRef()

    const inView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="intial" ref={ref} animate={"animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I am skilled at front end and backend <br />software developement</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainter" variants={variants}>

            <div className="title">
                <img src="/code.jpg" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Redifine </motion.b>Website</h1>
            </div>

            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Creating Visuals </motion.b>& Functionality</h1>
                <button>What I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Development</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Web Design</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Android Development</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Maintenance</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default services