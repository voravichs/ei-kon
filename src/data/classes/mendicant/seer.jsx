import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, actions} = keywordData;

const { vigor, unstoppable, } = statusConditions
const { boon, curse} = rules;
const { blessing, gamble, immune_to_x, area_ability, aura_x} = combatGlossary

const ch1Abilities = [

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
    "img": "",
    "desc": "The Seers are made up of all the orders of hedge witches, stargazers, corner prophets, folk healers, shamans, and all manner of individuals that find themselves attracted to reading the Great Arcana, the esoteric practice of reading destiny itself, the Great Wheel of Arden Eld that determines the final fate of all things.\nThrough ritual, ceremony, and unrelenting practice, Seers gain the ability to predict and even defy a person's fate, using their Aether infused card decks to influence the turning of the Great Wheel and empower their allies with foresight, precision, and uncanny accuracy.",
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