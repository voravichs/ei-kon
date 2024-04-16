import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary } = keywordData;

const { regeneration, defiance, divine, unerring, trueStrike} = statusConditions
const { rescue, wound, defeated} = rules;
const { infuse_x, aether, sacrifice_x, gamble, comeback, exceed, area_ability} = combatGlossary

const ch1Abilities = [

]

const enochian = {
    "jobName": "Enochian",
    "title": "Unbridled Destruction",
    "img": "",
    "desc": "The Enochian Orders of wrights are the most chaotic of the mage orders. They have no official organization, most of their members being hedge wizards or self taught. Many Enochians disdain authority and work for hire, sleeping and eating where they can and relying on the communities they work for to support them. Those that work on contract with guilds, armies, or mercenary companies tend to value their independence.\nThe power that condenses inside an Enochian is related to the element of fire, a wild spark that grows and wanes with their emotions and energy, but with control can be focused into power that can carve mountains, scorch forests, and boil rivers. In times of desperation, the Enochians can feed this power with their own life force, a dangerous practice that the other orders of wrights look down upon. The Enochians, for their part, see other wrights as stiff and uncreative. They'd rather do it their way, after all.",
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
        "desc": "I, who stand at the apex of things, \nThou, who are in the deepest pits of despair, \nLet thy very bones become ash! \nO Flame, let the air become death! \nIgnite, and be banished to Hell!",
        "effects": [
            "You summon the eldflame, the primeval force of creation, dealing [D]+fray divine damage to every character on the battlefield, ignoring line of sight. Characters in range 2 of you are exempt from this ability.",
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
            "effect": "Special effect: You can pay the resolve, aether, and action cost of this spell with your entire life force, dying after this action resolves, obliterating your body, and scattering your soul. If you do, it deals 999 divine damage instead."
        },
        "tags": [divine, unerring, trueStrike]
    }
}

export default enochian;