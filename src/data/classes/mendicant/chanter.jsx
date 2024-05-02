import keywordData from "../../keywords";
import img from "../../../assets/images/chanter.PNG"
import { GiHolyGrail } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, actions } = keywordData;

const { trueStrike, flying, sturdy, dodge, pacified, vigor, sealed, defiance, unstoppable, counter} = statusConditions
const { rescue, boon, pit} = rules;
const { blessing, charge, combo, cure, stance, cover, shove_x, area_ability, terrain_effect, mark, gamble, delay, slow_turn, aura_x} = combatGlossary

const ch1Abilities = [
    {
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
    },
    {
        "name": "Felicity",
        "actions": 1,
        "range": 5,
        "desc": "You ring the bell of fleeting guardians, and an ally feels their step lifted by invisible wings.",
        "type": ["mark", "combo"],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark an ally in range. That character gains a blessing and can fly 2. Whenever you spend a combo token, your marked character can fly 2."
            },
            {
                "type": "Charge",
                "desc": "That ally gains two blessings instead."
            },
        ],
        "combo_action": {
            "name": "Combo: Fleet",
            "desc": "Effect: An ally in range 5 is blessed and may fly 4. For every foe or ally they pass over during this movement, they gain 2 vigor."
        },
        "talent1": "When an ally ends any movement from this ability, they can shove all adjacent characters 1.",
        "talent2": "You can fly 1, then shove an adjacent character 1 when granting movement from this ability.",
        "mastery": {
            "name": "Fantasia",
            "desc": "Gain an alternate combo ability. You can choose this ability or Fleet when you spend a token.",
            "combo_action": {
                "name": "Fantasia",
                "actions": 2,
                "effects": [
                    {
                        "type": "Effect",
                        "desc": "Remove an ally in range 5 from the battlefield. Return them to the battlefield in their original location or as close as possible at the start of their turn, then they may fly 1."
                    },
                    {
                        "type": "Special",
                        "desc": "Reduce the action cost of this ability by 1 for every two blessing tokens your target has, down to a minimum of a free action."
                    },
                ],
            }
        },
        "tags": [mark, combo, blessing, flying, charge, vigor, shove_x]
    },
    {
        "name": "Pandaemonium",
        "actions": 2,
        "range": 5,
        "desc": "You sing a passage of the days of chaos and battle, where the tumult of the battlefield was like the churning of the sea, and divine lightning scathed the land.",
        "type": ["attack", "aoe","combo"],
        "area": "Medium Blast",
        "effects": [
            {
                "type": "Attack",
                "desc": "Autohit: [D]+fray"
            },
            {
                "type": "Area Effect",
                "desc": "Remove all characters in the area, then place them back in any other space in the area."
            },
            {
                "type": "Charge",
                "desc": "Increase area to Large Blast, and allies in the area gain 4 vigor."
            }
        ],
        "combo_action": {
            "name": "Combo: Purgatorio",
            "effects": [
                {
                    "type": "Attack",
                    "desc": "Autohit: [D]+fray"
                },
                {
                    "type": "Area Effect",
                    "desc": "Fray damage"
                },
                {
                    "type": "Effect",
                    "desc": "All pits in the area explode for a medium blast area effect, centered on them. Area effect: fray damage."
                },
                {
                    "type": "Effect",
                    "desc": "Create a pit under the attack target"
                }
            ],
        },
        "talent1": "After Pandaemonium resolves, gamble. Shove all characters affected 1 space in any direction. On a 4+, shove them 1 again. On a 6, shove them 1 again.",
        "talent2": "Purgatorio's damage does not break pacified and its effect causes pits to appear under every pacified foe.",
        "mastery": {
            "name": "Dulce Purgatorio",
            "desc": "This ability deals bonus damage. Pandaemonium's area effect and Purgatorio's pit explosion effect extend to all pits on the battlefield."
        },
        "tags": [combo, area_ability, vigor, pacified, shove_x, pit, gamble]
    },
    {
        "name": "Aria",
        "actions": 1,
        "desc": "You pose, then deliver a striking performance that resonates through the soul.",
        "type": ["true strike", "delay"],
        "effects": [
            {
                "type": "End your turn and gain delay",
                "desc": "Your next turn must be slow. At the start of that turn, you deliver a stunning performance, affecting a small blast area effect centered on you. Foes in the area take fray damage twice and are sealed. Sealed or Pacified foes are shoved 1. Allies in the area are cured."
            },
            {
                "type": "Special",
                "desc": "If you are damaged by a foe's ability before the start of that turn, the area becomes a medium blast. If you are damaged again, it becomes a large blast."
            }
        ],
        "talent1": "You may fly 1 when Aria's special effect triggers.",
        "talent2": "If Aria's special effect triggers twice, gain defiance and also become unstoppable until the start of your turn.",
        "mastery": {
            "name": "Power Chord",
            "desc": "At round 4 or later, Aria gains charge: free action."
        },
        "tags": [trueStrike, delay, slow_turn, sealed, pacified, shove_x, cure, flying, defiance, unstoppable, charge]
    },
    {
        "name": "Dervish",
        "actions": 1,
        "range": 4,
        "desc": "You sing of the comfort of companions, and the dawn that surely will follow.",
        "type": ["combo"],
        "effects": [
            {
                "type": "Effect",
                "desc": "You fly 1, then whisk an ally in range away with powerful winds, removing them from the battlefield and placing them in any space adjacent to you."
            },
            {
                "type": "Charge",
                "desc": "Choose a second ally."
            }
        ],
        "combo_action": {
            "name": "Combo: Dawn",
            "effects": [
                {
                    "type": "Effect",
                    "desc": "Gain aura 1 until the end of your next turn. While in the aura, yourself and allies gain +1 boon on saves and can save to end statuses and other effects at the start of your turns instead of the end."
                }
            ]
        },
        "talent1": "A swirling aura 1 of winds surrounds you after taking this ability until the start of your next turn, granting you and allies inside counter.",
        "talent2": "Before you use this ability, you can cause a wind blast, shoving all adjacent foes 1 and dealing 2 damage to them.",
        "mastery": {
            "name": "Beacon of Hope",
            "desc": "You can empower this ability to gain both effects at once and automatically activate their charge effects. This also counts as spending a combo token, though you don't actually need to spend one. If you empower the ability this way, it cannot be used for the rest of combat."
        },
        "tags": [flying, combo, charge, aura_x, boon, counter, shove_x]
    },
    {
        "name": "Symphony",
        "actions": 2,
        "desc": "You ring the bell of thresholds, creating crystalline fragments of the ancient power that courses through the Chant.",
        "type": ["true strike"],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Remove up to four blessings from characters anywhere to create pulsing motes of energy that descend, creating terrain spaces in free space on the map. None can be placed adjacent to each other or overlap."
            },
            {
                "type": "Effect",
                "desc": "Any character that enters an affected space or starts their turn there detonates the mote, removing it and creating a small blast explosion as an area effect, centered on them. Foes inside take fray damage, and allies inside gain 2 vigor."
            },
            {
                "type": "Effect",
                "desc": "If the character was yourself or an ally, they are blessed and can fly 1. If that character was a foe, they also have a pit created under them."
            },
            {
                "type": "Charge",
                "desc": "Create +2 more spaces."
            }
        ],
        "talent1": "When motes explode, they deal 2 damage again to all foes inside and shove them 1 away from the center space if at least one other mote was already exploded this turn.",
        "talent2": "Allies are cured after detonating their second mote in the same turn.",
        "mastery": {
            "name": "Crescendo",
            "desc": "If you create four or more motes with this ability, you can create a mote in range 5 as a free action as part of ending your turn for the rest of combat. This effect does not stack."
        },
        "tags": [trueStrike, terrain_effect, vigor, blessing, flying, pit, charge, cure]
    }
]

