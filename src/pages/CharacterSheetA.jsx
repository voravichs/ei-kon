import keywords from "../data/keywords";
import DiceModal from '../components/DiceModal';
import CharSheetAbilityModal from "../components/CharSheetAbilityModal"
import LimitBreakModal from "../components/LimitBreakModal";
import OneActionModal from "../components/OneActionModal";
import TwoActionModal from "../components/TwoActionModal";

import Icon from '@mdi/react';
import { mdiDiceD10, mdiDiceD8, mdiDiceD6 } from '@mdi/js';
import { GiOpenWound } from "react-icons/gi";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { TbHexagonFilled } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import { useParams } from 'react-router-dom';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

export default function CharacterSheetA() {
    const { statusConditions, rules } = keywords;

    let { charname } = useParams();
    let charData = JSON.parse(localStorage.getItem(charname));

    const [currentHP, setCurrentHP] = useState(charData.class.hp);
    const [vigor, setVigor] = useState(0);
    const [wounds, setWounds] = useState([]);
    const [showDiceModal, setShowDiceModal] = useState(false);
    const [conditions, setConditions] = useState(() => {
        let array = []
        charData.job.startbattle.conditions.forEach(el => {
            array = [...array, statusConditions[el]]
        });
        return array;
    });
    const [actionsMenuActive, setActionsMenuActive] = useState(false);
    const [moveMenuActive, setMoveMenuActive] = useState(false); 
    
    function handleHP(action) {
        switch (action) {
            case("plus"): 
                if ((currentHP/charData.class.hp) < 1) {
                    setCurrentHP(currentHP + 1)
                }
                break;
            case("minus"):
                if ((currentHP/charData.class.hp) > 0) {
                    setCurrentHP(currentHP - 1)
                }
                break;
            default:
                break;
        }
    }

    function handleVigor(action) {
        switch (action) {
            case("plus"): 
                if ((vigor/(charData.class.hp/4)) < 1) {
                    setVigor(vigor + 1)
                }
                break;
            case("minus"):
                if ((vigor/(charData.class.hp/4)) > 0) {
                    setVigor(vigor - 1)
                }
                break;
            default:
                break;
        }
    }

    function handleWounds(action, remove) {
        switch (action) {
            case("plus"): 
                if ((wounds.length) < 4) {
                    setWounds([...wounds, "wound" + wounds.length])
                }
                break;
            case("minus"):
                if ((wounds.length) > 0) {
                    setWounds(wounds.filter(a => 
                        a !== remove
                    ))
                }
                break;
            default:
                break;
        }
    }

    // function handleConditions(action, condition) {
    //     switch (action) {
    //         case("plus"): 
    //             setConditions([...conditions, statusConditions[condition]])
    //             break;
    //         case("minus"):
    //             setConditions(conditions.filter(a => 
    //                 a.name !== condition
    //             ))
    //             break;
    //         default:
    //             break;
    //     }
    // }

    useEffect(() => {
        const found = conditions.find((el) => el.name === "Bloodied");
        if (currentHP <= charData.class.hp / 2 && !found) {
            setConditions([...conditions, statusConditions["bloodied"]])
        }    
    }, [currentHP]);

    useEffect(() => {
        const found = conditions.find((el) => el.name === "Bloodied");
        if (currentHP > charData.class.hp / 2 && found) {
            setConditions(conditions.filter(a => 
                a.name !== "Bloodied"
            ))
        }    
    }, [currentHP]);

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    const diceHover = {
        initial: { scale: 1},
        animate: { x: [null, 3, -3, 0], y: [null, 3, -3, 0], transition: { duration: 0.25 }},
    }

    const hpBar = {
        width: `${(currentHP/charData.class.hp)*100}%`
    };

    const vigorBar = {
        width: `${(vigor/(charData.class.hp/4))*100}%`
    };

    return (
        <>
            <div className="flex flex-col h-dvh relative">
                {/* Header */}
                <div className='h-72 pt-20 px-8 bg-primary flex items-center gap-12 font-noto-sans text-white relative z-10 border-b-2 border-white'>
                    {/* Image */}
                    <img src={charData.job.img} className="h-96 rounded-b-2xl outline-primary outline outline-offset-0 outline-2 p-2 bg-white self-start"/>
                    {/* Chapter & Level */}
                    <div className='pt-4 flex flex-col gap-1'>
                        <p className='text-4xl'>{charData.name}</p>
                        <p className='text-lg'>Chapter {charData.chapter} | Level {charData.level}</p>
                        <button className="text-white px-4 py-1 bg-secondary text-2xl slick-card border-0">
                            EXP
                        </button>
                    </div>
                    {/* HP */}
                    <div className={`h-44 w-80 justify-self-center text-primary bg-white font-bold flex-center flex-col gap-2 p-4 relative rounded-lg`}>
                        {/* HP Bar */}
                        <div className='flex-center flex-col w-full'>
                            <p className='text-xl mb-1'>HP/<span className='text-secondary'>Vigor</span></p>
                            {/* HP Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-primary h-2.5 rounded-full" style={hpBar}></div>
                            </div>
                            {/* Vigor Bar */}
                            <div className="bg-gray-200 rounded-full h-2.5 w-1/4 dark:bg-gray-700 self-start">
                                <div className="bg-secondary h-2.5 rounded-full justify-self-start" style={vigorBar}></div>
                            </div>
                            {/* HP Controls */}
                            <div className='flex items-center gap-2 text-xl'>
                                <FaMinusCircle className="cursor-pointer" onClick={() => handleHP("minus")}/>
                                <div className="flex gap-1">
                                    {currentHP} 
                                    <p>/ {charData.class.hp - (wounds.length * 10)}</p>
                                </div>
                                <FaPlusCircle className="cursor-pointer" onClick={() => handleHP("plus")}/>
                            </div>
                            {/* Vigor Controls */}
                            <div className='flex items-center gap-2 text-xl text-secondary'>
                                <FaMinusCircle className="cursor-pointer" onClick={() => handleVigor("minus")}/>
                                <p>{vigor} / {(charData.class.hp/4)}</p>
                                <FaPlusCircle className="cursor-pointer" onClick={() => handleVigor("plus")}/>
                            </div>
                            {/* Wounds */}
                            <div className='flex items-center gap-2 text-xl text-secondary'>
                                <div className="text-red-700">Wounds</div>
                                <div className="flex items-center text-red-700 text-2xl gap-1">
                                    {wounds.map(wound =>
                                        <GiOpenWound key={wound}/>
                                    )}
                                    <FaMinusCircle className="text-lg cursor-pointer" onClick={() => handleWounds("minus", "wound" + (wounds.length - 1))}/>
                                    <FaPlusCircle className="text-lg cursor-pointer" onClick={() => handleWounds("plus")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Dice */}
                    <div className={`h-44 w-44 text-primary bg-white justify-self-center font-bold flex-center flex-col p-4 relative rounded-lg`}>
                        <p className='text-xl'>Damage</p>
                        <motion.div 
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className="text-4xl">
                                <motion.div >
                                    <motion.div variants={diceHover}>
                                        {charData.class.damagedice === 6 ? <Icon path={mdiDiceD6} size={3} onClick={() => setShowDiceModal(true)}/>
                                        :charData.class.damagedice === 8 ? <Icon path={mdiDiceD8} size={3} onClick={() => setShowDiceModal(true)}/>
                                        :<Icon path={mdiDiceD10} size={3} onClick={() => setShowDiceModal(true)}/>}
                                    </motion.div>
                                    <DiceModal 
                                        title={"Basic Attack"} 
                                        dice={charData.class.damagedice} 
                                        fray={charData.class.fray}
                                        actions={1}
                                        showModal={showDiceModal}
                                        setShowModal={setShowDiceModal}/>
                                </motion.div>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                    className="absolute z-10 w-32 -bottom-0 left-2 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                    <p className="font-bold text-center"> Click to roll</p>
                                </motion.span>
                        </motion.div>
                    </div>
                    {/* Defense */}
                    <div className={`h-44 w-44 text-primary bg-white justify-self-center font-bold flex-center flex-col p-4 relative rounded-lg`}>
                        <p className='text-xl'>Defense</p>
                        <motion.div 
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className="h-[65px] w-[60px] text-4xl bg-primary text-white rounded-b-full relative p-4">
                                <div className='text-center'>
                                    {charData.class.defense}
                                </div>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                    className="absolute z-10 w-60 -bottom-24 -left-24 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                    <p className="font-bold text-center">{rules.defense.name}</p>
                                    <p className="font-normal"> {rules.defense.desc}</p>
                                </motion.span>
                        </motion.div>
                    </div>
                    {/* Right Side Buttons */}
                        <div className="absolute bottom-12 right-12 h-44 font-bold flex justify-center flex-col gap-2 p-4 rounded-lg">
                        <button className="text-white px-8 py-2 bg-secondary text-2xl slick-card border-0">
                            Character Details
                        </button>
                        <button className="text-white px-8 py-2 bg-secondary text-2xl slick-card border-0">
                            Journal
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className="h-full w-full flex relative z-0">
                    {/* Traits/Conditions */}
                    <div className="bg-primary h-full w-2/5 ml-8 p-8 pb-24">
                        <div className="flex flex-col h-full">
                            {/* Conditions */}
                            <div className="h-2/5 flex items-end flex-col">
                                <div className="w-1/2 h-full relative">
                                    <h1 className="text-white text-center text-3xl font-bold font-noto-sans 
                                    mb-2">Conditions</h1>
                                    <div className="flex flex-col gap-2">
                                        {conditions.map(item => {
                                            return (
                                                <motion.div
                                                    initial="initial"
                                                    animate="initial"
                                                    whileHover="animate"
                                                    className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                                                    key={item.name}
                                                >
                                                    <motion.p className="font-bold text-xl flex-center gap-2">
                                                        <span className="text-3xl">{item.icon}</span>
                                                        {item.name}
                                                    </motion.p>
                                                    <motion.span
                                                        variants={tooltip}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        className="absolute z-10 w-96 top-12 left-0 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                        <div className="font-bold flex gap-2">
                                                            <span className="text-2xl">{item.icon}</span>
                                                            {item.name}
                                                        </div>
                                                        <p>{item.desc}</p>
                                                    </motion.span> 
                                                </motion.div>
                                            );
                                        })} 
                                    </div>   
                                    <div className="absolute top-2 right-2">
                                        <FaPlusCircle className="text-secondary text-2xl bg-white rounded-full cursor-pointer"/>
                                    </div>
                                </div>
                                 
                            </div>
                            {/* Traits */}
                            <div className="h-3/5 flex flex-col">
                                <h1 className="text-white text-center text-3xl font-bold font-noto-sans mb-2">Traits</h1>
                                <div className="grid grid-cols-3 grid-rows-4 gap-2">
                                    {charData.class.traits.map(item =>
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                                            key={item.name}
                                        >
                                            <motion.p className="font-bold text-xl flex-center gap-2">{item.name}</motion.p>
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                                className="absolute z-10 w-96 top-12 left-0 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                <p className="font-bold">{item.name}{item.chapter}</p>
                                                <p>{item.desc}</p>
                                            </motion.span>
                                            
                                        </motion.div>
                                    )} 
                                    {charData.job.traits.map(item => (
                                        item.chapter === 1
                                        ?  <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="bg-secondary text-white slick-card p-4 relative cursor-pointer flex-center"
                                                key={item.name}
                                            >
                                                <motion.p className="font-bold text-xl flex-center gap-2">{item.name}</motion.p>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 w-96 top-12 left-0 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                    <div className="font-bold">{item.name}</div>
                                                    <p>{parse(item.desc)}</p>
                                                </motion.span>
                                            </motion.div>
                                        : null
                                    ))} 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Abilities & Specials*/}
                    <div className="w-3/5 flex flex-col gap-8">
                        {/* Abilities */}
                        <div className="bg-primary h-1/2 mx-8 p-8">
                            <div className="flex flex-col h-full">
                                <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Abilities</h1>
                                <div className="grid grid-cols-3 w-full h-full gap-4 font-noto-sans">
                                    {charData.abilities.map(ability => {
                                        return (
                                            <div key={ability.name} className="border border-b-[24px] bg-white rounded-lg flex-center flex-col text-primary text-xl text-center border-card-accent relative">
                                                <p className="text-2xl font-bold">{ability.name}</p>
                                                <CharSheetAbilityModal ability={ability}/>
                                            </div>
                                        )
                                    })}    
                                </div>
                            </div>
                        </div>
                        {/* Specials */}
                        <div className="flex gap-8 mx-8 h-1/2">
                            <div className="bg-primary w-1/2 p-8 pb-24">
                                <div className="flex flex-col h-full">
                                    <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Special</h1>
                                    
                                </div>
                            </div>
                            <div className="bg-primary w-1/2 p-8 pb-24">
                                <div className="flex flex-col h-full">
                                    <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Limit Break</h1>
                                    <div className="border border-b-[24px] bg-white rounded-lg flex-center flex-col text-primary text-xl text-center border-card-accent relative h-full">
                                        <p className="text-2xl font-bold">{charData.job.limitbreak.name}</p>
                                        <LimitBreakModal limitbreak={charData.job.limitbreak}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                {/* Bottom Bar */}
                <div className="absolute w-full h-16 inset-x-0 bottom-0 flex-center font-noto-sans z-10">
                    <div className="bg-secondary w-full h-full border-t-2 border-white flex-center gap-8 py-1 px-16 relative">
                        {/* Actions */}
                        <button onClick={() => setActionsMenuActive(!actionsMenuActive)} 
                            className="bg-primary text-white font-bold rounded-lg w-36 h-4/5 text-xl">
                            <div className="flex flex-center gap-2">
                                Actions <TbHexagonFilled className="text-3xl"/>
                            </div>
                        </button>
                        {actionsMenuActive ? (
                            <div className="absolute inset-x-0 -top-32 flex-center">
                                <div className="rounded-lg w-60 h-32 p-1 shadow-xl border border-gray-300  bg-card-accent cursor-default">
                                    <div className="w-full h-full flex-center flex-col gap-1 relative">
                                        <div className="text-lg text-black"> ACTIONS </div>
                                        <div className="flex">
                                            <div className="text-6xl text-primary cursor-pointer"> 
                                                <OneActionModal charData={charData} showDiceModal={showDiceModal} setShowDiceModal={setShowDiceModal}/>
                                            </div>
                                            <div className="text-6xl text-primary cursor-pointer"> 
                                                <TwoActionModal charData={charData} showDiceModal={showDiceModal} setShowDiceModal={setShowDiceModal}/>
                                            </div>
                                        </div>  
                                        <IoIosCloseCircle onClick={() => setActionsMenuActive(false)}
                                            className="absolute top-1 right-1 text-red-500 text-2xl justify-self-end cursor-pointer"/>
                                    </div>
                                </div> 
                            </div>
                        ) : null}
                        {/* Movement */}
                        <button onClick={() => setMoveMenuActive(!moveMenuActive)}
                            className="bg-primary text-white font-bold rounded-lg w-44 h-4/5 text-xl">
                            <div className="flex flex-center gap-2">
                                Movement <FaArrowAltCircleRight className="text-3xl"/>
                            </div>
                        </button>
                        {moveMenuActive ? (
                            <div className="absolute inset-x-0 -top-32 flex-center">
                                <div className="rounded-lg w-60 h-32 p-1 shadow-xl border border-gray-300  bg-card-accent cursor-default">
                                    <div className="w-full h-full flex-center flex-col gap-1 relative">
                                        <div className="text-lg mr-2"> MOVE </div>
                                        <div className="flex">
                                            <div className="text-4xl text-primary"> <FaArrowAltCircleRight/> </div>
                                            <div className="text-4xl text-primary"> <FaArrowAltCircleRight/> </div>
                                            <div className="text-4xl text-primary"> <FaArrowAltCircleRight/> </div>
                                            <div className="text-4xl text-primary"> <FaArrowAltCircleRight/> </div>    
                                        </div>
                                        <IoIosCloseCircle onClick={() => setMoveMenuActive(false)}
                                            className="absolute top-1 right-1 text-red-500 text-2xl justify-self-end cursor-pointer"/>
                                    </div>
                                </div> 
                            </div>
                        ) : null}
                        {/* End Turn */}
                        <button className="bg-primary text-white font-bold rounded-lg w-36 h-4/5 text-xl">
                            End Turn
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}