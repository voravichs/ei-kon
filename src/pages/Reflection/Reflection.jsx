import screenshottitle from "../../assets/images/screenshottitle.PNG"
import keywordData from "../../data/keywords";
import classData from "../../data/classes/baseClass";
import colorSwap from "../../styles/classColors";
import ReflectionClassCard from "./ReflectionClassCard.jsx";
import AbilityModal from "../../components/modals/AbilityModal"
import paper1 from "../../assets/images/paper1.jpg"
import paper2 from "../../assets/images/paper2.jpg"
import paper3 from "../../assets/images/paper3.jpg"
import iconblack from "../../assets/images/eikonlogoblack.png"
import styleguide from "../../assets/images/styleguide.png"

import Icon from '@mdi/react';
import { mdiDiceD8 } from '@mdi/js';
import { FaExpandArrowsAlt, FaPlusCircle, FaMinusCircle, } from "react-icons/fa";
import { TbHexagonFilled, TbHexagon1Filled} from "react-icons/tb";

import { motion } from "framer-motion"
import { useState } from "react";

let text =
`
"stalwart": {
    "class": "stalwart",
    "desc": "Weapon master and unparalleled soldier",
    "longdesc": "<p> Stalwarts are <strong>tough and vigorous warriors</strong>, with heavy armor and abilities that let them stand their ground, protect their allies, and control space. They largely eschew the use of ranged attacks but are mythic soldiers and gods of the battlefield, able to perform incredible feats of physical prowess and resilience. </p><p>Stalwarts boast <strong>Slashed</strong> and <strong>Weakened</strong>, which allow them to slow down speedy foes and lower their damage, and have access to <strong>Rampart</strong> and <strong>Vigilance</strong>, which makes it much more risky for characters to move around them. They also easily gain <strong>Sturdy</strong>, making them resistant to being moved, and can in turn <strong>Shove</strong> their foes, knocking them around the battlefield.</p>",
    "vit": 10,
    "hp": 40,
    "defense": 6,
    "speed": 4,
    "dash": 2,
    "fray": 4,
    "damagedice": 6,
    "basicattackrange": 3,
    "traits": [
        {
            "name": "Heroics",
            "desc": "Stalwarts can push themselves beyond their normal limits, performing heroics and activating any heroic triggered effects of an ability. Each job has different ways of performing heroics.",
            "tags": [heroic]
        },
        {
            "name": "Armor 2",
            "desc": "Reduce all damage taken by 2.",
            "tags": [armor_x]
        },
        {
            "name": "Fortify",
            "desc": "Spaces adjacent to you have Rampart. Gain Vigilance +1 at the end of your turn.",
            "tags": [rampart, vigilance_X]
        },
        {
            "name": "Rush X",
            "desc": "Stalwarts can rush as part of their abilities. When you rush, you move X spaces and are unstoppable and immune to all damage during that move.",
            "tags": [rush_x]
        },
    ],
    "jobs": [],
},
`

/** 
 * Reflection Page
 */
