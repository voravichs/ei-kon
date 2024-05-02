import keywordData from "../../keywords";
import img from "../../../assets/images/spellblade.PNG"
import { GiWindHole } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { divine, pierce, vulnerable, bloodied, shattered} = statusConditions
const { interrupt, curse } = rules;
const { infuse_x, slay, aether, teleport_X, dangerous_terrain, power_die, stance, cover, area_ability, bonus_damage, difficult_terrain, mark, aura_x, terrain_effect} = combatGlossary

const ch1Abilities = [
    {
        "name": "Blitz",
        "actions": 1,
        "type": ["attack", "pierce"],
        "range": 3,
        "desc": "A thousand needles of light, each striking a perfect blow.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Teleport 1, then deal 1 piercing damage to a foe in range 3, then teleport 1, then deal 1 piercing damage to a foe in range 3."
            },
            {
                "type": "Attack",
                "desc": "On hit: [D]. Miss: 1 damage."
            },
            {
                "type": "Effect",
                "desc": "Foe is vulnerable."
            }
        ],
        "infuse_effect": {
            "text": "Slay or Infuse 3",
            "num": 3,
            "name": "Gran Blitz",
            "desc": "Repeat the first effect."
        },
        "talent1": "When used against a bloodied foe, Blitz creates two lightning dangerous terrain spaces in free space in range 2 of them.",
        "talent2": "You can grant Blitz's first effect to any ally in range 2 instead.",
        "mastery": {
            "name": "Gungnir",
            "desc": "The last teleport you make with Blitz creates a small blast terrain effect of crackling lightning in free space, with at least one space adjacent. The area is dangerous terrain. At the start and end of your turn, you may deal 1 piercing damage to all characters in the area. The area disappears if a new one is created."
        },
        "tags": [teleport_X, pierce, slay, infuse_x, dangerous_terrain, vulnerable]
    },
    {
        "name": "Odinforce",
        "actions": 1,
        "type": ["power die", "stance"],
        "desc": "You thrust your weapon skyward, and pierce the heavens.",
        "effects": [
            {
                "type": "Stance",
                "desc": "Shoot a flurry of lightning bolts into the air and set out a d6 power die, starting at 3. When you enter this stance, or any time you teleport, you may call a bolt down, dealing 1 piercing damage to a foe in range 3 as an area effect, then reducing your power die by 1. This effect can trigger any number of times a turn. If you run out of bolts, Odinforce ends."
            },
            {
                "type": "Effect",
                "desc": "When you trigger a slay effect, gain +2 more bolts."
            },
            {
                "type": "Refresh",
                "desc": "This stance automatically refreshes at the start of your turns. When this stance refreshes, gain 2 more bolts, to a maximum of 6."
            }
        ],
        "talent1": "If you end a turn without attacking, gain +2 more Odinforce bolts.",
        "talent2": "Comeback: Odinforce gains 4 bolts instead of 2 on refresh.",
        "mastery": {
            "name": "Levinblades",
            "desc": "At round 4 or later, if you're in this stance, you may spend 1 action and end it to deal 1 piercing damage six times, to a character in range 6, ignoring cover. If you do so, you can't use the stance again for the rest of combat."
        },
        "tags": [power_die, stance, teleport_X, pierce, slay, cover]
    },
    {
        "name": "Nothung",
        "actions": 2,
        "type": ["attack", "aoe"],
        "range": 2,
        "area": "Arc 4",
        "desc": "You summon a blade of pure lightning energy, sweeping it in a shining arc.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Teleport 1"
            },
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. Miss: fray."
            },
            {
                "type": "Area Effect",
                "desc": "Fray"
            },
            {
                "type": "Effect",
                "desc": "Teleport 1, then deal 1 piercing damage again to your target for every foe or ally adjacent to them, to a maximum of four times."
            }
        ],
        "infuse_effect": {
            "text": "Slay or Infuse 3",
            "num": 3,
            "name": "Gram",
            "desc": "After the ability resolves, release a flurry of slashes in a burst 2 (self) area effect, dealing 1 piercing damage, twice, to all foes."
        },
        "talent1": "When used against a bloodied foe, Nothung deals bonus damage, and deals 1 piercing damage again to its target on hit.",
        "talent2": "Comeback: Increase teleport to 4",
        "mastery": {
            "name": "Excalibur",
            "desc": "All 1 piercing damage listed by this ability becomes divine."
        },
        "tags": [teleport_X, pierce, area_ability, divine, bloodied, bonus_damage]
    },
    {
        "name": "Ätherwand",
        "actions": 1,
        "range": 4,
        "type": ["terrain effect"],
        "desc": "You summon high winds to batter your foes.",
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Swipe your weapon to create a line 3 area of crackling winds in range, with the following features:",
                "details": [
                    "The area is difficult terrain.",
                    "Allies may use any space of the area for cover as if it were height 1 terrain.",
                    "Foes that end their turn in the area are shattered.",
                    "Once a round, when you include any space of the ätherwand in an area effect, you can infuse the triggering ability with stormy power, teleporting all characters targeted by that ability and any characters in the wall 1 space. The area lasts until created again.",
                ]
            }
        ],
        "infuse_effect": {
            "text": "Infuse X",
            "num": "X",
            "name": "Äthersturm",
            "desc": "Infuse X aether, and extend the area by 1 space for every aether infused, up to a maximum of +3 spaces."
        },
        "talent1": "When you use this ability again, it doesn't replace the old area, but extends it, as long as at least one space of the new area is adjacent to the old.",
        "talent2": "At the start of your turn, you can move the area 1 space in any direction. If it moves into the space of a character, it shoves them 1.",
        "mastery": {
            "name": "Hellerwind",
            "desc": "You can create a powerful gale instead. If you do, you can't extend or move the area, but it becomes impassable terrain."
        },
        "tags": [difficult_terrain, cover, shattered, teleport_X]
    },
    {
        "name": "Fulminate",
        "actions": 1,
        "type": ["mark"],
        "range": 6,
        "desc": "You charge your target with unstable magnetic energy, causing unstoppable attractive force.",
        "effects": [
            {
                "type": "Mark",
                "desc": "A character within range is marked. The character gains aura 2 while marked. At the start of your turn, or when marking your character, you may teleport all characters in the aura 1 space, all ending either closer or further away from the character than they started."
            }
        ],
        "talent1": "When marking a character, you can increase the aura to 3, and the teleport to 2, but it only affects allies.",
        "talent2": "When marking a character, you can condense the aura to 1, but increase the teleport to 2 spaces instead.",
        "mastery": {
            "name": "Hand of Tyr",
            "desc": "Ranged attacks against the target change depending on whether you marked a foe or ally. On a foe, attacks are pulled towards it. They have no maximum range if they have a listed range and target the foe, deal bonus damage, and ignore cover. On an ally, attacks made from range 2 or greater cannot critically hit (turn any critical hit into a regular hit), cannot deal bonus damage, and gain +1 curse."
        },
        "tags": [mark, aura_x, teleport_X, cover, bonus_damage, curse]
    },
    {
        "name": "Bifröst",
        "actions": 1,
        "type": ["area effect", "terrain effect"],
        "desc": "You slash a line of rampant multicolored lightning aether, a blinding arch of light that can carry you or your allies to safety.",
        "effects": [
            {
                "type": "Area Effect",
                "desc": "Sweep your blade to cut a line 3 crackling lightning arch, dealing 2 piercing damage to all characters in the area."
            },
            {
                "type": "Terrain Effect",
                "desc": "The arch remains in the air. Yourself and allies that enter any space in or adjacent to the area can grab on to it as a free action ability to immediately teleport to any other free space in or adjacent to the area. Then the area is consumed, removing it."
            }
        ],
        "infuse_effect": {
            "text": "Infuse 3 or Slay",
            "num": 3,
            "name": "Heimdall",
            "desc": "Create a new line 3 terrain effect, which cannot overlap the first. This second effect does not deal damage but has the same terrain effect as the first."
        },
        "talent1": "The teleport from Bifröst can interrupt other actions and does not stop movement.",
        "talent2": "Bifröst areas grow by 2 spaces, added anywhere to the total area in any pattern, at the end of each round. When they grow, deal 1 piercing damage to all characters inside.",
        "mastery": {
            "name": "Path to Erenhelion",
            "desc": "Bifröst bounces if its end space lands in the space of an object, creating a second line 3 area that extends the total area effect and terrain effect area."
        },
        "tags": [area_ability, teleport_X, pierce, terrain_effect]
    }
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
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Gran Levincross",
        "resolve": 4,
        "actions": 2,
        "desc": "<p>I summon thee, bloody gods of the cutting art,</p><p>Let the might of the divine realm crash upon the piteous earth,</p><p>Strike eighty thousand blows at once,</p><p>And split the air asunder!</p>",
        "effects": [
            {
                "type": "Effect",
                "desc": "Your blade extends and you make two massive cuts across the map, splitting the walls between worlds. Draw a cross section across the map, splitting it into four sections of any size. Deal [D]+fray divine damage to all characters caught in the cross, then remove all characters out of the affected area and place them in the nearest free space of your choice. Characters can pass a save to choose which side they end up on.<p>The affected area becomes a crackling wall of lightning that does not block line of sight, but blocks all movement except teleporting. This effect ends at the end of the next round. </p><p>Allies can use a free action to teleport across the wall from an adjacent space, placing them on the closest adjacent space on the other side. If any version of this ability has no valid space in which teleport a character to, still deal damage, but this ability doesn't create the lightning wall.",
            },
            
        ],
        "infuse_effect": {
            "text": "Slay or Infuse 3",
            "num": 3,
            "name": "Ragnarök",
            "desc": "After this ability resolves, scathing divine lightning hits a quarter of the map of your choice. <p>Characters within take [D]+fray Divine damage.</p>"
        },
        "ultimate": {
            "name": "Götterdämmerung",
            "resolve": 6,
            "desc": "",
            "infuse_effect": {
                "text": "Infuse 6",
                "num": 6,
                "name": "Götterdämmerung",
                "desc": "<p><b>Area effect</b>: After this ability resolves, scathing divine lightning hits every quarter of the map but one of your choice.</p>Characters within take 2[D]+fray Divine damage."
            },
        },
        "tags": [divine, teleport_X, area_ability]
    }
}

export default spellblade;