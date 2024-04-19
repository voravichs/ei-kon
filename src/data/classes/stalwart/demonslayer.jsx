import keywordData from "../../keywords";
import img from "../../../assets/images/demonslayer.PNG"

const { statusConditions, rules, combatGlossary } = keywordData;

const { sturdy, trueStrike, vigilance_x, divine, slashed, vigor, rampart, resistance, weakened, counter } = statusConditions
const { boon, interrupt } = rules;
const { heroic, slow_turn, delay, bonus_damage, rush_x, area_ability, charge, teleport_X, exceed, shove_x } = combatGlossary

const ch1Abilities = [
    {
        "name": "Demon Cutter",
        "actions": 1,
        "desc": "You slash your weapon in a deadly swing sending cutting shockwaves out that rip through enemy defenses.",
        "type": ["aoe", "attack"],
        "area": "Line 1",
        "attackroll": "On hit: [D] + fray. Miss: fray.",
        "effects": [
            "Attack target is slashed.",
            "Area effect: Fray"
        ],
        "extra_effects": [
            {
                "type": "Charge or Heroic",
                "desc": "Gains range 2, and repeat the area effect in a new line 3 area in range. The areas cannot overlap."
            }
        ],
        "talent1": "Exceed: Gain 6 vigor.",
        "talent2": "You can rush 1 before using Demon Cutter. Charge: Rush 3 instead.",
        "mastery": {
            "name": "Blood Drinking Devil Blade",
            "desc": "After this ability resolves, gain 2 vigor for every foe damaged."
        },
        "tags": [trueStrike, slashed, area_ability, charge, heroic, rush_x, vigor]
    },
    {
        "name": "Comet",
        "actions": 1,
        "range": 3,
        "desc": "Your weapon becomes like a meteor, burning through the air as you hurl at at your foes and smash it into the earth",
        "type": ["aoe", "object"],
        "area": "Medium Blast",
        "effects": [
            "After throwing your weapon, it becomes an object placed in the center space of the area, or as close as possible.",
            "Area effect: 2 damage"
        ],
        "object_info": {
            "height": 1,
            "desc": "Space adjacent to it have rampart. While this object is active, you cannot attack. You can pick your weapon up if you enter or exit any space adjacent to it or start your turn there, ending this effect and removing the object. You also pick it up if it's removed for any other reason."
        },
        "extra_effects": [
            {
                "type": "Charge or Heroic",
                "desc": "Rush 3 after throwing your weapon."
            }
        ],
        "talent1": "If you end your turn adjacent to your thrown weapon, gain vigilance +1",
        "talent2": "Yourself and allies that end their turn adjacent to your weapon gain 2 vigor.",
        "mastery": {
            "name": "Exalted Blossoms Devil Blade",
            "desc": "You may teleport to any space adjacent to your weapon at the start and end of your turn."
        },
        "tags": [area_ability, rampart, charge, heroic, rush_x, vigilance_x, vigor, teleport_X]
    },
    {
        "name": "Draken Cross",
        "actions": 2,
        "range": 3,
        "desc": "Fill the air with the flurry of blades.",
        "type": ["aoe", "attack"],
        "area": "Small Blast",
        "attackroll": "On hit: 2[D] + fray. Miss: fray.",
        "effects": [
            "Area effect: Fray",
            "You may rush 1, then target another small blast area in range 3 with area effect: fray damage. The areas cannot overlap."
        ],
        "extra_effects": [
            {
                "type": "Charge or Heroic",
                "desc": "Gains true strike, and may repeat the effect."
            }
        ],
        "talent1": "Exceed: Deal fray damage again to all characters in any area created by this ability.",
        "talent2": "Charge: Increase range to 5, and all areas may be increased to medium blasts instead.",
        "mastery": {
            "name": "Dark Wind Devil Blade",
            "desc": "After using this ability, you may teleport to any space of any area created, then all foes in any area you created with this ability are slashed and take 2 divine damage."
        },
        "tags": [area_ability, rush_x, charge, heroic, trueStrike, exceed, teleport_X, slashed, divine]
    },
    {
        "name": "Righteous Disdain",
        "range": 2,
        "desc": "With a clap, you deflect a weapon or projectile with your bare hand or the flat edge of your blade.",
        "count": 1,
        "type": ["interrupt"],
        "trigger": "A foe uses an ability that targets an ally in range, and damage to your ally has been determined on the foe's end but not applied yet.",
        "effects": [
            "Apply the damage to both you and your ally, but both of you gain resistance to it, and are sturdy against its effects."
        ],
        "extra_effects": [
            {
                "type": "Heroic",
                "desc": "Gain vigor 4 after this ability resolves."
            }
        ],
        "talent1": "You can rush 1 before triggering this ability, and your ally may rush 1 afterwards.",
        "talent2": "Shove the triggering foe and ally each 1 space in any direction after this ability resolves.",
        "mastery": {
            "name": "Shirahadori",
            "desc": "The damage from Righteous Disdain cannot reduce you past 1 hp."
        },
        "tags": [interrupt, resistance, sturdy, heroic, vigor, rush_x, shove_x]
    },
    {
        "name": "Demon Claw",
        "actions": 1,
        "desc": "Even unarmed, a Demon Slayer can employ ferocious strength and unleash blows with their bare hands that can crumple steel.",
        "type": [],
        "effects": [
            "Rush 1, then rush 1. Each time, you may deal 2 damage to an adjacent foe. Foes can only be damaged once per use of this ability.",
        ],
        "extra_effects": [
            {
                "type": "Special",
                "desc": "If you didn't attack on your turn before using this ability, it deals damage to all adjacent foes."
            },
            {
                "type": "Charge or Heroic",
                "desc": "Weaken all adjacent characters after the first or second rush."
            }
        ],
        "talent1": "Instead of any rush from Demon claw, you can gain 2 vigor.",
        "talent2": "After the second rush, you can shove an adjacent character 2 spaces.",
        "mastery": {
            "name": "Raging Demon",
            "desc": "Demon Claw's damage increases by 1 for every 25% of your maximum hp you are missing, up to a maximum of +3 damage."
        },
        "tags": [rush_x, charge, heroic, weakened, vigor, shove_x]
    },
    {
        "name": "Gates of Hell",
        "actions": 1,
        "desc": "You move so quickly that even your afterimages are capable of deflecting blows.",
        "type": [],
        "effects": [
            "Rush 2",
            "Gain +1 vigilance. Until the start of your next turn, you gain counter, and may rush 2 after activating vigilance. This effect can trigger any number of times a round, but only once a turn."
        ],
        "extra_effects": [
            {
                "type": "Heroic",
                "desc": "Gain +2 vigilance instead."
            }
        ],
        "talent1": "Gain 2 vigor after any time Gates of Hell's second effect activates.",
        "talent2": "Vigilance's range increases by +1 while Gates of Hell is active.",
        "mastery": {
            "name": "Flash Step",
            "desc": "After Gates of Hell resolves, you create an afterimage terrain effect in a free adjacent space. The afterimage is dangerous terrain, but only for foes. You also gain the ability Flash Step.",
            "extra_ability": {
                "name": "Flash Step",
                "type": ["freeaction"],
                "desc": "Remove an afterimage that has no characters occupying it, then remove yourself and place yourself in its space."
            }
        },
        "tags": [rush_x, vigilance_x, counter, heroic, vigor]
    }
]

