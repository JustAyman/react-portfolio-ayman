import { RiReactjsLine } from "react-icons/ri";
import { DiSwift } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse",},
    },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial= {{opacity: 0, y:- 100}} transition={{duration: 1.5}}className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div variants={iconVariants(3)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiSwift className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div variants={iconVariants(3.5)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400" />
            </motion.div>
            <motion.div variants={iconVariants(4)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div variants={iconVariants(4.5)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-red-400" />
            </motion.div>
            <motion.div variants={iconVariants(5)} 
            initial= "initial" animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-purple-400" />
            </motion.div>
        </motion.div>
    </div>
  ) 
}

export default Technologies;
