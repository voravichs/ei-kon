import keywordData from "../../keywords";
import img from "../../../assets/images/enochian.PNG"
import { GiFire } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { regeneration, defiance, divine, unerring, trueStrike, pierce, shattered, vulnerable, phasing} = statusConditions
const { rescue, wound, defeated, pit, curse} = rules;
const { infuse_x, aether, gamble, comeback, exceed, area_ability, shove_x, terrain_effect, sacrifice_x, teleport_X, cover, bonus_damage, stance, collide, mark, interrupt} = combatGlossary

const ch1Abilities = [
    {
        "name": "Pyre",
        "actions": 2,
        "type": ["attack"],
        "range": 6,
        "desc": "Power curls into a writhing ball in your hand, before it's unleashed on your enemies.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. On miss: fray."
            },
            {
                "type": "Area effect",
                "desc": "fray"
            },
            {
                "type": "Comeback or Exceed",
                "desc": "After the ability resolves, the area explodes again, dealing 2 piercing damage to all characters."
            },
        ],
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Pyrotic",
                "desc": "Increase range to 10 and blast size to Large Blast. Create a pit under the attack target after this ability resolves."
            },
        ],
        "talent1": "Comeback: Allies are immune to damage from this ability.",
        "talent2": "Exceed: You may shove all characters in the area 2 spaces.",
        "mastery": {
            "name": "Magnapyre",
            "desc": "Magnapyre benefits from Pyre talents.",
            "infuse_effects": [
                {
                    "text": "Infuse 6",
                    "num": 6,
                    "name": "Magnaflare",
                    "actions": 2,
                    "range": 12,
                    "area": "Large Blast",
                    "effects": [
                        {
                            "type": "Attack",
                            "desc": "On hit: 2[D] + fray. On miss: [D]+fray."
                        },
                        {
                            "type": "Area effect",
                            "desc": "[D]+fray"
                        },
                        {
                            "type": "Effect",
                            "desc": "Create a pit under your attack target"
                        },
                        {
                            "type": "Effect",
                            "desc": "After the ability resolves, the area explodes again, inflicting 2 piercing damage to all characters."
                        },
                        {
                            "type": "Comeback or Exceed",
                            "desc": "The area explodes again, dealing 2 piercing damage to all characters."
                        }
                    ],
                    "tags": [area_ability, comeback, exceed, pit]
                },
            ],
        },
        "tags": [pierce, comeback, exceed, pit, shove_x, infuse_x]
    },
    {
        "name": "Elden Rune",
        "actions": 1,
        "desc": "You carve a burning rune of power into the very ground beneath you.",
        "type": ["terrain effect"],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Inscribe an Elden Rune on the space underneath you. While standing on an Elden Rune space, the range of all abilities with a listed range is increased by +3. The rune lasts until the end of the scene. A foe can scrub out an Elden Rune by entering or exiting its space."
            },
            {
                "type": "Effect",
                "desc": "You can sacrifice 2 to cast a rune down as a free action."
            }
        ],
        "talent1": "You can teleport up to 3 spaces into an Elden Rune space as a free action.",
        "talent2": "While standing in an Elden Rune, the infuse costs of your spells are reduced by 1, to a minimum of 1",
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Great Rune",
                "desc": "Grant the following effect to your rune: your attacks also shatter their main target while standing in this rune."
            }
        ],
        "mastery": {
            "name": "Arkenrune",
            "desc": "You can put an Arkenrune down instead of a regular Elden Rune, but only one at a time, replacing the last Arkenrune you placed. Arkenrunes can't be scrubbed out, extend to a small blast area, and their benefits also extend to allies."
        },
        "tags": [terrain_effect, sacrifice_x, teleport_X, shattered, infuse_x]
    },
    {
        "name": "Lance",
        "actions": 1,
        "type": ["attack", "pierce", "aoe"],
        "area": "Line 8",
        "desc": "A flash scorches the eyeballs, and a thin line burns through rock, flesh, and armor.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Foe is vulnerable."
            },
            {
                "type": "Area Effect",
                "desc": "Fray"
            },
            {
                "type": "Effect",
                "desc": "Line of sight can't be blocked by objects, and ignores cover granted by objects or terrain."
            },
            {
                "type": "Comeback or Exceed",
                "desc": "Also deals bonus damage for every unique object it passed through."
            }
        ],
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Volvaga",
                "desc": "Gains width +1 and may melt any objects of your choice in its path, removing them."
            }
        ],
        "talent1": "When this ability passes through an object, it releases a soul ember, dealing 1 piercing damage to a character in range 3 of that object. Each character can only be struck by one ember by a single use of this ability.",
        "talent2": "If you are at 1 hp or lower, this ability deals maximum base damage (before critical hits).",
        "mastery": {
            "name": "Great Spirit Lance",
            "desc": "Great Spirit Lance benefits from Lance talents.",
            "infuse_effects": {
                "text": "Infuse 6",
                "num": 6,
                "name": "Great Spirit Lance",
                "actions": 2,
                "area": "Line 10, Width 3",
                "effects": [
                    {
                        "type": "Attack",
                        "desc": "On hit: 2[D] + fray. Miss: [D]+fray"
                    },
                    {
                        "type": "Area Effect",
                        "desc": "[D]+fray"
                    },
                    {
                        "type": "Effect",
                        "desc": "Line of sight can't be blocked by objects, and ignores cover granted by objects or terrain."
                    },
                    {
                        "type": "Effect",
                        "desc": "After the ability resolves, every foe or ally in the area explodes, taking 2 piercing damage as an area effect. If you catch at least three foes or allies in the area, every foe or ally in the area takes 2 piercing damage twice instead."
                    }
                ]
            }
        },
        "tags": [pierce, vulnerable, area_ability, cover, bonus_damage, infuse_x]
    },
    {
        "name": "Soul Burn",
        "actions": 1,
        "desc": "You stoke the furnace with the very essence of your being.",
        "type": ["stance"],
        "effects": [
            {
                "type": "Stance",
                "desc": "Burn your own life force into a fierce blaze. In this stance:",
                "details": [
                    "You sacrifice 2 at the end of your turn.",
                    "Your abilities automatically activate any comeback triggers.",
                    "After you sacrifice with this ability, or after any other of your abilities with a sacrifice effect resolves, you can spark a soul ember at a character in range 5, dealing 1 piercing damage.",
                ]
            }
        ],
        "infuse_effects": [
            {
                "text": "Infuse 4: Incandius",
                "num": 4,
                "desc":  "When entering this stance, shove all adjacent characters 3 and spark a soul ember at them, dealing 1 piercing damage to them. Collide: Characters are vulnerable."
            }
        ],
        "talent1": "If a foe is struck by two or more soul embers from this ability in the same turn, they become vulnerable.",
        "talent2": "Foes that end their turn adjacent to you while Soul Burn is active take 1 piercing damage and are shoved 1.",
        "mastery": {
            "name": "Soul Spark",
            "desc": "<b>Free Action:</b> You can willingly siphon off your burning life force to empower your next ability sacrificing 4, then ending the stance. The ability deals bonus damage, cannot miss (turn any attack miss into a hit), activates all exceed effects, and foes gain +1 curse on any saves."
        },
        "tags": [stance, sacrifice_x, comeback, pierce, shove_x, collide, vulnerable, infuse_x, bonus_damage, exceed, curse]
    },
    {
        "name": "Blazing Bond",
        "actions": 1,
        "range": 4,
        "desc": "You link the soul Aether of you and a companion with a chain of pure fire aether, drawing from the strength of one to bolster the other.",
        "type": ["mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "An ally in range is marked by you. While affected by this mark and in range, gain the Heartfire interrupt.",
            },
        ],
        "interrupt": {
            "name": "Heartfire",
            "count": 2,
            "type": ["interrupt"],
            "trigger": "You or your ally takes damage or sacrifices hp.",
            "effects": [
                {
                    "type": "Effect",
                    "desc": "You can choose to reduce that damage by 3, as if by armor, or the sacrifice cost by 3. If you do, the other partner sacrifices 3."
                },
                {
                    "type": "Comeback",
                    "desc": "Reduce partner sacrifice to 1."
                }
            ],
            "tags": [interrupt, sacrifice_x]
        },
        "talent1": "While marked, you can teleport yourself or your ally 2 spaces at the end of your turn, as long as you end closer to each other.",
        "talent2": "Comeback: Grant both you and your ally defiance when taking this action.",
        "mastery": {
            "name": "Great Soul Bond",
            "desc": "If one of the partners would take damage from an ability that would reduce them below 1 hp, the other can reduce themselves to 1 hp to grant that ally immunity to all damage from the triggering ability. The bond then snaps, ending this mark.",
        },
        "tags": [mark, interrupt, teleport_X, comeback, sacrifice_x, defiance]
    },
    {
        "name": "Aethershard",
        "actions": 1,
        "range": 6,
        "desc": "You crystallize ambient Aether with force of will, forcing it to take a useful form.",
        "type": ["object"],
        "effects": [
            {
                "type": "Object",
                "desc": "Sacrifice 3 and summon an Aethershard in a free space in range 6.",
            },
            {
                "type": "Comeback",
                "desc": "Reduce sacrifice to 1."
            },
        ],
        "object_details": {
            "name": "Aethershard",
            "height": 1,
            "desc": "When you include the Aethershard in the area effect of any ability, the ability resonates with the shards, dealing 2 piercing damage as an area effect, once, to all characters in the area for every one of your Aethershards caught in the same ability. Then destroy all Aethershards activated this way and gain 1 Aether."
        },
        "talent1": "When you take any action that spends Aether, you can first remove one of your aethershards, then place it in any free space up to range 2 from its original location.",
        "talent2": "Your abilities gain pierce against characters adjacent to Aethershards.",
        "mastery": {
            "name": "Aethershift",
            "desc": "If you start or end your turn adjacent to an Aethershard, gain phasing until the end of your next turn. The spaces of objects cost a maximum of 0 spaces for you to enter for the same duration."
        },
        "tags": [sacrifice_x, pierce, comeback, phasing]
    }
]

