import keywordData from "../../keywords";
import img from "../../../assets/images/geomancer.PNG"
import { GiStoneBlock } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { pierce, vigor, unstoppable, phasing, divine, shattered, vulnerable, flying, stunned, regeneration} = statusConditions
const { movement, pit} = rules;
const { delay, area_ability, bonus_damage, aether, shove_x, resistance, dangerous_terrain, difficult_terrain, end_turn, collide, charge, teleport_X, infuse_x, stance, power_die} = combatGlossary

const ch1Abilities = [
    {
        "name": "Bio",
        "actions": 1,
        "type": ["attack", "pierce"],
        "range": 8,
        "desc": "The earth splits, excising poison from its depths, belching poisonous metals and gases.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Attack target is shattered."
            },
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Area Effect",
                "desc": "Fray"
            },
            {
                "type": "Charge",
                "desc": "Create a space of dangerous terrain in the center space of the area, and under every foe in the area."
            }
        ],
        "infuse_effect": {
            "text": "Infuse 3",
            "num": 3,
            "name": "Biotic",
            "desc": "Increase blast size to medium blast, and shatters all characters inside."
        },
        "talent1": "You may also cause pits, objects you created, and difficult terrain caught in the area to become dangerous terrain.",
        "talent2": "You may cause existing dangerous terrain spaces in the area to boil with poison after this ability resolves. Characters in or adjacent to one or more of those spaces take 2 piercing damage as an area effect.",
        "mastery": {
            "name": "Magnabio",
            "desc": "Magnabio benefits from bio talents.",
            "infuse_effect": {
                "text": "Infuse 6",
                "num": 6,
                "name": "Magnabio",
                "actions": 2,
                "range": 8,
                "area": "Large Blast",
                "effects": [
                    {
                        "type": "Attack",
                        "desc": "On hit: 2[D] + fray. Miss: [D] + fray."
                    },
                    {
                        "type": "Area Effect",
                        "desc": "[D] + fray."
                    },
                    {
                        "type": "Terrain Effect",
                        "desc": "Create a medium blast toxic cloud terrain effect centered on the center space. The area is dangerous terrain and characters inside the area are shattered+. The cloud lasts until this ability is used again."
                    }
                ]
            }
        },
        "tags": [pierce, shattered, pit, difficult_terrain, dangerous_terrain, infuse_x]
    },
    {
        "name": "Dragon Dive",
        "actions": 1,
        "range": 6,
        "desc": "The earth is an old friend to geomancers, and will allow them passage as easily as slipping into water.",
        "type": ["end turn", "delay"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Choose a character in range, <b>end your turn</b>, and gain <b>Delay</b>: You must take a slow turn next round. At the start of that turn, you dive into the earth, removing yourself from the battlefield and placing yourself within range 3 of that character. They don't have to be in range or line of sight."
            },
            {
                "type": "Area Effect",
                "desc": "When you explode upwards, you release a burst 1 area effect centered on you, shoving 1 and dealing 2 piercing damage to all characters."
            }
        ],
        "infuse_effect": {
            "text": "Infuse 3",
            "num": 3,
            "name": "Boulder Kick",
            "desc": "The area effect released becomes range 3, burst 1 (target). If only one character is caught in the area, they take 2 piercing damage twice instead and are shoved 2."
        },
        "talent1": "Gain Collide: Character is vulnerable.",
        "talent2": "You may burst out of the ground and fly 3 after Dragon Dive's delay effect resolves.",
        "mastery": {
            "name": "Double Dragon",
            "desc": "You can pull an adjacent willing ally with you during Dragon Dive, removing them when it triggers, then placing them in any adjacent space after the ability resolves."
        },
        "tags": [delay, end_turn, pierce, shove_x, collide, vulnerable, flying, infuse_x]
    },
    {
        "name": "Geo",
        "actions": 2,
        "type": ["attack", "aoe"],
        "area": "Arc 6",
        "desc": "The stomp of a foot or the slap of a palm is magnified a hundred fold into rumbling death.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. Miss: fray."
            },
            {
                "type": "Area Effect",
                "desc": "fray"
            },
            {
                "type": "Terrain Effect",
                "desc": "Create a height 1 boulder object in free space anywhere in the area after the attack resolves."
            },
            {
                "type": "Charge",
                "desc": "Attack target explodes in a medium blast area effect, dealing 2 piercing damage again to all characters and creating a pit under them."
            }
        ],
        "infuse_effect": {
            "text": "Infuse 4",
            "num": 4,
            "name": "Geotic",
            "desc": "Arc 8. Deals bonus damage to characters standing in difficult terrain, pits, or dangerous terrain, and automatically triggers the charge effect against a foe standing in those spaces."
        },
        "talent1": "When a boulder or pit is created with this ability, you may shove all adjacent characters 1 away from it. Collide: character has a space of difficult terrain created under them.",
        "talent2": "Boulders can be created under characters, and you may choose to make characters you create boulders under immune to damage from this ability",
        "mastery": {
            "name": "Magnageo",
            "desc": "Magnageo benefits from geo talents.",
            "infuse_effect": {
                "text": "Infuse 6",
                "num": 6,
                "name": "Magnageo",
                "actions": 2,
                "area": "Arc 10",
                "effects": [
                    {
                        "type": "Attack",
                        "desc": "On hit: 2[D] + fray. Miss: [D] + fray."
                    },
                    {
                        "type": "Effect",
                        "desc": "Foe explodes in a large blast area, extending the area effect."
                    },
                    {
                        "type": "Area Effect",
                        "desc": "[D] + fray"
                    },
                    {
                        "type": "Terrain Effect",
                        "desc": "Creates a massive crater. Create a boulder object in every side space of a small blast area centered on the attack target, with a pit in the center space. These terrain effects can be created under characters."
                    }
                ]
            }
        },
        "tags": [area_ability, pierce, pit, difficult_terrain, collide, shove_x, infuse_x]
    },
    {
        "name": "Helix Heel",
        "actions": 1,
        "type": ["aoe"],
        "area": "Line 3",
        "effects": [
            {
                "type": "Effect",
                "desc": "Release a shockwave in a line 3 area effect, dealing 2 piercing damage to all foes."
            },
            {
                "type": "Effect",
                "desc": "If an object is in the end space of the line, you can extend this line by 3 more spaces in any direction, drawn from the object. If a new object is at the end space of this line, you can keep extending the line by 3 spaces this way each time, but can only extend it once per object."
            },
            {
                "type": "Effect",
                "desc": "All objects this line passed through resonate, releasing a burst 1 area effect centered on them and dealing 2 piercing damage to all characters inside."
            },
            {
                "type": "Charge",
                "desc": "Shatter any foe damaged by this ability."
            }
        ],
        "talent1": "When Helix Heel bounces off an object, you can shove it 1 in any direction before extending the line.",
        "talent2": "After Helix Heel resolves, fly 1 or teleport 1 space for each bounce (up to three times).",
        "mastery": {
            "name": "Spiral Crusher",
            "desc": "You can bounce Helix Heel off characters instead. Characters that it bounces off are shoved 1 away from you after the ability resolves. Collide: Create a pit under the colliding character."
        },
        "tags": [pierce, charge, shattered, shove_x, flying, teleport_X, collide, pit]
    },
    {
        "name": "Terraforming",
        "actions": 2,
        "range": 6,
        "type": [],
        "desc": "The key of creation is turned, and the land is shaped like clay, as the Titans once did.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Target a burst 2 (target) area in range and choose two of the following terrain effects to create in that area. You cannot select the same effect more than once. Effects cannot be created in spaces occupied by characters. Options:",
                "details": [
                    "Create two height 1 boulder objects",
                    "Create two pits",
                    "Destroy any of your created objects in the area or raise the height of any existing objects by +1",
                    "Create a line 3 area of difficult terrain with at least one space in the area",
                    "Remove any difficult or dangerous terrain of your choice in the area",
                ]
            },
            {
                "type": "Charge",
                "desc": "Choose four effects."
            }
        ],
        "infuse_effect": {
            "text": "Infuse 2",
            "num": 2,
            "name": "Earthblood",
            "desc": "Sink into the ground, removing yourself from the battlefield and placing yourself in any space in the area after the ability resolves."
        },
        "talent1": "Charge: effects can also be placed in any space adjacent to the area.",
        "talent2": "You can also create up to 3 spaces of dangerous terrain in the area as a choosable effect.",
        "mastery": {
            "name": "Ancient Eruption",
            "desc": "As part of using this ability, you may <b>end your turn</b>, and gain <b>delay</b>: Your next turn must be slow, but at the start of that turn, you may shove all characters 2 spaces towards or away from the center space of the area created by Terraforming. It then explodes, dealing 2 piercing damage twice to all characters inside."
        },
        "tags": [pit, difficult_terrain, dangerous_terrain, charge, infuse_x, delay, shove_x, pierce, end_turn, delay]
    },
    {
        "name": "Obsidian Flesh",
        "actions": 1,
        "type": ["stance", "power die"],
        "desc": "Like the deepest magma in the earth's crust, your flesh becomes more stony when struck, eventually becoming covered in a gleaming obsidian shell.",
        "effects": [
            {
                "type": "Stance",
                "desc": "While in this stance, set out a d6 power die at 1. Tick it up after a foe uses an ability that damages you. At 4+, gain resistance. If the die is at maximum and you would tick it up again, this stance immediately ends and you become stunned."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance at the start of your turn. When the stance refreshes, you may tick the die up or down by 1."
            }
        ],
        "talent1": "If this ability ticks over, it doesn't end until the end of the current turn.",
        "talent2": "When this ability ends, you may have the shell explode off you, dealing 2 piercing damage in a range 2, burst 1 area effect and shoving characters inside 1.",
        "mastery": {
            "name": "Diamond Soul",
            "desc": "You have regeneration while in this stance, and when it refreshes, you can tick the die up or down by 2."
        },
        "tags": [stance, power_die, resistance, stunned, regeneration, pierce, shove_x]
    }
]

