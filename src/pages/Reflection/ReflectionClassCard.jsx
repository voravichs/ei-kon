import keywords from "../../data/keywords";
import colorSwap from "../../styles/classColors";

import { FaArrowAltCircleRight } from "react-icons/fa";
import Icon from '@mdi/react';
import { mdiDiceD10, mdiDiceD8, mdiDiceD6  } from '@mdi/js';

import { motion } from "framer-motion"
import parse from 'html-react-parser';
/**
 * Class card component
 */
export default function ReflectionClassCard({selectedClass}) {

    // Destrucure classes
    const { rules, combatGlossary } = keywords;

    // Movement
    let movement = [];
    for (let i = 0; i < selectedClass.speed; i++) {
        movement.push(
            <FaArrowAltCircleRight className={`text-2xl text-white`} key={`${selectedClass.class}movement${i}`} />
        )
    }

    // dash
    let dash = [];
    for (let i = 0; i < selectedClass.dash; i++) {
        dash.push(
            <FaArrowAltCircleRight className={`text-2xl text-white`} key={`${selectedClass.class}movement${i}`} />
        )
    }

    // Styles & Animations
    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <motion.div
            key={selectedClass.class}
            initial={{ opacity: 0.25, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`slick-card w-full h-full bg-card-accent ${colorSwap.border(selectedClass)} border-l-[36px] ml-12 mr-8 p-8 font-noto-sans flex flex-col relative`}
        >
                {/* Title */}
                <div className="h-1/5">
                    <p className={`text-5xl ${colorSwap.text(selectedClass)} font-bold uppercase`}>{selectedClass.class}</p>
                    <p className="text-2xl italic font-light">{selectedClass.desc}</p>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                {/* Description */}
                <div className="h-2/5 text-base 2xl:text-lg font-light flex flex-col gap-4">
                    {parse(selectedClass.longdesc)}
                </div>

                {/* Traits and Stats */}
                <div className="h-2/5 flex mt-8">
                    {/* Traits */}
                    <div className="w-2/5 flex-center flex-col gap-2">
                        <p className={`text-3xl font-bold ${colorSwap.text(selectedClass)}`}>Class Traits</p>
                        {selectedClass.traits.map(item => {
                            return (
                                <motion.div
                                    initial="initial"
                                    animate="initial"
                                    whileHover="animate"
                                    className={`w-2/3 ${colorSwap.bg(selectedClass)} text-white slick-card px-4 py-2 relative cursor-pointer flex-center`}
                                    key={item.name}
                                >
                                    <p className="font-bold text-xl flex-center gap-2">{item.icon}{item.name}</p>
                                    <motion.span
                                        variants={tooltip}
                                        transition={{ duration: 0.1, ease: "easeIn" }}
                                        className="absolute z-20 tooltip-xl-t"
                                    >
                                        <p className="font-bold">{item.name}</p>
                                        <p>{item.desc}</p>
                                    </motion.span>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="w-3/5 grid grid-cols-3 grid-rows-2 gap-y-4 items-center justify-center">
                        {/* HP */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[120px] w-[120px] ${colorSwap.bg(selectedClass)} rounded-lg justify-self-end text-white font-bold flex-center flex-col p-4 relative`}
                        >
                            <p>HP</p>
                            <p className="text-4xl">{selectedClass.hp}</p>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-sm-b"
                            >
                                <p> VIT = {selectedClass.vit}</p>
                                <p> HP = VIT * 4</p>
                            </motion.span>
                        </motion.div>
                        {/* Damage */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[120px] w-[120px] ${colorSwap.bg(selectedClass)} rounded-lg rounded-r-2xl justify-self-end text-white font-bold flex-center flex-col p-4 relative border-r`}
                        >
                            <p>Damage</p>
                            <p className="text-4xl">
                                {selectedClass.damagedice === 6 ? <Icon path={mdiDiceD6} size={3}/>
                                :selectedClass.damagedice === 8 ? <Icon path={mdiDiceD8} size={3}/>
                                :<Icon path={mdiDiceD10} size={3}/>}
                            </p>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-sm-b">
                                <p> Keyword: {combatGlossary.class_damage_die.name}</p>
                                <p className="font-normal"> {combatGlossary.class_damage_die.desc}</p>
                            </motion.span>
                        </motion.div>
                        {/* Fray */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[90px] w-[120px] ${colorSwap.bg(selectedClass)} justify-self-start rounded-r-full relative flex-center`}
                        >
                            <div className="h-full justify-self-center text-white font-bold flex-center flex-col p-4">
                                <p className="z-10">Fray</p>
                                <p className="text-3xl z-10">+{selectedClass.fray}</p>
                            </div>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-sm-b">
                                <p className="font-bold"> Keyword: {combatGlossary.fray_damage.name}</p>
                                <p> {combatGlossary.fray_damage.desc}</p>
                            </motion.span>
                        </motion.div>
                        {/* Defense */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[120px] w-[120px] ${colorSwap.bg(selectedClass)} rounded-lg rounded-b-full justify-self-end text-white font-bold flex-center flex-col p-4 relative `}
                        >
                            <p>Defense</p>
                            <p className="text-4xl">{selectedClass.defense}</p>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-lg-t"
                            >
                                <p className="font-bold"> Keyword: {rules.defense.name}</p>
                                <p className="font-normal"> {rules.defense.desc}</p>
                            </motion.span>
                        </motion.div>
                        {/* Speed */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[120px] w-[120px] ${colorSwap.bg(selectedClass)} rounded-lg rounded-r-2xl justify-self-end text-white font-bold flex-center flex-col p-4 relative border-r`}
                        >
                            <div className="h-full text-white font-bold flex-center flex-col gap-1 p-4">
                                <p className="text-xl z-10">Speed</p>
                                <div className="flex">
                                    {movement.map(item => 
                                        item
                                    )}
                                </div>
                            </div>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-lg-t">
                                <p className="font-bold">{rules.movement.name}</p>
                                <p className="font-normal"> {rules.movement.desc}</p>
                            </motion.span>
                        </motion.div>
                        {/* Dash */}
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className={`h-[90px] w-[120px] ${colorSwap.bg(selectedClass)} justify-self-start rounded-r-full flex-center relative`}>
                            <div className="h-full text-white font-bold flex-center flex-col p-4">
                                <p className="text-xl z-10">Dash</p>
                                <div className="flex">
                                    {dash.map(item => 
                                        item
                                    )}
                                </div>
                            </div>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-20 tooltip-lg-t">
                                <p className="font-bold">{rules.movement.name}</p>
                                <p> {rules.movement.desc}</p>
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
        </motion.div>
    )
}