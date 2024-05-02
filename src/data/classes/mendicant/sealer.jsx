import keywordData from "../../keywords";
import img from "../../../assets/images/sealer.PNG"
import { GiPrayerBeads } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { vigor, dodge, bloodied, divine, sealed, evasion, pacified, stunned} = statusConditions
const { boon, interrupt, curse, ongoing} = rules;
const { bonus_damage, exceed, blessing, power_die, teleport_X, combo, slay, mark, immune_to_x, aura_x, cover, terrain_effect} = combatGlossary

const ch1Abilities = [
    {
        "name": "God Hand",
        "actions": 1,
        "desc": "Divine energy infuses you, allowing hammer-like blows that would fell a demon with even your bare hands.",
        "type": ["attack", "combo"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Teleport 1"
            },
            {
                "type": "Attack",
                "desc": "On hit: [D]+fray. Miss: fray damage."
            },
            {
                "type": "Effect",
                "desc": "Seal your foe, then bless yourself or ally in range 2"
            },
            {
                "type": "Exceed",
                "desc": "You and allies in range 2 gain 3 vigor"
            }
        ],
        "combo_action": {
            "name": "Combo: Devil Hand",
            "desc": "+1 boon",
            "effects": [
                {
                    "type": "Effect",
                    "desc": "Teleport 1"
                },
                {
                    "type": "Attack",
                    "desc": "On hit: [D]+fray. Miss: fray damage."
                },
                {
                    "type": "Effect",
                    "desc": "Character explodes in a medium blast area effect centered on them, dealing 1 divine damage to all foes."
                },
                {
                    "type": "Exceed",
                    "desc": "Repeat the effect"
                }
            ]
        },
        "talent1": "All versions of this ability gain Exceed: Gain evasion until the end of your next turn",
        "talent2": "Increase teleports to 2, and all version of this ability gain Slay: gain or lose a combo token.",
        "mastery": {
            "name": "Fists of Heaven and Hell",
            "desc": "Add an alternate combo action. It gains all talent effects of this ability.",
            "combo_action": {
                "name": "Combo: Fists of Heaven and Hell",
                "desc": "+1 boon",
                "effects": [
                    {
                        "type": "Effect",
                        "desc": "Teleport 1"
                    },
                    {
                        "type": "Attack",
                        "desc": "On hit: [D]+fray. Miss: fray damage."
                    },
                    {
                        "type": "Effect",
                        "desc": "Seal your foe, then bless yourself or an ally in range 2"
                    },
                    {
                        "type": "Effect",
                        "desc": "Character explodes in a medium blast area effect centered on them, dealing 1 divine damage to all foes."
                    },
                    {
                        "type": "Exceed",
                        "desc": "Repeat all effects"
                    }
                ],
            },
        },
        "tags": [combo, teleport_X, sealed, blessing, vigor, boon, divine, evasion, slay]
    },
    {
        "name": "Grand Seal",
        "actions": 1,
        "range": 4,
        "desc": "Bind an enemy in an astral seal, condemning them and crushing them under the weight of their own evil.",
        "type": ["mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "A foe in range becomes sealed and marked. While marked, after they use an ability that damages an ally of yours, they take 2 divine damage. A foe can pass a save at the end of their turn to end this mark."
            }
        ],
        "talent1": "Bloodied foes gain +1 curse on saves while marked.",
        "talent2": "Bloodied foes are also pacified+ while marked.",
        "mastery": {
            "name": "Milk Sutra",
            "desc": "When this mark ends, if there is a new foe in range 3 of your target, you may transfer it to that foe."
        },
        "tags": [mark, sealed, divine, curse, pacified, ongoing]
    },
    {
        "name": "Matsuri",
        "actions": 2,
        "desc": "Swing your weapon in a flaming arc that sends sprays of fire in bright displays, lighting up the sky.",
        "type": ["attack"],
        "effects": [
            {
                "type": "Effect",
                "desc": "Teleport 2. Allies in range 2 may teleport 1."
            },
            {
                "type": "Attack",
                "desc": "On hit: 2[D] + fray. Miss: fray."
            },
            {
                "type": "Exceed",
                "desc": "Create a large blast explosion area effect centered on your foe. Yourself and allies inside gain 3 vigor. Foes take 2 divine damage."
            }
        ],
        "talent1": "Increase teleports by +1 and gains Slay: Repeat the teleport effect.",
        "talent2": "Bloodied foes take bonus damage and must also save or be stunned.",
        "mastery": {
            "name": "Blood Festival",
            "desc": "The first time you use Matsuri in a combat, you may increase all its teleports by +2, it deals bonus damage, and it triggers all exceed effects."
        },
        "tags": [teleport_X, divine, vigor, slay, exceed, bonus_damage, stunned]
    },
    {
        "name": "Spirit Shrine",
        "actions": 1,
        "type": ["object"],
        "desc": "Many sealers carry portable shrines to the local spirits, adding on talismans, images, icons, or offerings to whichever small god holds dominion over the areas they travel through. In a pinch, they can set these shrines down and beseech the spirits for aid.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Create a shrine in a free adjacent space. The shrine can be placed on other objects, and lasts until this ability is used again without increasing its height."
            },
        ],
        "object_info": {
            "name": "Shrine",
            "height": 1,
            "desc": "<p>Aura 2. You can use this ability again while adjacent to your shrine to increase its size, increasing the height by +1. The shrine gains additional benefits equal to its total height, including other objects it is stacked on:</p><p> - 1: Yourself and allies in the aura have cover from characters from the outside and gain +1 boon on attack rolls.</p><p> - 2: Yourself and allies in the aura gain 2 vigor when you end your turn there.</p><p> - 3+: Yourself and allies in the aura have evasion.</p>"
        },
        "talent1": "If you or an ally ends their turn inside the Shrine's aura and didn't attack, they are blessed and gain 2 vigor.",
        "talent2": "Foes that use any ability inside the shrine's aura can be teleported 1 after the triggering ability resolves.",
        "mastery": {
            "name": "Spirit Patronage",
            "desc": "Gain the following interrupt:",
            "interrupt": {
                "name": "Grace of the Spirits ",
                "count": 1,
                "type": ["interrupt"],
                "trigger": "An ally in the aura is damaged by a foe's ability.",
                "effects": [
                    {
                        "type": "Effect",
                        "desc": "Your ally becomes immune to all damage from the triggering ability. Destroy the shrine, then deal 2 divine damage, once, to the foe per height of the shrine. You cannot place shrines for the rest of combat."
                    },
                ],
                "tags": [interrupt, immune_to_x, divine]
            }
        },
        "tags": [aura_x, cover, boon, vigor, evasion, blessing, teleport_X]
    },
    {
        "name": "Sanctify",
        "actions": 2,
        "range": 2,
        "type": [],
        "desc": "You throw out a handful of glittering salt, scorching the spiritually impure.",
        "effects": [
            {
                "type": "Terrain Effect",
                "desc": "You scatter salt in a medium blast area effect in range, creating a terrain effect in those spaces. Foes in the area effect take 1 divine damage. While in the area, foes take +1 curse on saves and are pacified if they start or end their turn there. Allies inside the area take +1 boon on saves. The area persists until you take this action again or until the end of combat."
            },
            {
                "type": "Effect",
                "desc": "After using any ability that triggers an exceed effect, deal 1 divine damage to all foes in the area, and grant 2 vigor to all allies in the area."
            }
        ],
        "talent1": "Bloodied foes must save if they attempt to enter the area. On a failed save, they cannot voluntarily enter the area until the start of their next turn.",
        "talent2": "Bloodied allies inside gain 4 vigor for ending their turn inside instead.",
        "mastery": {
            "name": "Elden Salt",
            "desc": "You can place two areas with Sanctify without replacing the first. At round 4+, Sanctify becomes 1 action."
        },
        "tags": [terrain_effect, divine, curse, pacified, boon, exceed, vigor]
    },
    {
        "name": "Grand Banishment",
        "actions": 1,
        "range": 4,
        "type": [],
        "desc": "With a word and a quickly drawn talisman, you stomp your foot and forbid your foe from taking another step towards you.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Teleport 1, <b>end your turn</b> and choose a foe in range, sealing their movement with force of will. Until the end of that foe's next turn, they take 3 divine damage after they or an ally uses any ability that moves them closer to you."
            }
        ],
        "talent1": "Your chosen character treats you and any allies in range 2 of you as having cover.",
        "talent2": "Bloodied foes can be teleported 2 at the end of any turn this ability's damage activates.",
        "mastery": {
            "name": "Horse and Ox Seal",
            "desc": "When you take this ability, you can also choose to invert the effect for the duration, dealing damage to the chosen foe if they move away from you instead."
        },
        "tags": [teleport_X, divine, cover, bloodied]
    }
]

