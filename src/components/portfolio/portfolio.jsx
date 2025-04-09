import { section } from 'motion/react-client';
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from 'react';

const items = [
    {
        id:1,
        title: "Admin Dashboard",
        img: "https://images.unsplash.com/vector-1738312919533-2bdd58425783?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRtaW5pc3RyYXRpb24lMjBkYXNoYm9hcmQlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",},
    {
        id:2,
        title: "Hotel Website",
        img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",},
    {
        id:3,
        title: "Database Management",
        img: "https://images.pexels.com/photos/17489160/pexels-photo-17489160/free-photo-of-box-server-illuminated-on-blue.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    },
    {
        id:4,
        title: "Weather App",
        img: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    }
];

const Single = ({item}) => {
    const ref = useRef();
        const {scrollYProgress} = useScroll({target:ref,
            // offset: ["start start", "end start"]
        });

        const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
     <section >
        <div className="container" >
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y:y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
     </section>
    )
};


const portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, offset: ["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
    });

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
       ))}
    </div>
  )
}

export default portfolio