export default function Reflection() {
    // Destrucure classes
    const { statusConditions, rules, combatGlossary, summons } = keywordData;
    const { trueStrike, weakened, slashed, vigor, flying, pacified, pierce } = statusConditions
    const { pit } = rules;
    const { heroic, shove_x, rush_x, collide, rebound, area_ability, cure, terrain_effect, summon, finishing_blow, slay, charge, combo, infuse_x, comeback, exceed} = combatGlossary
    const { stalwart, vagabond, mendicant, wright} = classData;

    // States
    const [showAbilityModal, setShowAbilityModal] = useState(false);
    const [currAbilityModal, setCurrAbilityModal] = useState();
    const [currentHP, setCurrentHP] = useState(40);
    const [vigorNum, setVigorNum] = useState(0);

    function handleHP(action) {
        switch (action) {
            case ("plus"):
                if ((currentHP / 40) < 1) {
                    setCurrentHP(currentHP + 1)
                }
                break;
            case ("minus"):
                if ((currentHP / 40) > 0) {
                    setCurrentHP(currentHP - 1)
                }
                break;
            default:
                break;
        }
    }

    function handleVigor(action) {
        switch (action) {
            case ("plus"):
                if ((vigorNum / 10) < 1) {
                    setVigorNum(vigorNum + 1)
                }
                break;
            case ("minus"):
                if ((vigorNum / 10) > 0) {
                    setVigorNum(vigorNum - 1)
                }
                break;
            default:
                break;
        }
    }

    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    const diceHover = {
        initial: { scale: 1 },
        animate: { x: [null, 3, -3, 0], y: [null, 3, -3, 0], transition: { duration: 0.25 } },
    }

    const hpBar = {
        width: `${(currentHP / 40) * 100}%`
    };

    const vigorBar = {
        width: `${(vigorNum / 10) * 100}%`
    };

    let heracule = {
        "name": "Heracule",
        "actions": 1,
        "range": 3,
        "desc": "Hurl your shield or weapon as a discus with irrepressible force.",
        "type": ["attack", "true strike"],
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Attack target is weakened and shoved 1.",
            },
            {
                "type": "Effect",
                "desc": "A different foe in range 3 from your target is shoved 1 away from your main target."
            },
            {
                "type": "Collide or Heroic",
                "desc": "Repeat the above effect"
            }
        ],
        "talent1":"Heracule's shoves can be in any direction.",
        "talent2": "Heracule's second effect triggers +1 more time.",
        "mastery": {
            "name": "Perfect Heracule",
            "desc": "Heracule gains rebound, and its second effect triggers +1 more time."
        },
        "tags": [trueStrike, weakened, shove_x, collide, heroic, rebound]
    }
    
    let death = {
        "name": "Death",
        "actions": 2,
        "desc": "A shard of Divine Death, summoned with a snap of the finger.",
        "type": ["attack", "aoe", "unerring"],
        "area": "Line 6",
        "tags": [area_ability, finishing_blow, slay, pit, summon, summons.bomb],
        "effects": [
            {
                "type": "Area effect",
                "desc": "Gamble, then count the spaces out from you along the line. The space rolled is the attack space."
            },
            {
                "type": "Attack",
                "desc": "Autohit: 2[D] + fray."
            },
            {
                "type": "Area effect",
                "desc": "Fray"
            },
            {
                "type": "Finishing blow or Slay",
                "desc": "Character explodes in a large blast area effect centered on them, dealing fray damage."
            },
            {
                "type": "Special Effect",
                "desc": "Death deals 999 divine damage instead to your attack target if they are at 8 hp or less."
            },
        ],
        "talent1": "If there's a bloodied character in the area, roll 1 more d6 and choose any result.",
        "talent2": "Slay: create a pit under your target, and summon a bomb in the pit.",
        "mastery": {
            "name": "Ultima Death",
            "desc": "Increase Death's threshold to 16 hp or less."
        }
    }
    
    let holy = {
        "name": "Holy",
        "actions": 1,
        "range": 5,
        "desc": "You ring the bell of purity and a tone rings out that soothes the peaceful and chastises the violent. A second ring from the bell shatters the tone from the first, breaking open the earth.",
        "type": ["attack", "combo"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Foe is pacified"
            },
            {
                "type": "Effect",
                "desc": "Cure a character in range 2 of that foe."
            },
            {
                "type": "Charge",
                "desc": "Grant 3 vigor to all other characters of your choice in range 2 of your foe."
            }
        ],
        "combo_action": {
            "name": "Combo: Hades",
            "desc": "Gains True Strike and Medium Blast.",
            "effects": [
                {
                    "type": "Attack",
                    "desc": "Autohit: Fray damage."
                },
                {
                    "type": "Area Effect",
                    "desc": "Fray damage."
                },
                {
                    "type": "Terrain Effect",
                    "desc": "Create a pit under your target."
                }
            ],
        },
        "talent1": "After Hades resolves, gamble, then all pits in the area explode for a medium blast area effect, centered on them. Area effect: characters in at least one area take damage equal to half the gamble result.",
        "talent2": "You may fly 1 before using Holy, or 3 when charged.",
        "mastery": {
            "name": "Magnasancti",
            "desc": "Holy creates a small blast terrain effect after resolving. Only one of these areas can be placed at once. Allies have flying in the area, and allies that end their turn in the area may gain 2 vigor."
        },
        "tags": [combo, pacified, cure, charge, vigor, trueStrike, area_ability, terrain_effect, pit, flying]
    }
    
    let pyre = {
        "name": "Pyre",
        "actions": 2,
        "type": ["attack"],
        "range": 6,
        "desc": "Power curls into a writhing ball in your hand, before it's unleashed on your enemies.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. On miss: fray."
            },
            {
                "type": "Area effect",
                "desc": "fray"
            },
            {
                "type": "Comeback or Exceed",
                "desc": "After the ability resolves, the area explodes again, dealing 2 piercing damage to all characters."
            },
        ],
        "infuse_effect": {
            "text": "Infuse 3",
            "num": 3,
            "name": "Pyrotic",
            "desc": "Increase range to 10 and blast size to Large Blast. Create a pit under the attack target after this ability resolves."
        },
        "talent1": "Comeback: Allies are immune to damage from this ability.",
        "talent2": "Exceed: You may shove all characters in the area 2 spaces.",
        "mastery": {
            "name": "Magnapyre",
            "desc": "Magnapyre benefits from Pyre talents.",
            "infuse_effect": {
                "text": "Infuse 6",
                "num": 6,
                "name": "Magnaflare",
                "actions": 2,
                "range": 12,
                "area": "Large Blast",
                "effects": [
                    {
                        "type": "Attack",
                        "desc": "On hit: 2[D] + fray. On miss: [D]+fray."
                    },
                    {
                        "type": "Area effect",
                        "desc": "[D]+fray"
                    },
                    {
                        "type": "Effect",
                        "desc": "Create a pit under your attack target"
                    },
                    {
                        "type": "Effect",
                        "desc": "After the ability resolves, the area explodes again, inflicting 2 piercing damage to all characters."
                    },
                    {
                        "type": "Comeback or Exceed",
                        "desc": "The area explodes again, dealing 2 piercing damage to all characters."
                    }
                ],
                "tags": [area_ability, comeback, exceed, pit]
            },
        },
        "tags": [pierce, comeback, exceed, pit, shove_x, infuse_x]
    }

    return (
        <>
            <div className="pt-32 pb-24 font-noto-sans flex flex-col items-center gap-8 mx-48">
                <h1 className="text-6xl font-bona-nova font-bold text-primary">Reflections</h1>
                {/* What Is EIKON */}
                <div className="w-full px-36 py-8 flex-center gap-16 border-2 border-opacity-50 border-primary rounded-xl bg-card-accent">
                    <img src={screenshottitle} className="h-[500px]" />
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-4xl text-primary">What is EI/KON?</h1>
                        <div className="flex flex-col gap-4 ml-4">
                            <p>EI/KON is an character builder app for the tabletop role-playing game ICON. ICON is a TTRPG made by Massif Press, the people behind the popular mecha sci-fi TTRPG, Lancer. It is currently still in a playtesting state with no physical release, but the game is content complete as of June 2023. </p>
                            <p>This app was built as a pure labor of love for the system and for the JRPG inspirations behind it. I was originally going to create a DnD character builder app with a lot of customizablity, but there are already so many of those out there that I would likely be a simple drop in the bucket. In contrast, ICON has very little online resources, if any.</p>
                            <p>I chose ICON because I was fascinated with its JRPG roots, the clear Final Fantasy inspirations behind much of the system, the names, and the rules. Given that it has much lighter rules than DnD to design around, it felt it was a perfect pick for an HCI solo project.</p>
                        </div>                  
                    </div>
                </div>
                {/* App Walkthrough */}
                <div className="w-full px-36 py-8 flex-center flex-col gap-8 border-2 border-opacity-50 border-primary rounded-xl bg-card-accent">
                    <h1 className="font-bold text-4xl  text-primary">App Walkthrough </h1>
                    {/* Tooltips */}
                    <div className="flex-center gap-16 mb-8">
                        <div className="flex flex-col gap-4 w-2/3">
                            <h1 className="font-bold text-3xl">Tooltips</h1>
                            <div className="flex flex-col gap-4 ml-4">
                                <p >EI/KON is tailored to streamline the tactical combat of ICON to be as simple and painless as possible. This means eliminating much of the rulebook-searching that is present in normal play of a session of ICON. </p>
                                <p>While it may be exciting to encounter 5 different keywords to resolve at once like a card game like Hearthstone, it is less so when you have to look up what happens when a certain ability allows you to Rush, Shove a character, cause a Collide, then makes them Slashed, in the same action, multiple times during a single round of combat. </p>
                                <p>Thus, EI/KON embeds these rules within pre-defined keywords so that tooltips may be used to reference them.</p>
                                <p>Additionally, there is a keyword dictionary that is still a work-in-progress accessible at the navbar at the top of each page. This dictionary will feature all the data in the rulebook compiled into one place, with proper search functionality.</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-1 w-1/3">
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                            >
                                <motion.p className="font-bold text-lg flex-center gap-2">{rush_x.name}</motion.p>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                    className="absolute z-10 tooltip-2xl-t">
                                    <p className="font-bold">{rush_x.name}</p>
                                    <p>{rush_x.desc}</p>
                                </motion.span>
                            </motion.div>
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                            >
                                <motion.p className="font-bold text-lg flex-center gap-2">{shove_x.name}</motion.p>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                    className="absolute z-10 tooltip-2xl-t">
                                    <p className="font-bold">{shove_x.name}</p>
                                    <p>{shove_x.desc}</p>
                                </motion.span>
                            </motion.div>
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                            >
                                <motion.p className="font-bold text-lg flex-center gap-2">{collide.name}</motion.p>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                    className="absolute z-10 tooltip-2xl-t">
                                    <p className="font-bold">{collide.name}</p>
                                    <p>{collide.desc}</p>
                                </motion.span>
                            </motion.div>
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="bg-secondary text-white slick-card px-4 py-2 relative cursor-pointer flex-center"
                            >
                                <motion.p className="font-bold text-lg flex-center gap-2">{slashed.name}</motion.p>
                                <motion.span
                                    variants={tooltip}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                    className="absolute z-10 tooltip-2xl-t">
                                    <p className="font-bold">{slashed.name}</p>
                                    <p>{slashed.desc}</p>
                                </motion.span>
                            </motion.div>
                        </div>
                    </div>
                    {/* Characer Creation */}
                    <div className="flex flex-col mb-8 gap-8">
                        <div className="flex flex-col gap-4 w-full">
                            <h1 className="font-bold text-3xl">Character Creation</h1>
                            <div className="flex flex-col gap-4 ml-4">
                                <p> ICON character creation is quite simple, thus EI/KON<span>&#39;</span>s character creation must remain simple as well.</p>
                                <p> The rules for all the 16 jobs from 4 classes in the ICON rulebook were imported into a JSON format. This data, alongside the tooltips, forms the backbone of this app, allowing very easy references to every rule to allow a player to make informed choices, even at the very start during character creation.</p>
                                <p>As the rulebook really loves color-coding each class and enemy class, I implemented the color scheme for each class from the rulebook right into the interface elements.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="w-1/4">
                                <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-red-400 bg-red-600 flex-center gap-4 drop-shadow cursor-pointer">
                                    <div className="text-white text-4xl">
                                        {stalwart.icon}
                                    </div>
                                    <p className="uppercase text-white font-bold text-xl">Stalwart</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4 drop-shadow cursor-pointer">
                                    <div className="text-white text-4xl">
                                        {vagabond.icon}
                                    </div>
                                    <p className="uppercase text-white font-bold text-xl">Vagabond</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4 drop-shadow cursor-pointer">
                                    <div className="text-white text-4xl">
                                        {mendicant.icon}
                                    </div>
                                    <p className="uppercase text-white font-bold text-xl">Mendicant</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="slick-card py-4 px-8 z-10 border-b-[24px] border-cyan-300 bg-cyan-500 flex-center gap-4 drop-shadow cursor-pointer">
                                    <div className="text-white text-4xl">
                                        {wright.icon}
                                    </div>
                                    <p className="uppercase text-white font-bold text-xl">Wright</p>
                                </div>
                            </div>
                        </div>
                        <ReflectionClassCard selectedClass={stalwart} />
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-4 ml-4">
                                <p> Job selection and ability selection show off the modals present in the app.</p>
                                <p> Invoking the afforance of cards, each ability can be expanded to view their gory details. Each ability has been painstakingly vetted for both form and function, allowing users to not just read the text of the ability, but view details about the keywords present.</p>
                                <p> While the intricacies of each ability have been been fully explored in the current prototype in the character sheet, such as combos, summons, infuse, and blessings, the framework and data exists to track every minor detail about abilities.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div 
                                className={`border border-b-[24px] ${colorSwap.bg(stalwart)} rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwap.borderAccent(stalwart)} relative w-1/4 h-32`}
                            >
                                <p>{heracule.name}</p>
                                <FaExpandArrowsAlt 
                                    onClick={() => {
                                        setCurrAbilityModal(heracule)
                                        setShowAbilityModal(true)
                                    }} 
                                    className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                />
                                <AbilityModal
                                    ability={currAbilityModal}
                                    showModal={showAbilityModal}
                                    setShowModal={setShowAbilityModal}
                                />
                            </div>
                            <div 
                                className={`border border-b-[24px] ${colorSwap.bg(vagabond)} rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwap.borderAccent(vagabond)} relative w-1/4 h-32`}
                            >
                                <p>{death.name}</p>
                                <FaExpandArrowsAlt 
                                    onClick={() => {
                                        setCurrAbilityModal(death)
                                        setShowAbilityModal(true)
                                    }} 
                                    className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                />
                                <AbilityModal
                                    ability={currAbilityModal}
                                    showModal={showAbilityModal}
                                    setShowModal={setShowAbilityModal}
                                />
                            </div>
                            <div 
                                className={`border border-b-[24px] ${colorSwap.bg(mendicant)} rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwap.borderAccent(mendicant)} relative w-1/4 h-32`}
                            >
                                <p>{holy.name}</p>
                                <FaExpandArrowsAlt 
                                    onClick={() => {
                                        setCurrAbilityModal(holy)
                                        setShowAbilityModal(true)
                                    }} 
                                    className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                />
                                <AbilityModal
                                    ability={currAbilityModal}
                                    showModal={showAbilityModal}
                                    setShowModal={setShowAbilityModal}
                                />
                            </div>
                            <div 
                                className={`border border-b-[24px] ${colorSwap.bg(wright)} rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwap.borderAccent(wright)} relative w-1/4 h-32`}
                            >
                                <p>{pyre.name}</p>
                                <FaExpandArrowsAlt 
                                    onClick={() => {
                                        setCurrAbilityModal(pyre)
                                        setShowAbilityModal(true)
                                    }} 
                                    className="absolute bottom-2 right-2 text-3xl cursor-pointer hover:animate-ping"
                                />
                                <AbilityModal
                                    ability={currAbilityModal}
                                    showModal={showAbilityModal}
                                    setShowModal={setShowAbilityModal}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Character Sheet */}
                    <div className="flex-center gap-16 mb-8">
                        <div className="flex flex-col gap-4 w-full">
                            <h1 className="font-bold text-3xl">Character Sheet</h1>
                            <div className="flex flex-col gap-4 ml-4">
                                <p> The final goal of ICON was to have a robust and dynamic character sheet for players to easily track character resources and turns.</p>
                                <p> After creating a character and saving the character locally, a character sheet can be viewed. It features all the essentials of a modern character sheet: built-in dice rolling, HP tracking, condition tracking, turn tracking, and references to the rules relevant to a player<span>&#39;</span>s character. </p>
                                <p>Great lengths were taken to improve visual clarity, such as keeping the action icon a hexagon to show the action cost for certain actions, such as performing abilities or dashing. Much of this character sheet is still incomplete as many specific resources and special items, such as combos, blessings, and summons, have been been fully implemented. This will be the main focus moving forward for further development.</p>
                            </div>
                            <div className="flex-center gap-8 ">
                                {/* HP Bar */}
                                <div className={`h-44 w-80 justify-self-center text-primary bg-white font-bold flex-center flex-col gap-2 p-4 relative rounded-lg border-primary border-2 border-opacity-50`}>
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
                                                {currentHP} / 40
                                            </div>
                                            <FaPlusCircle className="cursor-pointer" onClick={() => handleHP("plus")} />
                                        </div>
                                        {/* Vigor Controls */}
                                        <div className='flex items-center gap-2 text-xl text-secondary'>
                                            <FaMinusCircle className="cursor-pointer" onClick={() => handleVigor("minus")} />
                                            <p>{vigorNum} / 10</p>
                                            <FaPlusCircle className="cursor-pointer" onClick={() => handleVigor("plus")} />
                                        </div>
                                    </div>
                                </div>
                                {/* Dice */}
                                <div className={`h-32 w-32 2xl:h-44 2xl:w-44 text-primary bg-white justify-self-center font-bold flex-center flex-col p-4 relative rounded-lg border-primary border-2 border-opacity-50`}>
                                    <p className='text-xl'>Damage</p>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="text-4xl">
                                        <motion.div className="flex-center cursor-pointer">
                                            <motion.div variants={diceHover}>
                                                <Icon path={mdiDiceD8} size={3} />
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
                                {/* Actions */}
                                <div className="bg-white text-primary font-bold rounded-lg px-8 py-2 flex-center gap-2 relative h-fit border-primary border-2 border-opacity-50">                           
                                    <div className="text-2xl">Actions</div> 
                                    <TbHexagonFilled className={`text-5xl text-primary cursor-pointer`}/>
                                    <TbHexagonFilled className={`text-5xl text-primary cursor-pointer`}/>
                                    {/* Ping */}
                                    <div className="absolute top-1 right-1">
                                        <span className="relative flex-center h-5 w-5">
                                            <span className="animate-ping inline-flex absolute h-full w-full rounded-full bg-secondary"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Save/Load */}
                    <div className="flex-center gap-16 mb-8">
                        <div className="flex flex-col gap-4 w-full">
                            <h1 className="font-bold text-3xl">Saving and Loading</h1>
                            <div className="flex flex-col gap-4 ml-4">
                                <p> EI/KON saves data locally through local storage. This means that players may create and store characters that persist within their current browser history, without the need for an account. This is a relatively lightweight implementation of character storage, that may have room for a database to store accounts in the future.</p>
                                <p>The interface allows a player to save and load characters at will. Saving a character will generate a local JSON file that may be saved to load in later. At the moment, the profile pictures for the characters are based on the job alone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Lessons */}
                <div className="w-full px-36 py-8 flex-center flex-col gap-16 border-2 border-opacity-50 border-primary rounded-xl bg-card-accent">
                    <h1 className="font-bold text-4xl text-primary">Lessons Learned</h1>
                    {/* User Research */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-3xl">User Research</h1>
                        <div className="flex flex-col gap-4 ml-4">
                            <p> This project had pivoted in the middle from a DnD character builder to an ICON character builder. While this may have been disasterous for losing a lot of formative user research and feedback for building the app, I believe I had structured my user research questions broadly enough to let me pivot much easier.</p>
                            <p> My formative user research focused primarily on the concerns of users that play TTRPGs and use online tools such as DnD Beyond. This line of research was meant to figure out what users want out of online tools as opposed to pen-and-paper play. The results of this study revealed much about players<span>&#39;</span> behaviors towards the information contained within their character sheets.</p>
                            <p>Here were some interesting insights:</p>
                            <ul className="list-disc ml-8">
                                <li>One user brought up that the fun of TTRPGs sometimes relates to the chaos and uncertainty of the game. Streamlining the game, they think, may get rid of some of this chaos. Having quick and easy references to the rules just makes things less exciting and unpredicatble, when the answer can just be easily found.</li>
                                <li>Another user remarked that they do prefer crunchy TTRPG systems with a lot of math, and that online tools helps facilitate calculations for these systems. However, it does get rid of things such as dice rolling, which is one pillar of the TTRPG hobby that is very important.</li>
                                <li>In general, users<span>&#39;</span> ideal character sheets are able to navigate the information overload of a character in some way. </li>
                            </ul>
                            <p>Structuring the early user research this way made the pivot from DnD to ICON very easy: I already had research about what users expect out of an online interface for TTRPGs. I believe this is a good technique if one is uncertain about the content of a project right at the start, as I was. I knew I wanted to take on a project that involved TTRPGs somehow, but I was already apprehensive about whether I should make a DnD app due to the sheer amount of content and the lack of innovation I could provide. Thus, I kept my options open during research, and when the inspiration struck to adapt ICON into a character builder, I did not need to do an extensive amount of research.</p>
                        </div>                  
                    </div>
                    {/* Lo-Fi */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-3xl">Lo-Fi Prototyping</h1>
                        <div className="flex flex-col gap-4 ml-4">
                            <p> For this project, I made a few low fidelity paper prototypes and performed Wizard-of-Oz experiments using them. I believe these were successful in part due to the consideration of the interactive parts of the interface that had to be made for the prototype. I came into this project with a background in web development, so I knew generally what it might take to implement certain features, but having little paper components to manipulate really put into perspective the sheer amount of components I would need to make.</p>
                            <div className="flex gap-4">
                                <img src={paper1} className="w-1/2"/>
                                <img src={paper2} className="w-1/2"/>
                            </div>
                            <p>The first prototype (pictured on the left) featured components that were hidden behind others, and had a focus on being able to customize the experience. This prototype actually confused users during the experiments the most, as they had trouble finding certain task items hidden behind the frontal components. </p>
                            <p>The second prototype (pictured on the right), was actually made in haste to try something different with the design. This prototype, however, provided much more popular with users, as items were much more easy to access, and the non-essential items, like inventory and features, were theoretically relegated to sub-menus. </p>
                            <p>After the topic pivot to ICON, the final paper prototype reflects the lessons learned during this step:</p>
                            <div className="flex-center">
                                <img src={paper3} className="w-1/2"/>
                            </div>
                            <p>Overall, I believe this lo-fi prototyping step with paper prototypes really help solidfy the general strokes of the application at an early state. As a designer, it was very much a quick and easy way to model the important items I would want in the final interface.</p>
                            <p> This step also taught me the classic acronym: K.I.S.S, keep it simple, stupid. Before this starting to prototype, I was very gung-ho on making a very customizable app, but after this round of user feedback, I realized that making an app customizable with my current skillset and the amount of work that would require would be way out of scope. Thus, going with a simpler, easier to parse option became the plan.</p>
                        </div>                  
                    </div>
                    {/* Hi-Fi */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-3xl">Hi-Fi Prototyping</h1>
                        <div className="flex flex-col gap-4 ml-4">
                            <p> During Hi-Fi prototyping, I modeled the flow of making a character and generating a character sheet. This step provided much of the same insights as the lo-fi prototyping, but it was also when I had the chance to define some style components of the app, such as colors and fonts. </p>
                            <p> I always love to make logos to coincide with naming applications. EI/KON spawned from the archaic term eikon, another word for the modern day icon. This also references many Final Fantasy games, which use the term eikon to refer to gods, summons, or powerful beings of reverence. This name also plays off of the biggest inspiration for this app, <a href="https://compcon.app/" className="text-primary hover:text-primary-hover hover:underline">COMP/CON</a>, an online app for the Lancer TTRPG. The EI/KON logo attempts to be as close to ICON as possible while still maintaining its identity.  </p>
                            <div className="flex-center">
                                <img src={iconblack} className="w-1/2"/>
                            </div>
                            <p>The fonts used are meant to emulate TTRPG rulebooks, using a general serif font for titles and a sans serif font for all other text. The colors were meant to evoke a more natural feeling. Since ICON takes place in a post-apocalyptic fantasy setting, it seemed on theme to have a theme of <q>ruins returning to nature</q>. It does help that blue, green, and shades of white go well together in general.</p>
                            <div className="flex-center">
                                <img src={styleguide} className="w-1/2"/>
                            </div>
                            <p>I built a hi-fi working prototype in Figma. This allowed me to start drafting how I would display the app, especially important moving parts such as tooltips.</p>
                            <p>This prototyping step helped me transfer the ideas I had from paper prototyping into a more sophisticated form, with a chance to put the colors and components I want onto a page. The staggering amount of work just to add in tooltips within this prototype gave me fear for the final product, but knowing what I know about web development, the hard part would be the data entry, not the display.</p>
                        </div>                  
                    </div>
                    {/* AI/LLM Usage for Data Entry */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-3xl">AI/LLM Usage for Data Entry</h1>
                        <div className="flex flex-col gap-4 ml-4">
                            <p> For items to be properly displayed in the final product, the text rules from the book would need to be processed into a JSON format. This is a very and time-consuming process if done by hand. As I was a computer science student with a little bit of knowledge with using GPT-4, I devised a plan to automate my data entry to make my life 1000% easier. </p>
                            <p>I first designed how the JSONs would look. I would need certain pieces of information to parse from the text of the rulebook, and these would become fields within the JSON. Below is an example of a (shortened) JSON for the Stalwart class:</p>
                            <code>
                                <p>{`"stalwart": {`}</p>
                                <p className="ml-8">{`"icon": <GiAxeSword/>,`}</p>
                                <p className="ml-8">{`"desc": "Weapon master and unparalleled soldier",`}</p>
                                <p className="ml-8">{`"longdesc": "<p> Stalwarts are <strong>tough and vigorous warriors...",`}</p>
                                <p className="ml-8">{` "vit": 10,`}</p>
                                <p className="ml-8">{` "hp": 40,`}</p>
                                <p className="ml-8">{` "defense": 6,`}</p>
                                <p className="ml-8">{` "speed": 4,`}</p>
                                <p className="ml-8">{` "dash": 2,`}</p>
                                <p className="ml-8">{` "fray": 4,`}</p>
                                <p className="ml-8">{` "damagedice": 6,`}</p>
                                <p className="ml-8">{` "basicattackrange": 3,`}</p>
                                <p className="ml-8">{` "traits": [`}</p>
                                <p className="ml-16">{` {...}`}</p>
                                <p className="ml-8">{` ],`}</p>
                                <p className="ml-8">{` "jobs": [bastion, demonslayer, colossus, knave],`}</p>
                                <p>{`},`}</p>
                            </code>
                            <p> I used a system prompt that included the structure of the JSON I wanted as output, then performed a few-shot learning procedure. As an initial user input, I fed GPT-4 the text I would give as input, then mocked the proper output like what is shown above. Usually, one example is enough to allow GPT-4 to generate a proper response. An example generation for this process can be seen at <a href="https://platform.openai.com/playground/p/z4GaIeWZ3NkEHhgh5vEuBWVJ?model=gpt-4&mode=chat" className="text-primary hover:text-primary-hover hover:underline">this link.</a></p>
                            <p>Using this process allowed me to input the data for all 16 jobs in the rulebook alongside every keyword and combat rule. There were many cases were the output would need to be edited, as there were key parts of the JSON would require a personal touch to display the information properly. Due to this quirk, inputting the job abilities turned out to be the toughest part of this process. Because each job ability features so much keyword text and works in a multitude of ways, few-shot learning cannot easily produce a perfect result every time. There are certain abilities that add actions, add interrupts, have extra rules such as infuse, and have external items such as summons and objects. These extra items warranted more optional JSON fields so that they can be utilized later within the character sheet.</p>
                            <p>Much of what was built into the JSON data goes unused in the final working prototype, as it would require much more code to display the conditinal items such as interrupts, summons, and tokens. However, their existence allows for more future development towards a very robust app that can track everything a player would want.</p>
                            <p>Through this process, I have come to very much appreciate the utility that AI/LLM has for menial tasks such as automating this input of data. While I am very cautious about AI use an passing AI driven works as my own, I believe this use of AI is quite valid to make very robust JSON structures from plain text. This process is unrefined enough to require a human in the middle of the process to vet and look over the results. Perhaps with a fine-tuned model, new ideas can be generated for ICON, but that starts to veer into questionable territory.</p>
                        </div>                  
                    </div>
                </div>
                <div className="w-full px-36 py-8 flex-center flex-col gap-8 border-2 border-opacity-50 border-primary rounded-xl bg-card-accent">
                    <h1 className="font-bold text-4xl text-primary">Conclusion</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 ml-4">
                            <p> This project has been an intense labor of love for a TTRPG system that I believe in and love the concept of. I was originally inspired by COMP/CON for this project, and it likely shows in choices of layout, color, and navigation. While I do not think I have surpassed the very impeccable and stylish looks of COMP/CON, I believe I have come pretty far as a solo developer in this project. My hope is to continue working on this project towards a state that is presentable to the community of TTRPG players who are interested in ICON, so that it may continue to be developed and refined as an open source project. </p>
                            <p> I would like to thank Professor Andrew Head for being a great lecturer and a great source of feedback throughtout this project! It was a little tough being a solo project, but hopefully the final product shows how much work I poured into it to prove that I can go beyond expectations! </p>
                            <p> I would also like to thank the TAs, students, and users that helped evaluate this app! There was a lot of valuable feedback that made the final product what it is.</p>
                        </div>                  
                    </div>
                </div>
            </div>
        </>
    )
}