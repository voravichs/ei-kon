import keywordData from "../../keywords";
import img from "../../../assets/images/warden.PNG"
import { GiWolfHead } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { divine, phasing, dazed, unerring, evasion } = statusConditions
const { summon, boon } = rules;
const { stealth, dash, cover, bonus_damage, finishing_blow, charge, terrain_effect, shove_x, mark, collide, stance, aura_x} = combatGlossary

const ch1Abilities = [
    {
        "name": "Apex",
        "actions": 1,
        "range": 3,
        "desc": "Your strike is a clarion call to the forest, the plains, and the deep places of the Green, bringing forth their denizens to fight for you.",
        "type": ["attack", "+1 boon"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Foe is dazed."
            },
            {
                "type": "Attack",
                "desc": "On hit: [D]+ fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Summon a beast in an adjacent space to your target after the attack resolves."
            },
            {
                "type": "Finishing Blow or Charge",
                "desc": "Summon one more beast, then gain stealth."
            }
        ],
        "talent1": "Terrain effect: You can replace any beast you summon with a space of dangerous terrain instead.",
        "talent2": "If you attack a foe at exactly range 3, this ability gains unerring and you may shove your foe 1 in any direction after this ability resolves.",
        "mastery": {
            "name": "Loaded Quiver",
            "desc": "If you end your turn without attacking, the next time you use Apex, summon +1 more beasts, and deal 2 damage, once, to your target for every beast you summon."
        },
        "tags": [boon, dazed, summons.beast, finishing_blow, charge, stealth, terrain_effect, unerring, shove_x]
    },
    {
        "name": "Gwynt",
        "actions": 1,
        "type": [],
        "desc": "With catlike reflexes, you pounce, spurring allies to action.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Dash up to 2 spaces, then deal 2 damage to an adjacent foe."
            },
            {
                "type": "Effect",
                "desc": "An ally or allied summon in range 3 of your foe may also dash 2. If that puts them adjacent to your target, they also deal 2 damage to them."
            },
            {
                "type": "Finishing blow or Charge",
                "desc": "You and all chosen allies or summons gain stealth after this ability resolves."
            }
        ],
        "talent1": "If made from stealth, increase the dashes and range of this ability by +1",
        "talent2": "You and your ally or summon may each shove your target 1 space.",
        "mastery": {
            "name": "Great Gwynt",
            "desc": "Increase dashes and ranges by +1, and the effect can be used on an additional ally or allied summon in range."
        },
        "tags": [dash, stealth, finishing_blow, charge, shove_x]
    },
    {
        "name": "Circle the Oak",
        "actions": 2,
        "type": ["attack"],
        "desc": "Ten palm strikes with the heel of the hand or the haft of the axe will shatter even the most tenacious bark.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Dash 2"
            },
            {
                "type": "Attack",
                "desc": "On hit: 2[D]. Miss: 1 damage."
            },
            {
                "type": "Effect",
                "desc": "If you're adjacent to your foe, dash in a full circle clockwise through every adjacent space to your foe, phasing through allies or allied summons, or as far as possible until stopped. Each time you pass through an ally or summon's space, deal fray damage to your foe, up to a maximum of four times. Stop if you would enter the space of a foe or obstruction."
            },
            {
                "type": "Finishing Blow or Charge",
                "desc": "Increase initial dash to 5. After the ability resolves, you may shove your foe 2."
            }
        ],
        "talent1": "Allies you pass through with Circle the Oak may dash 1 after this ability resolves.",
        "talent2": "If you passed through two or more allies or allied summons, also gain evasion until the end of your next turn.",
        "mastery": {
            "name": "Timber Split",
            "desc": "Enemies no longer stop this move, and you may phase through their spaces. Enemies you pass through are shoved 1, take fray damage, and are dazed."
        },
        "tags": [dash, shove_x, phasing, finishing_blow, charge, evasion, dazed]
    },
    {
        "name": "Mist Strider",
        "actions": 1,
        "range": 3,
        "desc": "Call on the beasts of the deep mists and rains, whose form is shadow and water.",
        "type": ["terrain effect", "summon"],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Create a small blast misty cloud in free space in range, with the following effects: The spaces of the area always cost a maximum of 1 movement for you and allies to move across, and characters have phasing while moving this way. Foes inside are blinded. Clouds created with this ability last until this ability is used again."
            },
            {
                "type": "Charge",
                "desc": "Create a second cloud."
            },
            {
                "type": "Summon",
                "desc": "At the start of your turn, you can consume a cloud as a free action to condense it into a fey creature, summoning a beast in any of its spaces and ending this effect."
            }
        ],
        "talent1": "Once a round, when you enter or exit the area, you can gain stealth.",
        "talent2": "Foes in the area count all characters as having evasion.",
        "mastery": {
            "name": "River Guardians",
            "desc": "This ability creates a beast inside when an area is created. Foes that start their turn inside the area that end their turn outside of it take 2 damage and are dazed."
        },
        "tags": [terrain_effect, summon, summons.beast, phasing, charge, stealth, evasion, dazed]
    },
    {
        "name": "Stampede",
        "actions": 1,
        "range": 4,
        "desc": "With a bellow or a clenched fist, you summon an immense spirit to pound your enemies.",
        "type": ["mark", "summon"],
        "effects": [
            {
                "type": "Mark",
                "desc": "You mark a foe in range. Once a round, at the end of that foe's turn, a rampaging spirit beast charges in from any edge of the battlefield. Create a line area effect drawn from the edge of the battlefield that includes your foe. The beast charges down the line until it enters an adjacent space to your foe, shoving all characters 1 to either side of the line."
            },
            {
                "type": "Summon",
                "desc": "Then the beast deals 2 damage to your foe, shoves them 1, then coalesces into a real creature, becoming a beast summon."
            },
            {
                "type": "Collide or Charge",
                "desc": "Foes affected take 2 damage after this ability resolves."
            }
        ],
        "talent1": "When you trigger a finishing blow on a foe, you may transfer the mark to them as a free action.",
        "talent2": "If the beast passes through two or more characters before reaching your foe it deals 4 damage and shoves them 2 instead.",
        "mastery": {
            "name": "Lord of the Steppe",
            "desc": "Yourself and allies can ride the beast if it passes through their space, removing themselves from the battlefield instead of taking damage and shove. When it ends its movement, they hop off and must place themselves in an adjacent space, or as close as possible."
        },
        "tags": [mark, summon, summons.beast, shove_x, charge, collide, finishing_blow]
    },
    {
        "name": "Strength of the Pack",
        "actions": 2,
        "desc": "Your senses sync with those of the herd, and you strike as one.",
        "type": ["stance", "aura"],
        "effects": [
            {
                "type": "Stance",
                "desc": "In this stance, gain aura 2. When entering this stance, or when it refreshes, summon a beast in free space in the aura, then you and all allies and summons in the aura may dash 1 space. Foes in the aura take +1 damage from summons."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance at the start of your turn."
            },
            {
                "type": "Special",
                "desc": "While adjacent to 3 or more summons, the action cost of this ability is reduced to 1."
            }
        ],
        "talent1": "When you first enter this stance, increase the dash granted to 4.",
        "talent2": "While you have three or more summons in this aura, you have evasion.",
        "mastery": {
            "name": "Cú Chulainn",
            "desc": "Strength of the Pack becomes a free action at round 4 or later and its aura affects the entire battlefield."
        },
        "tags": [stance, aura_x, summon, summons.beast, dash, evasion]
    }
]

