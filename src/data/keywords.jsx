import { GiPointySword, GiStarStruck, GiEnrage, GiWaxSeal, GiShatteredHeart, GiKnockedOutStars, GiBrokenAxe, GiBrokenShield, GiBlood, GiNailedFoot, GiDeadHead, GiSwordClash, GiAngelOutfit, GiDodge, GiWindyStripes, GiFluffyWing, GiGhost, GiInvisible, GiPiercedBody, GiBrickWall, GiHealing, GiHidden, GiStrong, GiEyeTarget, GiBullHorns, GiLobArrow, GiSwordsPower, GiGuards, GiHeartPlus } from "react-icons/gi";
import { FaEyeSlash, FaPeace } from "react-icons/fa";
import { TbArrowsDiagonal2 } from "react-icons/tb";

const statusConditions = {
    "slashed": {
        "name": "Slashed",
        "desc": "Take 4 damage after you or an ally uses an ability that moves you, but no more than once a turn.",
        "value": 0,
        "icon": <GiPointySword/>
    },
    "blind": {
        "name": "Blind",
        "desc": "Max range of all abilities is 2",
        "value": 0,
        "icon": <FaEyeSlash/>
    },
    "dazed": {
        "name": "Dazed",
        "desc": "+1 curse on attacks",
        "value": 0,
        "icon": <GiStarStruck/>
    },
    "hatredOfX": {
        "name": "Hatred of X",
        "desc": "Deal half damage to all foes other than foe X. End this status at the end of your turn, or if foe X becomes immune to damage or un-targetable.",
        "value": "X",
        "icon": <GiEnrage/>
    },
    "pacified": {
        "name": "Pacified",
        "desc": "Character deals half damage. Breaks when damaged by a foe's ability.",
        "value": 0,
        "icon": <FaPeace/>
    },
    "sealed": {
        "name": "Sealed",
        "desc": "Character cannot inflict statuses.",
        "value": 0,
        "icon": <GiWaxSeal/>
    },
    "shattered": {
        "name": "Shattered",
        "desc": "Character cannot gain or benefit from vigor.",
        "value": 0,
        "icon": <GiShatteredHeart/>
    },
    "stunned": {
        "name": "Stunned",
        "desc": "Can't take interrupts. Your next ability used ends your turn, then end this status.",
        "value": 0,
        "icon": <GiKnockedOutStars/>
    },
    "weakened": {
        "name": "Weakened",
        "desc": "All damage dealt reduced by 2.",
        "value": 0,
        "icon": <GiBrokenAxe/>
    },
    "vulnerable": {
        "name": "Vulnerable",
        "desc": "All damage taken increased by 1.",
        "value": 0,
        "icon": <GiBrokenShield/>
    },
    "bloodied": {
        "name": "Bloodied",
        "desc": "At or under 50% hp",
        "value": 0,
        "icon": <GiBlood/>
    },
    "immobile": {
        "name": "Immobile",
        "desc": "Can't move, be moved, or be removed from the battlefield in any way.",
        "value": 0,
        "icon": <GiNailedFoot/>
    },
    "incapacitated": {
        "name": "Incapacitated",
        "desc": "An incapacitated character doesn't take turns, doesn't provide obstruction or engagement, can't move, take actions, or use abilities or traits. All effects on that character end. All effects, marks and summons created by that character are removed. Objects and terrain effects remain.",
        "value": 0,
        "icon": <GiDeadHead/>
    },
    "counter": {
        "name": "Counter",
        "desc": "When damaged by an ability, deal 2 damage back, each time damage is applied.",
        "value": 0,
        "icon": <GiSwordClash/>
    },
    "defiance": {
        "name": "Defiance",
        "desc": "Prevents hit points from being reduced past 1 hp. When this triggers, remove this effect and character becomes immune to all damage for the rest of the current turn.",
        "value": 0,
        "icon": <GiBullHorns/>
    },
    "divine": {
        "name": "Divine",
        "desc": "Damage from this ability cannot be reduced, mitigated, or negated in any way except immunity (ignores armor, weak, resistance, defiance, and bypasses vigor).",
        "value": 0,
        "icon": <GiAngelOutfit/>
    },
    "dodge": {
        "name": "Dodge",
        "desc": "Immune to all damage from misses, successful saves, and area effects.",
        "value": 0,
        "icon": <GiDodge/>
    },
    "evasion": {
        "name": "Evasion",
        "desc": "Roll a d6 when attacked. On a 4+, the attack automatically misses. Check before the attack roll.",
        "value": 0,
        "icon": <GiWindyStripes />
    },
    "flying": {
        "name": "Flying",
        "desc": "A flying character ignores terrain damage and movement penalties, height movement penalties, obstruction, and engagement.",
        "value": 0,
        "icon": <GiFluffyWing/>
    },
    "intangible": {
        "name": "Intangible",
        "desc": "Immune to damage and effects from foes. Does not provide obstruction or engagement.",
        "value": 0,
        "icon": <GiInvisible/>
    },
    "phasing": {
        "name": "Phasing",
        "desc": "Can ignore obstruction and pass through, but not end your turn in, terrain, objects, or characters.",
        "value": 0,
        "icon": <GiGhost/>
    },
    "pierce": {
        "name": "Pierce",
        "desc": "Damage cannot be reduced by armor or weakened.",
        "value": 0,
        "icon": <GiPiercedBody/>
    },
    "rampart": {
        "name": "Rampart",
        "desc": "Foes cannot enter or exit a space affected by a rampart effect by dashing, flying, or teleporting.",
        "value": 0,
        "icon": <GiBrickWall/>
    },
    "regeneration": {
        "name": "Regeneration",
        "desc": "If bloodied, gain 4 vigor at the end of your turn.",
        "value": 0,
        "icon": <GiHealing/>
    },
    "skirmisher": {
        "name": "Skirmisher",
        "desc": "Can move diagonally, and dash is full speed",
        "value": 0,
        "icon": <TbArrowsDiagonal2/>
    },
    "stealth": {
        "name": "Stealth",
        "desc": "Cannot be directly targeted except from an adjacent space. Breaks on using any ability other than dash or standard move.",
        "value": 0,
        "icon": <GiHidden/>
    },
    "sturdy": {
        "name": "Sturdy",
        "desc": "When moved or removed and placed by a foe, can only be moved max 1 space a turn.",
        "value": 0,
        "icon": <GiStrong/>
    },
    "trueStrike": {
        "name": "True strike",
        "desc": "Ignores dodge, blind, evasion, and stealth",
        "value": 0,
        "icon": <GiEyeTarget/>
    },
    "unerring": {
        "name": "Unerring",
        "desc": "Ignores cover and aetherwall",
        "value": 0,
        "icon": <GiLobArrow/>
    },
    "unstoppable": {
        "name": "Unstoppable",
        "desc": "Immune to all statuses. Cannot be moved by foes, and movement ignores engagement and rampart.",
        "value": 0,
        "icon": <GiSwordsPower/>
    },
    "vigilance_x": {
        "name": "Vigilance X",
        "desc": "A special effect with X charges, each represented by a d6. Like triggered effects, vigilance can only be used once per trigger. Vigilance charges stack if a character gains more than one. A character can spend any number of charges of Vigilance for one of the following effects, rolling 1d6 per charge spent and picking the highest result:• When an ally in range 2 is damaged by a foe's ability, reduce the damage by the amount rolled as if with armor • When a foe breaks adjacency with you, deal that much damage to them.",
        "value": "X",
        "icon": <GiGuards/>
    },
    "vigor": {
        "name": "Vigor",
        "desc": "Gain a shield that goes over your hit points, equal to your VIT value. Damage goes to Vigor before Hit Points, and it benefits from armor and resistance. Vigor stacks, but cannot go past 25% of your hp. If you gain a vigor surge, gain maximum vigor. Lose all vigor at the end of combat.",
        "value": 0,
        "icon": <GiHeartPlus/>
    }
}

