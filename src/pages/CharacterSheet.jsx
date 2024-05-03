import keywords from "../data/keywords";
import DiceModal from '../components/modals/DiceModal';
import AbilityModal from "../components/modals/AbilityModal";
import LimitBreakModal from "../components/modals/LimitBreakModal";

import Icon from '@mdi/react';
import { mdiDiceD10, mdiDiceD8, mdiDiceD6 } from '@mdi/js';
import { GiOpenWound } from "react-icons/gi";
import { FaPlusCircle, FaMinusCircle, FaRegCircle, FaArrowAltCircleRight, FaExpandArrowsAlt  } from "react-icons/fa";
import { TbHexagon, TbHexagonFilled, TbHexagon1Filled, TbHexagon2Filled} from "react-icons/tb";

import { useParams } from 'react-router-dom';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { IoIosCloseCircle } from "react-icons/io";

export default function CharacterSheet() {
    const { statusConditions, rules } = keywords;

    let { charname } = useParams();
    let charData = JSON.parse(localStorage.getItem(charname));

    // Items from local storage
    const [currentHP, setCurrentHP] = useState(charData.current.hp);
    const [vigor, setVigor] = useState(charData.current.vigor);
    const [wounds, setWounds] = useState(charData.current.wounds);
    const [actions, setActions] = useState(charData.current.actions);
    const [movement, setMovement] = useState(charData.current.move);
    const [dash, setDash] = useState(charData.current.dash);
    const [dashedThisTurn, setDashedThisTurn] = useState(charData.current.dashedThisTurn)

    // Effects
    const [actionIcons, setActionIcons] = useState([])
    const [moveIcons, setMoveIcons] = useState([])
    const [dashIcons, setDashIcons] = useState([])
    const [dashActive, setDashActive] = useState(false)
    const [actionPing, setActionPing] = useState(true); 
    const [movePing, setMovePing] = useState(true); 
    
    // Modals
    const [showBasicAttack, setShowBasicAttack] = useState(false);
    const [showHeavyAttack, setShowHeavyAttack] = useState(false);
    const [showAbilityModal, setShowAbilityModal] = useState(false);
    const [showLimitBreak, setShowLimitBreak] = useState(false);
    const [currAbilityModal, setCurrAbilityModal] = useState();
    const [actionsActive, setActionsActive] = useState(false)
    
    const [conditions, setConditions] = useState(() => {
        let array = []
        charData.job.startbattle.conditions.forEach(el => {
            array = [...array, statusConditions[el]]
        });
        return array;
    });

    function handleHP(action) {
        let newHP = 0;
        switch (action) {
            case ("plus"):
                if ((currentHP / charData.class.hp) < 1) {
                    setCurrentHP(currentHP + 1)
                    newHP = charData.current.hp + 1;
                }
                break;
            case ("minus"):
                if ((currentHP / charData.class.hp) > 0) {
                    setCurrentHP(currentHP - 1)
                    newHP = charData.current.hp - 1;
                }
                break;
            default:
                break;
        }
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": newHP,
                "vigor": charData.current.vigor,
                "actions": charData.current.actions,
                "move": charData.current.move,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }

    function handleVigor(action) {
        let newVigor = 0;
        switch (action) {
            case ("plus"):
                if ((vigor / (charData.class.hp / 4)) < 1) {
                    setVigor(vigor + 1)
                    newVigor = charData.current.vigor + 1;
                }
                break;
            case ("minus"):
                if ((vigor / (charData.class.hp / 4)) > 0) {
                    setVigor(vigor - 1)
                    newVigor = charData.current.vigor - 1;
                }
                break;
            default:
                break;
        }
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": newVigor,
                "actions": charData.current.actions,
                "move": charData.current.move,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }

    function handleWounds(action, remove) {
        let newWounds = 0;
        switch (action) {
            case ("plus"):
                if ((wounds.length) < 4) {
                    setWounds([...wounds, "wound" + wounds.length])
                    newWounds = [...charData.current.wounds, "wound" + wounds.length]
                }
                break;
            case ("minus"):
                if ((wounds.length) > 0) {
                    setWounds(wounds.filter(a =>
                        a !== remove
                    ))
                    newWounds = charData.current.wounds.filter(a =>
                        a !== remove
                    )
                }
                break;
            default:
                break;
        }
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": charData.current.vigor,
                "actions": charData.current.actions,
                "move": charData.current.move,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": newWounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }

    function handleDash() {
        if (actions > 0 && !dashedThisTurn) {
            handleAction(1);
            setDashActive(true);
            setDash(2);
            setMovePing(true);
            setDashedThisTurn(true)
            // update local storage
            const updatedCharData = {
                "name": charData.name,
                "kin": charData.kin,
                "culture": charData.culture,
                "class": charData.class,
                "job": charData.job,
                "abilities": charData.abilities,
                "level": 0,
                "chapter": 1,
                "current": {
                    "hp": charData.current.hp,
                    "vigor": charData.current.vigor,
                    "actions": charData.current.actions - 1,
                    "move": charData.current.move,
                    "dash": charData.current.dash,
                    "dashedThisTurn": !charData.current.dashedThisTurn,
                    "wounds": charData.current.wounds,
                }
            }
            localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
        }
        
    }

    function handleAction(num) {
        switch (num) {
            case 1:
                setActions(actions - 1)
                break;
            case 2:
                setActions(actions - 2)
                break;
        
            default:
                break;
        }
    }

    function handleEndTurn() {
        setActions(2)
        setMovement(charData.class.speed)
        setDash(0)
        setDashActive(false)
        setDashedThisTurn(false)
        setActionPing(true)
        setMovePing(true)
        // Update Local Storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": charData.current.vigor,
                "actions": 2,
                "move": charData.class.speed,
                "dash": 0,
                "dashedThisTurn": false,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }

    // Add Bloodied
    useEffect(() => {
        const found = conditions.find((el) => el.name === "Bloodied");
        if (currentHP <= (charData.class.hp - (wounds.length * charData.class.hp/4)) / 2 && !found) {
            setConditions([...conditions, statusConditions["bloodied"]])
        }
    }, [currentHP, wounds]);

    // Remove Bloodied
    useEffect(() => {
        const found = conditions.find((el) => el.name === "Bloodied");
        if (currentHP > (charData.class.hp - (wounds.length * charData.class.hp/4)) / 2 && found) {
            setConditions(conditions.filter(a =>
                a.name !== "Bloodied"
            ))
        }
    }, [currentHP, wounds]);

    // Wounds HP Adjustment
    useEffect(() => {
        let newHP = 0;
        if ((charData.class.hp - (wounds.length * charData.class.hp/4)) < currentHP) {
            setCurrentHP(charData.class.hp - (wounds.length * charData.class.hp/4))
            newHP = charData.class.hp - (wounds.length * charData.class.hp/4);
        } else {
            newHP = currentHP;
        }
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": newHP,
                "vigor": charData.current.vigor,
                "actions": charData.current.actions,
                "move": charData.current.move,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }, [wounds]);

    // Actions
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < actions; i++) {
            arr.push(
                <TbHexagonFilled className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}actions${i}`} onClick={() => setActionsActive(true)}/>
            )
        }
        for (let i = actions; i < 2; i++) {
            arr.push(
                <TbHexagon className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}actions${i}`}/>
            )
        }
        setActionIcons(arr)
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": charData.current.vigor,
                "actions": actions,
                "move": charData.current.move,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }, [actions]);

    // Actions Ping
    useEffect(() => {
        if (actions == 0) {
            setActionPing(false);
        }
    }, [actions]);

    // Movement
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < movement; i++) {
            arr.push(
                <FaArrowAltCircleRight className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}movement${i}`} onClick={() => setMovement(i)}/>
            )
        }
        for (let i = movement; i < 4; i++) {
            arr.push(
                <FaRegCircle className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}movement${i}`}/>
            )
        }
        setMoveIcons(arr)
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": charData.current.vigor,
                "actions": charData.current.actions,
                "move": movement,
                "dash": charData.current.dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }, [movement]);

    // Movement Ping
    useEffect(() => {
        if (movement == 0 && dash == 0) {
            setMovePing(false);
        }
    }, [movement, dash]);

    // Dash
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < dash; i++) {
            arr.push(
                <FaArrowAltCircleRight className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}dash${i}`} onClick={() => setDash(i)}/>
            )
        }
        for (let i = dash; i < charData.class.dash; i++) {
            arr.push(
                <FaRegCircle className={`text-5xl text-primary cursor-pointer`} key={`${charData.class.class}dash${i}`}/>
            )
        }
        setDashIcons(arr)
        // update local storage
        const updatedCharData = {
            "name": charData.name,
            "kin": charData.kin,
            "culture": charData.culture,
            "class": charData.class,
            "job": charData.job,
            "abilities": charData.abilities,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": charData.current.hp,
                "vigor": charData.current.vigor,
                "actions": charData.current.actions,
                "move": charData.current.move,
                "dash": dash,
                "dashedThisTurn": charData.current.dashedThisTurn,
                "wounds": charData.current.wounds,
            }
        }
        localStorage.setItem(charData.name, JSON.stringify(updatedCharData));
    }, [dash]);

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    const diceHover = {
        initial: { scale: 1 },
        animate: { x: [null, 3, -3, 0], y: [null, 3, -3, 0], transition: { duration: 0.25 } },
    }

    const hpBar = {
        width: `${(currentHP / (charData.class.hp - (wounds.length * charData.class.hp/4))) * 100}%`
    };

    const vigorBar = {
        width: `${(vigor / (charData.class.hp / 4)) * 100}%`
    };

    return (
        <>
            {/* Content */}
            <div className="flex flex-col h-dvh relative">
                {/* Header */}
                <div className='h-72 pt-20 px-8 bg-primary flex items-center gap-20 font-noto-sans text-white relative z-10 border-b-2 border-white'>
                    {/* Image */}
                    <img src={charData.job.img} className="h-80 rounded-b-2xl outline-primary outline outline-offset-0 outline-2 p-2 bg-white self-start" />
                    {/* Chapter & Level */}
                    <div className='pt-4 flex flex-col gap-1'>
                        <p className='text-4xl'>{charData.name}</p>
                        <p className='text-lg 2xl:text-xl'> {charData.kin} | {charData.culture}</p>
                        <p className='text-lg 2xl:text-xl first-letter:uppercase'>{charData.class.class} | {charData.job.jobName} </p>
                        <p className='text-lg 2xl:text-xl'>Chapter {charData.chapter} | Level {charData.level}</p>
                        
                        {/* <button className="text-white px-4 py-1 bg-secondary text-2xl slick-card border-0">
                            EXP
                        </button> */}
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
                                <FaMinusCircle className="cursor-pointer" onClick={() => handleHP("minus")} />
                                <div className="flex gap-1">
                                    {currentHP}
                                    <p>/ {charData.class.hp - (wounds.length * charData.class.hp/4)}</p>
                                </div>
                                <FaPlusCircle className="cursor-pointer" onClick={() => handleHP("plus")} />
                            </div>
                            {/* Vigor Controls */}
                            <div className='flex items-center gap-2 text-xl text-secondary'>
                                <FaMinusCircle className="cursor-pointer" onClick={() => handleVigor("minus")} />
                                <p>{vigor} / {(charData.class.hp / 4)}</p>
                                <FaPlusCircle className="cursor-pointer" onClick={() => handleVigor("plus")} />
                            </div>
                            {/* Wounds */}
                            <div className='flex items-center gap-2 text-xl text-secondary'>
                                <div className="text-red-700">Wounds</div>
                                <div className="flex items-center text-red-700 text-2xl gap-1">
                                    {wounds.map(wound =>
                                        <GiOpenWound key={wound} />
                                    )}
                                    <FaMinusCircle className="text-lg cursor-pointer" onClick={() => handleWounds("minus", "wound" + (wounds.length - 1))} />
                                    <FaPlusCircle className="text-lg cursor-pointer" onClick={() => handleWounds("plus")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Dice */}
                    <div className={`h-32 w-32 2xl:h-44 2xl:w-44 text-primary bg-white justify-self-center font-bold flex-center flex-col p-4 relative rounded-lg`}>
                        <p className='text-xl'>Damage</p>
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className="text-4xl">
                            <motion.div className="flex-center cursor-pointer">
                                <motion.div variants={diceHover}>
                                    {charData.class.damagedice === 6 ? <Icon path={mdiDiceD6} size={3} onClick={() => setShowBasicAttack(true)} />
                                        : charData.class.damagedice === 8 ? <Icon path={mdiDiceD8} size={3} onClick={() => setShowBasicAttack(true)} />
                                        : <Icon path={mdiDiceD10} size={3} onClick={() => setShowBasicAttack(true)} 
                                    />}
                                </motion.div>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                    className="absolute z-10 tooltip-sm-dice">
                                    <p className="font-bold text-center flex-center gap-1"> <TbHexagon1Filled className="text-xl"/> Basic Attack</p>
                                </motion.span>
                            </motion.div>

                        </motion.div>
                    </div>
                    {/* Defense */}
                    <div className={`h-32 w-32 2xl:h-44 2xl:w-44 text-primary bg-white justify-self-center font-bold flex-center flex-col p-4 relative rounded-lg`}>
                        <p className='text-xl'>Defense</p>
                        <motion.div
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                            className="h-[65px] w-[60px] text-4xl bg-primary text-white rounded-b-full relative p-4 flex-center">
                            <div className='text-center'>
                                {charData.class.defense}
                            </div>
                            <motion.span
                                variants={tooltip}
                                transition={{ duration: 0.1, ease: "easeIn" }}
                                className="absolute z-10 tooltip-lg-b"
                            >
                                <p className="font-bold text-center">{rules.defense.name}</p>
                                <p className="font-normal"> {rules.defense.desc}</p>
                            </motion.span>
                        </motion.div>
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
                                                        <span className="text-xl 2xl:text-3xl">{item.icon}</span>
                                                        {item.name}
                                                    </motion.p>
                                                    <motion.span
                                                        variants={tooltip}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        className="absolute z-50 tooltip-xl-b">
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
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="relative cursor-pointer flex-center"
                                        >
                                            <FaPlusCircle className="text-secondary text-2xl bg-white rounded-full cursor-pointer" />
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                                className="absolute z-50 tooltip-xsm-t"
                                            >
                                                <p>WIP</p>
                                            </motion.span>
                                        </motion.div>
                                        
                                    </div>
                                </div>

                            </div>
                            {/* Traits */}
                            <div className="h-3/5 flex flex-col">
                                <h1 className="text-white text-center text-3xl font-bold font-noto-sans mb-2">Traits</h1>
                                <div className="grid grid-cols-4 grid-rows-3 gap-2">
                                    {charData.class.traits.map(item =>
                                        <motion.div
                                            initial="initial"
                                            animate="initial"
                                            whileHover="animate"
                                            className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                                            key={item.name}
                                        >
                                            <motion.p className="font-bold text-lg flex-center gap-2">{item.name}</motion.p>
                                            <motion.span
                                                variants={tooltip}
                                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                                className="absolute z-10 tooltip-2xl-t left-0">
                                                <p className="font-bold">{item.name}{item.chapter}</p>
                                                <p>{item.desc}</p>
                                            </motion.span>

                                        </motion.div>
                                    )}
                                    {charData.job.traits.map(item => (
                                        item.chapter === 1
                                            ? <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className="bg-secondary text-white slick-card p-4 relative cursor-pointer flex-center"
                                                key={item.name}
                                            >
                                                <motion.p className="font-bold text-lg flex-center gap-2">{item.name}</motion.p>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 tooltip-2xl-t left-0">
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
                    <div className="w-3/5 flex flex-col gap-4">
                        {/* Abilities */}
                        <div className="bg-primary h-2/5 ml-4 mr-8 p-8">
                            <div className="flex flex-col h-full">
                                <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Abilities</h1>
                                <div className="grid grid-cols-3 w-full h-full gap-4 font-noto-sans">
                                    {charData.abilities.map(ability => {
                                        return (
                                            <div key={ability.name} className="border border-b-[24px] bg-white rounded-lg flex-center flex-col text-primary text-xl text-center border-card-accent relative">
                                                <p className="text-2xl font-bold">{ability.name}</p>
                                                <FaExpandArrowsAlt 
                                                    onClick={() => {
                                                        setCurrAbilityModal(ability)
                                                        setShowAbilityModal(true)
                                                    }} 
                                                    className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                                />
                                                <div className="absolute bottom-0 left-2">
                                                    {ability.actions > actions
                                                        ?
                                                        <>
                                                            {ability.actions == 1
                                                                ? <TbHexagon1Filled className="text-4xl 2xl:text-5xl text-primary opacity-50"/>
                                                            : ability.actions == 2
                                                                ? <TbHexagon2Filled className="text-4xl 2xl:text-5xl text-primary opacity-50"/>
                                                                : <TbHexagonFilled className="text-4xl 2xl:text-5xl text-primary opacity-50"/>
                                                            }
                                                        </>
                                                        :
                                                        <>
                                                            
                                                            <motion.div
                                                                initial="initial"
                                                                animate="initial"
                                                                whileHover="animate"
                                                                className="relative cursor-pointer flex-center"
                                                            >
                                                                {ability.actions == 1
                                                                    ? <TbHexagon1Filled className="text-4xl 2xl:text-5xl text-primary" onClick={() => handleAction(1)}/>
                                                                : ability.actions == 2
                                                                    ? <TbHexagon2Filled className="text-4xl 2xl:text-5xl text-primary" onClick={() => handleAction(2)}/>
                                                                    : <TbHexagonFilled className="text-4xl 2xl:text-5xl text-primary "/>
                                                                }
                                                                <motion.span
                                                                    variants={tooltip}
                                                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                                                    className="absolute z-10 tooltip-sm-t">
                                                                    <p>Perform <b>{ability.name}</b> with</p>
                                                                    <p className="font-bold">{ability.actions} action(s)</p>
                                                                </motion.span>

                                                            </motion.div>
                                                        </>
                                                    }
                                                    
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Specials */}
                        <div className="flex gap-4 ml-4 mr-8 h-3/5">
                            <div className="bg-primary w-1/2 p-8 pb-24">
                                <div className="flex flex-col h-full">
                                    <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Special</h1>

                                </div>
                            </div>
                            <div className="bg-primary w-1/2 p-8 pb-28">
                                <div className="flex flex-col h-full">
                                    <h1 className="text-white text-3xl font-bold font-noto-sans mb-2">Limit Break</h1>
                                    <div className="border border-b-[24px] bg-white rounded-lg flex-center flex-col text-primary text-xl text-center border-card-accent relative h-full">
                                        <p className="text-2xl font-bold">{charData.job.limitbreak.name}</p>
                                        <FaExpandArrowsAlt 
                                            onClick={() => {
                                                setShowLimitBreak(true)
                                            }} 
                                            className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Bottom Bar */}
                <div className="absolute w-full h-20 inset-x-0 bottom-0 flex-center font-noto-sans z-10">
                    <div className="bg-secondary w-full h-full border-t-2 border-white flex-center gap-8 py-1 px-8 relative group">
                        {/* Actions */}
                        <div className="bg-white text-primary font-bold rounded-lg px-8 py-1 flex-center gap-2 relative">                           
                            <div className="text-2xl">Actions</div> 
                            {actionIcons.map(item => 
                                item
                            )}
                            {/* Ping */}
                            {actionPing &&
                                <div className="absolute top-1 right-1">
                                    <span className="relative flex-center h-5 w-5">
                                        <span className="animate-ping inline-flex absolute h-full w-full rounded-full bg-secondary"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                                    </span>
                                </div>
                            }
                            {actionsActive &&
                                <div className="absolute -top-80 bg-card-accent rounded-lg w-96 h-72 drop-shadow-lg text-2xl ">
                                    <div className="w-full h-full flex divide-x relative">
                                        {actions < 1
                                            ?
                                            <div className="w-1/2 p-4 flex flex-col gap-4 opacity-50">
                                                <p className="flex-center gap-1"><TbHexagon1Filled/> Action</p>
                                                <div
                                                    className="bg-primary px-4 py-1 text-white text-lg rounded-full text-center"
                                                >
                                                    Basic Attack
                                                </div>
                                            </div>
                                            :
                                            <div className="w-1/2 p-4 flex flex-col gap-4">
                                                <p className="flex-center gap-1"><TbHexagon1Filled/> Action</p>
                                                <button
                                                    onClick={() => setShowBasicAttack(true)} 
                                                    className="bg-primary px-4 py-1 text-white text-lg rounded-full"
                                                >
                                                    Basic Attack
                                                </button>
                                            </div>
                                        }
                                        {actions < 2
                                            ?
                                            <div className="w-1/2 p-4 flex flex-col gap-4 opacity-50">
                                                <p className="flex-center gap-1"><TbHexagon2Filled/> Actions</p>
                                                <div
                                                    className="bg-primary px-4 py-1 text-white text-lg rounded-full text-center"
                                                >
                                                    Heavy Attack
                                                </div>
                                            </div>
                                            :
                                            <div className="w-1/2 p-4 flex flex-col gap-4">
                                                <p className="flex-center gap-1"><TbHexagon2Filled/> Actions</p>
                                                <button
                                                    onClick={() => setShowHeavyAttack(true)} 
                                                    className="bg-primary px-4 py-1 text-white text-lg rounded-full"
                                                >
                                                    Heavy Attack
                                                </button>
                                            </div>
                                        }
                                            
                                        <button
                                            className="absolute top-2 right-2 text-red-500 text-2xl justify-self-end"
                                            onClick={() => setActionsActive(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                </div>
                            }
                            
                        </div>

                        {/* Movement */}
                        <div className="bg-white text-primary font-bold rounded-lg px-8 py-1 flex-center gap-2 relative">                           
                            <div className="text-2xl mr-2">Movement</div> 
                            <div className="flex">
                                {moveIcons.map(item => 
                                    item
                                )}
                            </div>
                            {/* Ping */}
                            {movePing &&
                                <div className="absolute top-1 right-1">
                                    <span className="relative flex-center h-5 w-5">
                                        <span className="animate-ping inline-flex absolute h-full w-full rounded-full bg-secondary"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                                    </span>
                                </div>
                            }
                            <div className="text-2xl border-l-2 border-primary pl-8 ">Dash</div>
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="text-4xl"
                            >
                                <motion.div className="relative flex-center">
                                    <div
                                        className="text-5xl cursor-pointer flex" 
                                    >
                                        {dashActive 
                                            ? <></>
                                        : dashedThisTurn 
                                            ? 
                                            <>
                                                {dashIcons.map(item => 
                                                    item
                                                )}
                                            </>
                                            : <TbHexagon1Filled onClick={() => handleDash()} />}
                                    </div> 
                                    <motion.span
                                        variants={tooltip}
                                        transition={{ duration: 0.1, ease: "easeIn" }}
                                        className="absolute z-10 tooltip-xsm-t">
                                        <p className="font-bold text-center flex-center gap-1"> <TbHexagon1Filled className="text-xl"/> Dash for {charData.class.dash} movement</p>
                                    </motion.span>
                                </motion.div>
                            </motion.div> 
                            {dashActive 
                                ?
                                <>
                                    {dashIcons.map(item => 
                                        item
                                    )}
                                </>
                                : <></>
                            }
                        </div>
                        {/* End Turn */}
                        <div className="bg-primary text-white font-bold rounded-lg w-36 h-4/5 flex-center relative">
                            <button className=" text-xl" onClick={() => handleEndTurn()}>
                                End Turn
                            </button>
                            {/* Ping */}
                            {!actionPing && !movePing
                                ?
                                <div className="absolute top-1 right-1">
                                    <span className="relative flex-center h-5 w-5">
                                        <span className="animate-ping inline-flex absolute h-full w-full rounded-full bg-secondary"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                                    </span>
                                </div>
                                : null    
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Modals */}
            <DiceModal
                title={"Basic Attack"}
                dice={charData.class.damagedice}
                fray={charData.class.fray}
                actions={1}
                actionsRef={actions}
                setActions={setActions}
                showModal={showBasicAttack}
                setShowModal={setShowBasicAttack} 
                
            />
            <DiceModal
                title={"Heavy Attack"}
                dice={charData.class.damagedice}
                fray={charData.class.fray}
                actions={2}
                actionsRef={actions}
                setActions={setActions}
                showModal={showHeavyAttack}
                setShowModal={setShowHeavyAttack} 
                
            />
            <AbilityModal
                ability={currAbilityModal}
                showModal={showAbilityModal}
                setShowModal={setShowAbilityModal}
            />
            <LimitBreakModal 
                limitbreak={charData.job.limitbreak} 
                showModal={showLimitBreak}
                setShowModal={setShowLimitBreak}
            />
        </>
    )
}