import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary } = keywordData;

const { pierce, vigor, unstoppable, phasing, divine} = statusConditions
const { movement} = rules;
const { delay, area_ability, bonus_damage, aether, shove_x, resistance} = combatGlossary

const ch1Abilities = [

]

const geomancer = {
    "jobName": "Geomancer",
    "title": "Guardian of the Pure Earth",
    "img": "",
    "desc": "Geomancers belong to an old order of mystics, doctors, alchemists, and esoteric martial artists called the Keepers of the Elden Gate. These scholarly wrights are concerned with health and the flow of energy, not just through the body, but through the very earth itself. They consider themselves physicians of the highest order - their patient being the eternal land of Arden Eld.\nThese studious wrights attune themselves to earth Aether, aligning the energy channels of their body to crystalline perfection with vigorous exercise and sometimes bizarre health regimes. In battle, the land itself is their ally, spitting forth poisonous gases, cavernous upheavals of earth, and great spires of rock to crush their foes.\nNone are more concerned with the Churn than the geomancers, who view it as the greatest sickness known to Kin, and will take any opportunity to fight or study it with exuberance.",
    "traits": [
        {
            "name": "Aftershock",
            "desc": "When you use any attack, you can cause an aftershock in the space under your target. Gain <b>Delay: </b>Your next turn must be slow, but at the start of that turn, the aftershock explodes in a burst 1 area effect centered on that space, dealing piercing fray damage to characters within (other than you). If the area effect catches an object in the area, it deals piercing fray damage twice instead. Unlike most other delay effects, aftershock does not end your turn, and can stack with other delay effects.",
            "chapter": 1,
            "tags": [delay, pierce, area_ability]
        },
        {
            "name": "Resonance",
            "desc": "When you make an attack against a character at exactly range 3, it deals bonus damage, gain 1 Aether, and gain 3 vigor after the ability resolves.",
            "chapter": 1,
            "tags": [bonus_damage, aether, vigor]
        },
        {
            "name": "Orogenic Rage",
            "desc": "At the start of round 5 and for the rest of combat, become unstoppable and your aftershocks deal double damage.",
            "chapter": 1,
            "tags": [unstoppable]
        },
        {
            "name": "Stone Double",
            "desc": "When you first vacate a space on your turn, you can leave a height 1 statue object behind in the space you vacate.",
            "chapter": 1,
            "tags": []
        },
        {
            "name": "Stoneswim",
            "desc": "You have phasing, for objects, and the spaces of objects always cost a maximum of 1 movement for you to enter.",
            "chapter": 3,
            "tags": [phasing, movement]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Cataclysm",
        "resolve": 3,
        "action": 1,
        "desc": "I, protected by the holy trigram, \nSummon the ten thousand molten metal kings. \nRun amok with thy furies, and rend the immortal stone, \nTurn Heaven and Earth!",
        "effects": [
            "End your turn. You dive into the earth and off the battlefield. Remove yourself from play. Target a line area 3 spaces wide from one side of the battlefield to the next. Then gain Delay: Your next turn must be slow. At the start of that turn, you cause a rolling wave of earth to sweep across this area, from one side to the next. Characters within take [D] + fray as an effect and are shoved 1 in the direction of the line.",
            "After the first effect resolves, all objects in the area release an explosion for a medium blast area effect centered on them, dealing [D]+fray as an area effect. Characters hit by two or more explosions take 2[D]+fray instead. \nWhen this ability resolves, place yourself in any unoccupied space in the area.",
        ],
        "ultimate": {
            "name": "Molten Core",
            "desc": "After taking this move, you emerge with a shield of molten rock covering you. You gain unstoppable and resistance until the end of your next turn."
        },
        "tags": [divine, delay, shove_x, area_ability, unstoppable, resistance]
    }
}

export default geomancer;