const rules = {
    "action": {
        "name": "Action",
        "desc": "A character has 2 actions per turn that can be spent to use abilities.",
        "types": [],
        "value": 0
    },
    "effect": {
        "name": "Effect",
        "desc": "A part of an ability that simply happens and is applied to all targets, no roll or save required.",
        "types": ["Effect"],
        "value": 0
    },
    "ongoing": {
        "name": "Ongoing (+)",
        "desc": "A status or effect that is ongoing can't be ended until the thing causing it (a mark, a stance) is ended. Indicated by a + symbol.",
        "types": ["Effect", "Ongoing"],
        "value": 0
    },
    "status": {
        "name": "Status",
        "desc": "A negative effect.",
        "types": ["Status", "Effect"],
        "value": 0
    },
    "triggered_effect": {
        "name": "Triggered effect",
        "desc": "An effect that actives under a certain condition. Common effects are critical hit, slay, collide, finishing blow, and charge. Each unique effect can only trigger once per ability, and once per trigger.",
        "types": ["Effect", "Triggered"],
        "value": 0
    },
    "interrupt": {
        "name": "Interrupt",
        "desc": "Abilities used outside your turn. You can use each interrupt a number of times indicated by the tag (Interrupt 1, Interrupt 2, for example) between your turns, only one interrupt during any turn, (yours or another character's) and get them all back at the start of any of your turns. Interrupts have a trigger which interrupts any action currently being taken, and then immediately apply effects.",
        "types": ["Effect", "Triggered"],
        "value": 0
    },
    "boon": {
        "name": "Boon",
        "desc": "+d6 added to any attack roll or save per boon. For multiple boons, roll the number of d6s and then choose the highest.",
        "types": [],
        "value": 0
    },
    "curse": {
        "name": "Curse",
        "desc": "-d6 added to any attack roll or save per curse. For multiple curse, roll the number of d6s and then choose the lowest.",
        "types": [],
        "value": 0
    },
    "defeated": {
        "name": "Defeated",
        "desc": "HP has been reduced to 0.",
        "types": [],
        "value": 0
    },
    "rescue": {
        "name": "Rescue",
        "desc": "Action used to end incapacitation on an ally. Rescued allies end incapacitaiton on themselves and heal to full hit points, minus any wounds they have taken.",
        "types": [],
        "value": 0
    },
    "pit": {
        "name": "Pit",
        "desc": "A pit space is just what it sounds like, but could also be deep water, mud, etc. Pits count as one level lower of elevation than their base space.",
        "types": [],
        "value": 0
    },
    "defense": {
        "name": "Defense",
        "desc": "If the total of an attack roll equals or surpasses a target's defense, that attack hits.",
        "types": [],
        "value": 0
    },
    "movement": {
        "name": "Movement",
        "desc": "Movement can only be performed in an orthogonal direction and cannot be split up.",
        "types": [],
        "value": 0
    },
    "wound": {
        "name": "Wound",
        "desc": "Defeated characters gain a wound, which reduces their max HP by 25%. Characters become fallen upon gaining a 4th wound.",
        "types": [],
        "value": 0
    }
}

