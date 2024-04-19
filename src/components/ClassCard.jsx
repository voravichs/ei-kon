import keywords from "../data/keywords";
import colorSwap from "../styles/classColors";

import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import Icon from '@mdi/react';
import { mdiDiceD10, mdiDiceD8, mdiDiceD6  } from '@mdi/js';

import { motion } from "framer-motion"
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
/**
 * Class card component
 */
export default function ClassCard({classSelected, setClassSelected}) {
    // Destrucure classes
    const { rules, combatGlossary } = keywords;

    const tooltip = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <motion.div
            key={classSelected.class}
            initial={{ opacity: 0.25, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`slick-card w-full h-full bg-card-accent ${colorSwap.border(classSelected)} border-l-[36px] mx-16 p-8 font-noto-sans flex flex-col relative`}>
                {/* Title */}
                <div className="h-1/5">
                    <p className={`text-6xl ${colorSwap.text(classSelected)} font-bold uppercase`}>{classSelected.class}</p>
                    <p className="text-2xl italic font-light">{classSelected.desc}</p>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                {/* Description */}
                <div className="h-2/5 text-lg font-light flex flex-col gap-4">
                    {parse(classSelected.longdesc)}
                </div>

                {/* Traits and Stats */}
                <div className="h-2/5 flex mt-8">
                    <div className="w-2/5 flex-center flex-col gap-2">
                        <p className={`text-4xl font-bold ${colorSwap.text(classSelected)}`}>Class Traits</p>
                        {classSelected.traits.map(item => {
                            return (
                                <motion.div
                                    initial="initial"
                                    animate="initial"
                                    whileHover="animate"
                                    className={`w-2/3 ${colorSwap.bg(classSelected)} text-white slick-card p-4 relative cursor-pointer`}
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
                            className={`h-[120px] w-[150px] ${colorSwap.bg(classSelected)} justify-self-center text-white font-bold flex-center flex-col p-4 relative`}>
                            <p>HP</p>
                            <p className="text-4xl">{classSelected.hp}</p>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-10 w-36 -bottom-12 -left-2 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                <p> VIT = {classSelected.vit}</p>
                                <p> HP = VIT * 4</p>
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[120px] w-[120px] ${colorSwap.bg(classSelected)} justify-self-center text-white font-bold flex-center flex-col p-4 relative`}>
                            <p>Damage</p>
                            <p className="text-4xl">
                                {classSelected.damagedice === 6 ? <Icon path={mdiDiceD6} size={3}/>
                                :classSelected.damagedice === 8 ? <Icon path={mdiDiceD8} size={3}/>
                                :<Icon path={mdiDiceD10} size={3}/>}
                            </p>
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
                            <div className={`absolute top-0 left-0 h-[100px] w-[100px] ${colorSwap.bg(classSelected)} rotate-45`} />
                            <div className="h-full justify-self-center text-white font-bold flex-center flex-col p-4">
                                <p className="z-10">Fray</p>
                                <p className="text-4xl z-10">{classSelected.fray}</p>
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
                            className={`h-[140px] w-[130px] ${colorSwap.bg(classSelected)} justify-self-center rounded-b-full relative`}>
                            <div className="h-full text-white font-bold flex-center flex-col p-4">
                                <p className="z-10">Defense</p>
                                <p className="text-4xl z-10">{classSelected.defense}</p>
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
                            className={`h-[130px] w-[140px] ${colorSwap.bg(classSelected)} justify-self-end rounded-r-full relative`}>
                            <div className="h-full text-white font-bold flex-center flex-col p-4">
                                <p className="z-10">Speed</p>
                                <p className="text-4xl z-10">{classSelected.speed}</p>
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
                            className={`h-[90px] w-[100px] ${colorSwap.bg(classSelected)} justify-self-start rounded-r-full relative`}>
                            <div className="h-full text-white font-bold flex-center flex-col p-4">
                                <p className="z-10">Dash</p>
                                <p className="text-4xl z-10">{classSelected.dash}</p>
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

                {/* Close button */}
                <div className="absolute top-4 right-4">
                    <IoIosCloseCircle
                        onClick={() => setClassSelected("")}
                        className={`text-5xl ${colorSwap.text(classSelected)} cursor-pointer`} />
                </div>
                
                {/* Next Arrow */}
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
                                className={`text-6xl ${colorSwap.text(classSelected)} cursor-pointer`} />
                    </Link>

                </motion.div>
        </motion.div>
    )
}