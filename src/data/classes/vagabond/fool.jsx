import keywordData from "../../keywords";
import img from "../../../assets/images/fool.PNG"
import { FaMasksTheater } from "react-icons/fa6";

const { statusConditions, rules, combatGlossary, summons} = keywordData;

const { phasing, evasion, divine, trueStrike, dazed, flying, blind, stealth} = statusConditions
const { boon, pit } = rules
const { teleport_X, summon, finishing_blow, slay, gamble, dash, area_ability, stance, power_die, terrain_effect, mark} = combatGlossary

const ch1Abilities = [
    {
        "name": "Cavaliere",
        "actions": 1,
        "desc": "It is not enough to rudely and plainly strike your foe down. One must make it entertaining.",
        "type": ["attack", "+1 boon"],
        "tags": [boon, dash, dazed, finishing_blow, slay, summon, summons.bomb],
        "effects": [
            {
                "type": "Effect",
                "desc": "Dash 3, then dash 1 space to the side of your movement. This movement ignores all movement penalties and has phasing. However:",
                "details": [
                    "- You must move if able.",
                    "- You must move as far as possible.",
                    "- You cannot move diagonally during this movement."
                ]
            },
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Foe is dazed."
            },
            {
                "type": "Finishing Blow or Slay",
                "desc": "Summon a bomb"
            }
        ],
        "talent1": "If you pass through an ally or summon during this movement, deal bonus damage",
        "talent2": "Allies you pass through during this movement can dash 1.",
        "mastery": {
            "name": "Pegaso",
            "desc": "After Cavaliere resolves, you may fly 4."
        }
    },
    {
        "name": "Carnevale",
        "actions": 1,
        "desc": "Get the party started.",
        "type": ["summon"],
        "tags": [summon, dash, flying],
        "effects": [
            {
                "type": "Summon",
                "desc": "Summon two bombs in range 2. You may dash 1 after summoning each bomb."
            },
            {
                "type": "Effect",
                "desc": "If you end your turn without attacking, you can then immediately gamble to detonate all bombs."
            },
        ],
        "talent1": "Fly 1 after summoning each bomb instead. Charge: Fly 2 instead.",
        "talent2": "You can allow any ally in range 2 to dash 1 before summoning a bomb instead.",
        "mastery": {
            "name": "Il Caos, La Mia Musa",
            "desc": "When you summon a bomb with this ability, you may bounce it off a character in range, dealing 2 damage, then summon it in range 2 of that character."
        }
    },
    {
        "name": "Spinning Top",
        "actions": 1,
        "desc": "A blur of cape, a flash of color, the gleaming of blades.",
        "type": ["gamble"],
        "tags": [gamble, dash, evasion, flying, slay],
        "effects": [
            {
                "type": "Effect",
                "desc": "Gamble, then dash that many spaces +2 in a whirling dance.",
                "details": [
                    "- You must move as far as possible before an obstruction causes you to stop.",
                    "- You must make all movement in the same direction.",
                    "- You cannot move diagonally using this movement.",
                    "- However, you can interrupt Spinning Top with any number of other abilities without causing the movement to end."
                ]
            },
            {
                "type": "Effect",
                "desc": "If you move the maximum distance rolled by Spinning Top, gain evasion until the start of your next turn."
            },
        ],
        "talent1": "You can always choose to dash 3 spaces with Spinning Top after seeing your gamble result.",
        "talent2": "Charge: Spinning Top becomes fly instead.",
        "mastery": {
            "name": "Vortice Di Follia",
            "desc": "If you triggered a slay effect during your turn before using Spinning Top, it becomes a free action."
        }
    },
    {
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
    },
    {
        "name": "Gallows Humor",
        "actions": 1,
        "desc": "The power of Divine Death flows through you, empowering your strikes.",
        "type": ["stance", "power die"],
        "tags": [stance, power_die, slay, dash],
        "effects": [
            {
                "type": "Stance",
                "desc": "Set out a d6 power die, starting at 1. While in this stance:",
                "details": [
                    "- When this stance refreshes, or when you or an ally anywhere misses or is missed by an attack, tick the die up by 1.",
                    "- When the die is at maximum, you may reset it to 1 when you or an ally uses an ability to empower it. The ability deals bonus damage and triggers any slay effects, hit or miss.",
                ]
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance at the start of your turn."
            },
        ],
        "talent1": "Gallows Humor instantly ticks up to maximum if an ally is defeated anywhere.",
        "talent2": "The empowered ability gains effect: deal 4 damage again to any target at 25% hp or lower.",
        "mastery": {
            "name": "Maestria Mortale",
            "desc": "While in this stance, all your abilities with an action cost of 1 or 2 gain slay: all allies may dash 1, then foes adjacent to at least one ally that dashed this way take 2 damage."
        }
    },
    {
        "name": "Party Favor",
        "actions": 1,
        "desc": "The Fool's arsenal is deep, their mirth infinite, and their ability to turn nearly anything into an explosive is legendary.",
        "type": ["terrain effect"],
        "tags": [terrain_effect, gamble, flying, blind, stealth, dazed, mark],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Throw an explosive mine into a free space in range 3. When any character enters the space, the mine explodes with a medium blast area effect centered on it. When activated, gamble to see the effects, which stack. Then, the mine is destroyed, ending the terrain effect.",
                "details": [
                    "<b>1-3</b>: Yourself and allies in the area fly 1. Foes take 2 damage.",
                    "<b>4-5</b>: Foes are additionally blinded.",
                    "<b>6</b>: Yourself and allies also gain stealth."
                ]
            },
            {
                "type": "Finishing Blow",
                "desc": "Foes take 2 damage, twice."
            }
        ],
        "talent1": "Increase flight on yourself to 3",
        "talent2": "Dazed or Blinded foes activate the Finishing Blow effect.",
        "mastery": {
            "name": "Amico",
            "desc": "You can throw the Party Favor at any character in range instead, making it a mark. You can gamble at the end of any turn after yours to detonate it, ending the mark and effect."
        }
    }
]

