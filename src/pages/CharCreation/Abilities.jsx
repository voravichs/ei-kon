import AbilityModal from "../../components/modals/AbilityModal"

import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

import { useLocation, Link, useOutletContext} from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion"

/**
 * Abilities Page
 */
export default function Abilities() {
    // Contexts
    const {characterContext, jobContext, colorSwap} = useOutletContext();
    const ch1Abilities = jobContext.abilities.ch1Abilities;

    const [selectedAbilities, setSelectedAbilities] = useState([]);
    const [atMax, setAtMax] = useState(false);

    function handleAddAbility(ability) {
        if (selectedAbilities.length <= 1) {
            if (!selectedAbilities.includes(ability)) {
                setSelectedAbilities([...selectedAbilities, ability]);
                if (selectedAbilities.length > 0) {
                    setAtMax(true)
                }
                
            }
        } else {
            setAtMax(true)
        }
    }

    function handleRemoveAbility(ability) {
        setSelectedAbilities(selectedAbilities.filter(a =>
            a.name !== ability.name
        ));
        setAtMax(false)
    }
    
    return (
        <>
            <div className="flex h-dvh pt-32 px-8 pb-24 relative">
                <div className="flex flex-col gap-8 w-full">
                    <div className={`h-1/2 p-8 flex flex-col items-center slick-card bg-card-accent border-l-[48px] ${colorSwap.border(characterContext)}`}>
                        <div className=" font-bona-nova font-bold uppercase text-3xl mb-8">Select your Abilities (2)</div>
                        <div className="grid grid-cols-6 w-full h-full gap-4 font-noto-sans">
                            {ch1Abilities.map(ability => {
                                return (
                                    <div key={ability.name} className={`border border-b-[24px] bg-red-600 rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwap.borderAccent(characterContext)} relative`}>
                                        <p>{ability.name}</p>
                                        <AbilityModal ability={ability}/>
                                        <IoIosAddCircle onClick={() => handleAddAbility(ability)} className="absolute bottom-2 left-2 text-3xl hover:animate-bounce cursor-pointer "/>
                                    </div>
                                )
                            })}    
                        </div>
                        
                    </div>
                    <div className="h-1/2 flex-center">
                        <div className={`h-full w-2/3 slick-card bg-card-accent border-4 ${colorSwap.border(characterContext)} border-opacity-50 p-8 flex flex-col relative`}>
                            <div className=" font-bona-nova font-bold uppercase text-3xl mb-8 flex">
                                <p>Selected Abilities</p>
                            </div>
                            {atMax &&
                                <motion.div 
                                    animate={{ opacity: [0, 1, 0]}}
                                    transition={{
                                        ease: "linear",
                                        duration: 3,
                                        times: [0, 0.5, 1]
                                    }}
                                    className="absolute top-4 right-4 z-50 outline-none focus:outline-none cursor-default w-1/2">
                                        <div className="border-0 rounded-lg shadow-lg relative flex-center h-1/6 bg-primary p-4">
                                            <p className="text-white font-noto-sans text-xl">Cannot add anymore abilities!</p>
                                    </div>
                                </motion.div>
                            }
                            <div className="h-full flex justify-center gap-4">
                                {selectedAbilities.map(ability => {
                                    return (
                                        <div key={ability} className={`w-1/3 border border-b-[24px] bg-red-600 rounded-lg flex-center text-white text-3xl text-center ${colorSwap.borderAccent(characterContext)} relative`}>
                                            <p>{ability.name}</p>
                                            <IoIosCloseCircle 
                                            onClick={() => handleRemoveAbility(ability)} className="absolute top-2 right-2 text-3xl cursor-pointer"/>
                                        </div>    
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {atMax && 
                    <div className="absolute bottom-6 right-6 bg-white rounded-full flex flex-col items-center">
                        <p className="opacity-50 uppercase">finalize</p>
                        <motion.div
                            animate={{ x: [-5, 10, -5] }}
                            transition={{
                                ease: "linear",
                                duration: 1,
                                times: [0, 0.5, 1],
                                repeat: Infinity
                            }}>
                            {/* <Link 
                                to={'/charcreate/finalize'}
                                state={{
                                    job: job,
                                    classSelected: classSelected,
                                    abilities: selectedAbilities
                                }}>
                                    <FaArrowCircleRight className="text-6xl text-red-600 cursor-pointer" />
                            </Link> */}

                        </motion.div>
                    </div>
                }
                
                
            </div>
        </>
    )
}