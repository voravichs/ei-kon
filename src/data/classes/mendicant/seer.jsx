import keywordData from "../../keywords";
import img from "../../../assets/images/seer.PNG"
import { TbCardsFilled } from "react-icons/tb";

const { statusConditions, rules, combatGlossary, actions, summons} = keywordData;

const { vigor, unstoppable, pacified, divine, sealed, stunned, bloodied} = statusConditions
const { boon, curse, summon, pit} = rules;
const { blessing, gamble, immune_to_x, aura_x, area_ability, charge, power_die, teleport_X, difficult_terrain, combo, bonus_damage, terrain_effect, mark, cure, stance} = combatGlossary

const ch1Abilities = [
    {
        "name": "Sleight of Hand",
        "actions": 1,
        "range": 5,
        "desc": "A flash of bright color, and a card is stuck to your foe, bursting into arcane fire in a flash.",
        "type": ["attack", "aoe","summon"],
        "area": "Small Blast",
        "effects": [
            {
                "type": "Attack",
                "desc": "Auto-hit: fray damage"
            },
            {
                "type": "Effect",
                "desc": "Your foe is pacified."
            },
            {
                "type": "Area Effect",
                "desc": "Fray damage."
            },
            {
                "type": "Effect",
                "desc": "Summon a wild card in range 2 of your foe."
            }
        ],
        "talent1": "This ability does not break the pacified condition and deals 2 damage again to any pacified foes in the area.",
        "talent2": "After this ability resolves, roll 1 more d6 the next time you gamble this turn. Charge: 2 more d6s",
        "mastery": {
            "name": "King of Swords",
            "desc": "After using this ability, you gain six spectral blades that hover behind you, using a d6 power die starting at 6 to track them. At the end of your turn, gamble. If you roll under the number of blades remaining, a blade flies out and deals 2 divine damage to a foe in range 6. Using this ability again with blades active restocks them."
        },
        "tags": [pacified, summon, summons.wild_card, area_ability, divine, charge, power_die, gamble]
    },
    {
        "name": "Chaos Tarot",
        "actions": 1,
        "range": 5,
        "desc": "You flick a beautifully illustrated ethereal card onto the battlefield, laden with the threads of potential.",
        "type": ["summon", "aoe"],
        "area": "Small Blast",
        "effects": [
            {
                "type": "Area Effect",
                "desc": "Gamble, then apply the listed effect in the area.",
                "details": [
                    "1: Card explodes for fray damage.",
                    "2: All characters in the area are teleported 2.",
                    "3: Create two spaces of difficult terrain in the area.",
                    "4: Bless up to two characters in the area.",
                    "5: Seal up to two characters in the area.",
                    "6: Choose two",
                ]
            },
            {
                "type": "Summon",
                "desc": "Then, summon a wild card in the area."
            }
        ],
        "talent1": "You can consume any number of blessings on character in Chaos Tarot's area before gambling to roll 1 extra d6 per blessing consumed.",
        "talent2": "You can move Chaos Tarot's area up to 2 spaces in any direction before applying the gamble effect. Charge: Move 4 spaces.",
        "mastery": {
            "name": "Royalty Gold",
            "desc": "Instead of summoning a wild card with this ability, you can instead end your turn and summon a Master Card. You can only have one Master Card active at once. The Master Card acts as a wild card, but also gains the gamble effect of Chaos Tarot, which it grants to any area ability that triggers it. It is consumed as normal after being activated."
        },
        "tags": [summon, gamble, teleport_X, difficult_terrain, blessing, sealed, summons.wild_card, charge]
    },
    {
        "name": "Astra",
        "actions": 2,
        "type": ["attack", "aoe", "combo"],
        "range": "Line 5",
        "desc": "You call down the heavens themselves on your foes.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray damage. Miss: fray."
            },
            {
                "type": "Area effect",
                "desc": "Fray"
            },
            {
                "type": "Effect",
                "desc": "Foe explodes in a medium blast area effect, centered on them. Gamble, then deal that much damage again to all characters in the area. On a 4+, create two spaces of difficult terrain in the area. On a 6, a meteor also lands, creating a height 1 meteor object in any part of the area and dealing 2 damage to adjacent characters when it lands."
            },
            {
                "type": "Effect",
                "desc": "You can remove any number of blessings from allies in the area to roll 1 extra d6 per blessing removed when gambling."
            }
        ],
        "combo_action": {
            "name": "Combo: Fortuna",
            "range": 5,
            "desc": "Medium Blast",
            "effects": [
                {
                    "type": "Attack",
                    "desc": "Auto hit: [D]+fray"
                },
                {
                    "type": "Area Effect",
                    "desc": "Foes take fray damage. Allies gain 3 vigor and are blessed."
                },
                {
                    "type": "Summon",
                    "desc": "Summon a wild card in the area"
                }
            ]
        },
        "talent1": "Any version of this ability explodes with meteor showers when used, creating two spaces of difficult terrain in the area. Charge: Also create a height 1 meteor object in any part of the area, dealing 2 damage to adjacent foes when it lands.",
        "talent2": "If two or more allies are caught in the area of this ability, increase all medium blasts to large blasts, and this ability deals bonus damage.",
        "mastery": {
            "name": "The Chalice",
            "desc": "After you use any version of this ability, deal 2 divine damage, once, to a foe in the area for each blessed ally in the area, up to a maximum of three times. Foes can be damaged more than once by this effect."
        },
        "tags": [combo, gamble, difficult_terrain, blessing, vigor, divine, bonus_damage, charge]
    },
    {
        "name": "Polaris",
        "actions": 1,
        "range": 5,
        "desc": "A distant glint in the heavens, portents of the devastation to come.",
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Choose a space on the battlefield in range 5. While you have at least one Polaris space active, you may gamble at the end of any turn after yours with the following effects:"
            },
            {
                "type": "Gamble",
                "desc": "A meteor lands in every space chosen by Polaris, exploding. The effects of each space vary depending on how many spaces are active. Each effect other than the blast size stacks:",
                "details": [
                    "1: Small blast area effect, deals damage equal to the gamble result.",
                    "2: Medium Blast, deals +2 damage.",
                    "3: Large Blast, deals +2 damage, and characters in center spaces are stunned. Then, remove all spaces.",
                ]
            }
        ],
        "talent1": "You can cause one of your Polaris to follow a character as a mark instead of a space.",
        "talent2": "Create a space of difficult terrain under the center space of each Polaris space after it resolves. On a gamble result of 4+, create either a height 1 meteor object or a pit instead.",
        "mastery": {
            "name": "Moon Silver Princess",
            "desc": "At round 4+, Polaris becomes a free action."
        },
        "tags": [terrain_effect, gamble, stunned, difficult_terrain, pit]
    },
    {
        "name": "Sisyphus",
        "actions": 1,
        "range": 5,
        "desc": "You bend a character's fate, reversing causality so that the very ground warps under their feet.",
        "type": ["mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark a character in range. While marked, note their starting position at the start of their turn. If they're in range 3 of their starting position at the end of their turn, you may remove them from the battlefield and return them to their starting position, or as close as possible if it's occupied. Then, a foe can save, ending this mark on a success."
            }
        ],
        "talent1": "If they're bloodied, foes gain +1 curse on the save, and are also pacified after being returned to their starting location.",
        "talent2": "Allies are blessed after being moved with Sisyphus and gain 2 vigor. If they're at 25% hp or lower, they can also be cured.",
        "mastery": {
            "name": "Black Knight Grave",
            "desc": "Sisyphus triggers no matter how far away a character is from their starting position at the end of their turn."
        },
        "tags": [mark, bloodied, curse, pacified, blessing, vigor, cure]
    },
    {
        "name": "Gran Reversa",
        "actions": 1,
        "desc": "Causality unmakes itself around you, as wounds heal instantly.",
        "type": ["stance", "aura", "interrupt", "power die"],
        "effects": [
            {
                "type": "Stance",
                "desc": "Gain aura 2, and a d4 power die, starting at 4. While in this stance, gain the Reverse Fate interrupt.",
            },
            {
                "type": "Refresh",
                "desc": "You may exit or refresh this stance at the start of your turn. When you refresh this stance, tick the die up by 1."
            }
        ],
        "interrupt": {
            "name": "Reverse Fate",
            "count": 1,
            "type": ["interrupt"],
            "trigger": "An ally in the aura is targeted by a foe's ability.",
            "effects": [
                "Tick down your power die by any amount. Gamble with a number of d6s equal to the number of ticks you spent, then that ally gains vigor equal to double the gamble result. However, at the end of the current turn, your ally loses all vigor."
            ],
            "tags": [power_die, gamble, vigor]
        },
        "talent1": "Your power die from this ability starts at d6, with 6 charges.",
        "talent2": "If your ally was bloodied, instantly regain a tick on this die after this ability resolves.",
        "mastery": {
            "name": "Misericordia",
            "desc": "Vigor granted by Gran Reversa can increase a character's total vigor over their maximum."
        },
        "tags": [stance, aura_x, power_die, gamble, vigor, bloodied]
    }
]