const combatGlossary = {
    "armor_x": {
        "name": "Armor X",
        "desc": "Reduce all damage taken by X. Always reduce by the highest value.",
        "types": [],
        "value": "X"
    },
    "area_ability": {
        "name": "Area Ability",
        "desc": "An ability that applies area effects in a large, fixed pattern.",
        "types": ["Area", "Effect"],
        "value": 0
    },
    "aura_x": {
        "name": "Aura X",
        "desc": "This ability is a continuous, ongoing effect that affects all characters specified within range X of an origin point, usually a character. Characters are only affected by an aura while inside",
        "types": ["Area", "Effect"],
        "value": "X"
    },
    "auto_hit": {
        "name": "Auto-hit",
        "desc": "This attack doesn't make an attack roll but always scores a hit (not critical hit or miss).",
        "types": [],
        "value": 0
    },
    "blessing": {
        "name": "Blessing",
        "desc": "Certain abilities give yourself or allies a Blessing token, and ways to spend those tokens for powerful effects. By default a character can use a blessing token to gain +1 boon when they make a save. All blessings are discarded at the end of combat.",
        "types": ["Boon"],
        "value": 0
    },
    "bonus_damage": {
        "name": "Bonus damage",
        "desc": "When an ability gains bonus damage, roll one more [D] for each instance of bonus damage and pick the highest result.",
        "types": ["Damage"],
        "value": 0
    },
    "chain_reaction": {
        "name": "Chain Reaction",
        "desc": "Wright-only triggered effect. Triggers when a character damages two or more foes with this ability",
        "types": ["Triggered", "Wright", "Effect"],
        "value": 0
    },
    "charge": {
        "name": "Charge",
        "desc": "A triggered effect that activates when the ability is used on a slow turn.",
        "types": ["Triggered", "Effect"],
        "value": 0
    },
    "cure": {
        "name": "Cure",
        "desc": "A character that's cured gains 4 vigor, or a vigor surge if they're bloodied. Then, they may save agains all statuses.",
        "types": ["Status"],
        "value": 0
    },
    "collide": {
        "name": "Collide",
        "desc": "A triggered effect that occurs on any character shoved into an obstruction by this ability",
        "types": ["Triggered", "Effect"],
        "value": 0
    },
    "combo": {
        "name": "Combo",
        "desc": "Actions with Combo have two versions, a base version and combo version. When you use the base ability, gain a combo token. Any time you use a combo ability and have a token, you use the combo version instead, discarding the token. You can only have one combo token at once, and discard all tokens at the end of combat.",
        "types": ["Combo"],
        "value": 0
    },
    "comeback": {
        "name": "Comeback",
        "desc": "A triggered effect that turns on if the character using this ability is bloodied",
        "types": ["Triggered", "Effect"],
        "value": 0
    },
    "cover": {
        "name": "Cover",
        "desc": "If a character has cover from an ability, it halves all damage from that ability",
        "types": [],
        "value": 0
    },
    "critical_hit": {
        "name": "Critical Hit",
        "desc": "Increase total attack damage by +[D]. Can only apply to an attack, can only apply once, and can trigger normally on a total attack roll of 20+.",
        "types": ["Damage"],
        "value": 0
    },
    "dangerous_terrain": {
        "name": "Dangerous Terrain",
        "desc": "Entering or exiting a dangerous terrain space causes a character to take 2 piercing damage. Characters can only take this damage once a turn.",
        "types": ["Environment", "Damage"],
        "value": 0
    },
    "difficult_terrain": {
        "name": "Difficult Terrain",
        "desc": "Costs +1 space of movement to exit.",
        "types": ["Environment"],
        "value": 0
    },
    "class_damage_die": {
        "name": "[D]",
        "desc": "Your class damage die. Roll that die when you see this symbol.",
        "types": ["Damage"],
        "value": 0
    },
    "dash": {
        "name": "Dash",
        "desc": "Special movement that ignores engagement.",
        "types": ["Movement"],
        "value": 0
    },
    "delay": {
        "name": "Delay",
        "desc": "Slow but powerful effect that typically ends your turn. When you use a delay effect, your next turn must be slow. The effect occurs at the start of that turn, before anything else happens.",
        "types": ["Turn", "Effect"],
        "value": 0
    },
    "end_turn": {
        "name": "End turn",
        "desc": "This ability ends your turn. If multiple abilities or effects would end your turn at the same time, you can only choose one.",
        "types": ["Turn"],
        "value": 0
    },
    "engagement": {
        "name": "Engagement",
        "desc": "A character must spend +1 space of movement to exit a space adjacent to a foe.",
        "types": ["Movement"],
        "value": "+1"
    },
    "exceed": {
        "name": "Exceed",
        "desc": "A triggered effect that takes place on a total attack roll of 15+.",
        "types": ["Triggered", "Effect"],
        "value": 0
    },
    "finishing_blow": {
        "name": "Finishing Blow",
        "desc": "Vagabond only. Triggered effect that triggers if this ability targets a bloodied foe.",
        "types": ["Triggered", "Vagabond", "Effect"],
        "value": 0
    },
    "fray_damage": {
        "name": "Fray damage",
        "desc": "Fixed damage. Usually added to all attacks on hit or miss.",
        "types": ["Damage"],
        "value": 0
    },
    "gamble": {
        "name": "Gamble",
        "desc": "Roll 1d6, then trigger an effect on a certain result or higher",
        "types": ["Effect"],
        "value": "1d6"
    },
    "heroic": {
        "name": "Heroic",
        "desc": "Stalwart only triggered effect. Triggers when its special condition is fulfilled, depending on job (shove a character, sacrifice health, etc).",
        "types": ["Triggered", "Stalwart", "Effect"],
        "value": 0
    },
    "immune_to_x": {
        "name": "Immune to X",
        "desc": "Not affected by X in any way. A character that's immune to damage or effects doesn't even count as taking them.",
        "types": ["Condition"],
        "value": "X"
    },
    "infuse_x": {
        "name": "Infuse X",
        "desc": "Many wright abilities have upgraded versions that can only be cast by Infusing them by spending X Aether as part of the ability. Aether is consumed at the start of the action. Only one infusion can be chosen at once, and only one infuse effect can trigger at at time. Infused abilities count as the same ability as the base ability and also benefit from all talents.",
        "types": [],
        "value": "X"
    },
    "mark": {
        "name": "Mark",
        "desc": "Places a mark, an ongoing effect, on a specific character. Each ability can only place one mark at a time, and a character can mark another character with one mark at a time. If you place a new mark on a character with a mark from you, you can choose which to keep or which to discard. Marks end when the character that placed the mark is defeated, or under other listed conditions.",
        "types": ["Mark", "Ongoing", "Effect"],
        "value": 0
    },
    "obstruction": {
        "name": "Obstruction",
        "desc": "A character can't normally enter a space occupied by an obstruction. By default this means foes, terrain, and objects.",
        "types": ["Environment"],
        "value": 0
    },
    "power_die": {
        "name": "Power Die",
        "desc": "A die set out and and ticked up or down depending on certain conditions. You can use a physical die to represent it, or just a tracker. Each power die is unique to the ability that granted it. You typically gain power dice at 1 tick, and if a power die ticks to 0, discard it.",
        "types": [],
        "value": 0
    },
    "rebound": {
        "name": "Rebound",
        "desc": "An ability that is rebounded can be bounced off a character in range. The ability has no effect, but is instead redirected from that character's space as the origin space, taking into account cover, line of sight, and other similar effects from their space. Any effects that apply to the original user of the ability still apply to them (such as sacrificing hp, or moving). Rebound does not stack.",
        "types": ["Effect"],
        "value": 0
    },
    "resistance": {
        "name": "Resistance",
        "desc": "Take half damage, rounded up.",
        "types": ["Damage"],
        "value": 0
    },
    "rush_x": {
        "name": "Rush X",
        "desc": "Move X spaces. You are unstoppable and immune to all damage while moving.",
        "types": ["Movement"],
        "value": "X"
    },
    "sacrifice_x": {
        "name": "Sacrifice X",
        "desc": "Reduce your hp by X, usually as a cost for an ability. Sacrifice costs are paid at the start of an ability, cannot be reduced, ignored, transferred, or resisted, cannot bring your hp below 1, and you can pay them even if you don't have enough hp left.",
        "types": [],
        "value": "X"
    },
    "shove_x": {
        "name": "Shove X",
        "desc": "Move a character involuntarily X spaces in a straight line away from you. If they would move into another character's space, an object, or into a higher elevation space, they Collide and stop moving.",
        "types": ["Movement"],
        "value": "X"
    },
    "slay": {
        "name": "Slay",
        "desc": "A triggered effect that activates when this ability reduces a character to 0 hp.",
        "types": ["Triggered", "Effect"],
        "value": 0
    },
    "slow_turn": {
        "name": "Slow Turn",
        "desc": "Go after all other characters. If multiple characters take slow turns, it takes the same order as regular turns (ally/enemy/ally)",
        "types": ["Turn"],
        "value": 0
    },
    "stance": {
        "name": "Stance",
        "desc": "An ongoing, positive effect. A character can only have one stance active at a time and can drop a stance by taking a new stance or as a free action at the start of their turn. When a stance refreshes, regain its effects.",
        "types": ["Effect", "Ongoing"],
        "value": 0
    },
    "standard_move": {
        "name": "Standard move",
        "desc": "An ability all characters can take as a free action to move their speed",
        "types": ["Movement"],
        "value": 0
    },
    "summon": {
        "name": "Summon",
        "desc": "A character controlled by its Summoner. Summons are intangible, and cannot be marked, and do not count as allies or foes for the purposes of abilities. Summons do not take turns. Instead, they have a summon action that they use on their summoner’s turn, or a summon effect that is always active, and otherwise don’t take actions or move on their own. Summons are removed from the battlefield when their summoner is defeated.",
        "types": ["Summon"],
        "value": 0
    },
    "teleport_X": {
        "name": "Teleport X",
        "desc": "Special movement that allows you to instantly move to unoccupied space within range X.",
        "types": ["Movement"],
        "value": "X"
    },
    "terrain_effect": {
        "name": "Terrain effect",
        "desc": "Something that creates or modifies the terrain spaces on the battlefield.",
        "types": ["Environment", "Effect"],
        "value": 0
    },
    "aether": {
        "name": "Aether",
        "desc": "All Wrights gather Aether during combat, represented by a d6 power die. They passively gain 1 at the start of their turn, starting with 0. Use a d6 to track Aether. Other abilities and Chain Reaction will generate Aether when used. All Aether disperses at the end of combat",
        "types": [],
        "value": 0
    }
}