const chanter = {
    "jobName": "Chanter",
    "title": "Songweaver of the Great Chant",
    "img": img,
    "icon": <GiHolyGrail/>,
    "desc": "<p className='text-sm'>Descending from numerous holy orders that have their roots high in the chronicler monasteries, the chanters are part singer, part storyteller, and part priest. At the time of the Doom, when all knowledge was deemed lost and everything put to page was transformed into ash, the only thing that persisted was the power of song, poetry, and the spirit of survival. A select order of priests committed all the great and necessary knowledge of Kin to memory, creating a single, continuous song, known as the Great Chant. In myths, stories, and histories, they recorded the knowledge of the ancients, transforming it into liturgy.</p><p className='text-sm'>The Chant performed its role, and it was through its power that the early bands of Kin survived and persevered through the darkest days. Today, however, it is so archaic, convoluted, and long that many dispute the meaning of its dogma, though none can deny its value as a mythic text. The Old Church of the chroniclers has splintered into factions that mostly squabble over its meaning and try to draw some angle from its numerous and sometimes contradictory adaptions into holy texts.</p><p className='text-sm'>Nevertheless, the Chant still holds power - real, tangible power - to heal, mend, and uplift. There are still those that take to the road and use its awesome power for good, ringing the bells of awakening and purification, as they sing to victory.</p>",
    "traits": [
        {
            "name": "Blessing of Faith",
            "desc": "Yourself and allies may spend a blessing token when using an ability to gain True Strike on that ability and fly 2 before using it. If they spend 3 tokens, the ability also triggers any charge effects.",
            "chapter": 1,
            "tags": [blessing, trueStrike, flying, charge]
        },
        {
            "name": "Songweave",
            "desc": "You are a master of weaving spell-songs together. You can spend a combo token as part of any ability to activate all the charge effects of that ability, even on a regular turn. If that ability was a combo, perform its base version instead of its combo version.",
            "chapter": 1,
            "tags": [combo, charge]
        },
        {
            "name": "Divine Grace",
            "desc": "Once a round, when you gain or spend a combo token, you may fly 2, then Bless yourself or an ally in range 3 of you.",
            "chapter": 1,
            "tags": [combo, flying, blessing, actions.bless]
        },
        {
            "name": "Uplift",
            "desc": "The first time a round you use any ability that allows you to fly, all allies can fly 1.",
            "chapter": 1,
            "tags": [flying]
        },
        {
            "name": "Gran Redempta",
            "desc": "Cure yourself and every ally on the map. Characters that are cured this way are also Rescued if they're defeated.",
            "chapter": 3,
            "tags": [cure, rescue]
        },
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "March of the Saints",
        "resolve": 2,
        "actions": 1,
        "desc": "You sing of the deeds of the first heroes, from the Doom. The Great Chant weaves around your allies and transforms them into echoes of those mighty heroes.",
        "effects": [
            {
                "type": "Stance",
                "desc": "You begin weaving an epic song, a saga of legendary heroes. When you take this action, and when this stance refreshes, you may invest an ally in range 5 with the power of one of the great saints. Each saint must be chosen at least once before it can be chosen again. The effect takes place immediately and lasts until the end of their next turn."
            },
            {
                "type": "Refresh",
                "desc": "This stance refreshes automatically at the start of your turns."
            },
            {
                "type": "Great Saints",
                "desc": "",
                "details": [
                    "<b>Parzival: </b> An allied character gains flying and cover from all directions.",
                    "<b>Leon: </b>An allied character gains dodge and the ability to move diagonally.",
                    "<b>Angrboda: </b>An allied character gains sturdy, and their attacks gain true strike and shove 1.",
                    "<b>Farnese: </b>An ally gains 1 blessing and +1 boon on all attacks and saves."
                ]
            },
        ],
        "ultimate": {
            "name": "Divine Investment",
            "desc": "You also gain the benefit of any chosen saint, lasting until the end of your next turn."
        },
        "tags": [stance, flying, cover, dodge, sturdy, trueStrike, shove_x, blessing, boon]
    }
}

export default chanter;