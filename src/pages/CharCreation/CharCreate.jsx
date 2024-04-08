import classes from "../../data/classes/baseClass";
import keywords from "../../data/keywords";

import { GiAxeSword, GiBandit, GiHealingShield, GiCrescentStaff } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

import { motion } from "framer-motion"
import { useState } from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
/**
 * Character Creation Page
 */
export default function CharCreate() {
    // Destrucure classes
    const { stalwart, vagabond, mendicant, wright } = classes;
    const { rules, combatGlossary } = keywords;

    const [classSelected, setClassSelected] = useState();

    const tooltip = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <>
            <div className="absolute top-0 left-4 w-20 h-full bg-primary" />
            <div className="flex h-dvh pt-32 px-8 pb-8">
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
                    <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4 drop-shadow opacity-75">
                        <GiBandit className="text-white text-7xl" />
                        <p className="uppercase text-white font-bold">Vagabond (WIP)</p>
                    </div>
                    <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4 drop-shadow opacity-75">
                        <GiHealingShield className="text-white text-7xl" />
                        <p className="uppercase text-white font-bold">Mendicant (WIP)</p>
                    </div>
                    <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-cyan-300 bg-cyan-500 flex-center gap-4 drop-shadow opacity-75">
                        <GiCrescentStaff className="text-white text-7xl" />
                        <p className="uppercase text-white font-bold">Wright (WIP)</p>
                    </div>
                </div>
                <div className="w-2/3 flex-center">
                    {!classSelected &&
                        <motion.div
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
                    {classSelected &&
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="slick-card w-full h-full bg-card-accent border-red-600 border-l-[36px] mx-16 p-8 font-noto-sans flex flex-col relative">
                            <div className="h-1/5">
                                <p className="text-6xl text-red-600  font-bold uppercase">{stalwart.class}</p>
                                <p className="text-2xl italic font-light">{stalwart.desc}</p>
                                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                            </div>
                            <div className="h-2/5 text-lg font-light flex flex-col gap-4">
                                {parse(stalwart.longdesc)}
                            </div>
                            <div className="h-2/5 flex mt-8">
                                <div className="w-2/5 flex-center flex-col gap-2">
                                    <p className="text-3xl font-bold text-red-600">Class Traits</p>
                                    {stalwart.traits.map(item => {
                                        return (
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="w-2/3 bg-red-600 text-white slick-card p-4 relative cursor-pointer"
                                                key={item.name}>
                                                <p className="font-bold text-2xl flex-center gap-2">{item.icon}{item.name}</p>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-96 bottom-16 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p className="font-bold">{item.name}</p>
                                                    <p>{item.desc}</p>
                                                </motion.span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                                <div className="w-3/5 grid grid-cols-3 grid-rows-2 items-center justify-center">
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[120px] w-[150px] bg-red-600 justify-self-center text-white font-bold flex-center flex-col p-4 relative">
                                        <p>HP</p>
                                        <p className="text-4xl">{stalwart.hp}</p>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-36 -bottom-12 -left-2 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p> VIT = {stalwart.vit}</p>
                                            <p> HP = VIT * 4</p>
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[120px] w-[120px] bg-red-600 justify-self-center text-white font-bold flex-center flex-col p-4 relative">
                                        <p>Damage</p>
                                        <p className="text-4xl">D{stalwart.damagedice}</p>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-60 -bottom-16 -left-16 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p> Keyword: {combatGlossary.class_damage_die.name}</p>
                                            <p className="font-normal"> {combatGlossary.class_damage_die.desc}</p>
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[100px] w-[100px] justify-self-center relative">
                                        <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-red-600 rotate-45" />
                                        <hr className="absolute top-1/2 -left-[120px] w-48 h-px bg-red-600 border-0" />
                                        <div className="h-full justify-self-center text-white font-bold flex-center flex-col p-4">
                                            <p className="z-10">Fray</p>
                                            <p className="text-4xl z-10">{stalwart.fray}</p>
                                        </div>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-60 -bottom-16 -left-16 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p className="font-bold"> Keyword: {combatGlossary.fray_damage.name}</p>
                                            <p> {combatGlossary.fray_damage.desc}</p>
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[140px] w-[130px] bg-red-600 justify-self-center rounded-b-full relative">
                                        <div className="h-full text-white font-bold flex-center flex-col p-4">
                                            <p className="z-10">Defense</p>
                                            <p className="text-4xl z-10">{stalwart.defense}</p>
                                        </div>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-60 -bottom-16 -left-16 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p className="font-bold">{rules.defense.name}</p>
                                            <p> {rules.defense.desc}</p>
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[130px] w-[140px] bg-red-600 justify-self-end rounded-r-full relative">
                                        <div className="h-full text-white font-bold flex-center flex-col p-4">
                                            <p className="z-10">Speed</p>
                                            <p className="text-4xl z-10">{stalwart.speed}</p>
                                        </div>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-60 -bottom-16 -left-16 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p className="font-bold">{rules.movement.name}</p>
                                            <p> {rules.movement.desc}</p>
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="h-[90px] w-[100px] bg-red-600 justify-self-start rounded-r-full relative">
                                        <div className="h-full text-white font-bold flex-center flex-col p-4">
                                            <p className="z-10">Dash</p>
                                            <p className="text-4xl z-10">{stalwart.dash}</p>
                                        </div>
                                        <motion.span
                                            variants={tooltip}
                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                            className="absolute z-10 w-60 -bottom-16 -left-16 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                            <p className="font-bold">{rules.movement.name}</p>
                                            <p> {rules.movement.desc}</p>
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4">
                                <IoIosCloseCircle
                                    onClick={() => setClassSelected("")}
                                    className="text-5xl text-red-600 cursor-pointer" />
                            </div>
                            <motion.div
                                animate={{ x: [-5, 10, -5] }}
                                transition={{
                                    ease: "linear",
                                    duration: 1,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity
                                }}
                                className="absolute top-1/2 -right-12 bg-white rounded-full">
                                <Link 
                                    to={'/charcreate/jobs'}
                                    state={{
                                        classSelected: JSON.parse(JSON.stringify(classSelected)),
                                    }}>
                                        <FaArrowCircleRight
                                            className="text-6xl text-red-600 cursor-pointer" />
                                </Link>

                            </motion.div>
                        </motion.div>
                    }
                </div>
            </div>
        </>

    )
}