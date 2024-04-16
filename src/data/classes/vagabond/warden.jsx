import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { divine, phasing } = statusConditions
const { summon } = rules;
const { stealth, dash, cover, bonus_damage} = combatGlossary

const ch1Abilities = [

]

const warden = {
    "jobName": "Warden",
    "title": "Friend to Beast and Bough",
    "img": "",
    "desc": "The Wardens are the protectors and keepers of the Deep Green, the old and untamed parts of Arden Eld, lorded over by the beasts and the ancient trees. They are both the keepers and the servants of the herd and root, tending to their health, and culling them when it becomes necessary. They sleep under the stars and make their home under bough and root, making staunch allies of the ferocious beasts of the deep wilds through a combination of rigorous training and mutual respect. Their fierce defense of the wild sometimes puts them at odds with civilization, which they tend to have a distaste for.\nWardens are the keepers of the green kenning, the old ranger arts, that allow one to travel noiselessly, hide in plain sight, live off the land, and become immune to even the most deadly of toxins. They are solitary and powerful fighters. It is not uncommon for a Warden on a long sojourn to go without speaking the tongue of Kin for years at a time.",
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