const warden = {
    "jobName": "Warden",
    "title": "Friend to Beast and Bough",
    "img": img,
    "icon": <GiWolfHead/>,
    "desc": "<p>The Wardens are the protectors and keepers of the Deep Green, the old and untamed parts of Arden Eld, lorded over by the beasts and the ancient trees. They are both the keepers and the servants of the herd and root, tending to their health, and culling them when it becomes necessary. They sleep under the stars and make their home under bough and root, making staunch allies of the ferocious beasts of the deep wilds through a combination of rigorous training and mutual respect. Their fierce defense of the wild sometimes puts them at odds with civilization, which they tend to have a distaste for.</p><p>Wardens are the keepers of the green kenning, the old ranger arts, that allow one to travel noiselessly, hide in plain sight, live off the land, and become immune to even the most deadly of toxins. They are solitary and powerful fighters. It is not uncommon for a Warden on a long sojourn to go without speaking the tongue of Kin for years at a time.</p>",
    "traits": [
        {
            "name": "Beast Master",
            "desc": "At the start of every combat, summon a great beast in range 2, a trained animal companion. This summon persists even if you're defeated.",
            "chapter": 1,
            "tags": [summon, summons.great_beast]
        },
        {
            "name": "Path of the Aesi",
            "desc": "While you have stealth the dash action becomes a free action.",
            "chapter": 1,
            "tags": [stealth, dash]
        },
        {
            "name": "Ambush Master",
            "desc": "Your abilities made from stealth ignore cover, and deal bonus damage.",
            "chapter": 1,
            "tags": [cover, bonus_damage]
        },
        {
            "name": "Green Kenning",
            "desc": "You and your summons ignore all movement penalties from terrain. Any time you grant a dash, it also gains this benefit.",
            "chapter": 1,
            "tags": [summon, dash]
        },
        {
            "name": "Deep Stealth",
            "desc": "While in stealth, you cannot be directly targeted at all, even from adjacent spaces.",
            "chapter": 3,
            "tags": [stealth]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Lycanthropy",
        "resolve": 3,
        "action": 1,
        "desc": "You muster up the primal magic of the Deep Green. The power of fang, tooth scale, fur, and claw pours into you, granting you massively increased speed and power.",
        "effects": [
            "You become a beast hybrid of primal fury. You gain a greatly enhanced dash, with benefits: \nDash always becomes a free action. \nAll dashes granted as part of any of your abilities, summons, or actions (including this one!) may be increased by +1, and grant phasing while moving. \nWhen you take the dash action, all allies and allied summons can dash 1. Then, any foe adjacent to one or more characters that dashed this way takes 2 damage.",
        ],
        "ultimate": {
            "name": "Ultima Lycanthropy",
            "desc": "When you shape change, you can also allow allies to partly shift. The first two effects from Lycanthropy affect all allied characters."
        },
        "tags": [divine, dash, phasing]
    }
}

export default warden;