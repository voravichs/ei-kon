import keywordData from "../../keywords";
import img from "../../../assets/images/colossus.PNG"
import { GiWingfoot } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { sturdy, defiance, regeneration, bloodied, vigilance_x, flying, divine, weakened, unstoppable, stunned, slashed } = statusConditions
const { triggered_effect, defeated, rescue, pit } = rules;
const { heroic, bonus_damage, rush_x, dash, exceed, sacrifice_x, trueStrike, immune_to_x, charge, terrain_effect, shove_x, comeback, difficult_terrain, end_turn, vigor, collide } = combatGlossary

const ch1Abilities = [
    {
        "name": "Valkyrie",
        "actions": 1,
        "desc": "Soaring through the air like a vengeful spirit, you crash into your enemy.",
        "type": ["attack", "true strike"],
        "effects": [
            {
                "type": "Effect",
                "desc": "You may fly 1"
            },
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Attack target is weakened."
            },
            {
                "type": "Exceed or Heroic",
                "desc": "Create a pit under your target."
            }
        ],
        "talent1": "Valkyrie gains range 4.",
        "talent2": "You are unstoppable and immune to all damage while flying with Valkyrie. Charge: You may fly 3 instead.",
        "mastery": {
            "name": "Call of Erenhelion",
            "desc": "When you use Valkyrie, all allies may fly 1. If they end this flight on a lower elevation than they started, they may fly 1 again."
        },
        "tags": [trueStrike, flying, weakened, exceed, heroic, unstoppable, immune_to_x, charge, pit]
    },
    {
        "name": "Upheaval",
        "actions": 1,
        "range": 3,
        "desc": "The disciples of the wolf titan exhibit such legendary strength that they can rip up the earth itself with their bare hands.",
        "type": [],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Smash the battlefield, creating a height 1 boulder object in free space in range. Adjacent characters are shoved 1 away from the terrain when it appears."
            },
            {
                "type": "Comeback or Heroic",
                "desc": "Create difficult terrain underneath any character shoved by this ability."
            }
        ],
        "talent1": "The boulder bounces before landing, dealing 2 damage in a small blast area effect anywhere in range. Charge: Large blast.",
        "talent2": "The boulder bounces before landing, creating a pit anywhere in free space in range.",
        "mastery": {
            "name": "Titan Strength",
            "desc": "Gains range 5 and Comeback: Boulder may be placed as a height 2 pillar instead."
        },
        "tags": [terrain_effect, shove_x, comeback, heroic, difficult_terrain, charge, pit]
    },
    {
        "name": "Dropkick",
        "actions": 1,
        "desc": "Throwing caution to the wind, you crash your whole body into your foe, sending you both flying.",
        "type": ["sacrifice"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Fly 1.",
            },
            {
                "type": "Effect",
                "desc": "Sacrifice 6. An adjacent foe takes [D] + fray damage."
            },
            {
                "type": "Heroic",
                "desc": "You may rush 2 before or after using this ability."
            }
        ],
        "talent1": "Comeback: Hit your foe so hard that you create 2 spaces of difficult terrain in adjacent spaces after this ability resolves.",
        "talent2": "Shove your foe 1, then shove yourself 1 away from your foe. Charge: Increase shoves to 2.",
        "mastery": {
            "name": "Giant Kicker",
            "desc": "At round 4 or later, dropkick gains true strike and a line 4 area effect that must include your target. The area deals fray damage to all characters other than your target."
        },
        "tags": [flying, sacrifice_x, rush_x, comeback, difficult_terrain, shove_x, charge, trueStrike]
    },
    {
        "name": "Massive Overhead",
        "actions": 1,
        "desc": "",
        "type": ["end turn"],
        "effects": [
            {
                "type": "End your turn",
                "desc": "Your next attack strikes with such force that it deals bonus damage and creates a pit under its target after it resolves.",
            },
            {
                "type": "Special Effect",
                "desc": "If your target was already in a pit before the triggering attack, it also activates all exceed effects."
            },
            {
                "type": "Comeback or Heroic",
                "desc": "Attack may also create a small blast area effect on its target, dealing 2 damage to all characters inside."
            }  
        ],
        "talent1": "Attack gains Exceed: Also create a height 1 boulder object adjacent to your foe.",
        "talent2": "Attack gains Exceed: The pit also becomes dangerous terrain.",
        "mastery": {
            "name": "Blood Rush",
            "desc": "At round 4 or later, Massive Overhead also grants you 4 vigor and no longer ends your turn."
        },
        "tags": [end_turn, bonus_damage, pit, comeback, heroic, exceed, vigor]
    },
    {
        "name": "Takedown",
        "actions": 2,
        "desc": "You deliver a mighty blow with wild abandon, so strong that you yourself are left reeling.",
        "type": ["attack"],
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Both you and your foe are stunned. You may sacrifice 4 to avoid this stun."
            },
            {
                "type": "Exceed or Heroic",
                "desc": "Gains true strike and creates a pit under your target."
            }
        ],
        "talent1": "You may rush 2 or fly 2 before using Takedown.",
        "talent2": "You can also choose to shove your target 2, then shove yourself 2. Collide: Deal fray damage.",
        "mastery": {
            "name": "Fierce Elbow",
            "desc": "When you takedown a character, the character takes 2 damage once after the ability resolves for each difference in elevation between you and them when you started this ability, for a maximum of three times."
        },
        "tags": [stunned, sacrifice_x, exceed, heroic, trueStrike, pit, rush_x, flying, shove_x, collide]
    },
    {
        "name": "Great Suplex",
        "actions": 2,
        "desc": "Wrapping your arms around your foe, you fling the two of you backwards with a force that liquifies rock.",
        "type": [],
        "effects": [
            {
                "type": "Effect",
                "desc": "You pick up an adjacent foe, removing them from the battlefield.",
            },
            {
                "type": "Effect",
                "desc": "Sacrifice up to 6, then fly half that many spaces. Place your foe in a free adjacent space. They take [D] + fray damage and are slashed. slashed characters are stunned. If you can't place the foe in a valid space this action can't be taken."
            },
            {
                "type": "Heroic",
                "desc": "Sacrifice cost costs 0 hp but counts as sacrificing 6."
            }
        ],
        "talent1": "This ability deals bonus damage to your target if you land them in a pit.",
        "talent2": "You can use this ability on allies. If you do, reduce its action cost to 1, they are immune to its damage and statuses, and both of you can rush 1 after it resolves.",
        "mastery": {
            "name": "Titanheart",
            "desc": "You can target two adjacent characters with this ability."
        },
        "tags": [sacrifice_x, flying, slashed, stunned, bonus_damage, rush_x]
    }
]

