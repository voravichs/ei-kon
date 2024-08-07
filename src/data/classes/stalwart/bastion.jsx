import keywordData from "../../keywords";
import img from "../../../assets/images/bastion.PNG"
import { GiRosaShield } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { sturdy, vigilance_x, bloodied, stunned, trueStrike, weakened, slashed, unstoppable, hatredOfX, counter, vigor } = statusConditions
const { interrupt, curse } = rules;
const { heroic, shove_x, rush_x, collide, aura_x, rebound, area_ability, cure, terrain_effect, stance } = combatGlossary

const ch1Abilities = [
    {
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
    },
    {
        "name": "Battering Ram",
        "actions": 1,
        "desc": "Use your shield, weapon, or armored fist and send your target flying.",
        "type": [],
        "effects": [
            {
                "type": "Effect",
                "desc": "An adjacent character is shoved 2 spaces"
            },
            {
                "type": "Collide or Heroic",
                "desc": "Foe is slashed, and refund the action cost of this ability."
            }
        ],
        "talent1": "You may rush 1 before using Battering Ram.",
        "talent2": "You can also shove objects with Battering Ram. The object triggers collide effects on the first character it collides with.",
        "mastery": {
            "name": "Gate Smasher",
            "desc": "Once a turn, if you trigger Battering Ram's Collide or Heroic effect, the ability can be used one more time this turn."
        },
        "tags": [shove_x, collide, heroic, slashed, rush_x]
    },
    {
        "name": "Land Waster",
        "actions": 2,
        "desc": "Crash your greatshield or weapon into the earth, sending up devastating shockwaves.",
        "type": ["aoe", "attack"],
        "area": "Burst 1",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. Miss: fray."
            },
            {
                "type": "Area effect",
                "desc": "Fray"
            },
            {
                "type": "Effect",
                "desc": "Shove all characters in the area except you 1 space away from your attack target, then, shove your target 1."
            },
            {
                "type": "Heroic",
                "desc": "Gains True Strike and becomes Burst 2 (target)"
            }
        ],
        "talent1": "If Land Waster's effect shockwave shoves 3 or more foes or allies, it shoves +1 and stuns your target.",
        "talent2": "If Land Waster's effect shockwave shoves 2 or more foes or allies, cure yourself.",
        "mastery": {
            "name": "Ajax",
            "desc": "Terrain effect: Before Land Waster's effect triggers, you tear up the very ground, creating a height 1 boulder object in range 3 of you."
        },
        "tags": [shove_x, trueStrike, area_ability, stunned, cure, terrain_effect]
    },
    {
        "name": "Valiant",
        "actions": 1,
        "desc": "Stride forth, with your shield held before you, battering aside foes.",
        "type": [],
        "effects": [
            {
                "type": "Effect",
                "desc": "Rush 1, then rush 1. After each rush, shove all adjacent characters 1."
            },
            {
                "type": "Collide or Heroic",
                "desc": "Rush 1 again, then shove all adjacent characters 1."
            }
        ],
        "talent1": "Collide: Become unstoppable for the rest of your turn",
        "talent2": "If you only shove one foe, they gain hatred of you after this ability resolves.",
        "mastery": {
            "name": "Second Wind",
            "desc": "At round 4 or higher in combat, valiant becomes a free action."
        },
        "tags": [rush_x, shove_x, collide, heroic, unstoppable, hatredOfX]
    },
    {
        "name": "Endless Battlement",
        "actions": 1,
        "desc": "The land itself is your castle, and you will never let its walls be breached. No matter where your allies step, your shield will be there.",
        "type": ["stance", "aura"],
        "interrupt": {
            "name": "Heroic Intervention",
            "count": 1,
            "type": ["interrupt"],
            "trigger": "A foe targets your ally with an ability",
            "effects": [
                {
                    "type": "Effect",
                    "desc": "You soar into the air, removing yourself from the battlefield, then return in any space in the aura. Adjacent foes take 2 damage."
                }
            ],
            "tags": [aura_x, interrupt]
        },
        "effects": [
            {
                "type": "Stance",
                "desc": "When you enter this stance, or when it refreshes, choose an ally in range 4. That ally gains aura 1 until the start of your next turn. The aura deactivates if your ally is out of range. While the aura is active, you can use the Heroic Intervention interrupt."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance at the start of your turn."
            },
            {
                "type": "Heroic",
                "desc": "Immediately activate the interrupt effect."
            }
        ],
        "talent1": "While you are in the aura, attacks against your ally gain +1 curse.",
        "talent2": "You and your ally both have have counter while you are in the aura.",
        "mastery": {
            "name": "Perfect Battlement",
            "desc": "At round 4 or higher, Endless Battlement has no maximum range, deals 4 damage instead of 2, and becomes interrupt 2."
        },
        "tags": [stance, aura_x, heroic, curse, counter]
    },
    {
        "name": "Catapult",
        "desc": "Use your shield as a springboard to set up ally maneuvers or to deflect projectiles",
        "count": 1,
        "type": ["interrupt"],
        "trigger": "An ally ends a movement in an adjacent space",
        "effects": [
            {
                "type": "Effect",
                "desc": "Shove that ally 2 in any direction."
            },
            {
                "type": "Collide or Heroic",
                "desc": "That ally gains 2 vigor and may rush 1."
            }
        ],
        "talent1": "Your shield becomes a valid target for allied abilities. You can expend this interrupt to grant them rebound.",
        "talent2": "Catapult can also be triggered on foes. When triggered on foes, the effect becomes effect: shove 1. Collide: you may rush 1",
        "mastery": {
            "name": "Mangonel",
            "desc": "Catapult becomes Interrupt 3."
        },
        "tags": [interrupt, shove_x, collide, heroic, vigor, rush_x, rebound]
    }

]

