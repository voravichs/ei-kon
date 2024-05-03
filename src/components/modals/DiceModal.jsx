import Icon from '@mdi/react';
import { mdiDiceD10, mdiDiceD8, mdiDiceD6, mdiDiceD20  } from '@mdi/js';
import { TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";
import { motion } from "framer-motion"

/**
 * Modal
 */
export default function DiceModal({title, dice, fray, actions, showModal, setShowModal, actionsRef, setActions}) {
    const [dice1Result, setDice1Result] = useState();
    const [dice2Result, setDice2Result] = useState();

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    const diceRoll = {
        hover: { x: [null, 3, -3, 0], y: [null, 3, -3, 0], transition: { duration: 0.25 }},
        tap: { rotate: 360, transition: { duration: 0.25 } },
    }

    function rollDice1(size) {
        setDice1Result(Math.floor(Math.random() * size) + 1);
    }

    function rollDice2(size) {
        setDice2Result(Math.floor(Math.random() * size) + 1);
    }

    let actionsIcon;
    switch (actions) {
        case 1:
            actionsIcon = <TbHexagon1Filled className="text-6xl text-primary"/>
            break;
        case 2:
            actionsIcon = <TbHexagon2Filled className="text-6xl text-primary"/>
            break;
        default:
            actionsIcon = <TbHexagonFilled className="text-6xl text-primary"/>
            break;
    }

    function handleClose() {
        setShowModal(false);
        setDice1Result();
        setDice2Result();
    }

    function handleActions() {
        switch (actions) {
            case 1:
                setActions(actionsRef - 1)
                break;
            case 2:
                setActions(actionsRef - 2)
                break;
            default:
                break;
        }
    }

    return(
        <>
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 outline-none focus:outline-none cursor-default font-noto-sans">
                        <div className="relative w-1/3 z-50 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  text-base bg-white outline-none focus:outline-none">
                                {/* header section */}
                                <div className="p-4 border-b border-solid rounded-t text-black relative">
                                    <div className="grid grid-cols-4 items-center mb-2"> 
                                        {/* Action Cost */}
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
                                                <p>Requires 1 action</p>
                                            </motion.span>
                                        </motion.div>
                                        {/* Title */}
                                        <h3 className="text-2xl col-span-2 text-center text-primary font-bold"> Action: {title} </h3>
                                        {/* Close button */}
                                        <button
                                            className="absolute top-2 right-2 text-red-500 text-4xl justify-self-end"
                                            type="button"
                                            onClick={() => handleClose()}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                </div>
                                {/* DiceRoll Section */}
                                {title === "Basic Attack" ?
                                    <>
                                        <div className="p-4 px-8 flex-center flex-col border-b border-solid text-primary">
                                            <h1 className='font-bold' >Roll to Hit</h1>
                                            <div className='grid grid-cols-4 justify-items-center w-full'>
                                                <div></div>
                                                <motion.div
                                                    whileHover="hover"
                                                    whileTap="tap"
                                                    variants={diceRoll}
                                                    onClick={() => rollDice1(20)}
                                                    className='col-span-2'
                                                >
                                                    <Icon path={mdiDiceD20} size={3}/>    
                                                </motion.div>
                                                <div className='flex-center flex-col justify-self-end'>
                                                    {dice1Result && 
                                                        <div className='flex-center flex-col justify-self-end'>
                                                            <p className='text-5xl font-bold'>{dice1Result}</p>                    
                                                        </div>
                                                    }
                                                    <p className='font-normal text-sm'>Result</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 px-8 flex-center flex-col border-b border-solid text-primary">
                                            <h1 className='font-bold'>Roll for Damage</h1>
                                            <div className='grid grid-cols-5 justify-items-center items-center w-full'>
                                                <div></div>
                                                <div className='flex items-center justify-end flex-col h-24'>
                                                    <motion.div
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        variants={diceRoll}
                                                        onClick={() => rollDice2(6)}
                                                        className='h-3/4'
                                                    >
                                                        {dice === 6 ? <Icon path={mdiDiceD6} size={3}/>
                                                        :dice === 8 ? <Icon path={mdiDiceD8} size={3}/>
                                                        :<Icon path={mdiDiceD10} size={3}/>}      
                                                    </motion.div>
                                                    <p>[D]</p>   
                                                </div>
                                                <div className='text-4xl'>+</div> 
                                                <div className='flex items-center justify-end flex-col h-24'>
                                                    <p className='text-5xl h-3/4 p-4 self-center'>{fray}</p>
                                                    <p>Fray</p>   
                                                </div> 
                                                <div className='flex-center flex-col justify-self-end'>
                                                    {dice2Result && 
                                                        <div className='flex-center flex-col justify-self-end'>
                                                            <p className='text-5xl font-bold'>{dice2Result}</p>                    
                                                        </div>
                                                    }
                                                    <p className='font-normal text-sm'>Result</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                : null }
                                {title === "Heavy Attack" ?
                                    <>
                                        <div className="p-4 px-8 flex-center flex-col border-b border-solid text-primary">
                                            <h1>Roll to Hit</h1>
                                            <div className='grid grid-cols-4 justify-items-center w-full'>
                                                <div></div>
                                                <motion.div
                                                    whileHover="hover"
                                                    whileTap="tap"
                                                    variants={diceRoll}
                                                    onClick={() => rollDice1(20)}
                                                    className='col-span-2'
                                                >
                                                    <Icon path={mdiDiceD20} size={3}/>    
                                                </motion.div>
                                                {dice1Result && 
                                                    <div className='flex-center flex-col justify-self-end'>
                                                        <p className='text-4xl'>{dice1Result}</p>
                                                        <p className='font-normal text-sm'>Result</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="p-4 px-8 flex-center flex-col border-b border-solid text-primary">
                                            <h1>Roll to Hit</h1>
                                            <div className='grid grid-cols-4 justify-items-center items-center w-full'>
                                                <motion.div
                                                    whileHover="hover"
                                                    whileTap="tap"
                                                    variants={diceRoll}
                                                    onClick={() => rollDice2(6)}
                                                    className='flex-center'
                                                >
                                                    <div className='flex items-center justify-end flex-col h-24'>
                                                        <motion.div
                                                            className='h-3/4'
                                                        >
                                                            {dice === 6 ? <Icon path={mdiDiceD6} size={3}/>
                                                            :dice === 8 ? <Icon path={mdiDiceD8} size={3}/>
                                                            :<Icon path={mdiDiceD10} size={3}/>}      
                                                        </motion.div>
                                                        <p>[D]</p>   
                                                    </div>
                                                    <div className='flex items-center justify-end flex-col h-24'>
                                                        <motion.div
                                                            className='h-3/4'
                                                        >
                                                            {dice === 6 ? <Icon path={mdiDiceD6} size={3}/>
                                                            :dice === 8 ? <Icon path={mdiDiceD8} size={3}/>
                                                            :<Icon path={mdiDiceD10} size={3}/>}      
                                                        </motion.div>
                                                        <p>[D]</p>   
                                                    </div>
                                                </motion.div>
                                                <div className='text-4xl'>+</div> 
                                                <div className='flex items-center justify-end flex-col h-24'>
                                                    <p className='text-5xl h-3/4 p-4 self-center'>{fray}</p>
                                                    <p>Fray</p>   
                                                </div> 
                                                {dice2Result && 
                                                    <div className='flex-center flex-col justify-self-end'>
                                                        <p className='text-4xl'>{dice2Result + fray}</p>
                                                        <p className='font-normal text-sm'>Result</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </>
                                : null }
                                {/* Result */}
                                <div className="p-4 border-solid rounded-b text-black flex justify-end">
                                    <button className='px-2 py-1 bg-primary rounded-md text-white text-xl' onClick={() => {
                                        handleClose()
                                        handleActions()
                                    }}>Confirm</button>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => handleClose()}></div>
                    </div>
                </>
            ) : null}
        </>
    )
}