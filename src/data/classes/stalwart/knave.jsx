import keywordData from "../../keywords";
import img from "../../../assets/images/knave.PNG"
import { GiEvilEyes } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, actions } = keywordData;

const { vigilance_x, hatredOfX, unstoppable, slashed, weakened, evasion, dodge, stealth, divine, sturdy, regeneration } = statusConditions
const { status, ongoing, defeated, curse, action, interrupt } = rules;
const { heroic, stance, bonus_damage, cure, trueStrike, combo, rush_x, slay, vigor, shove_x, sacrifice_x, counter, gamble, comeback, aura_x, collide} = combatGlossary

const ch1Abilities = [
    {
        "name": "Low Blow",
        "actions": 1,
        "desc": "Hit them right in the gronch.",
        "type": ["attack", "combo", "true strike"],
        "effects": [
            {
                "type": "Effect",
                "desc": "You may rush 1."
            },
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Foe is slashed. If they are already slashed, they gain hatred of you."
            },
            {
                "type": "Slay or Heroic",
                "desc": "You may cure yourself."
            }
        ],
        "combo_action": {
            "name": "Combo: The Hook",
            "desc": "Gains range 2 and effect: Shove character 1 towards you."
        },
        "talent1": "Deals bonus damage if your foe is suffering from a status.",
        "talent2": "Comeback: Gain vigilance +1",
        "mastery": {
            "name": "Sadist",
            "desc": "After this ability resolves, you may rush 1 and gain 2 vigor for every status your foe is suffering from."
        },
        "tags": [trueStrike, combo, rush_x, slashed, hatredOfX, slay, heroic, cure, vigilance_x, bonus_damage, status, vigor]
    },
    {
        "name": "Provoke",
        "actions": 1,
        "desc": "You drop your guard, and wait for foes to take the bait.",
        "type": [],
        "effects": [
            {
                "type": "Effect",
                "desc": "You may Rush 1, then each adjacent foe deals 1 piercing damage to you, as if damaging you with an ability. You then deal 2 damage, once, for each foe that damaged you this way to all adjacent foes, to a maximum of three times."
            },
            {
                "type": "Heroic",
                "desc": "Affects all foes in range 2."
            },
            {
                "type": "Slay",
                "desc": "Then, you may shove all affected foes 1 towards or away from you."
            }  
        ],
        "talent1": "If this ability only affects one foe, they gain hatred of you.",
        "talent2": "You can sacrifice 2 after this ability resolves to deal 2 damage again to all adjacent foes.",
        "mastery": {
            "name": "Storm of Fury",
            "desc": "Before dealing each instance of damage, you may rush 1."
        },
        "tags": [rush_x, heroic, slay, shove_x, hatredOfX, sacrifice_x]
    },
    {
        "name": "Revenge",
        "actions": 2,
        "desc": "No matter how hard pressed, your hands, feet, and armor are ready to retaliate.",
        "type": ["attack", "combo"],
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Gain unstoppable and counter until the end of your next turn."
            },
            {
                "type": "Slay or Heroic",
                "desc": "While this ability's effect is active, you can rush 1 as an effect if you are damaged by a foe's ability, but no more than once a turn."
            },
            
        ],
        "combo_action": {
            "name": "Combo: Indignation",
            "desc": "Gains True Strike and replace the base effect with effect: gain +1 vigilance for every status your foe is suffering from, to a maximum of three times, then gain counter until the end of your next turn."
        },
        "talent1": "While this ability's effect is active, attacks against adjacent allies gain +1 curse.",
        "talent2": "You may sacrifice 4 to gain or lose a combo token after using any version of this ability.",
        "mastery": {
            "name": "Iron Maiden",
            "desc": "Also gains effect: until the end of your next turn, immediately after you activate vigilance, deal 2 damage to all adjacent foes."
        },
        "tags": [combo, unstoppable, counter, slay, heroic, rush_x, trueStrike, vigilance_x, curse, sacrifice_x]
    },
    {
        "name": "Riposte",
        "actions": 1,
        "desc": "When you come at a knave, you best not miss.",
        "type": ["stance", "gamble"],
        "interrupt": {
            "name": "Dire Parry",
            "count": 1,
            "type": ["interrupt"],
            "trigger": "A foe targets an ally in range 2 with an ability",
            "effects": [
                "Gamble, then deal that much damage to your foe. On a 6, they are also slashed and shoved 1. If you have vigilance, you can spend any number of vigilance charges when gambling to roll one extra d6 per charge spent."
            ],
            "tags": [gamble, slashed, shove_x, vigilance_x, interrupt]
        },
        "effects": [
            {
                "type": "Stance",
                "desc": "When you enter this stance or when it refreshes, gain the Dire Parry interrupt until the start of your next turn."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance when a foe damages you or an adjacent ally with an ability."
            },
            {
                "type": "Heroic",
                "desc": "Also gain vigor equal to your gamble result after this ability resolves."
            }
        ],
        "talent1": "You can also sacrifice 2 to roll 1 more d6 while gambling.",
        "talent2": "Comeback: Gain vigilance +1 after Riposte resolves.",
        "mastery": {
            "name": "Strong Left",
            "desc": "Refresh Riposte at the start of your turn. Uses of Dire Parry can stack up to 3 times, and you can bank these uses."
        },
        "tags": [gamble, stance, vigilance_x, vigor, sacrifice_x, comeback]
    },
    {
        "name": "Dark Knight",
        "actions": 1,
        "desc": "You give into the heat of battle, becoming a creature of violence and instinct.",
        "type": ["stance"],
        "effects": [
            {
                "type": "Stance",
                "desc": "While in this stance:\nYou gain hatred+ of the closet foe to you at the start of your turn or when you enter this stance. If multiple foes are equidistant, you may choose.\nYou are sturdy.\nYou gain vigilance +1 at the end of your turn."
            },
            {
                "type": "Refresh",
                "desc": "You may refresh or exit this stance at the start of your turn."
            },
            {
                "type": "Heroic",
                "desc": "On entering this stance, you may gain 2 vigor per status affecting you, including from this stance."
            }
        ],
        "talent1": "You may rush 2 towards your hated foe at the start of their turn, but only once a round.",
        "talent2": "While in this stance, you have regeneration.",
        "mastery": {
            "name": "Infectious Hatred",
            "desc": "While in Dark Knight, you have Aura 1. Foes that end their turn in the aura must save or gain hatred of you."
        },
        "tags": [hatredOfX, sturdy, vigilance_x, heroic, vigor, rush_x, regeneration, aura_x, stance]
    },
    {
        "name": "Strongarm",
        "actions": 1,
        "desc": "Grappling is a common and brutal strategy among the knaves, who will happily hurl their foes into trees, rocks, or their own allies.",
        "type": [],
        "effects": [
            {
                "type": "Effect",
                "desc": "Shove an adjacent foe in a full circle either clockwise or counter clockwise through each space around you, phasing through characters. Stop and collide if your foe would hit an obstruction."
            },
            {
                "type": "Effect",
                "desc": "Your foe takes 2 damage once for each foe or ally they pass through, to a maximum of 3 times, and those characters are shoved 1. Then, shove your foe 1."
            },
            {
                "type": "Collide",
                "desc": "Foes are weakened."
            },
            {
                "type": "Heroic",
                "desc": "Shove your foe 1 space, then 1 additional space for every character they passed through instead, to a maximum of 4 extra spaces."
            }
        ],
        "talent1": "Comeback: this ability gains range 2. Remove your target and place them into adjacency before activating this effect.",
        "talent2": "During the spin, you can cause your target to take damage and phase through objects the same way as characters, though those objects are not shoved.",
        "mastery": {
            "name": "Perfect Strongarm",
            "desc": "Perform two full circles instead, and you may rush 2 before the second circle."
        },
        "tags": [shove_x, collide, weakened, heroic, comeback, rush_x]
    }
]

