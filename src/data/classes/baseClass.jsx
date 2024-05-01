import { GiAxeSword, GiBandit, GiHealingShield, GiCrescentStaff } from "react-icons/gi";

import keywordData from "../keywords";
import { bastion, demonslayer, colossus, knave } from "./stalwart"
import { fool, freelancer, shade, warden } from "./vagabond"
import { chanter, harvester, sealer, seer } from "./mendicant"
import { enochian, geomancer, spellblade, stormbender } from "./wright"

const { statusConditions, rules, combatGlossary, actions } = keywordData;

const { rampart, vigilance_X, dodge, stealth, bloodied } = statusConditions
const { movement, rescue, defeated } = rules;
const { heroic, armor_x, rush_x, bonus_damage, cure ,blessing, resistance, aether} = combatGlossary

const classes = {
    "stalwart": {
        "class": "stalwart",
        "icon": <GiAxeSword/>,
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
        "class": "vagabond",
        "icon": <GiBandit/>,
        "desc": "Rogue, Scoundrel, and Blade for Hire",
        "longdesc": "<p> Vagabonds are the mercenaries and wanderers of Arden Eld. They know how to aim a crossbow bolt through the helmet slit of a knight or the weak spot of a monster, how to move quietly and quickly, and how to fling a knife with deadly precision. </p> <p>Vagabonds boast high damage and even higher mobility. <strong>Skirmisher</strong> lets them move faster and further than other classes, while <strong>Dodge</strong> lets them avoid damage unless targeted directly. They make use of numerous tools such as <strong>Stealth</strong>, <strong>Evasion</strong>, and <strong>Finishing Blow</strong> to crush weak, isolated, or ranged enemies and avoid their counterattacks.</p>",
        "vit": 7,
        "hp": 28,
        "defense": 10,
        "speed": 4,
        "dash": 4,
        "fray": 2,
        "damagedice": 10,
        "basicattackrange": 4,
        "traits": [
            {
                "name": "Skirmisher",
                "desc": "A character with this trait can move diagonally and dash at full speed.",
                "tags": [movement]
            },
            {
                "name": "Dodge",
                "desc": "Immune to all damage from missed attacks, successful saves, and area effects.",
                "tags": [dodge]
            },
            {
                "name": "Prowl (1 Action)",
                "desc": "Gain stealth. Becomes a free action if no foes are in range 2.",
                "includedaction": actions.prowl,
                "tags": [stealth]
            },
            {
                "name": "Finesse",
                "desc": "You deal bonus damage to bloodied foes.",
                "tags": [bonus_damage, bloodied]
            },
        ],
        "jobs": [fool, freelancer, shade, warden],
    },

    "mendicant": {
        "class": "mendicant",
        "icon": <GiHealingShield/>,
        "desc": "Wandering Healer and Storyteller",
        "longdesc": "<p> Mendicants are the itinerant priests, exorcists, and healers of Arden Eld. They travel from town to town, healing sicknesses of the body and soul, cleansing the damage dealt by the ruins, consulting with local spirits, and setting up wards against evil. Many mendicants are highly learned scholars, but others come from folk practices, temple monks, green witch circles, or town priesthoods. They are a highly diverse lot, and attuned to the land and the people that they care for. </p><p> Mendicants are the only class that can consistently grant <strong>vigor</strong> and lift statuses with the potent <strong>cure</strong> effect. They protect allies and guide their attacks with the <strong>Sealed</strong> and <strong>Pacified</strong> statuses, while making use of powerful <strong>combos</strong>, <strong>auras</strong>, and <strong>marks</strong> to stack negative effects on foes while empowering allies.</p>",
        "vit": 10,
        "hp": 40,
        "defense": 8,
        "speed": 4,
        "dash": 2,
        "fray": 3,
        "damagedice": 6,
        "basicattackrange": 5,
        "traits": [
            {
                "name": "Diaga (1 action)",
                "desc": "Cure a character in range 4.",
                "includedaction": actions.diaga,
                "tags": [cure]
            },
            {
                "name": "Bless (1 action)",
                "desc": "Grant a blessing token to a character in range 4.",
                "includedaction": actions.bless,
                "tags": [blessing]
            },
            {
                "name": "Succor",
                "desc": "Mendicants may use Rescue to bring up a defeated ally at range 4 instead of adjacent.",
                "tags": [rescue, defeated]
            },
        ],
        "jobs": [chanter, harvester, sealer, seer],
    },

    "wright": {
        "class": "wright",
        "icon": <GiCrescentStaff/>,
        "desc": "Mage, thaumaturge, and master of the arcane arts",
        "longdesc": "<p> Wrights are mages who have mastered the manipulation of the raw power of creation: Aether. All souls are connected to Aether, and everyone is able to connect to it and feel it to some degree. Those with training, potential, and ability can learn to form and shape Aether as natural as they move their own flesh and blood. Wrights wield terrifying power - and they know it. </p><p> Wrights become stronger the longer fights go on by the power of <strong>Aether</strong>, which they can use to <strong>Infuse</strong> their abilities to unleash some of the most spectacular attacks in the game. Wrights focus heavily on <strong>blights</strong>, <strong>piercing</strong> damage, the <strong>shattered</strong> and <strong>vulnerable</strong> statuses, and <strong>Area of Effect</strong> abilities to punish foes that group up or rely on nearby allies.</p>",
        "vit": 8,
        "hp": 32,
        "defense": 7,
        "speed": 4,
        "dash": 2,
        "fray": 3,
        "damagedice": 8,
        "basicattackrange": 6,
        "traits": [
            {
                "name": "Slip",
                "desc": "Wright's movement does not trigger and ignores interrupts, vigilance and rampart.",
                "tags": [movement]
            },
            {
                "name": "Aetherwall",
                "desc": "Wrights gain resistance against all abilities from characters that are outside of range 2 from them.",
                "tags": [resistance]
            },
            {
                "name": "Chain Reaction",
                "desc": "1/round, if a wright damages two or more foes with an ability, they gain 1 Aether after the ability resolves.",
                "tags": [aether]
            },
        ],
        "jobs": [enochian, geomancer, spellblade, stormbender],
    }
};

export default classes;