const enochian = {
    "jobName": "Enochian",
    "title": "Unbridled Destruction",
    "img": img,
    "icon": <GiFire/>,
    "desc": "<p>The Enochian Orders of wrights are the most chaotic of the mage orders. They have no official organization, most of their members being hedge wizards or self taught. Many Enochians disdain authority and work for hire, sleeping and eating where they can and relying on the communities they work for to support them. Those that work on contract with guilds, armies, or mercenary companies tend to value their independence.</p><p>The power that condenses inside an Enochian is related to the element of fire, a wild spark that grows and wanes with their emotions and energy, but with control can be focused into power that can carve mountains, scorch forests, and boil rivers. In times of desperation, the Enochians can feed this power with their own life force, a dangerous practice that the other orders of wrights look down upon. The Enochians, for their part, see other wrights as stiff and uncreative. They'd rather do it their way, after all.</p>",
    "traits": [
        {
            "name": "Inner Furnace",
            "desc": "Once a round, you may burn your own life force when you Infuse an ability. You can sacrifice 25% of your max hp to reduce the Aether cost of that ability by 2.",
            "chapter": 1,
            "tags": [infuse_x, aether, sacrifice_x]
        },
        {
            "name": "Embersoul",
            "desc": "Start combat with regeneration and defiance. Regain regeneration if rescued.",
            "chapter": 1,
            "tags": [regeneration, defiance, rescue]
        },
        {
            "name": "Phoenix Rage",
            "desc": "At the start of round 5, become suffused with immortal flame. Gain defiance at the start of each of your turns, and when you would take a wound, gamble. On a 4+, ignore it. If this is your last wound, this roll becomes a 2+ instead.",
            "chapter": 1,
            "tags": [defiance, wound, gamble]
        },
        {
            "name": "Soulfire",
            "desc": "Comeback: Your threshold to critical hit becomes 18+, and your threshold to exceed becomes 13+. If you're at 1 hp, these thresholds are reduced to 15+ and 10+.",
            "chapter": 1,
            "tags": [comeback, exceed]
        },
        {
            "name": "Bright Soul",
            "desc": "If you are defeated, you can choose to burn off all your aether to cause a massive Burst 2 (self) explosion area effect, dealing 4 piercing damage, then 4 piercing damage a number of times again to all characters inside equal to the amount of aether you burned.",
            "chapter": 3,
            "tags": [defeated, aether, area_ability]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Gigaflare",
        "resolve": 4,
        "action": 2,
        "desc": "<p>I, who stand at the apex of things,</p><p>Thou, who are in the deepest pits of despair,</p><p>Let thy very bones become ash!</p><p>O Flame, let the air become death!</p><p>Ignite, and be banished to Hell!</p>",
        "effects": [
            {
                "type": "Effect",
                "desc": "You summon the eldflame, the primeval force of creation, dealing [D]+fray divine damage to every character on the battlefield, ignoring line of sight. Characters in range 2 of you are exempt from this ability.",
            },
        ],
        "infuse_effects": [
            {
                "text": "Infuse 6",
                "num": 6,
                "name": "Tetraflare",
                "desc": "Deal [D] + fray twice instead."
            },
        ],
        "ultimate": {
            "name": "Meteor",
            "resolve": 6,
            "infuse_effects": [
                {
                    "text": "Infuse 8",
                    "num": 8,
                    "name": "Meteor",
                    "desc": "Deal [D]+fray four times instead."
                },
            ],
            "desc": "<em>Special effect</em>: You can pay the resolve, aether, and action cost of this spell with your entire life force, dying after this action resolves, obliterating your body, and scattering your soul. If you do, it deals 999 divine damage instead."
        },
        "tags": [divine, unerring, trueStrike]
    }
}

export default enochian;