const knave = {
    "jobName": "Knave",
    "title": "Absolute Bastard",
    "img": img,
    "icon": <GiEvilEyes/>,
    "desc": "<p>The advent of the Churning Age has coincided with the rise of a certain class of person with heavy pockets and a long list of 'problems' to solve. The Knaves are the solution. Hedge knights, rogue warriors, duelists, deserters, and veterans, they roam the land offering their services to whoever has the dust to spare. Though some of them are altruistically minded, they tend to go where the work, food, and fighting is thickest, and never stay for long in one location.</p><p>Knaves operate under a loose moral code and an even looser no-holds-barred fighting style, using hilts, head butts, and gauntleted fists to inflict pain, punishment, and humiliation on their opponents in equal measure. These braggadocios warriors spare no effort in flexing their incredible strength - if the price is right. For a freshly roasted chicken, a pocket full of dust, and a polish of their boots, they'll do just about anything.</p>",
    "traits": [
        {
            "name": "Martial Master",
            "desc": "You can take two stances at once.",
            "chapter": 1,
            "tags": [stance]
        },
        {
            "name": "Blackheart",
            "desc": "While you're suffering from a status, gain vigilance +1 at the end of your turn. If you are suffering from two or more, also deal bonus damage with all abilities.",
            "chapter": 1,
            "tags": [status, vigilance_x, bonus_damage]
        },
        {
            "name": "Taunt",
            "desc": "(1 action) - A foe in range 3 gains hatred of you.",
            "chapter": 1,
            "includedaction": actions.taunt,
            "tags": [action]
        },
        {
            "name": "Spite",
            "desc": "You can choose to use the Heroic effects of any ability when you use it. However, after it resolves, gain Hatred+ of the closest foe to you until the end of your next turn and you can't use Heroics again for the same duration. If multiple foes are equidistant, you can choose",
            "chapter": 1,
            "tags": [heroic, hatredOfX, ongoing]
        },
        {
            "name": "Way of the Crow",
            "desc": "If any ally is defeated, cure yourself and become unstoppable until the end of your next turn.",
            "chapter": 3,
            "tags": [defeated, cure, unstoppable]
        }
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Mock",
        "resolve": 2,
        "actions": 1,
        "desc": "There is no weapon greater than a well-timed and well-aimed insult.",
        "effects": [
            "A foe in range 3 becomes slashed+, weakened+, cannot gain or benefit from evasion, dodge, or stealth, and gains hatred+ of you. These effects continue until the end of their next turn.",
            "<b>Special: </b>On elite and legend foes, this ability lasts two turns instead."
        ],
        "ultimate": {
            "name": "Dread Mock",
            "desc": "Gains range 5 and also deals divine fray damage to your foe."
        },
        "tags": [ongoing, slashed, weakened, evasion, dodge, stealth, hatredOfX, divine]
    }
}

export default knave;