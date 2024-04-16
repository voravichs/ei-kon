import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, actions, summons } = keywordData;

const { pierce, cure, divine } = statusConditions
const { } = rules;
const { bonus_damage, slay, blessing, mark, summon } = combatGlossary

const ch1Abilities = [

]

const harvester = {
    "jobName": "Harvester",
    "title": "Arbiter of Life and Death",
    "img": "",
    "desc": "Servants of Tsumi, the Moon Titan, the Harvesters are the death priests of Arden Eld. They travel from land to land, sanctifying burial sites, performing funeral rites, and helping lingering spirits move on. The land is full of the malice and unfulfilled wishes of the long suffering dead, and so the services of the harvesters are in high demand.\nTsumi is the protector of cycles, and so the Harvesters also perform fertility blessings, oversee harvest festivals, and see to the cultivation and protection of the land and nature. They plant flowers over battlefields, and tend groves of beautiful fruit trees planted over graveyards. This dual nature makes Harvesters fierce warriors, able to make the battle bloom or rot with a single swipe of their greatscythes.",
    "traits": [
        {
            "name": "Blessing of Rebirth",
            "desc": "Yourself and allies can spend 1 blessing when using any ability to grant it pierce and bonus damage. They may spend 3 blessings instead to additionally trigger any slay effects.",
            "chapter": 1,
            "tags": [pierce, bonus_damage, slay, blessing]
        },
        {
            "name": "Mark of Tsumi",
            "desc": "At the end of your turn, deal 2 piercing damage to all foes marked by you, and bless either yourself, or all allies marked by you.",
            "chapter": 1,
            "tags": [pierce, mark, blessing]
        },
        {
            "name": "Gardener of Kin",
            "desc": "You can stack 2 marks on characters. Foes marked by you take +1 damage from summons.",
            "chapter": 1,
            "tags": [mark, summon]
        },
        {
            "name": "Balance",
            "desc": "All your abilities gain slay: cure yourself or any ally.",
            "chapter": 1,
            "tags": [slay, cure]
        },
        {
            "name": "Defy the Cycle",
            "desc": "You call upon your power to forbid the natural order of life and death from working. Until the start of your next turn, characters cannot be reduced below 1 hp. Divine damage bypasses this ability.",
            "includedaction": actions.defy_the_cycle,
            "chapter": 3,
            "tags": [divine]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Death Sentence",
        "resolve": 3,
        "action": 0,
        "desc": "A flash of the scythe, and the line between life and death is blurred.",
        "effects": [
            "You slash an adjacent foe with your weapon, knocking their soul out of their body. Draw a line 4 area effect from your foe facing directly away from you and summon the Severed Soul summon in the last available space.",
        ],
        "ultimate": {
            "name": "Soul Bloom",
            "desc": "If the foe is defeated while their soul is out, summon 4 plants anywhere on the battlefield."
        },
        "tags": [summon, summons.severed_soul, summons.plant]
    }
}

export default harvester;