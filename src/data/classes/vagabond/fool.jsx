import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, combatGlossary, summons} = keywordData;

const { phasing, evasion, divine, trueStrike} = statusConditions
const { teleport_X, summon, finishing_blow, slay, gamble } = combatGlossary

const ch1Abilities = [

]

const fool = {
    "jobName": "Fool",
    "title": "Masked Avenger",
    "img": "",
    "desc": "Fools are dedicated defenders of the common people of Arden Eld, part folk hero, and part hired killer. They have no official organization, and cover their faces with masks to hide their identity, wearing bells and motley to cover their collections of deadly weapons and explosives.\nSome people fear the Fools, calling them self-interested thugs or anarchic cultists of the Laughing God. They may not be entirely wrong, but none can deny their flair for the theatrical.\nThey are feared rightly by all would-be tyrants, under-barons, and aspiring imperial lords. Wherever kin labor under oppression, someone will take up the mask and knives and sent cold jolts of fear into the hearts of the rich and comfortable.",
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
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Curtain Call",
        "resolve": 4,
        "action": 2,
        "desc": "Bring out the fireworks. Fire up the elden magic. Time for a showstopper.",
        "effects": [
            "Gamble, then draw a line area effect of that many spaces +2. Soar into the air, removing yourself from the battlefield, then place yourself adjacent to the first foe in that line, delivering a massive blow. This ability has different effects depending on their position on the line. If there are no valid targets after rolling, the resolve cost of this ability is refunded. \nRoll [D] + fray damage once, then apply it the number of times listed. \n3-5 spaces: x2, \n6-7 spaces: x3, \n8 spaces: x4 and character is stunned.",
        ],
        "ultimate": {
            "name": "Ultima Curtain Call",
            "desc": "After this ability resolves, summon half as many bombs as your gamble result anywhere on the battlefield."
        },
        "tags": [divine, gamble, trueStrike, summon, summons.bomb]
    }
}

export default fool;