import { FaExpandArrowsAlt } from "react-icons/fa";
import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled, TbRosetteNumber1, TbRosetteNumber2, TbRosetteNumber3, TbRosetteNumber4,TbRosetteNumber5 } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";
import { motion } from "framer-motion"

/**
 * Modal
 */
export default function LimitBreakModal({limitbreak}) {
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
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 top-56 outline-none focus:outline-none cursor-default">
                        <div className="relative w-1/2 z-50">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  text-base bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="p-4 border-b border-solid rounded-t text-black">
                                    <div className="grid grid-cols-6 items-center mb-2"> 
                                        {/* Actions */}
                                        {limitbreak.action == 1 ? 
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbHexagon1Filled className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 1 action</p>
                                                </motion.span>
                                            </motion.div>
                                            
                                            : limitbreak.action == 2 ?
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbHexagon2Filled className="text-6xl text-primary"/>
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
                                                <TbHexagonFilled className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 0 actions</p>
                                                </motion.span>
                                            </motion.div>
                                        }
                                        {/* Resolve */}
                                        {limitbreak.resolve == 1 ? 
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbRosetteNumber1 className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 1 resolve</p>
                                                </motion.span>
                                            </motion.div>
                                            
                                            : limitbreak.resolve == 2 ?
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbRosetteNumber2 className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 2 resolve</p>
                                                </motion.span>
                                            </motion.div>
                                            : limitbreak.resolve == 3 ?
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbRosetteNumber3 className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 3 resolve</p>
                                                </motion.span>
                                            </motion.div>
                                            : limitbreak.resolve == 4 ?
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbRosetteNumber4 className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 4 resolve</p>
                                                </motion.span>
                                            </motion.div>
                                            : 
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="relative"
                                            >
                                                <TbRosetteNumber5 className="text-6xl text-primary"/>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-40 bottom-8 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <p>Requires 5 resolve</p>
                                                </motion.span>
                                            </motion.div>
                                        }
                                        <h3 className="text-3xl text-center col-span-2 text-primary font-bold"> {limitbreak.name} </h3>
                                        {/* Close button */}
                                        <button
                                            className="text-red-500 text-4xl justify-self-end col-span-2"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                </div>
                                {/* body */}
                                <div className="p-4 flex flex-col text-black border-b border-solid">
                                    {/* Attack Roll */}
                                    {limitbreak.attackroll &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Attack Roll: </span>
                                            {limitbreak.attackroll}
                                        </div>
                                    }

                                    {/* Area */}
                                    {limitbreak.area &&
                                        <div className="leading-relaxed mb-2">
                                            <span className="text-primary font-bold">Area: </span>
                                            {limitbreak.area}
                                        </div>
                                    }

                                    {/* Effects */}
                                    {limitbreak.effects &&
                                        <div className="mb-2">
                                            {limitbreak.effects.map(effect => {
                                                return (
                                                    <div key={effect + limitbreak}>
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
                                    {limitbreak.extra_effects && 
                                        <div className="mb-2">
                                            {limitbreak.extra_effects.map(extraeffect => {
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
                                    {limitbreak.interrupt &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <span className="bg-primary text-white font-bold">{limitbreak.interrupt.name}</span>
                                            <p className="text-primary italic">Interrupt {limitbreak.interrupt.count}</p>
                                            <p><span className="text-primary font-bold">Trigger:</span> {limitbreak.interrupt.trigger}</p>
                                            {limitbreak.interrupt.effects.map(effect => {
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
                                    
                                </div>
                               
                                {/* Ultimate */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">Ultimate: {limitbreak.ultimate.name}</p>
                                    <div className="mb-2 text-black flex">
                                        <p className="text-center">{limitbreak.ultimate.desc}</p>
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