import classes from "../../data/classes/baseClass";
import ClassCard from "../../components/ClassCard";

import { GiAxeSword, GiBandit, GiHealingShield, GiCrescentStaff } from "react-icons/gi";

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
/**
 * Character Creation Page
 */
export default function CharCreate() {
    // Destrucure classes
    const { stalwart, vagabond, mendicant, wright } = classes;

    const [classSelected, setClassSelected] = useState();

    return (
        <>
            <div className="absolute top-0 left-4 w-20 h-full bg-primary" />
            <div className="flex h-dvh pt-32 px-8 pb-8">
                {/* Class Selection */}
                <div className="w-1/3 h-full grid grid-flow-row justify-stretch gap-8 font-bona-nova text-5xl">
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => setClassSelected(stalwart)}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-red-400 bg-red-600 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiAxeSword className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Stalwart</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => setClassSelected(vagabond)}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiBandit className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Vagabond</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => setClassSelected(mendicant)}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiHealingShield className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Mendicant</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => setClassSelected(wright)}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-cyan-300 bg-cyan-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiCrescentStaff className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Wright</p>
                    </motion.div>
                </div>
                {/* Selected Class */}
                <div className="w-2/3 flex-center">
                    <AnimatePresence mode="wait" initial={false}>
                        {/* Not Selected */}
                        {!classSelected &&
                            <motion.div
                                key="waiting"
                                animate={{ opacity: [0.25, 0.75, 0.25] }}
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity
                                }}
                                className="h-1/4 font-bona-nova uppercase text-6xl text-center">
                                <p>Select a class</p>
                                <p>to begin</p>
                            </motion.div>
                        }
                        {/* Selected */}
                        {classSelected &&
                            <ClassCard classSelected={classSelected} setClassSelected={setClassSelected}/>
                        }    
                    </AnimatePresence>
                    
                </div>
            </div>
        </>
    )
}