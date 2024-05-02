import keywordData from "../../keywords";
import img from "../../../assets/images/shade.PNG"
import { GiSharpShuriken } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { phasing, unerring, blind, defiance, bloodied, evasion, dazed} = statusConditions
const { pit, summon, boon, interrupt} = rules;
const { immune_to_x , difficult_terrain, dangerous_terrain, bonus_damage, teleport_X, stealth, combo, mark, area_ability, finishing_blow, slay, aura_x, rebound, stance, power_die} = combatGlossary

const ch1Abilities = [
    {
        "name": "Umbra",
        "actions": 1,
        "range": 3,
        "desc": "By the power of darkness.",
        "type": ["attack", "combo", "+1 boon"],
        "effects": [
            {
                "type": "Effect",
                "desc": "You may teleport 3"
            },
            {
                "type": "Attack",
                "desc": "On hit: [D] + fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Your foe is blinded."
            },
            {
                "type": "Finishing Blow",
                "desc": "Summon a shadow adjacent to your target."
            }
        ],
        "combo_action": {
            "name": "Combo: Penumbra",
            "desc": "Teleport your foe up to 3 spaces towards you instead of teleporting yourself. A foe can save to avoid this effect. Blinded foes fail this save."
        },
        "talent1": "Slay: Gain defiance.",
        "talent2": "You can sacrifice 2 or consume a shadow in range 2 of you to gain a combo token after using this move.",
        "mastery": {
            "name": "Devil Frog Technique",
            "desc": "Increase Umbra and Penumbra's range to 6 and it gains unerring."
        },
        "tags": [boon, teleport_X, blind, summon, summons.shadow, defiance, combo, unerring]
    },
    {
        "name": "Harrow",
        "actions": 1,
        "range": 3,
        "desc": "You mark your foe with a dire seal. Shadowy tendrils reach out from an unknown space and jerk them like a puppet.",
        "type": ["mark"],
        "effects": [
            {
                "type": "Mark",
                "desc": "Flick an umbral seal at a character in range 3, marking them. While marked, once a round when you teleport, you can also teleport the marked character 1 space and deal 2 damage to them if they're a foe."
            },
            {
                "type": "Finishing Blow",
                "desc": "When marking a bloodied character, immediately trigger the effect, ignoring the round limit."
            }
        ],
        "talent1": "At the start of your turn, you may teleport to any space in range 2 of your target.",
        "talent2": "You can also sacrifice 2 or consume a shadow in range 2 of you when marking a foe to also create a pit under them.",
        "mastery": {
            "name": "Bone Raven Technique",
            "desc": "This effect can trigger twice a round by default."
        },
        "tags": [mark, teleport_X, bloodied, summons.shadow, pit ]
    },
    {
        "name": "Death Blossom",
        "actions": 2,
        "range": 2,
        "desc": "From beneath a cloak, out from flying sleeves, or hidden in coils of hair - infinite blades. One more sweep, and shadowy bolts of cloth cut through your foes like razors.",
        "type": ["attack", "aoe", "unerring"],
        "area": "Burst 1",
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D]+fray. Miss: fray."
            },
            {
                "type": "Area Effect",
                "desc": "fray"
            },
            {
                "type": "Finishing Blow",
                "desc": "After this ability resolves, create a pit under your attack target. The pit is also a shadow cloud."
            }
        ],
        "combo_action": {
            "name": "Combo: Flying Sleeves",
            "desc": "Area becomes Arc 4.",
            "effects": [
                {
                    "type": "Effect",
                    "desc": "If you catch an ally or allied summon in the area, you and your allies are immune to this ability's damage and effects, and you may extend the area effect to arc 8."
                },
            ],
        },
        "talent1": "Finishing Blow: Teleport all characters in the area 1.",
        "talent2": "Slay: Teleport 2, then throw knives, dealing 2 damage to up to three foes in range 3.",
        "mastery": {
            "name": "Shukuchi",
            "desc": "You can teleport 2 spaces before and after using this ability."
        },
        "tags": [unerring, area_ability, teleport_X, pit, summons.shadow_cloud, immune_to_x, finishing_blow, slay]
    },
    {
        "name": "Nightmare",
        "actions": 1,
        "range": 2,
        "desc": "Draw out a fragment of true darkness, roaming and hunting for warmth.",
        "type": ["summon", "aura"],
        "effects": [
            {
                "type": "Summon",
                "desc": "Summon 2 shadows in range 2."
            },
            {
                "type": "Effect",
                "desc": "Until the start of your next turn, you gain aura 2. You may consume a shadow in the aura when you or any ally in the aura is targeted by an attack to grant evasion against that attack."
            },
        ],
        "talent1": "When you summon a shadow, you or an ally or allied summon in range 2 may teleport 1.",
        "talent2": "While Umbra's effect is active, you or allies can rebound abilities off shadows in the aura. Doing so consumes the shadow, removing it.",
        "mastery": {
            "name": "Hell Centipede Technique",
            "desc": "Gain effect: until the start of your next turn, when a shadow is consumed in the aura, you may also create a pit in or adjacent to its space."
        },
        "tags": [summon, aura_x, evasion, teleport_X, rebound, summons.shadow, pit]
    },
    {
        "name": "Shadow Play",
        "actions": 1,
        "range": 2,
        "desc": "Using forbidden scroll techniques, you confuse the senses of foes and allies alike.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Choose a character other than yourself in range, then a different character other than yourself in range 3 of that character. Swap their places, removing and placing them. Allies swapped gain stealth. Foes swapped are dazed."
            },
            {
                "type": "Finishing Blow",
                "desc": "Repeat the effect."
            }
        ],
        "talent1": "If you swap two foes, you may then teleport them 1 after this ability resolves.",
        "talent2": "If you swap two allies, one of them can gain evasion until the start of their next turn.",
        "mastery": {
            "name": "Pale Rat Technique",
            "desc": "At round 4 or later in combat, Shadow Play becomes a free action."
        },
        "tags": [stealth, dazed, teleport_X, evasion]
    },
    {
        "name": "Umbral Echo",
        "actions": 1,
        "desc": "You split echoes of your soul into clones that overlay your movements.",
        "type": ["stance", "power die"],
        "effects": [
            {
                "type": "Stance",
                "desc": "You create shadowy copies of yourself, granting a d4 power die, starting at 2. If the die ticks down to 0, end this stance. When you use an ability that targets a foe, you may trigger any finishing blow effects of that ability, then tick the die down by 1. After you tick the die down, you may teleport 1."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance if you end your turn with no foes adjacent. When you do, tick the die up by 1."
            }
        ],
        "talent1": "While in this stance, your abilities gain slay: summon a shadow. This effect can only trigger once a round.",
        "talent2": "While in Umbral Echo, you have phasing and entering the space of shadows always costs a maximum of 1 movement.",
        "mastery": {
            "name": "Bunshin",
            "desc": "Gain the following interrupt while in this stance:",
            "interrupt": {
                "name": "Soul Proxy",
                "count": 1,
                "type": ["interrupt"],
                "trigger": "You take damage from a foe",
                "effects": [
                    {
                        "type": "Effect",
                        "desc": "End this stance, consume and remove all shadows in range 2 of you, and immediately gain defiance against the incoming damage. Deal 2 damage, once, to the triggering foe for each shadow consumed this way. You cannot take this stance again for the rest of combat."
                    },
                ],
                "tags": [interrupt, defiance]
            }
        },
        "tags": [stance, power_die, teleport_X, slay, summons.shadow, phasing]
    }
]

