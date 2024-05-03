import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled, TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbHexagonLetterM  } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { motion } from "framer-motion"
import parse from 'html-react-parser';

/**
 * Modal
 */
export default function AbilityModal({ability, showModal, setShowModal}) {
    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return(
        <>
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none cursor-default">
                        <div className="relative w-3/5 z-50 my-6 mx-auto font-noto-sans text-center">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  text-base bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="p-4 px-12 border-b border-solid rounded-t text-black">
                                    <div className="grid grid-cols-4 items-center"> 
                                        {/* Actions */}
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="relative flex-center"
                                        >
                                            {ability.actions == 1
                                                ? <TbHexagon1Filled className="text-5xl text-primary"/>
                                            : ability.actions == 2
                                                ? <TbHexagon2Filled className="text-5xl text-primary"/>
                                            :
                                                <TbHexagonFilled className="text-5xl text-primary"/>
                                            }
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeIn" }}
                                                className="absolute z-10 tooltip-xsm-t">
                                                
                                                {ability.actions == 1
                                                    ? <p>Requires 1 action</p>
                                                : ability.actions == 2
                                                    ? <p>Requires 2 actions</p>
                                                :
                                                    <p>Free Action/Interrupt</p>
                                                }
                                                
                                            </motion.span>
                                        </motion.div>
                                        {/* Name */}
                                        <h3 className="text-3xl text-center col-span-2 text-primary font-bold"> {ability.name} </h3>
                                        {/* Close button */}
                                        <button
                                            className="text-red-500 text-4xl justify-self-end"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                    <div className="flex-center gap-1 py-2 italic px-36">
                                        {ability.desc}
                                    </div>
                                    <div className="flex-center gap-1">
                                        {ability.type.map(type => {
                                            return (
                                                <div key={type + ability} className="text-base bg-primary text-white uppercase rounded-full p-1 w-1/2">
                                                    {type}
                                                </div>
                                            )
                                        })}    
                                    </div>
                                </div>
                                {/* body */}
                                <div className="p-4 px-12 flex flex-col text-black border-b border-solid">
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
                                        <div className="mb-2 flex flex-col gap-4">
                                            {ability.effects.map((effect, index)=> {
                                                return (
                                                    <div key={ability.name + effect.type + index} className="flex flex-col">
                                                        <div className="leading-relaxed text-start">
                                                            <span className="text-primary font-bold">{effect.type}: </span>
                                                            {parse(effect.desc)}
                                                            {effect.details &&
                                                                <div className="ml-6">
                                                                    {effect.details.map((detail, index) => {
                                                                        return (
                                                                            <p key={ability.name + detail + index}>
                                                                                {parse(detail)}
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }

                                    {/* Objects */}
                                    {ability.object_info &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <div className="text-lg bg-primary text-white font-bold">{ability.object_info.name}</div>
                                            <p className="text-primary italic">Height {ability.object_info.height}</p>
                                            {parse(ability.object_info.desc)}
                                        </div>
                                    }

                                    {/* Add Interrupt */}
                                    {ability.interrupt &&
                                        <div className="leading-relaxed mb-2 flex flex-col gap-0">
                                            <span className="bg-primary text-white font-bold text-lg">{ability.interrupt.name}</span>
                                            <p className="text-primary italic">Interrupt {ability.interrupt.count}</p>
                                            <p><span className="text-primary font-bold">Trigger:</span> {ability.interrupt.trigger}</p>
                                            {ability.interrupt.effects.map((effect, index) => {
                                                return (
                                                    <div key={effect + index}>
                                                        <div className="leading-relaxed text-start text-sm">
                                                            <span className="text-primary font-bold">{effect.type}: </span>
                                                            {parse(effect.desc)}
                                                            {effect.details &&
                                                                <div className="ml-6">
                                                                    {effect.details.map((detail, index) => {
                                                                        return (
                                                                            <p key={ability.name + detail + index}>
                                                                                {parse(detail)}
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}    
                                        </div>
                                    }
                                    
                                </div>
                                {/* talents */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">talents</p>
                                    <div className="mb-4 text-black flex-center">
                                        <TbSquareRoundedNumber1Filled className="text-4xl text-primary w-1/6 text-end"/>
                                        <p className="w-5/6 text-start">{ability.talent1}</p>
                                    </div>
                                    <div className="mb-2 text-black flex">
                                        <TbSquareRoundedNumber2Filled className="text-4xl text-primary w-1/6 justify-self-end"/>
                                        <p className="w-5/6 text-start">{ability.talent2}</p>
                                    </div>
                                </div>
                                {/* mastery */}
                                <div className="p-4 flex flex-col text-black border-b border-solid ">
                                    <p className="font-bold uppercase text-primary mb-2">Mastery: {ability.mastery.name}</p>
                                    <div className="mb-2 text-black flex">
                                        <TbHexagonLetterM className="text-4xl text-primary w-1/6 justify-self-end"/>
                                        <div className="flex flex-col w-full gap-2">
                                            <p className="w-5/6 text-start">{ability.mastery.desc}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* tags*/}
                                <div className="p-4 px-8 flex-center flex-col text-white">
                                    <p className="font-bold uppercase text-primary mb-2">Tags:</p>
                                    <div className="flex-center flex-wrap gap-1 w-full">
                                        {ability.tags.map((item, index) => {
                                            return (
                                                <motion.div 
                                                    initial="initial"
                                                    animate="initial"
                                                    whileHover="animate"
                                                    key={item.name + index}
                                                    className="rounded-xl text-lg bg-primary px-4 py-2 drop-shadow w-1/5 cursor-pointer flex-center"
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

                            {/* Combo Actions */}
                            {ability.combo_action &&
                                <div className="absolute -right-72 top-0 w-64 h-1/2 bg-white rounded-lg">
                                    <div className="leading-relaxed flex flex-col gap-0 h-full">
                                        <span className="bg-primary text-white font-bold text-xl rounded-t-lg p-4 mb-2">{ability.combo_action.name}</span>
                                        <p className="text-black text-base px-4 py-1 mx-auto">{ability.combo_action.desc}</p>
                                        <div className="h-full flex-center flex-col p-4">
                                            {/* Effects */}
                                            {ability.combo_action.effects &&
                                                <div className="mb-2 flex flex-col gap-4">
                                                    {ability.combo_action.effects.map((effect, index)=> {
                                                        return (
                                                            <div key={ability.combo_action.name + effect.type + index} className="flex flex-col">
                                                                <p className="leading-relaxed text-start text-black text-sm">
                                                                    <span className="text-primary font-bold">{effect.type}: </span>
                                                                    {parse(effect.desc)}
                                                                    {effect.details &&
                                                                        <div className="ml-6">
                                                                            {effect.details.map((detail, index) => {
                                                                                return (
                                                                                    <p key={ability.name + detail + index}>
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
                                        </div>
                                    </div>
                                </div>
                            }
                            {ability.mastery.combo_action &&
                                <div className="absolute -right-72 -bottom-4 w-64 h-1/2 bg-white rounded-lg">
                                    <div className="leading-relaxed flex flex-col gap-0 h-full">
                                        <span className="bg-primary text-white font-bold text-xl rounded-t-lg p-4 mb-2">{ability.mastery.combo_action.name}</span>
                                        <p className="text-black text-base px-4 py-1mx-auto">{ability.mastery.combo_action.desc}</p>
                                        <div className="h-full flex-center flex-col p-4">
                                            {/* Effects */}
                                            {ability.mastery.combo_action.effects &&
                                                <div className="mb-2 flex flex-col gap-2">
                                                    {ability.mastery.combo_action.effects.map((effect, index)=> {
                                                        return (
                                                            <div key={ability.mastery.combo_action.name + effect.type + index} className="flex flex-col">
                                                                <p className="leading-relaxed text-start text-black text-sm">
                                                                    <span className="text-primary font-bold">{effect.type}: </span>
                                                                    {parse(effect.desc)}
                                                                    {effect.details &&
                                                                        <div className="ml-6">
                                                                            {effect.details.map((detail, index) => {
                                                                                return (
                                                                                    <p key={ability.name + detail + index}>
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
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* Infuse */}
                            {ability.infuse_effect &&
                                <div className="absolute -right-80 top-0 w-72 h-1/2 bg-white rounded-lg">
                                    <div className="leading-relaxed flex flex-col gap-0 h-full">
                                        <span className="bg-primary text-white font-bold text-xl rounded-t-lg p-4 mb-2">{ability.infuse_effect.text}: {ability.infuse_effect.name}</span>
                                        <p className="text-black text-base px-4 py-1 mx-auto">{ability.infuse_effect.desc}</p>
                                        <div className="h-full flex-center flex-col p-4">
                                            {/* Effects */}
                                            {ability.infuse_effect.effects &&
                                                <div className="mb-2 flex flex-col gap-4">
                                                    {ability.infuse_effect.effects.map((effect, index)=> {
                                                        return (
                                                            <div key={ability.infuse_effect.name + effect.type + index} className="flex flex-col">
                                                                <p className="leading-relaxed text-start text-black text-sm">
                                                                    <span className="text-primary font-bold">{effect.type}: </span>
                                                                    {parse(effect.desc)}
                                                                    {effect.details &&
                                                                        <div className="ml-6">
                                                                            {effect.details.map((detail, index) => {
                                                                                return (
                                                                                    <p key={ability.name + detail + index}>
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
                                        </div>
                                    </div>
                                </div>
                            }

                            {ability.mastery.infuse_effect &&
                                <div className="absolute -right-80 -bottom-4 w-72 h-1/2 bg-white rounded-lg">
                                    <div className="leading-relaxed flex flex-col gap-0 h-full">
                                        <span className="bg-primary text-white font-bold text-xl rounded-t-lg p-4 mb-2">{ability.mastery.infuse_effect.text}: {ability.mastery.infuse_effect.name}</span>
                                        <p className="text-black text-base px-4 py-1 mx-auto">{ability.mastery.infuse_effect.desc} | {ability.mastery.infuse_effect.actions} actions | {ability.mastery.infuse_effect.area}</p>
                                        <div className="h-full flex-center flex-col p-4">
                                            {/* Effects */}
                                            {ability.mastery.infuse_effect.effects &&
                                                <div className="mb-2 flex flex-col gap-0">
                                                    {ability.mastery.infuse_effect.effects.map((effect, index)=> {
                                                        return (
                                                            <div key={ability.mastery.infuse_effect.name + effect.type + index} className="flex flex-col">
                                                                <p className="leading-relaxed text-start text-black text-sm">
                                                                    <span className="text-primary font-bold">{effect.type}: </span>
                                                                    {parse(effect.desc)}
                                                                    {effect.details &&
                                                                        <div className="ml-6">
                                                                            {effect.details.map((detail, index) => {
                                                                                return (
                                                                                    <p key={ability.name + detail + index}>
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
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                </>
            ) : null}
        </>
    )
}