const demonslayer = {
    "jobName": "Demon Slayer",
    "title": "Master of the Forbidden Arts",
    "img": img,
    "desc": "Warriors of impossible strength and insane bravado, demon slayers are warriors that specialize in fighting the largest and most dangerous monsters to crawl out of the pits that riddle the land. They relish in fighting against impossible odds, training themselves in forbidden techniques, arcane arts, and oversized weaponry that normal Kin would quake at wielding. They organize themselves into loose orders and train and hunt together, sharing tales and trophies of the colossal horrors they have slain. Some say in order to fight their quarries, the slayers must ingest demon blood to gain their strength, giving them dark and forbidden power that makes other Kin fear and respect them in equal measure.",
    "traits": [
        {
            "name": "Demon Edge",
            "desc": "If you elect to take a slow turn or use a delay effect, gain vigilance +1, and all your abilities deal bonus damage and gain true strike until the end of your next turn.",
            "chapter": 1,
            "tags": [slow_turn, delay, bonus_damage, vigilance_x, trueStrike]
        },
        {
            "name": "Demon Strength",
            "desc": "You can make any ability Heroic when you use it. If you do, you can't attack or use Heroics until the end of your following turn.",
            "chapter": 1,
            "tags": [heroic]
        },
        {
            "name": "Hissatsu",
            "desc": "If you don't attack during your turn, your next attack ability gains +1 boon, true strike, and upgrades its damage die to d10. This effect ends after you hit with an attack.",
            "chapter": 1,
            "tags": [boon, trueStrike]
        },
        {
            "name": "True Horn",
            "desc": "You are sturdy from the start of each round until the start of your turn.",
            "chapter": 1,
            "tags": [sturdy]
        },
        {
            "name": "Rangiri",
            "desc": "If you trigger Hissatsu twice in a row, your attack ability becomes upgraded further. The entire ability now deals double damage. Roll and determine all damage on the attacker's end when making it, then double the total before applying it.",
            "chapter": 3,
            "tags": []
        }
    ],
    "startbattle": {
        "conditions": [
            "sturdy"
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Split Heaven And Hell",
        "resolve": 3,
        "actions": 1,
        "desc": "Sever Divinity and cut through the threads of possibility. Pour all your rage into one blow and topple the Gods.",
        "effects": [
            "End your turn, and start charging up a God Cutting Blow. Delay: Your next turn must be slow. At the start of that turn, you may take one of the following options: \n Sever Divine Thread: Swing your weapon in a line 5 area effect drawn from your position. This counts as using an attack this turn. Characters in the line take damage depending on their distance on the line from you. 1 space: 100% of max hp, 2-4 spaces: 50% of max hp, 5+ spaces: 25% of max hp. \n Divine Cancel: You may cancel this ability, refunding the resolve cost, and rush 1. You can limit break again this combat, but not this turn. \n Divine Delay: You continue to hold this ability. Your next turn must be slow and repeat this delay effect. Each time you do this, increase the width of the line by 1 space, to a maximum of 3 width, and its length by 3 spaces. You cannot attack while holding Divine Delay. \n Legend characters always take 25% of max hp from this ability instead of other effects.",
        ],
        "ultimate": {
            "name": "God Waster",
            "desc": "While holding a God Cutting Blow, you can rush 2 at the start or end of any other turn than yours, but no more than twice a round."
        },
        "tags": [delay, slow_turn, rush_x, trueStrike, divine],
    }
}

export default demonslayer;