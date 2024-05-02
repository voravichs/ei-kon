import { FaExpandArrowsAlt } from "react-icons/fa";
import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled, TbRosetteNumber1, TbRosetteNumber2, TbRosetteNumber3, TbRosetteNumber4,TbRosetteNumber5 } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";
import { motion } from "framer-motion"
import parse from 'html-react-parser';

/**
 * Modal
 */
export default function LimitBreakModal({limitbreak}) {
    const [showModal, setShowModal] = useState(false);

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    let actionsIcon;
    let actions;
    switch (limitbreak.actions) {
        case 1:
            actionsIcon = <TbHexagon1Filled className="text-6xl text-primary"/>
            actions = 1;
            break;
        case 2:
            actionsIcon = <TbHexagon2Filled className="text-6xl text-primary"/>
            actions = 2;
            break;
        default:
            actionsIcon = <TbHexagonFilled className="text-6xl text-primary"/>
            actions = "free";
            break;
    }

    let resolveIcon;
    let resolveCost;
    switch (limitbreak.resolve) {
        case 1:
            resolveIcon = <TbRosetteNumber1 className="text-6xl text-primary"/>
            resolveCost = 1;
            break;
        case 2:
            resolveIcon = <TbRosetteNumber2 className="text-6xl text-primary"/>
            resolveCost = 2;
            break;
        case 3:
            resolveIcon = <TbRosetteNumber3 className="text-6xl text-primary"/>
            resolveCost = 3;
            break;
        case 4:
            resolveIcon = <TbRosetteNumber4 className="text-6xl text-primary"/>
            resolveCost = 4;
            break;
        default:
            resolveIcon = <TbRosetteNumber5 className="text-6xl text-primary"/>
            resolveCost = 5;
            break;
    }

    return(
        <>
            <FaExpandArrowsAlt onClick={() => setShowModal(true)} className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"/>
            {/* Modal */}
            {showModal ? (
                <div className="relative">
                    {/* Modal */}
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none cursor-default">
                        <div className="relative w-1/2 z-50">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full text-base bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="pt-4 px-8 rounded-t-lg text-black">
                                    <div className="grid grid-cols-6 items-center mb-2"> 
                                        {/* Actions */}
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="relative flex-center"
                                        >
                                            {actionsIcon}
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeIn" }}
                                                className="absolute z-10 tooltip-xsm-t">
                                                <p>Requires {actions} action(s)</p>
                                            </motion.span>
                                        </motion.div>

                                        {/* Resolve */}
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="relative flex-center"
                                        >
                                            {resolveIcon}
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeIn" }}
                                                className="absolute z-10 tooltip-xsm-t">
                                                <p>Requires {resolveCost} resolve</p>
                                            </motion.span>
                                        </motion.div>

                                        {/* Name */}
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
                                
                                {/* Desc */}
                                <div className="pb-4 px-48 border-b border-solid text-black">
                                    <p className="italic">{parse(limitbreak.desc)}</p>
                                </div>

                                {/* body */}
                                <div className="p-4 px-12 flex flex-col text-black border-b border-solid">
                                    {limitbreak.boon &&
                                        <div className="mb-2 rounded-full bg-primary px-8 py-1 mx-auto">
                                            <span className="text-white font-bold">Boon +{limitbreak.boon} </span>
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
                                        <div className="mb-2 flex flex-col gap-4">
                                            {limitbreak.effects.map((effect, index)=> {
                                                return (
                                                    <div key={limitbreak.name + effect.type + index} className="flex flex-col">
                                                        <p className="leading-relaxed text-start">
                                                            <span className="text-primary font-bold">{effect.type}: </span>
                                                            {parse(effect.desc)}
                                                            {effect.details &&
                                                                <div className="ml-6">
                                                                    {effect.details.map((detail, index) => {
                                                                        return (
                                                                            <p key={limitbreak.name + detail + index}>
                                                                                {parse(detail)}
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                            
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

                                    {/* Infuse */}
                                    {limitbreak.infuse_effect &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <div className="text-lg bg-primary text-white font-bold">{limitbreak.infuse_effect.text}: {limitbreak.infuse_effect.name}</div>
                                            {parse(limitbreak.infuse_effect.desc)}
                                        </div>
                                    }
                                </div>
                               
                                {/* Ultimate */}
                                <div className="p-4 px-12 flex flex-col text-black border-b rounded-b-lg border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">Ultimate: {limitbreak.ultimate.name}</p>
                                    {/* Infuse */}
                                    {limitbreak.ultimate.infuse_effect &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <div className="text-lg bg-primary text-white font-bold">{limitbreak.ultimate.infuse_effect.text}: {limitbreak.ultimate.infuse_effect.name}</div>
                                            {parse(limitbreak.ultimate.infuse_effect.desc)}
                                        </div>
                                    }
                                    <div className="mb-2 text-black flex">
                                        <p className="text-center font-normal">{parse(limitbreak.ultimate.desc)}</p>
                                    </div>
                                </div>

                                {/* tags*/}
                                <div className="p-4 px-8 flex-center flex-col text-white">
                                    <p className="font-bold uppercase text-primary mb-2">Tags:</p>
                                    <div className="flex-center flex-wrap gap-1 w-full">
                                        {limitbreak.tags.map((item, index) => {
                                            return (
                                                <motion.div 
                                                    initial="initial"
                                                    animate="initial"
                                                    whileHover="animate"
                                                    key={item.name + index}
                                                    className="rounded-xl text-xl bg-primary px-4 py-2 drop-shadow w-1/4 cursor-pointer flex-center"
                                                >
                                                    <p>{item.name}</p>
                                                    <motion.span
                                                        variants={tooltip}
                                                        transition={{ duration: 0.1, ease: "easeIn" }}
                                                        className="absolute z-10 tooltip-3xl-t"
                                                    >
                                                        <p className="font-bold">{item.name}</p>
                                                        <p>{item.desc}</p>
                                                    </motion.span>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                    
                </div>
            ) : null}
        </>
    )
}