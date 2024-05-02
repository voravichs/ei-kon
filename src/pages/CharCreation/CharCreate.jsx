import ClassCard from "../../components/ClassCard";

import { motion, AnimatePresence } from "framer-motion"
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
/**
 * Character Creation Page
 */
export default function CharCreate() {
    // Contexts
    const {classes, characterContext, setCharacterContext, colorSwap} = useOutletContext();

    // Destrucure classes
    const { stalwart, vagabond, mendicant, wright } = classes;

    // States
    const [selected, setSelected] = useState(false)

    // Define a new character
    function handleSetClass(className) {
        const newChar = {
            "name": " ",
            "class": className,
            "job": " ",
            "abilities": [],
            "level": 0,
            "chapter": 1
        }
        setCharacterContext(newChar.class)
        setSelected(true)
    }

    return (
        <>
            <div className={`absolute top-0 left-4 w-20 h-full ${colorSwap.bg(characterContext)}`} />
            <div className="flex h-dvh pt-32 px-8 pb-24">
                {/* Class Selection */}
                <div className="w-1/3 h-full grid grid-flow-row justify-stretch gap-8 font-bona-nova text-5xl">
                    {/* Stalwart */}
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => {
                            handleSetClass(stalwart)
                        }}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-red-400 bg-red-600 flex-center gap-4 drop-shadow cursor-pointer">
                            <div className="text-white text-7xl">
                                {stalwart.icon}
                            </div>
                            <p className="uppercase text-white font-bold">Stalwart</p>
                    </motion.div>
                    {/* Vagabond */}
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => {
                            handleSetClass(vagabond)
                        }}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <div className="text-white text-7xl">
                                {vagabond.icon}
                            </div>
                            <p className="uppercase text-white font-bold">Vagabond</p>
                    </motion.div>
                    {/* Mendicant */}
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => {
                            handleSetClass(mendicant)
                        }}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <div className="text-white text-7xl">
                                {mendicant.icon}
                            </div>
                            <p className="uppercase text-white font-bold">Mendicant</p>
                    </motion.div>
                    {/* Wright */}
                    <motion.div
                        whileHover={{ x: 40 }}
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30
                        }}
                        onClick={() => {
                            handleSetClass(wright)
                        }}
                        className="slick-card py-4 px-8 z-10 border-b-[24px] border-cyan-300 bg-cyan-500 flex-center gap-4 drop-shadow cursor-pointer">
                            <div className="text-white text-7xl">
                                {wright.icon}
                            </div>
                            <p className="uppercase text-white font-bold">Wright</p>
                    </motion.div>
                </div>
                {/* Selected Class */}
                <div className="w-2/3 flex-center">
                    <AnimatePresence mode="wait" initial={true}>
                        {/* Not Selected */}
                        {!selected &&
                            <motion.div
                                key="waiting"
                                animate={{ opacity: [0.25, 0.75, 0.25] }}
                                transition={{
                                    ease: "linear",
                                    duration: 3,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity
                                }}
                                className="h-1/4 font-bona-nova uppercase text-6xl text-center">
                                <p>Select a class</p>
                                <p>to begin</p>
                            </motion.div>
                        }
                        {/* Selected */}
                        {selected &&
                            <ClassCard selectedClass={characterContext}/>
                        }    
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}