const bastion = {
    "jobName": "Bastion",
    "title": "Unbreakable Knight",
    "img": img,
    "icon": <GiRosaShield/>,
    "desc": "The Bastions are the shield lords of Arden Eld, larger than life figures that tread the ancient imperial roads with their heads held high and armor gleaming. From town to town they act as errant knights and mercenaries, protecting the weak and vulnerable, and driving back the Blights with hammer-like blows from their greatshields, which they throw like a discus with incredible force. The imperious and mighty presence of a Bastion in town is a stabilizing force and can become an event for a whole village. All Bastions follow an ancient and long-forgotten hero's code, an old oath to stand against chaos in all its forms.",
    "traits": [
        {
            "name": "Strive",
            "desc": "You may cause any ability to trigger its heroic effects when you use it, and increase the distance of any shoves by +1. If you do, after that ability resolves, you can't use heroics until the end of your next turn, and deal half damage during that turn.",
            "chapter": 1,
            "tags": [heroic, shove_x]
        },
        {
            "name": "Press the Advantage",
            "desc": "Once a round, when you shove a character, you and an ally of your choice anywhere can each rush 1.",
            "chapter": 1,
            "tags": [shove_x, rush_x]
        },
        {
            "name": "Bull's Strength",
            "desc": "All your abilities gain collide: deal 2 damage. Characters can't take this damage more than once a turn.",
            "chapter": 1,
            "tags": [collide]
        },
        {
            "name": "Shieldmaster",
            "desc": "You have aura 1. If you end your turn with an ally in the aura, gain vigilance +1 and become sturdy until the start of your turn.",
            "chapter": 1,
            "tags": [aura_x, vigilance_x, sturdy]
        },
        {
            "name": "Black Rock Vanguard",
            "desc": "You can take any number of interrupts per turn. When you take an interrupt, you may rush 1 after it resolves.",
            "chapter": 3,
            "tags": [interrupt, rush_x]
        }
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Helion",
        "resolve": 2,
        "actions": 1,
        "desc": "Your shield becomes the sun: a discus of light and motion, shattering enemy ranks and spurring allies forth.",
        "effects": [
            {
                "type": "Effect",
                "desc": "You hurl your shield, and every character on the battlefield is shoved 1 space in a direction of your choice. You may shove in any order, and may choose different directions for each character.",
            },
            {
                "type": "Effect",
                "desc": "Bloodied foes are weakened. Foes at 25% hp or lower are stunned",
            },
        ],
        "ultimate": {
            "name": "Perfect Helion",
            "desc": "You can repeat this effect once on either allies or enemies."
        },
        "tags": [shove_x, bloodied, stunned]
    }
}

export default bastion;