const geomancer = {
    "jobName": "Geomancer",
    "title": "Guardian of the Pure Earth",
    "img": img,
    "icon": <GiStoneBlock/>,
    "desc": "<p className='text-sm 2xl:text-base'>Geomancers belong to an old order of mystics, doctors, alchemists, and esoteric martial artists called the Keepers of the Elden Gate. These scholarly wrights are concerned with health and the flow of energy, not just through the body, but through the very earth itself. They consider themselves physicians of the highest order - their patient being the eternal land of Arden Eld.</p><p className='text-sm 2xl:text-base'>These studious wrights attune themselves to earth Aether, aligning the energy channels of their body to crystalline perfection with vigorous exercise and sometimes bizarre health regimes. In battle, the land itself is their ally, spitting forth poisonous gases, cavernous upheavals of earth, and great spires of rock to crush their foes.</p><p className='text-sm 2xl:text-base'>None are more concerned with the Churn than the geomancers, who view it as the greatest sickness known to Kin, and will take any opportunity to fight or study it with exuberance.</p>",
    "traits": [
        {
            "name": "Aftershock",
            "desc": "When you use any attack, you can cause an aftershock in the space under your target. Gain <b>Delay: </b>Your next turn must be slow, but at the start of that turn, the aftershock explodes in a burst 1 area effect centered on that space, dealing piercing fray damage to characters within (other than you). If the area effect catches an object in the area, it deals piercing fray damage twice instead. Unlike most other delay effects, aftershock does not end your turn, and can stack with other delay effects.",
            "chapter": 1,
            "tags": [delay, pierce, area_ability]
        },
        {
            "name": "Resonance",
            "desc": "When you make an attack against a character at exactly range 3, it deals bonus damage, gain 1 Aether, and gain 3 vigor after the ability resolves.",
            "chapter": 1,
            "tags": [bonus_damage, aether, vigor]
        },
        {
            "name": "Orogenic Rage",
            "desc": "At the start of round 5 and for the rest of combat, become unstoppable and your aftershocks deal double damage.",
            "chapter": 1,
            "tags": [unstoppable]
        },
        {
            "name": "Stone Double",
            "desc": "When you first vacate a space on your turn, you can leave a height 1 statue object behind in the space you vacate.",
            "chapter": 1,
            "tags": []
        },
        {
            "name": "Stoneswim",
            "desc": "You have phasing, for objects, and the spaces of objects always cost a maximum of 1 movement for you to enter.",
            "chapter": 3,
            "tags": [phasing, movement]
        }
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Cataclysm",
        "resolve": 3,
        "actions": 1,
        "desc": "<p>I, protected by the holy trigram,</p><p>Summon the ten thousand molten metal kings.</p><p>Run amok with thy furies, and rend the immortal stone, </p><p>Turn Heaven and Earth!</p>",
        "effects": [
            {
                "type": "Effect",
                "desc": "<b>End your turn.</b> You dive into the earth and off the battlefield. Remove yourself from play. Target a line area 3 spaces wide from one side of the battlefield to the next. Then gain <b>Delay:</b> Your next turn must be slow. At the start of that turn, you cause a rolling wave of earth to sweep across this area, from one side to the next. Characters within take [D] + fray as an effect and are shoved 1 in the direction of the line.",
            },
            {
                "type": "Effect",
                "desc": "After the first effect resolves, all objects in the area release an explosion for a medium blast area effect centered on them, dealing [D]+fray as an area effect. Characters hit by two or more explosions take 2[D]+fray instead.<p>When this ability resolves, place yourself in any unoccupied space in the area.</p>",
            },
            
        ],
        "ultimate": {
            "name": "Molten Core",
            "desc": "After taking this move, you emerge with a shield of molten rock covering you. You gain unstoppable and resistance until the end of your next turn."
        },
        "tags": [divine, delay, shove_x, area_ability, unstoppable, resistance]
    }
}

export default geomancer;