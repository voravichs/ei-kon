import keywordData from "../../keywords";
import img from "../../../assets/images/harvester.PNG"
import { GiScythe } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, actions, summons } = keywordData;

const { pierce, cure, divine, sealed, unerring, vigor, bloodied, pacified, regeneration, defiance, unstoppable} = statusConditions
const { pit, ongoing, curse, rescue } = rules;
const { bonus_damage, slay, blessing, mark, summon, combo, comeback, terrain_effect, difficult_terrain, stance, aura_x, sacrifice_x, area_ability, dangerous_terrain} = combatGlossary

const ch1Abilities = [
    {
        "name": "Sow",
        "actions": 1,
        "range": 4,
        "desc": "You throw out a poison seed that bursts into thorny death.",
        "type": ["attack", "mark", "pierce", "combo"],
        "effects": [
            {
                "type": "Attack",
                "desc": "Auto hit: fray"
            },
            {
                "type": "Effect",
                "desc": "Your foe is sealed."
            },
            {
                "type": "Mark",
                "desc": "You foe is marked. When marked, and after you attack your marked foe thereafter, bless yourself or an ally in range 3 of your target."
            }
        ],
        "combo_action": {
            "name": "Combo: Reap",
            "effects": [
                {
                    "type": "Attack",
                    "desc": "On hit: [D]+fray. Miss: Fray"
                },
                {
                    "type": "Effect",
                    "desc": "Summon a Thrall adjacent to your target."
                },
                {
                    "type": "Slay",
                    "desc": "Repeat the effect"
                },
                {
                    "type": "Special",
                    "desc": "You can make this melee attack against the target marked by sow regardless of distance or line of sight. It also gains unerring if made this way."
                }
            ]
        },
        "talent1": "Effect: If Sow's marked foe is defeated, it can be transferred to a different foe in range 3 from that foe.",
        "talent2": "Comeback: Reap's Slay effect triggers.",
        "mastery": {
            "name": "Spectral Scythe",
            "desc": "Reap and Sow also create an arc 4 area effect drawn from your target as the origin space, that cannot include your target. Foes inside take 2 piercing damage, and allies inside gain 2 vigor."
        },
        "tags": [mark, pierce, combo, sealed, blessing, summons.thrall, unerring, slay, comeback, vigor]
    },
    {
        "name": "Growing Season",
        "actions": 1,
        "range": 4,
        "desc": "Blow magical spores in the air, which are disturbed by the chaos of combat. Where they fall, the fruit of life and death blooms.",
        "type": ["mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark a character in range. Once a round after that character ends their turn, create a plant adjacent to their space."
            },
            {
                "type": "Effect",
                "desc": "If that character is bloodied, repeat this effect. Foes are additionally pacified."
            }
        ],
        "talent1": "Abilities used against a character marked by Growing Season gain slay: create an Eden vine terrain effect in an adjacent space. The vine is difficult terrain and a pit and creates a plant in its space at the start of the round if there isn't already a plant there.",
        "talent2": "Abilities used against a character marked by Growing Season gain slay: create a height 1 blood tree object in adjacent space. The tree creates a plant on top of it at the start of the round if there isn't already a plant there.",
        "mastery": {
            "name": "Soothing Spore",
            "desc": "Foes marked by Growing Season are pacified+ while in or adjacent to spaces occupied by plants."
        },
        "tags": [mark, bloodied, pacified, slay, terrain_effect, difficult_terrain, pit, ongoing]
    },
    {
        "name": "Gravebirth",
        "actions": 1,
        "desc": "Vine and root coil through the deep soil, bringing forth the restless dead.",
        "type": ["stance"],
        "effects": [
            {
                "type": "Stance",
                "desc": "When you enter this stance, or when it refreshes, summon a thrall in free space in range 2. While in this stance, you have aura 2, with the following effects: At the end of your turn, you may consume any blessing tokens in the aura to summon one thrall in the aura per blessing consumed. At the start of your turn, you can prevent up to three thralls in the area from collapsing into plants."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance once a round when you trigger a slay effect."
            }
        ],
        "talent1": "When you end your turn, all thralls of your choice burrow, removing them from the battlefield, then you may place them in free space in your aura.",
        "talent2": "At the end of your turn, you may sacrifice 2 to summon an additional thrall.",
        "mastery": {
            "name": "Recycle",
            "desc": "While Gravebirth's aura is active, as a free action you can cause any two thralls in the aura to collapse into plants to cure an ally in range 4."
        },
        "tags": [stance, summons.thrall, aura_x, blessing, slay, sacrifice_x, cure]
    },
    {
        "name": "Harvest",
        "actions": 2,
        "area": "Arc 6",
        "desc": "You swing with a blade as bright as the new moon.",
        "type": ["attack", "aoe"],
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. Miss: fray."
            },
            {
                "type": "Area Effect",
                "desc": "Foes take fray damage. Allies are blessed."
            },
            {
                "type": "Slay",
                "desc": "Summon a Thrall for each foe in the area, and deal 2 piercing damage again as an area effect to those foes."
            }
        ],
        "talent1": "Allies in the area also gain 2 vigor, or 4 vigor if Harvest's Slay effect triggers.",
        "talent2": "Gains Range 2. Comeback: Range 5",
        "mastery": {
            "name": "Harvest Moon",
            "desc": "When this ability passes through a plant, you can cause that plant to explode, dealing 2 piercing damage in a small blast area effect centered on each plant, and granting its blessing character to yourself or any other ally in range 3 of that plant. Characters can only be damaged by one of these explosions a turn."
        },
        "tags": [area_ability, blessing, summons.thrall, pierce, vigor, slay, comeback,]
    },
    {
        "name": "Blood Grove",
        "actions": 2,
        "range": 2,
        "desc": "The wilderness boils with explosive growth, fed by the blood of the battlefield.",
        "type": ["terrain effect", "summon"],
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "Grow a medium blast area of undergrowth, with its center space in range. The area is dangerous terrain for foes and disappears if you use this ability again."
            },
            {
                "type": "Effect",
                "desc": "As long as you are in the area, summon a thrall in or adjacent to the area at the end of your turn for each of these conditions you fulfilled this turn: triggered a slay effect, sacrificed as part of an ability, are bloodied. Each condition can only trigger once."
            }
        ],
        "talent1": "All spaces of the area cost 0 movement for thralls to enter.",
        "talent2": "Once on your turn you, while inside the area, you can sacrifice 2 to extend the area by 2 spaces, adding to its total area on any edge.",
        "mastery": {
            "name": "Hungry Grove",
            "desc": "Each time you summon a thrall with Blood Grove, extend the area by 1 space, added to its total area, as long as those spaces are placed adjacent to the area when the effect is triggered."
        },
        "tags": [terrain_effect, summon, summons.thrall, slay, sacrifice_x, bloodied, dangerous_terrain]
    },
    {
        "name": "Rot",
        "actions": 1,
        "range": 4,
        "desc": "Leaves shrivel. Hair curls. Wounds fail to heal.",
        "type": ["combo", "mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark a foe in range. While marked, that character cannot be cured, cannot gain or benefit from vigor, and gains +1 curse on saves. If that character is at 25% hp or lower when marked, they also lose defiance."
            }
        ],
        "combo_action": {
            "name": "Combo: Regenerate",
            "effects": [
                {
                    "type": "Mark",
                    "desc": "Mark an ally in range. While marked, that character has regeneration. If that character is at 25% hp or lower when marked, they also gain defiance."
                },
                {
                    "type": "Special",
                    "desc": "This mark can be placed even if Rot is already active."
                }
            ],
        },
        "talent1": "Characters marked by regenerate gain comeback: summon a plant in an adjacent space at the start of their turn.",
        "talent2": "Foes that start their turn adjacent to a character marked by Rot take 2 piercing damage.",
        "mastery": {
            "name": "Regrowth",
            "desc": "Gain an alternate combo action.",
            "combo_action": {
                "name": "Combo: Regrowth",
                "effects": [
                    {
                        "type": "Mark",
                        "desc": "Mark a character in range 4. If that character would be defeated before the start of your next turn, they are instantly rescued after being defeated, then gain a vigor surge and become unstoppable until the end of their next turn. Then, even if this effect didn't trigger, summon a plant in an adjacent space to them and end this mark."
                    },
                ],
            },
        },
        "tags": [combo, mark, curse, regeneration, defiance, comeback, summons.plant, pierce, rescue, vigor, cure, unstoppable]
    }
]

