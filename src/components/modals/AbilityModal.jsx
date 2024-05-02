import { FaExpandArrowsAlt } from "react-icons/fa";
import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled, TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbHexagonLetterM  } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";
import { motion } from "framer-motion"

/**
 * Modal
 */
export default function AbilityModal({ability}) {
    const [showModal, setShowModal] = useState(false);

    const tooltip = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return(
        <>
            <FaExpandArrowsAlt onClick={() => setShowModal(true)} className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"/>
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none cursor-default">
                        <div className="relative w-1/3 z-50 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  text-base bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="p-4 border-b border-solid rounded-t text-black">
                                    <div className="grid grid-cols-4 items-center mb-2"> 
                                        {ability.actions == 1 
                                            ? 
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbHexagon1Filled className="text-4xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 1 action</p>
                                                </motion.span>
                                            </motion.div>
                                            
                                            : ability.actions == 2 ?
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbHexagon2Filled className="text-4xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 2 actions</p>
                                                </motion.span>
                                            </motion.div>
                                            : 
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbHexagonFilled className="text-4xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 0 actions</p>
                                                </motion.span>
                                            </motion.div>
                                        }
                                        <h3 className="text-2xl text-center col-span-2 text-primary font-bold"> {ability.name} </h3>
                                        {/* Close button */}
                                        <button
                                            className="text-red-500 text-4xl justify-self-end"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                    <div className="flex-center gap-1">
                                        {ability.type.map(type => {
                                            return (
                                                <div key={type + ability} className="text-sm bg-primary text-white uppercase rounded-full p-1 w-1/2">
                                                    {type}
                                                </div>
                                            )
                                        })}    
                                    </div>
                                </div>
                                {/* body */}
                                <div className="p-4 flex flex-col text-black border-b border-solid">
                                    {/* Attack Roll */}
                                    {ability.attackroll &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Attack Roll: </span>
                                            {ability.attackroll}
                                        </div>
                                    }

                                    {/* Area */}
                                    {ability.area &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Area: </span>
                                            {ability.area}
                                        </div>
                                    }

                                    {/* Count */}
                                    {ability.count &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary italic">Interrupt {ability.count}</span>
                                        </div>
                                    }

                                    {/* Trigger */}
                                    {ability.trigger &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Trigger: </span>
                                            {ability.trigger}
                                        </div>
                                    }

                                    {/* Effects */}
                                    {ability.effects &&
                                        <div className="mb-2">
                                            {ability.effects.map(effect => {
                                                return (
                                                    <div key={effect + ability}>
                                                        <p className="leading-relaxed">
                                                            <span className="text-primary font-bold">Effect: </span>
                                                            {effect}
                                                        </p>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }
                                    
                                    {/* Extra Effects */}
                                    {ability.extra_effects && 
                                        <div className="mb-2">
                                            {ability.extra_effects.map(extraeffect => {
                                                return (
                                                    <div key={extraeffect}>
                                                        <p className="leading-relaxed">
                                                            <span className="text-primary font-bold">{extraeffect.type}: </span>
                                                            {extraeffect.desc}
                                                        </p>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }
                                    

                                    {/* Add Interrupt */}
                                    {ability.interrupt &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <span className="bg-primary text-white font-bold">{ability.interrupt.name}</span>
                                            <p className="text-primary italic">Interrupt {ability.interrupt.count}</p>
                                            <p><span className="text-primary font-bold">Trigger:</span> {ability.interrupt.trigger}</p>
                                            {ability.interrupt.effects.map(effect => {
                                                return (
                                                    <div key={effect}>
                                                        <p className="text-sm leading-relaxed">
                                                            <span className="text-primary font-bold">Effect: </span>
                                                            {effect}
                                                        </p>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }

                                    {/* Combo */}
                                    {ability.combo_action &&
                                        <div className="text-sm leading-relaxed mb-2 flex flex-col gap-0">
                                            <span className="bg-primary text-white font-bold">{ability.combo_action.name}</span>
                                            <p>{ability.combo_action.desc}</p>
                                              
                                        </div>
                                    }
                                    
                                </div>
                                {/* talents */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">talents</p>
                                    <div className="mb-4 text-black flex-center">
                                        <TbSquareRoundedNumber1Filled className="text-3xl text-primary w-1/6 text-end"/>
                                        <p className="w-5/6 text-start">{ability.talent1}</p>
                                    </div>
                                    <div className="mb-2 text-black flex">
                                        <TbSquareRoundedNumber2Filled className="text-3xl text-primary w-1/6 justify-self-end"/>
                                        <p className="w-5/6 text-start">{ability.talent2}</p>
                                    </div>
                                </div>
                                {/* mastery */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">Mastery</p>
                                    <div className="mb-2 text-black flex">
                                        <TbHexagonLetterM className="text-4xl text-primary w-1/6 justify-self-end"/>
                                        <p className="w-5/6 text-start">{ability.mastery.name}: {ability.mastery.desc}</p>
                                    </div>
                                </div>
                                {/* tags*/}
                                <div className="flex-center p-6 rounded-b text-black">
                                   
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                </>
            ) : null}
        </>
    )
}