const cards = {
    "2": {
        "name": "The Fool",
        "effect": "Ally must dash 3 spaces in a straight line before using the ability."
    },
    "3": {
        "name": "The Scepter",
        "effect": "Teleport your ally to an adjacent space to you after the action resolves."
    },
    "4": {
        "name": "The Ewer",
        "effect": "Bless all allies in a small blast area centered on your ally."
    },
    "5": {
        "name": "The Devil",
        "effect": "If the ability forces saves, foes get +2 curses to save against them."
    },
    "6": {
        "name": "The Sword",
        "effect": "Ability gains pierce."
    },
    "7": {
        "name": "Death",
        "effect": "Ally gains Defiance."
    },
    "8": {
        "name": "The Chariot",
        "effect": "Ally becomes unstoppable and immune to all damage while moving during the ability."
    },
    "9": {
        "name": "The Papessa",
        "effect": "Ally becomes pacified but is cured after the ability resolves."
    },
    "10": {
        "name": "The Emperor",
        "effect": "Ally gains stealth after the ability resolves."
    },
    "J": {
        "name": "The Star",
        "effect": "Ally makes all attacks and saves with +1 Boon until the start of their next turn, including with the triggering ability."
    },
    "Q": {
        "name": "The Moon",
        "effect": "Ally gains Evasion until the start of their next turn."
    },
    "K": {
        "name": "The Sun",
        "effect": "Ally gains Counter and Sturdy, but cannot gain or benefit from stealth or evasion until the start of their next turn."
    }
}