const harvester = {
    "jobName": "Harvester",
    "title": "Arbiter of Life and Death",
    "img": img,
    "icon": <GiScythe/>,
    "desc": "<p>Servants of Tsumi, the Moon Titan, the Harvesters are the death priests of Arden Eld. They travel from land to land, sanctifying burial sites, performing funeral rites, and helping lingering spirits move on. The land is full of the malice and unfulfilled wishes of the long suffering dead, and so the services of the harvesters are in high demand.</p><p>Tsumi is the protector of cycles, and so the Harvesters also perform fertility blessings, oversee harvest festivals, and see to the cultivation and protection of the land and nature. They plant flowers over battlefields, and tend groves of beautiful fruit trees planted over graveyards. This dual nature makes Harvesters fierce warriors, able to make the battle bloom or rot with a single swipe of their greatscythes.</p>",
    "traits": [
        {
            "name": "Blessing of Rebirth",
            "desc": "Yourself and allies can spend 1 blessing when using any ability to grant it pierce and bonus damage. They may spend 3 blessings instead to additionally trigger any slay effects.",
            "chapter": 1,
            "tags": [pierce, bonus_damage, slay, blessing]
        },
        {
            "name": "Mark of Tsumi",
            "desc": "At the end of your turn, deal 2 piercing damage to all foes marked by you, and bless either yourself, or all allies marked by you.",
            "chapter": 1,
            "tags": [pierce, mark, blessing]
        },
        {
            "name": "Gardener of Kin",
            "desc": "You can stack 2 marks on characters. Foes marked by you take +1 damage from summons.",
            "chapter": 1,
            "tags": [mark, summon]
        },
        {
            "name": "Balance",
            "desc": "All your abilities gain slay: cure yourself or any ally.",
            "chapter": 1,
            "tags": [slay, cure]
        },
        {
            "name": "Defy the Cycle",
            "desc": "You call upon your power to forbid the natural order of life and death from working. Until the start of your next turn, characters cannot be reduced below 1 hp. Divine damage bypasses this ability.",
            "includedaction": actions.defy_the_cycle,
            "chapter": 3,
            "tags": [divine]
        }
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Death Sentence",
        "resolve": 3,
        "action": 0,
        "desc": "A flash of the scythe, and the line between life and death is blurred.",
        "effects": [
            {
                "type": "Summon",
                "desc": "You slash an adjacent foe with your weapon, knocking their soul out of their body. Draw a line 4 area effect from your foe facing directly away from you and summon the Severed Soul summon in the last available space. The soul lasts until the end of your next turn, or until the affected character is defeated.",
            }
        ],
        "ultimate": {
            "name": "Soul Bloom",
            "desc": "If the foe is defeated while their soul is out, summon 4 plants anywhere on the battlefield."
        },
        "tags": [summon, summons.severed_soul, summons.plant]
    }
}

export default harvester;