const actions = {
    "prowl": {
        "name": "Prowl",
        "actioncost": 1,
        "desc": "Gain stealth. Becomes a free action if no foes are in range 2.",
        "tags": [statusConditions.stealth],
        "value": 0
    },
    "bless": {
        "name": "Bless",
        "actioncost": 1,
        "desc": "Grant a blessing token to a character in range 4.",
        "tags": [combatGlossary.blessing],
        "value": 0
    },
    "diaga": {
        "name": "Diaga",
        "actioncost": 1,
        "desc": "Cure a character in range 4.",
        "tags": [combatGlossary.cure],
        "value": 0
    },
    "taunt": {
        "name": "Taunt",
        "actioncost": 1,
        "desc": "A foe in range 3 gains hatred of you.",
        "tags": [statusConditions.hatredOfX],
        "value": 0
    },
    "defy_the_cycle": {
        "name": "Defy the Cycle",
        "actioncost": 2,
        "restriction": "1/expedition",
        "desc": "You call upon your power to forbid the natural order of life and death from working. Until the start of your next turn, characters cannot be reduced below 1 hp. Divine damage bypasses this ability.",
        "tags": [statusConditions.divine],
        "value": 0
    },
    "chakravartin": {
        "name": "Chakravartin",
        "actioncost": 2,
        "restriction": "1/expedition",
        "desc": "An ally in range 6 becomes unstoppable and immune to all damage until the end of their next turn.",
        "tags": [statusConditions.unstoppable, combatGlossary.immune_to_x],
        "value": 0
    },
    "klingenkunst": {
        "name": "Klingenkunst",
        "actioncost": 0,
        "desc": "This ability can interrupt other abilities or movement on your turn without stopping them.",
        "tags": [combatGlossary.teleport_X],
        "value": 0
    },
}