const sealer = {
    "jobName": "Sealer",
    "title": "Holy Judge and Purger of Evil",
    "img": img,
    "icon": <GiPrayerBeads/>,
    "desc": "<p>Traveling priests, monks, judges, and doctors, the Sealers roam the world from village to village, performing necessary rituals, marriages, ceremonies, and yearly festivals. They are a welcome sight in most villages, and most perform the important function of traveling judge and medium, acting as an impartial party translating for the will of the local spirits. They often travel with many blessed relics of the deities of the land or even portable shrines on their back.</p><p>In their other role, Sealers are legendary monster hunters and exorcists of unbelievable prowess and unshakeable faith. Whenever an especially bad blight or an arch demon appears, the Sealers are usually there to drive it back with ancient sealing magic, blessed brands, and flaming weapons.</p>",
    "traits": [
        {
            "name": "Blessing of War",
            "desc": "Yourself or allies can spend a blessing when they use an ability to gain +1 boon on attacks and bonus damage with that ability. If they consume 3 blessings, it additionally triggers all exceed effects.",
            "chapter": 1,
            "tags": [boon, bonus_damage, exceed, blessing]
        },
        {
            "name": "Mantra of Sealing",
            "desc": "Your attacks bless all adjacent allies to you and grant them 2 vigor.",
            "chapter": 1,
            "tags": [blessing, vigor]
        },
        {
            "name": "Godly Smite",
            "desc": "You steadily gather power as you fight. You start combat with a mantra power die, a d6 that starts at 1, and ticks up by 1 at the start of every round, to a maximum of 6. You gain the Godly Smite interrupt.",
            "chapter": 1,
            "interrupt": {
                "name": "Godly Smite",
                "count": 1,
                "type": ["interrupt"],
                "trigger": "You or an ally makes an attack roll, and you see the total result (after boons, curses, and other adjustments).",
                "effects": [
                    "Add the number on your mantra die to the attack roll, which changes the final result. That foe also takes damage again after the attack resolves equal to the number on your mantra die."
                ],
                "tags": [interrupt]
            },
            "tags": [power_die]
        },
        {
            "name": "Martial Arts",
            "desc": "You have dodge.",
            "chapter": 1,
            "tags": [dodge]
        },
        {
            "name": "Great Spirit Festival",
            "desc": "Bless all allies on the map and grant them 2 vigor. If they're bloodied, repeat this effect.",
            "chapter": 3,
            "tags": [blessing, vigor, bloodied]
        }
    ],
    "startbattle": {
        "conditions": [
        ]
    },
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Passage to the Afterlife",
        "resolve": 5,
        "actions": 2,
        "boon": 1,
        "desc": "You unleash the supreme Sealer war art, inflicting ten thousand blows and shattering the connections of your foe's vital energy to their body, hurrying on the transmigration of immortal souls.",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray, three times. Miss: Once.",
            },
            {
                "type": "Exceed",
                "desc": "Deal [D]+fray two more times."
            },
            {
                "type": "Effect",
                "desc": "You may teleport adjacent to the target before the attack if they're in range 3. Every ally in range 3 of the target can also teleport adjacent to your target, or as close as possible. Your target then takes 2 additional divine damage, once, per adjacent ally.",
            },
        ],
        "ultimate": {
            "name": "Reach Heaven Through Violence",
            "desc": "The teleport effect has the range of the battlefield for both allied characters and yourself. If your target is at or under 25% hp, they take 2 divine damage twice for each adjacent ally instead."
        },
        "tags": [boon, divine, exceed, teleport_X]
    }
}

export default sealer;