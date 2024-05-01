import keywordData from "../../keywords";
import img from "../../../assets/images/spellblade.PNG"
import { GiWindHole } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { divine} = statusConditions
const { interrupt } = rules;
const { infuse_x, slay, aether, teleport_X} = combatGlossary

const ch1Abilities = [

]

const spellblade = {
    "jobName": "Spellblade",
    "title": "Swordmaster, Wind Dancer",
    "img": img,
    "icon": <GiWindHole/>,
    "desc": "<p>Spellblades are a martial order of highly trained wrights. Many of them come from the Guild Academies in the great cities of Arden Eld, where they often take prestigious posts in the local militias and city watch. Other wrights tend to view Spellblades as stiff, unfeeling military types, but spell blades themselves know they are consummate professionals and unparalleled masters of their art.</p><p>The lightning Aether that the spellblades wield is highly volatile, and requires intense training and focus to control. Once a spell blade has learned their craft, however, the speed, power, and precision at which they can act is intoxicating, crossing great spans of space in an instant, riding the Aetherial currents with a flash of gleaming steel.</p>",
    "traits": [
        {
            "name": "Aether Deflection",
            "chapter": 1,
            "interrupt": {
                "name": "Aether Deflection",
                "count": 1,
                "type": ["interrupt"],
                "trigger": "You are targeted by an ability from a character in range 2.",
                "effects": [
                    "Gain resistance against damage from that ability. You only have one use of this interrupt per combat. However, you can spend 2 Aether any time to regain it."
                ],
                "tags": [interrupt]
            },
        },
        {
            "name": "Conqueror's Edge",
            "desc": "The Infuse cost of your abilities is reduced by 1 if there's a foe in range 2. Additionally, many of your infuses can be triggered as slay effects instead, and you may infuse 3 Aether to trigger the slay effect of any ability. Abilities with infuse or slay effects cannot trigger both at once.",
            "chapter": 1,
            "tags": [infuse_x, slay, aether]
        },
        {
            "name": "Storm Hilt Rage",
            "desc": "At the start of round 5 and for the rest of combat, any effects that teleport you have the range of the battlefield, and you may teleport to any space before using any ability.",
            "chapter": 1,
            "tags": [teleport_X]
        },
        {
            "name": "Klingenkunst",
            "desc": "This ability can interrupt other abilities or movement on your turn without stopping them.",
            "chapter": 1,
            "tags": [teleport_X]
        },
        {
            "name": "Great Wind Riding",
            "desc": "Once a turn, when you teleport, you can also teleport an adjacent ally with you, placing them in a free adjacent space after your teleport resolves.",
            "chapter": 3,
            "tags": [teleport_X]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Gran LevinCross",
        "resolve": 4,
        "action": 2,
        "desc": "I summon thee, bloody gods of the cutting art, \nLet the might of the divine realm crash upon the piteous earth, \nStrike eighty thousand blows at once, \nAnd split the air asunder!",
        "effects": [
            "Your blade extends and you make two massive cuts across the map, splitting the walls between worlds. Draw a cross section across the map, splitting it into four sections of any size. Deal [D]+fray divine damage to all characters caught in the cross, then remove all characters out of the affected area and place them in the nearest free space of your choice. Characters can pass a save to choose which side they end up on. \nThe affected area becomes a crackling wall of lightning that does not block line of sight, but blocks all movement except teleporting. This effect ends at the end of the next round. \nAllies can use a free action to teleport across the wall from an adjacent space, placing them on the closest adjacent space on the other side. If any version of this ability has no valid space in which teleport a character to, still deal damage, but this ability doesn't create the lightning wall.",
        ],
        "infuse_effects": [
            {
                "text": "Slay or Infuse 3",
                "num": 3,
                "name": "Ragnarök",
                "desc": "After this ability resolves, scathing divine lightning hits a quarter of the map of your choice. Characters within take [D]+fray Divine damage."
            },
        ],
        "ultimate": {
            "name": "Götterdämmerung",
            "resolve": 6,
            "infuse_effects": [
                {
                    "text": "Infuse 6",
                    "num": 6,
                    "name": "Götterdämmerung",
                    "desc": "Area effect: After this ability resolves, scathing divine lightning hits every quarter of the map but one of your choice. Characters within take 2[D]+fray Divine damage"
                },
            ],
            "desc": ""
        },
        "tags": [divine]
    }
}

export default spellblade;