const summons = {
    "bomb": {
        "name": "Bomb",
        "desc": "Many fool abilities summon bombs. When a bomb is summoned, it can be summoned in free space in range 2 unless a different range is specified. You can have a maximum of six active bombs.",
        "range": 2,
        "max_num": 6,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_effects": [
            {
                "desc": "The bomb can be shoved or teleported and can share space with other characters, though it can't share space with other bombs. When any character enters a bomb's space, they can remove it from the battlefield. At the end of their turn, they may place it any any free adjacent space. Characters can only carry one bomb at once.",
                "tags": [combatGlossary.shove_x, combatGlossary.teleport_X]
            },
            {
                "desc": "Once a round, you may gamble at the end of any other turn than yours, after all bombs have been placed. All bombs explode, dealing damage equal to the gamble result in a small blast area effect centered on them. Characters in the area of multiple explosions are only affected once.",
                "tags": [combatGlossary.gamble, combatGlossary.area_ability]
            }
        ]
    },
    "astral_seraph": {
        "name": "Astral Seraph",
        "desc": "At the start of combat, you may place your seraph in range 2 from you. This summon persists even if you're defeated.",
        "range": 2,
        "max_num": 1,
        "size": 1,
        "modifiers": ["intangible", "flying", "skirmisher"],
        "summon_actions": [
            {
                "desc": "The seraph flies 3",
                "tags": [combatGlossary.fly_X]
            },
        ],
        "summon_effects": [
            {
                "desc": "Once a round, when you score a Critical hit, trigger a Finishing Blow, or trigger an Exceed effect, you may cause the seraph to lash out against all foes at exactly range 3 from the seraph, dealing 2 unerring damage to them.",
                "tags": [combatGlossary.critical_hit, combatGlossary.finishing_blow, combatGlossary.exceed, statusConditions.unerring]
            }
        ]
    },
    "shadow_cloud": {
        "name": "Shadow Cloud",
        "desc": "Many shade abilities create shadow clouds. You can have any number of shadow clouds.",
        "range": null,
        "max_num": Infinity,
        "size": null,
        "modifiers": ["Terrain effect"],
        "terrain_effects": [
            {
                "desc": "While inside this terrain space, characters are blinded+. You are immune to these effects.",
                "tags": [statusConditions.blind, combatGlossary.difficult_terrain, combatGlossary.terrain_effect]
            }
        ]
    },
    "shadow": {
        "name": "Shadow",
        "desc": "Many shade abilities summon shadows. Shadows can be summoned in free space in range 2, unless a higher range is specified. You can have a maximum of six active shadows.",
        "range": 2,
        "max_num": 6,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_effects": [
            {
                "desc": "The shadow can share space other characters, and has different effects on foes and allies: \nIf a foe enters the shadow's space for any reason or starts their turn there, it it consumed, dealing 2 damage to them, disappearing and turning into a shadow cloud. \nIf you or an ally enters the shadow's space, it is consumed. It disappears and grants them stealth.",
                "tags": [statusConditions.stealth]
            }
        ]
    },
    "beast": {
        "name": "Beast",
        "desc": "Many warden abilities summon beasts. Beasts can be summoned in any free space in range 2 unless a different range is listed. You can have a maximum of six active beasts.",
        "range": 2,
        "max_num": 6,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_actions": [
            {
                "desc": "All beasts can dash 1 space at the start of your turn.",
                "tags": [combatGlossary.dash]
            },
        ],
        "summon_effects": [
            {
                "desc": "When you or an ally ends any movement adjacent to a beast's space, you may cause the beast to pounce at a foe in range 3. That character takes unerring damage equal to their distance from the beast (1-3). Then remove the beast.",
                "tags": [statusConditions.unerring]
            }
        ]
    },
    "great_beast": {
        "name": "Great Beast",
        "desc": "At the start of every combat, summon a great beast in range 2, a trained animal companion. This summon persists even if you're defeated.",
        "range": 2,
        "max_num": 1,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_actions": [
            {
                "desc": "Once during your turn, your beast can dash up to 2 spaces, then may deal 2 damage to an adjacent foe and shove 1. \nCharge: Repeat the action.",
                "tags": [combatGlossary.dash, combatGlossary.shove_X, combatGlossary.charge]
            }
        ]
    },
    "thrall": {
        "name": "Thrall",
        "desc": "Many harvester abilities summon thralls. When a thrall is created, it can be summoned in any free space in range 2 unless a different range is listed. You can have a maximum of six active thralls.",
        "range": 2,
        "max_num": 6,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_actions": [
            {
                "desc": "At the start of your turn, all your thralls may dash 2 spaces, ignoring difficult terrain, then dealing 1 piercing damage to an adjacent foe. Then, remove each thrall and replace it with a plant.",
                "tags": [combatGlossary.dash, statusConditions.pierce, combatGlossary.terrain_effect]
            }
        ]
    },
    "plant": {
        "name": "Plant",
        "desc": "Many harvester abilities create plants. When a plant is created, it can be summoned in any free space in range 2 unless a different range is listed. You can have any number of plants.",
        "range": 2,
        "max_num": Infinity,
        "size": null,
        "modifiers": ["Terrain effect"],
        "terrain_effects": [
            {
                "desc": "A plant space is dangerous terrain that only affects foes, and has a blessing token on it, which can be picked up if yourself or an ally enters its space. When the blessing is removed, remove the plant.",
                "tags": [combatGlossary.dangerous_terrain, combatGlossary.blessing, combatGlossary.terrain_effect]
            }
        ]
    },
    "severed_soul": {
        "name": "Severed Soul",
        "desc": "You slash an adjacent foe with your weapon, knocking their soul out of their body. Draw a line 4 area effect from your foe facing directly away from you and summon the soul in the last available space.",
        "range": null,
        "max_num": 1,
        "size": 1,
        "modifiers": ["intangible", "immobile"],
        "summon_effects": [
            {
                "desc": "While they have their soul knocked out, foes can act normally. However, the soul can be targeted as if it was the body, transferring all damage or effects it would take to the body, no matter the distance or line of sight. Damage becomes divine. Abilities that are able to target both the body and soul of the foe (such as AoEs) can hit both.",
                "tags": [combatGlossary.divine]
            }
        ]
    },
    "wild_card": {
        "name": "Wild Card",
        "desc": "Many seer abilities summon a wild card. When a wild card is summoned, it can be summoned in range 2 if no other range is listed.",
        "range": 2,
        "max_num": Infinity,
        "size": 1,
        "modifiers": ["intangible"],
        "summon_effects": [
            {
                "desc": "The card emits a small blast area effect centered on it, which is normally inactive. When any space of an area ability from you or an ally would touch the area, it can be activated, causing the card to explode, and extending the area effect of that ability to encompass the card's area for the duration. Then, remove the card. \nWild cards can be triggered by other wild cards. \nWild cards do not extend the persistent effects of any area abilities, such as creating terrain effects in their space, but only the effects that last for the duration of the ability.",
                "tags": [combatGlossary.blast_area_effect, combatGlossary.explode, combatGlossary.area_ability, combatGlossary.triggered_ability]
            }
        ]
    },
    "aethershard": {
        "name": "Aethershard",
        "desc": "Sacrifice 3 and summon an Aethershard in a free space in range 6.",
        "range": 6,
        "max_num": Infinity,
        "size": 1,
        "modifiers": [],
        "summon_effects": [
            {
                "desc": "When you include the Aethershard in the area effect of any ability, the ability resonates with the shards, dealing 2 piercing damage as an area effect, once, to all characters in the area for every one of your Aethershards caught in the same ability. Then destroy all Aethershards activated this way and gain 1 Aether.",
                "tags": [statusConditions.pierce, combatGlossary.area_ability]
            }
        ]
    },
    "selkie": {
        "name": "Selkie",
        "desc": "You have a bound elemental. At the start of any combat, summon it in range 3.",
        "range": 3,
        "max_num": 1,
        "size": 1,
        "modifiers": ["intangible", "flying"],
        "summon_effects": [
            {
                "desc": "Your Selkie can share space with characters, and is also considered a terrain effect.",
                "tags": [combatGlossary.terrain_effect]
            }
        ],
        "summon_actions": [
            {
                "desc": "The Selkie may fly 3 at the end of your turn. Any character standing in the Selfie's space when it moves is removed from the battlefield, then placed back in its space, or adjacent to it if that space is occupied.",
                "tags": [statusConditions.flying]
            }
        ]
    },
    "salt_sprite": {
        "name": "Salt Sprite",
        "desc": "Many stormbender abilities summon a Salt Sprite. When a Salt Sprite is summoned, it can be summoned in range 2 unless a different range is specified. You can have a maximum of six active Salt Sprites.",
        "range": 2,
        "max_num": 6,
        "size": 1,
        "modifiers": ["intangible", "immobile"],
        "summon_effects": [
            {
                "desc": "The Sprite is both a summon and terrain effect. It can share spare with other characters, and its area counts as difficult terrain.",
                "tags": [combatGlossary.terrain_effect]
            }
        ],
        "effects": [
            {
                "desc": "When a character is shoved into the sprite's area, it triggers collide effects and awakens it. Allies shoved into its space can fly 2. Foes are shoved 2 in any direction. Then, remove the sprite.",
                "tags": [combatGlossary.shove_x, combatGlossary.shove_x, statusConditions.flying]
            }
        ]
    }
}

const keywordData = {
    statusConditions,
    rules,
    combatGlossary,
    actions,
    summons
}

export default keywordData;
