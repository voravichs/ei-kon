import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { phasing, unerring, blind } = statusConditions
const { pit, summon } = rules;
const { immune_to_x , difficult_terrain, dangerous_terrain, bonus_damage, teleport_X, stealth} = combatGlossary

const ch1Abilities = [

]

const shade = {
    "jobName": "Shade",
    "title": "Nocturnal Assassin",
    "img": "",
    "desc": "Night-walkers, shadow-steppers, and masters of secret scroll arts, the Shades are spies, scouts, and assassins of unparalleled skill. Their number forms a secret and deadly society of Shadow Clans spread across Arden Eld, each practicing and refining the Night Venom Techniques. Joining the shades is presumed to be extremely difficult, but they tend to open their ranks to anyone that has been lost or abandoned.\nThe legends say Shades make a deal with the Weeper, the dead titan queen of night and air, and drink her tears, splitting their soul in two. Their shadow becomes animate, bestial and hungry. Over a week and a day, they must fast and train their shadow to obey them, transforming them into agile and silent warriors of the highest order. The Shades say the stories are rumors, and they get along with their Darksides. They do have a tendency to appear when least expected, in uncanny and unsettling ways.",
    "traits": [
        {
            "name": "Shadow Arts",
            "desc": "You have phasing and are immune to blinded.",
            "chapter": 1,
            "tags": [phasing, immune_to_x]
        },
        {
            "name": "Underworld",
            "desc": "Abilities used against foes in pits, difficult, or dangerous terrain gain unerring and deals bonus damage.",
            "chapter": 1,
            "tags": [ pit, difficult_terrain, dangerous_terrain, unerring, bonus_damage]
        },
        {
            "name": "Darkside",
            "desc": "When you first vacate a space on your turn, you may leave a shadow.",
            "chapter": 1,
            "tags": [summon, summons.shadow, summons.shadow_cloud]
        },
        {
            "name": "Meld",
            "desc": "Once a round, before or after using any ability on your turn, you can swap places with any shadow in range 3, teleporting.",
            "chapter": 1,
            "tags": [teleport_X, summons.shadow, summons.shadow_cloud]
        },
        {
            "name": "Umbral Soul",
            "desc": "Once a round, one of your allies can swap places with any of your shadows before or after using any ability, teleporting.",
            "chapter": 3,
            "tags": [teleport_X, summons.shadow, summons.shadow_cloud]
}
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Abyssal Ecstasy",
        "resolve": 2,
        "action": 1,
        "desc": "A prayer and a drop of blood, and soothing darkness cloaks the battlefield.",
        "effects": [
            "Yourself, all allies, and allied summons gain stealth, and all foes are blinded."
        ],
        "ultimate": {
            "name": "Ultima Ecstasy",
            "desc": "Summon shadows adjacent to all allies."
        },
        "tags": [stealth, blind, summon, summons.shadow, summons.shadow_cloud]
    }
}

export default shade;