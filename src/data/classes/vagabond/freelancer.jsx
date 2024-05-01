import keywordData from "../../keywords";
import img from "../../../assets/images/freelancer.PNG"
import { GiChaingun } from "react-icons/gi";

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { unerring, divine, blind, stealth, evasion, dazed } = statusConditions
const { summon, boon, interrupt} = rules;
const { exceed, bonus_damage, mark, teleport_X, aura_x, charge, collide, chain_reaction, finishing_blow, slay, dash, power_die, rebound, stance, area_ability} = combatGlossary

const ch1Abilities = [
    {
        "name": "Strafe Shot",
        "actions": 1,
        "range": 3,
        "desc": "Faster than a speeding bullet.",
        "type": ["attack", "+1 boon"],
        "tags": [boon, dash, blind, finishing_blow, exceed, unerring],
        "effects": [
            {
                "type": "Effect",
                "desc": "You may dash 1"
            },
            {
                "type": "Attack",
                "desc": "On hit: [D]+ fray. Miss: fray."
            },
            {
                "type": "Effect",
                "desc": "Your foe is blinded."
            },
            {
                "type": "Effect",
                "desc": "You may dash 1."
            },
            {
                "type": "Finishing blow or Exceed",
                "desc": "Release a flurry of fire, dealing 2 unerring damage to all foes at exactly range 3 from you."
            }
        ],
        "talent1": "Exceed: Gain evasion until the start of your next turn.",
        "talent2": "Exceed: Dash 3 again",
        "mastery": {
            "name": "Platinum Chamber",
            "desc": "Strafe shot can interrupt and break up any movement you make without halting it."
        }
    },
    {
        "name": "Exorcism",
        "actions": 1,
        "range": 3,
        "desc": "The mantra of the exorcist. Every bullet or arrow shot is imbued with the soul aether of its master, and seeks its foe like a loyal hound.",
        "type": ["mark", "power die", "unerring"],
        "tags": [mark, power_die, unerring, finishing_blow],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark a foe in range with the following effects: When you end your turn in range 3 from your foe, or that foe ends their turn in range 3 of you, set out a d4 power die, starting at 1, or tick it up by 1. When you set out the die or tick it up, shoot a projectile at your foe, dealing 2 damage. The projectile remains, hovering in the air, and tracking your foe. At the end of any turn the die is at maximum, every projectile shot flies at your foe, dealing 2 damage once for each charge on the die and ending this effect and mark."
            },
            {
                "type": "Finishing Blow",
                "desc": "When marking a bloodied foe, immediately gain the die at 1."
            }
        ],
        "talent1": "While this mark is active, your attacks gain: Exceed: tick the die up by 1.",
        "talent2": "If your target is defeated while marked by Exorcism, the projectiles scatter, dealing 2 damage, once, per charge on the die to all foes in a large blast area effect centered on the foe.",
        "mastery": {
            "name": "Puresilver",
            "desc": "If Exorcism's target is defeated, you can cause the projectiles to fly and track a new target in range 3 of you or the original target, transferring the mark and keeping the power die."
        }
    },
    {
        "name": "Trick Shot",
        "actions": 1,
        "desc": "Shoot with your heart.",
        "tags": [unerring, boon, rebound, finishing_blow, stealth, teleport_X],
        "effects": [
            {
                "type": "Effect",
                "desc": "Your next ability with a listed range gains unerring, +1 boon on attacks, and rebound."
            },
            {
                "type": "Finishing Blow",
                "desc": "Gain stealth after the ability resolves."
            }
        ],
        "talent1": "When Trick Shot rebounds off an ally or summon, you may teleport them 2.",
        "talent2": "After Trick Shot rebounds, it causes phantom projectiles to split off, dealing 2 unerring damage to all foes at exactly range 3 from its rebound target.",
        "mastery": {
            "name": "Golden Bullet",
            "desc": "Trick Shot can cause an ability to rebound twice. The second bounce must be off a new character or object in range 3 of the first."
        }
    },
    {
        "name": "Astral Chain",
        "actions": 2,
        "range": 3,
        "desc": "With your heavenly chain skillfully whirling through the air, you dispense divine justice.",
        "type": ["attack", "mark"],
        "tags": [mark, unerring, finishing_blow, exceed, evasion, rebound],
        "effects": [
            {
                "type": "Attack",
                "desc": "On hit: 2[D]+fray. Miss: fray."
            },
            {
                "type": "Mark",
                "desc": "Your foe is marked. While marked, at the start of your turn, if they are in range 3, they take 2 unerring damage from you as a bolt of celestial lightning shoots between you. If they are at exactly range 3, increase damage to 2 damage, twice instead."
            },
            {
                "type": "Finishing Blow or Exceed",
                "desc": "You may fly 4."
            }
        ],
        "talent1": "While marked, gain evasion against your marked foe while they are in range 3.",
        "talent2": "While marked, all attacks from you or allies against your marked foe may gain rebound and deal bonus damage if they are rebounded.",
        "mastery": {
            "name": "Diamond Punisher",
            "desc": "While your foe is marked and in range 3 of you, they must save if they attempt to move to any space more than 3 spaces away from you. On a successful save, they can move as normal. On a failed save, they can't consider any space further away than range 3 of you valid space to move to until the start of their next turn, then become immune to this effect for the rest of combat."
        }
    },
    {
        "name": "Deus Ex Machina",
        "actions": 1,
        "range": 3,
        "desc": "When skillfully used, the astral chain can be used to maneuver in the blink of an eye.",
        "type": ["mark"],
        "tags": [mark, interrupt, stealth],
        "effects": [
            {
                "type": "Mark",
                "desc": "Mark and grapple onto a foe, ally, or summon in range from you with an ethereal lasso and gain the following interrupt while that character is marked. You can take the interrupt regardless of distance."
            }
        ],
        "interrupt": {
            "name": "Divine Intervention",
            "count": 1,
            "trigger": "The end of any turn",
            "effects": [
                "Teleport 2 towards the target or teleport your target 1 towards you. The teleport must end with both of you closer together. Allies can choose whether to take this teleport."
            ],
            "tags": [interrupt, teleport_X]
        },
        "talent1": "Allies and summons can be teleported up to 4 spaces instead",
        "talent2": "Using this interrupt on a foe dazes or blinds them (your choice).",
        "mastery": {
            "name": "Whip of the Thrones",
            "desc": "Gain stealth after marking your target. This interrupt does not break stealth, and while you have stealth, it can be used +1 more time a round."
        }
    },
    {
        "name": "Ace",
        "actions": 1,
        "desc": "The world goes still, and is split by a bolt of lightning.",
        "type": ["stance", "end turn"],
        "tags": [stance, dash, exceed, dazed, unerring, area_ability, teleport_X],
        "effects": [
            {
                "type": "End your turn and gain Stance",
                "desc": "When you take this stance, or when it refreshes, you may dash 1 and your next attack triggers all exceed effects, dazes your foe, and gains unerring."
            },
            {
                "type": "Refresh",
                "desc": "Refresh this stance after you score a finishing blow."
            }
        ],
        "talent1": "If your attack target is at exactly range 3, they explode with a medium blast area effect centered on them. Foes inside are dazed.",
        "talent2": "If your attack target is at exactly range 3, you may also teleport them 2 after the attack resolves.",
        "mastery": {
            "name": "Hot Chamber",
            "desc": "At round 4 or later, Ace becomes a free action to enter if you have not used it yet this combat. It also refreshes automatically at the start of your turn, and its dash increases to 3."
        }
    }
]