const fool = {
    "jobName": "Fool",
    "title": "Masked Avenger",
    "img": img,
    "icon": <FaMasksTheater/>,
    "desc": "<p>Fools are dedicated defenders of the common people of Arden Eld, part folk hero, and part hired killer. They have no official organization, and cover their faces with masks to hide their identity, wearing bells and motley to cover their collections of deadly weapons and explosives.</p><p>Some people fear the Fools, calling them self-interested thugs or anarchic cultists of the Laughing God. They may not be entirely wrong, but none can deny their flair for the theatrical.</p><p>They are feared rightly by all would-be tyrants, under-barons, and aspiring imperial lords. Wherever kin labor under oppression, someone will take up the mask and knives and sent cold jolts of fear into the hearts of the rich and comfortable.</p>",
    "traits": [
        {
            "name": "Tumbling",
            "desc": "You may phase through characters. Entering the space of any character, including summons, always costs a maximum of 1 movement.",
            "chapter": 1,
            "tags": [phasing ]
        },
        {
            "name": "Curse of Chaos",
            "desc": "You have evasion against characters that are 3 or more spaces away from you.",
            "chapter": 1,
            "tags": [evasion]
        },
        {
            "name": "Cheap Trick",
            "desc": "When an attack misses you, you may teleport 1 space, then leave a bomb in an adjacent space.",
            "chapter": 1,
            "tags": [teleport_X, summon, summons.bomb]
        },
        {
            "name": "Stack Dice",
            "desc": "Once a round, when you trigger a finishing blow or slay effect, gain a Stacked Die after that ability resolves. You can use this die when you gamble to make the gamble result 6, consuming the die. You can only hold on to one Stacked Die at once, and lose all of them at the end of combat.",
            "chapter": 1,
            "tags": [finishing_blow, slay, gamble]
        },
        {
            "name": "Death's Apprentice",
            "desc": "You can hold on to 2 stacked dice at once.",
            "chapter": 3,
            "tags": []
        }
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Curtain Call",
        "resolve": 4,
        "actions": 2,
        "desc": "Bring out the fireworks. Fire up the elden magic. Time for a showstopper.",
        "effects": [
            {
                "type": "Effect",
                "desc": "<b>Gamble</b>, then draw a line area effect of that many spaces +2. Soar into the air, removing yourself from the battlefield, then place yourself adjacent to the first foe in that line, delivering a massive blow. This ability has different effects depending on their position on the line. If there are no valid targets after rolling, the resolve cost of this ability is refunded.<p>Roll [D] + fray damage once, then apply it the number of times listed.</p>",
                "details": [
                    "<b>3-5 spaces</b>: x2",
                    "<b>6-7 spaces</b>: x3",
                    "<b>8 spaces</b>: x4 and character is stunned."
                ]
            }
            
        ],
        "ultimate": {
            "name": "Ultima Curtain Call",
            "desc": "After this ability resolves, summon half as many bombs as your gamble result anywhere on the battlefield."
        },
        "tags": [divine, gamble, trueStrike, summon, summons.bomb]
    }
}

export default fool;