const seer = {
    "jobName": "Seer",
    "title": "Fortune Teller and Master of Fate",
    "img": img,
    "icon": <TbCardsFilled/>,
    "desc": "</p><p>The Seers are made up of all the orders of hedge witches, stargazers, corner prophets, folk healers, shamans, and all manner of individuals that find themselves attracted to reading the Great Arcana, the esoteric practice of reading destiny itself, the Great Wheel of Arden Eld that determines the final fate of all things.</p><p>Through ritual, ceremony, and unrelenting practice, Seers gain the ability to predict and even defy a person's fate, using their Aether infused card decks to influence the turning of the Great Wheel and empower their allies with foresight, precision, and uncanny accuracy.</p>",
    "traits": [
        {
            "name": "The Wheel of Fate",
            "desc": "Set up a deck made up of one suit of a 52 card standard playing card deck (so 13 cards). At the start of any combat, draw up to 5 cards if you have less. Your hand and deck persist through combats, and your maximum hand size is 7 (you must discard down to 7 cards at the end of your turn). Discarded cards go in a discard pile. Once you draw through your deck, shuffle the discard pile and draw it as your new deck (meaning there's no replacement and you will eventually draw through the deck).",
            "chapter": 1,
            "tags": [cards]
        },
        {
            "name": "Skein",
            "desc": "Draw a card at the start of your turn. If you didn't attack, draw an extra card at the end of your turn as well.",
            "chapter": 1,
            "tags": [cards]
        },
        {
            "name": "Foretell",
            "desc": "You can discard 1 blessing token on yourself or an ally before that ally uses any ability to tell their fortune as an effect. You discard a card from your hand and immediately apply the effects to your target, no matter the distance or if you can see them or not. If you have no cards in hand, draw the top card of your deck instead, apply its effects, then discard it.",
            "chapter": 1,
            "tags": [cards, blessing]
        },
        {
            "name": "Bend Fate",
            "desc": "You can discard any number of cards after you gamble to roll an extra die per card discarded, choosing any result. You can repeat this effect any number of times as long as you have cards, and you can choose to discard after you see each result.",
            "chapter": 1,
            "tags": [cards, gamble]
        },
        {
            "name": "Karma",
            "desc": "Allies are immune to damage from your area effects. Any time you include an ally in an area effect that would damage them, after that ability resolves they gain 2 vigor and are blessed instead.",
            "chapter": 1,
            "tags": [immune_to_x, area_ability, vigor, blessing]
        },
        {
            "name": "Chakravartin",
            "desc": "An ally in range 6 becomes unstoppable and immune to all damage until the end of their next turn.",
            "chapter": 3,
            "tags": [unstoppable, immune_to_x, actions.chakravartin]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "High Prophecy",
        "resolve": 3,
        "action": 0,
        "desc": "A burning third eye of pure etheric energy appears on your forehead. Possibilities unfurl before you, laid out like infinite gleaming threads.",
        "extra_effects": [
            {
                "type": "Aura",
                "desc": "Until the start of your next turn, you gain aura 2. Every d6 any character in the aura rolls for boons, curses, or gambling is either a 6 or a 1 (you choose)."
            },
        ],
        "ultimate": {
            "name": "Thoth",
            "desc": "While the aura is active, you are automatically missed by attacks, turn any of your attack misses into hits, and succeed all saves."
        },
        "tags": [aura_x, gamble, boon, curse]
    }
}

export default seer;