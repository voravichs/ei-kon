import keywordData from "../../keywords";
import img from "../../../assets/images/stormbender.PNG"
import { GiBigWave } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { pierce, flying, phasing, shattered, vulnerable} = statusConditions
const { pit, curse} = rules;
const { summon, collide, aether, area_ability, bonus_damage, difficult_terrain, dangerous_terrain, aura_x, cover, resistance, shove_x, infuse_x, terrain_effect, interrupt} = combatGlossary

const ch1Abilities = [
    {
        "name": "Rime",
        "actions": 2,
        "type": ["attack", "summon", "aoe"],
        "area": "Line 6",
        "desc": "You pull an enormous weapon made of pure ice out of the air, and hurl it through foes.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D]+fray. Miss: Fray."
            },
            {
                "type": "Area Effect",
                "desc": "Fray."
            },
            {
                "type": "Effect",
                "desc": "Shove all characters 1 to either side of the line. You can shove in different directions for all characters. Then shove the attack target 1 and summon a salt sprite in any space in range 2 from them."
            },
            {
                "type": "Collide",
                "desc": "Summon a Salt Sprite."
            }
        ],
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Dagon",
                "desc": "This ability gains range 6, and gains collide: creates a watery pit under this character after this ability resolves."
            }
        ],
        "talent1": "If the end space of Rime hits a pit or object, the weapon bounces back and deals 1 piercing damage, twice, as an area effect to all affected characters again.",
        "talent2": "If the end space of Rime hits a pit or object, it explodes into a shower of icicles, dealing 1 piercing damage to one or two characters as an area effect in range 3 of that pit or object, and summoning a salt sprite adjacent to each of those characters.",
        "mastery": {
            "name": "Magnarime",
            "infuse_effects": [
                {
                    "text": "Infuse X",
                    "num": "X",
                    "name": "Magnarime",
                    "desc": "Rime can be infused with massive aether, becoming Infuse X. If so: The area gains range 6 and becomes Arc 4, plus one per aether infused. Summon a pit in the area after the ability resolves for every two aether infused. Deal 1 piercing damage to all characters in the area again after the ability resolves for every two aether infused."
                }
            ],
        },
        "tags": [summon, summons.salt_sprite, shove_x, collide, infuse_x, pierce, area_ability, ]
    },
    {
        "name": "Tsunami",
        "actions": 2,
        "type": ["terrain effect"],
        "desc": "The stormbenders can ride swells of water as easily as any terrestrial steed. For those not as gifted, the experience is less pleasant.",
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "<p>Create a huge swell of elemental water. The area is a medium blast terrain effect that is difficult and dangerous terrain that you may place anywhere as long as its edge is adjacent to an edge of the map.</p><p>When you use this ability, choose another edge of the map. At the start of your turns, your tsunami moves 4 spaces in a straight line towards that edge. When a space of the tsunami would move off the map, the effect ends.</p><p>Any non-flying characters in Tsunami when it moves are dragged with it, shoving them. If they are blocked by obstructions, they collide which could cause Tsunami to move on without them. <b>Collide</b>: character is shattered.</p><p>All your Tsunamis disappear if you use this ability again, or they reach an edge of the map.</p>"
            },
        ],
        "infuse_effects": [
            {
                "text": "Infuse 1",
                "num": 1,
                "name": "Stormlash",
                "desc": "Free Action. Choose an edge of the map. Your active tsunamis move 2 spaces in that direction."
            }
        ],
        "talent1": "Tsunami creates a pit in its center space after completing its movement. The pit remains even if Tsunami moves on.",
        "talent2": "Foes inside Tsunami take +1 curse on saves.",
        "mastery": {
            "name": "Legendary Storm",
            "desc": "At round 4+, Tsunami becomes 1 action, moves anywhere from 1 to 4 spaces instead of a flat 4, and also affects flying foes."
        },
        "tags": [difficult_terrain, dangerous_terrain, shove_x, collide, shattered, terrain_effect, pit, curse, flying]
    },
    {
        "name": "Cryo",
        "actions": 1,
        "type": ["attack", "pierce","aoe"],
        "range": "Line 8",
        "desc": "You shoot a spear of frozen water aether at your foe, stirring up ambient water aether in the air.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Foe is shattered and shoved 1 towards you."
            },
            {
                "type": "Attack",
                "desc": "Auto hit: 1 damage."
            },
            {
                "type": "Area Effect",
                "desc": "1 damage"
            },
            {
                "type": "Effect",
                "desc": "Gain 1 Aether"
            },
            {
                "type": "Effect",
                "desc": "If any character is already shattered, create a pit under them."
            }
        ],
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Cryotic",
                "desc": "Change area to Line 8, increase damage to fray damage, and gains effect: summon a salt sprite for every character in the area adjacent to those characters."
            }
        ],
        "talent1": "At round 4 or later, this ability generates +1 Aether when used.",
        "talent2": "At round 4 or later, this ability shatters all characters in its area.",
        "mastery": {
            "name": "Magnacryo",
            "desc": "Magnacryo benefits from all Cryo Talents.",
            "infuse_effects": [
                {
                    "text": "Infuse X",
                    "num": "X",
                    "name": "Magnacryo",
                    "actions": 2,
                    "range": "Line 4",
                    "desc": "Pierce",
                    "effects": [
                        {
                            "type": "Special",
                            "desc": "Increase the line length by 2 and attack deals bonus damage for every two aether spent"
                        },
                        {
                            "type": "Attack",
                            "desc": "On hit: 2[D] + fray. Miss: [D]+fray."
                        },
                        {
                            "type": "Effect",
                            "desc": "Attack target is shattered."
                        },
                        {
                            "type": "Area Effect",
                            "desc": "[D]+fray"
                        },
                        {
                            "type": "Effect",
                            "desc": "The attack target is impaled with an icy harpoon, then shoved along the line as far as possible towards you, until they collide or are stopped by an obstruction."
                        }
                    ]
                }
            ]
        },
        "tags": [pierce, shattered, shove_x, pit, summon, summons.salt_sprite, collide, aether]
    },
    {
        "name": "Geyser",
        "actions": 1,
        "type": ["object", "summon"],
        "desc": "You awaken the water aether lying dormant in the land or sea, causing it to surge up in a vigorous burst.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Summon a height 1 geyser object in a free space in range 4."
            },
            {
                "type": "Effect",
                "desc": "After the geyser is removed, summon a Salt Sprite in its space."
            }
        ],
        "object_info": {
            "name": "Geyser",
            "height": 1,
            "desc": "If any character either starts or ends their turn on a geyser, you can cause it to erupt, removing that character from the battlefield, then placing them one or two spaces away. Then, remove the geyser."
        },
        "infuse_effects": [
            {
                "text": "Infuse 3",
                "num": 3,
                "name": "Volcanic Geyser",
                "desc": "Create a Volcanic Geyser instead. When it erupts, it removes and places all characters in a medium blast area effect centered on it, and creates dangerous terrain under foes."
            }
        ],
        "talent1": "Increase the height of all geysers by +1 at the start of your turn. Allies standing on a geyser have cover from all directions.",
        "talent2": "Once a round, when a character collides with a geyser, summon a Salt Sprite in range 2 from them.",
        "mastery": {
            "name": "Great Geyser",
            "desc": "Allies can be placed up to three spaces away by a geyser and after landing gain flying until the end of their next turn."
        },
        "tags": [cover, dangerous_terrain, collide, summons.salt_sprite, flying]
    },
    {
        "name": "Gust",
        "actions": 1,
        "type": ["terrain effect"],
        "desc": "The stormbenders are friend to breeze and gale, and have learned how to coax the wind into doing their bidding.",
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Create a line 3 terrain effect. Characters that enter any end space of the line gain phasing, then are shoved to the other end space of the line, or as far as possible. Once they stop, they are flung out and shoved 1 in a direction of your choice outside of the area. Characters entering a middle space can be shoved in a direction of your choice."
            },
            {
                "type": "Collide",
                "desc": "Character releases a wind blast as a burst 1 area effect centered on them, shoving all characters inside 1 space away from them and dealing 2 piercing damage."
            }
        ],
        "infuse_effects": [
            {
                "text": "Infuse 4",
                "num": 4,
                "name": "Great Gust",
                "desc": "Gust can be created over characters, and immediately activates its effect when it is created, as if characters inside had entered its space."
            }
        ],
        "talent1": "Gust can be used for cover by allies as if it were height 1 terrain.",
        "talent2": "Yourself and allies that are shoved by gust can fly 2 after stopping instead of being shoved.",
        "mastery": {
            "name": "Northsoul",
            "desc": "Gust's area is not replaced if the ability is used again, though you cannot have more than three areas active."
        },
        "tags": [terrain_effect, phasing, shove_x, flying, pierce, cover]
    },
    {
        "name": "Heave-Ho",
        "actions": "Interrupt 1",
        "type": ["interrupt"],
        "count": 1,
        "trigger": "A foe damages you or an ally adjacent to either you or a summon you control with an ability",
        "desc": "Better get your sea legs.",
        "effects": [
            {
                "type": "Effect",
                "desc": "After the triggering ability resolves create a crashing wave in a medium blast area effect placed adjacent to you or your summon. Characters caught in the area are shoved 1, and foes become vulnerable."
            },
            {
                "type": "Collide",
                "desc": "Summon a salt sprite."
            }
        ],
        "talent1": "If only one foe is caught in the area of wave, also create a pit underneath them.",
        "talent2": "If you don't use this interrupt, stock up another use of it at the start of your turn. You can stock it up to interrupt 3.",
        "mastery": {
            "name": "Tidal Smash",
            "infuse_effects": [
                {
                    "text": "Infuse X",
                    "num": "X",
                    "name": "Tidal Smash",
                    "desc": "The shove spaces become shove X. <b>Collide</b>: foes are shattered."
                }
            ],
        },
        "tags": [interrupt, shove_x, vulnerable, summon, summons.salt_sprite, pit, shattered]
    }
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
        "desc": "<p>On account of the magic that is in my body,</p><p>Turn aside, detested of Sea and Storm,</p><p>Thou wretch, go with thy face diverted!</p><p>I call the elements into the temple of my body.</p><p>Be scattered like dust, and feed the wind!</p>",
        "effects": [
            {
                "type": "Effect",
                "desc": "<p>You take on a fearsome elemental form, gaining the following benefits for the rest of combat:</p><p>While you are an Elemental:</p><p> - You gain flying and phasing.</p><p> - You release aura 2 around you. The area is a terrain effect that moves with you that is difficult and dangerous terrain for foes, and allies gain cover from all directions in the area.</p><p> - You can share space with characters. You have resistance to any character sharing your space, and allies have resistance while sharing your space.",
            }
            
        ],
        "ultimate": {
            "name": "Shield of the Four Winds",
            "desc": "If you so choose, when an ally would be shoved, teleported, or removed from your area, you can completely prevent that ally from being moved. This effect can trigger only once a round."
        },
        "tags": [flying, phasing, aura_x, difficult_terrain, dangerous_terrain, cover, resistance]
    }
}

export default stormbender;