const colossus = {
    "jobName": "Colossus",
    "title": "High Flying Grappler",
    "img": img,
    "icon": <GiWingfoot/>,
    "desc": "<p>Ferocious followers of Arenheir, the Wolf Titan, the Colossi are a martial order of berserkers, pankrationists, and warriors that reaches across all of Arden Eld. They travel throughout the land seeking powerful foes, and taking trophies to return to their great lodges to offer in tribute to Arenheir in fierce hope of resurrecting their god. At their lodges they feast and drink to their deeds, companions, and boasts.</p><p>Colossi seek glory and challenge through battle, and will often go for only the absolute strongest warriors and monsters, heedless of their own safety. They fight with wild abandon and unconventional techniques that would make even the dirtiest Knave raise an eyebrow.</p>",
    "traits": [
        {
            "name": "Furious Berserk",
            "desc": "You go into a furious blood rage as you take damage, giving you the following benefits: \nYou start combat with defiance. \nYou have regeneration, and regain regeneration if defeated and rescued.\nWhile you're bloodied, you are sturdy, and gain vigilance +1 at the end of your turn.",
            "chapter": 1,
            "tags": [defiance, regeneration, defeated, rescue, bloodied, sturdy, vigilance_x]
        },
        {
            "name": "Wolfheart",
            "desc": "Once a round, you may sacrifice 25% of your max hp to make an ability Heroic and increase the distance of any flight, rush, or dash as part of that move by +1.",
            "chapter": 1,
            "tags": [heroic, sacrifice_x, flying, rush_x, dash]
        },
        {
            "name": "Pulverize",
            "desc": "When you start an attack ability on higher elevation than your target, it deals bonus damage. If you are two or more levels higher, it also triggers all exceed effects.",
            "chapter": 1,
            "tags": [bonus_damage, exceed, triggered_effect]
        },
        {
            "name": "Great Leap",
            "desc": "When you would end any movement on a lower elevation than you started, you may gain flying for the duration of that movement.",
            "chapter": 1,
            "tags": [flying]
        },
        {
            "name": "Unbreakable",
            "desc": "If defeated, you can rescue yourself and take a turn as normal. This doesn't take an action and takes place at the start of your turn. In addition, after being rescued in any way, including as part of this trait. you can rush 1 and deal 2 damage to all adjacent characters.",
            "chapter": 3,
            "tags": [defeated, rescue, rush_x]
        }
    ],
    "startbattle": {
        "conditions": [
            "defiance",
            "regeneration"
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Gigantas Crusher",
        "resolve": 3,
        "actions": 2,
        "desc": "Wrestle with the gods themselves.",
        "effects": [
            "You grab an adjacent character. That character must save. Even if that character saves successfully, you grab them, and you both soar into the air. Remove both of you from the battlefield. At the start of that character's turn, you come spinning back to earth, slamming that character into the battlefield in unoccupied space in range 3 of your original location. You sacrifice 25% of your hp. Your foe takes 50% of their max hp as divine damage, or 25% as divine damage on a successful save. Then place both of you back in or adjacent to that space. \n This ability can be used against Legends, but they may always save, taking divine fray damage and refunding this ability's resolve cost on a successful save, and only 25% hp as divine damage on a failed save.",
        ],
        "ultimate": {
            "name": "Atomos Crusher",
            "desc": "If you're at 1 hp or lower, this ability deals 25% more max hp damage to non-legend characters."
        },
        "tags": [divine, sacrifice_x]
    }
}

export default colossus;