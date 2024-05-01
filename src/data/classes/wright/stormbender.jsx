import keywordData from "../../keywords";
import img from "../../../assets/images/stormbender.PNG"
import { GiBigWave } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { pierce, flying, phasing} = statusConditions
const { pit} = rules;
const { summon, collide, aether, area_ability, bonus_damage, difficult_terrain, dangerous_terrain, aura_x, cover, resistance} = combatGlossary

const ch1Abilities = [

]

const stormbender = {
    "jobName": "Stormbender",
    "title": "Dire Navigator, Master of the Waves",
    "img": img,
    "icon": <GiBigWave/>,
    "desc": "<p className='text-sm'>The seas of Arden Eld are its most treacherous terrain. Boiling over with monsters, and wracked with unnatural and freakish weather, most folk prefer to give them wide berth. However, there are still those brave and hardy souls that live on the islands around Arden Eld, and the merchants, sailors, and travelers that rely on the sea for fast passage and the movement of cargo, the lifeblood of the continent's great cities.</p><p className='text-sm'>The storm benders are the great masters of the sea, the supreme navigators that make sailing even possible around Arden Eld. Water-attuned wrights, they are most at home on a deck, or clambering the rigging. Each of them are sailors of the highest caliber, coming from all over - old trade guilds, islander clans, and nautical churner enclaves.</p><p className='text-sm'>Bending the essence of the sea to their beck and call, the storm benders can clear the skies with a swipe of their hands, feel the currents ahead for aquatic monsters, turn weather away from the hull of the ship, and blow wind into its sails. It doesn't matter that many of them dabble in a little light piracy on the side - they are the undisputed masters of their element, and they wouldn't have it any other way.</p>",
    "traits": [
        {
            "name": "Selkie",
            "desc": "You have a bound elemental. At the start of any combat, summon it in range 3.",
            "chapter": 1,
            "tags": [summon, summons.selkie]
        },
        {
            "name": "Dash on the Rocks",
            "desc": "1/round when you cause a character to collide, you may gain 1 aether and deal 1 piercing damage as a burst 1 area effect centered on that character.",
            "chapter": 1,
            "tags": [collide, aether, pierce, area_ability]
        },
        {
            "name": "Sea Legs",
            "desc": "You deal bonus damage to characters in pits, difficult, or dangerous terrain. While inside any of your own terrain effects, you have flying.",
            "chapter": 1,
            "tags": [bonus_damage, pit, difficult_terrain, dangerous_terrain, flying]
        },
        {
            "name": "Pelagic Rage",
            "desc": "At the start of round 5 and for the rest of combat, you are buoyed up by a huge swell of elemental water. You gain aura 2. Yourself and allies in the aura gain flying and cover from all directions, and the area is difficult and dangerous terrain for foes.",
            "chapter": 1,
            "tags": [aura_x, flying, cover, difficult_terrain, dangerous_terrain]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Elemental",
        "resolve": 3,
        "action": 0,
        "desc": "On account of the magic that is in my body, \nTurn aside, detested of Sea and Storm, \nThou wretch, go with thy face diverted! \nI call the elements into the temple of my body. \nBe scattered like dust, and feed the wind!",
        "effects": [
            "You take on a fearsome elemental form, gaining the following benefits for the rest of combat: \nWhile you are an Elemental: \n-You gain flying and phasing. \n-You release aura 2 around you. The area is a terrain effect that moves with you that is difficult and dangerous terrain for foes, and allies gain cover from all directions in the area. \n-You can share space with characters. You have resistance to any character sharing your space, and allies have resistance while sharing your space.",
        ],
        "ultimate": {
            "name": "Shield of the Four Winds",
            "desc": "If you so choose, when an ally would be shoved, teleported, or removed from your area, you can completely prevent that ally from being moved. This effect can trigger only once a round."
        },
        "tags": [flying, phasing, aura_x, difficult_terrain, dangerous_terrain, cover, resistance]
    }
}

export default stormbender;