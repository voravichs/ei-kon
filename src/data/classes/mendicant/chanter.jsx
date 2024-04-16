import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, actions } = keywordData;

const { trueStrike, flying, sturdy, dodge} = statusConditions
const { rescue, boon} = rules;
const { blessing, charge, combo, cure, stance, cover, shove_x} = combatGlossary

const ch1Abilities = [

]

const chanter = {
    "jobName": "Chanter",
    "title": "Songweaver of the Great Chant",
    "img": "",
    "desc": "Descending from numerous holy orders that have their roots high in the chronicler monasteries, the chanters are part singer, part storyteller, and part priest. At the time of the Doom, when all knowledge was deemed lost and everything put to page was transformed into ash, the only thing that persisted was the power of song, poetry, and the spirit of survival. A select order of priests committed all the great and necessary knowledge of Kin to memory, creating a single, continuous song, known as the Great Chant. In myths, stories, and histories, they recorded the knowledge of the ancients, transforming it into liturgy.\nThe Chant performed its role, and it was through its power that the early bands of Kin survived and persevered through the darkest days. Today, however, it is so archaic, convoluted, and long that many dispute the meaning of its dogma, though none can deny its value as a mythic text. The Old Church of the chroniclers has splintered into factions that mostly squabble over its meaning and try to draw some angle from its numerous and sometimes contradictory adaptions into holy texts.\nNevertheless, the Chant still holds power - real, tangible power - to heal, mend, and uplift. There are still those that take to the road and use its awesome power for good, ringing the bells of awakening and purification, as they sing to victory.",
    "traits": [
        {
            "name": "Blessing of Faith",
            "desc": "Yourself and allies may spend a blessing token when using an ability to gain True Strike on that ability and fly 2 before using it. If they spend 3 tokens, the ability also triggers any charge effects.",
            "chapter": 1,
            "tags": [blessing, trueStrike, flying, charge]
        },
        {
            "name": "Songweave",
            "desc": "You are a master of weaving spell-songs together. You can spend a combo token as part of any ability to activate all the charge effects of that ability, even on a regular turn. If that ability was a combo, perform its base version instead of its combo version.",
            "chapter": 1,
            "tags": [combo, charge]
        },
        {
            "name": "Divine Grace",
            "desc": "Once a round, when you gain or spend a combo token, you may fly 2, then Bless yourself or an ally in range 3 of you.",
            "chapter": 1,
            "tags": [combo, flying, blessing, actions.bless]
        },
        {
            "name": "Uplift",
            "desc": "The first time a round you use any ability that allows you to fly, all allies can fly 1.",
            "chapter": 1,
            "tags": [flying]
        },
        {
            "name": "Gran Redempta",
            "desc": "Cure yourself and every ally on the map. Characters that are cured this way are also Rescued if they're defeated.",
            "chapter": 3,
            "tags": [cure, rescue]
        },
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "March of the Saints",
        "resolve": 2,
        "action": 1,
        "desc": "You sing of the deeds of the first heroes, from the Doom. The Great Chant weaves around your allies and transforms them into echoes of those mighty heroes.",
        "extra_effects": [
            {
                "type": "Stance",
                "desc": "You begin weaving an epic song, a saga of legendary heroes. When you take this action, and when this stance refreshes, you may invest an ally in range 5 with the power of one of the great saints. Each saint must be chosen at least once before it can be chosen again. The effect takes place immediately and lasts until the end of their next turn."
            },
            {
                "type": "Refresh",
                "desc": "This stance refreshes automatically at the start of your turns."
            }
        ],
        "effect": "Great Saints: \n<em>Parzival: </em> An allied character gains flying and cover from all directions. \n<em>Leon: </em>An allied character gains dodge and the ability to move diagonally. \n<em>Angrboda: </em>An allied character gains sturdy, and their attacks gain true strike and shove 1. \n<em>Farnese: </em>An ally gains 1 blessing and +1 boon on all attacks and saves.",
        "ultimate": {
            "name": "Divine Investment",
            "desc": "You also gain the benefit of any chosen saint, lasting until the end of your next turn."
        },
        "tags": [stance, flying, cover, dodge, sturdy, trueStrike, shove_x, blessing, boon]
    }
}

export default chanter;