const shade = {
    "jobName": "Shade",
    "title": "Nocturnal Assassin",
    "img": img,
    "icon": <GiSharpShuriken/>,
    "desc": "<p>Night-walkers, shadow-steppers, and masters of secret scroll arts, the Shades are spies, scouts, and assassins of unparalleled skill. Their number forms a secret and deadly society of Shadow Clans spread across Arden Eld, each practicing and refining the Night Venom Techniques. Joining the shades is presumed to be extremely difficult, but they tend to open their ranks to anyone that has been lost or abandoned.</p><p>The legends say Shades make a deal with the Weeper, the dead titan queen of night and air, and drink her tears, splitting their soul in two. Their shadow becomes animate, bestial and hungry. Over a week and a day, they must fast and train their shadow to obey them, transforming them into agile and silent warriors of the highest order. The Shades say the stories are rumors, and they get along with their Darksides. They do have a tendency to appear when least expected, in uncanny and unsettling ways.</p>",
    "traits": [
        {
            "name": "Shadow Arts",
            "desc": "You have phasing and are immune to blinded.",
            "chapter": 1,
            "tags": [phasing, immune_to_x]
        },
        {
            "name": "Underworld",
            "desc": "Abilities used against foes in pits, difficult, or dangerous terrain gain unerring and deals bonus damage.",
            "chapter": 1,
            "tags": [ pit, difficult_terrain, dangerous_terrain, unerring, bonus_damage]
        },
        {
            "name": "Darkside",
            "desc": "When you first vacate a space on your turn, you may leave a shadow.",
            "chapter": 1,
            "tags": [summon, summons.shadow, summons.shadow_cloud]
        },
        {
            "name": "Meld",
            "desc": "Once a round, before or after using any ability on your turn, you can swap places with any shadow in range 3, teleporting.",
            "chapter": 1,
            "tags": [teleport_X, summons.shadow, summons.shadow_cloud]
        },
        {
            "name": "Umbral Soul",
            "desc": "Once a round, one of your allies can swap places with any of your shadows before or after using any ability, teleporting.",
            "chapter": 3,
            "tags": [teleport_X, summons.shadow, summons.shadow_cloud]
}
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Abyssal Ecstasy",
        "resolve": 2,
        "action": 1,
        "desc": "A prayer and a drop of blood, and soothing darkness cloaks the battlefield.",
        "effects": [
            {
                "type": "Effect",
                "desc": "Yourself, all allies, and allied summons gain stealth, and all foes are blinded."
            },
        ],
        "ultimate": {
            "name": "Ultima Ecstasy",
            "desc": "Summon shadows adjacent to all allies."
        },
        "tags": [stealth, blind, summon, summons.shadow, summons.shadow_cloud]
    }
}

export default shade;