const freelancer = {
    "jobName": "Freelancer",
    "title": "Divine Punisher",
    "img": img,
    "icon": <GiChaingun/>,
    "desc": "<p>Freelancers are free-roaming exorcists and hired guns, roaming the land and fighting blights, demons and bandits in the name of justice. They tend to act as wild cards: highly independent, highly effective, and sticking to their codes of honor.</p><p>Freelancers have their history in an ancient disgraced knightly order from one of the Seven Families of the Thrynn. They each wield a bright metal six gun, a bow, or a long rifle with extreme skill, the bullets, shot, or arrows of which they infuse with raw Aether drawn from their very souls. Each weapon is a relic passed down from master to student over the years, and can only be won in a duel with another freelancer. The freelancer's ultimate weapon is the Astral Chain, a holy gauntlet which they use to purge and bind demons and rogue spirits into their service as Seraphim.</p>",
    "traits": [
        {
            "name": "Bound Spirit",
            "desc": "At the start of combat, you may place your seraph in range 2 from you. This summon persists even if you're defeated.",
            "chapter": 1,
            "tags": [summon, summons.astral_seraph]
        },
        {
            "name": "Aether Shot",
            "desc": "Any attack made on the third and sixth round of combat deals bonus damage and triggers all exceed effects, hit or miss.",
            "chapter": 1,
            "tags": [bonus_damage, exceed]
        },
        {
            "name": "Trigrammaton",
            "desc": "Your abilities used against foes at exactly range 3 gain +1 boon on attack rolls and unerring.",
            "chapter": 1,
            "tags": [boon, unerring]
        },
        {
            "name": "Astral Binding",
            "desc": "You can stack up to two marks on characters. As a free action, you can teleport all characters marked by you 1 space.",
            "chapter": 1,
            "tags": [mark, teleport_X]
        },
        {
            "name": "Divine Chamber",
            "desc": "Your sixth round Aether Shell also deals divine damage.",
            "chapter": 3,
            "tags": [divine]
        },
    ],
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Paradiso",
        "resolve": 3,
        "action": 1,
        "desc": "You summon the spirit of your weapon, drawing out the residual soul aether of every single one of its previous users. Ghostly doubles of dozens of your predecessors match your movements, and create an aura of untold power.",
        "extra_effects": [
            {
                "type": "Aura",
                "desc": "You gain an aura of supernatural accuracy, charging your weapons and the weapons of your allies with aether."
            },
        ],
        "effects": [
            "You gain Aura 2 until the end of your next turn. While standing in Paradiso, abilities used by you or allies against foes outside of Paradiso trigger all the following triggered effects: charge, collide, comeback, chain reaction, exceed, finishing blow, slay.",
        ],
        "ultimate": {
            "name": "Ultima Paradiso",
            "desc": "As a free action ability while Paradiso is active, you can teleport yourself, all allies, and the area itself to any other part of the battlefield, as long as there is free space to place all characters teleported inside the area when it is moved."
        },
        "tags": [aura_x, charge, collide, chain_reaction, exceed, finishing_blow, slay, teleport_X]
    }
}

export default freelancer;