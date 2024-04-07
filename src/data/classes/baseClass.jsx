import keywordData from "../keywords";
import { bastion, demonslayer, colossus, knave } from "./stalwart"

const { statusConditions, combatGlossary } = keywordData;

const { rampart, vigilance_X } = statusConditions
const { heroic, armor_x, rush_x } = combatGlossary

const classes = {
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
        "jobs": [bastion, demonslayer, colossus, knave],
    },

    "vagabond": {
        "class": "vagabond"
    },

    "mendicant": {
        "class": "mendicant"
    },

    "wright": {
        "class": "wright"
    }
};

export default classes;