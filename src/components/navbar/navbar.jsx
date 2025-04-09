import Sidebar from "../Sidebar/sidebar";
import "./navbar.scss";
import {motion} from 'framer-motion';

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span className="logo" 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}>
                    
                    Oluwajuwon Portfolio</motion.span>
                <div className="socials">
                    <a href=""><img src="./insagram.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
