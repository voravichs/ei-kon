const statusConditions = {
    "slashed": {
        "name": "Slashed",
        "desc": "Take 4 damage after you or an ally uses an ability that moves you, but no more than once a turn.",
        "value": 0
    },
    "blind": {
        "name": "Blind",
        "desc": "Max range of all abilities is 2",
        "value": 0
    },
    "dazed": {
        "name": "Dazed",
        "desc": "+1 curse on attacks",
        "value": 0
    },
    "hatredOfX": {
        "name": "Hatred of X",
        "desc": "Deal half damage to all foes other than foe X. End this status at the end of your turn, or if foe X becomes immune to damage or un-targetable.",
        "value": "X"
    },
    "pacified": {
        "name": "Pacified",
        "desc": "Character deals half damage. Breaks when damaged by a foe's ability.",
        "value": 0
    },
    "sealed": {
        "name": "Sealed",
        "desc": "Character cannot inflict statuses.",
        "value": 0
    },
    "shattered": {
        "name": "Shattered",
        "desc": "Character cannot gain or benefit from vigor.",
        "value": 0
    },
    "stunned": {
        "name": "Stunned",
        "desc": "Can't take interrupts. Your next ability used ends your turn, then end this status.",
        "value": 0
    },
    "weakened": {
        "name": "Weakened",
        "desc": "All damage dealt reduced by 2.",
        "value": 0
    },
    "vulnerable": {
        "name": "Vulnerable",
        "desc": "All damage taken increased by 1.",
        "value": 0
    },
    "bloodied": {
        "name": "Bloodied",
        "desc": "At or under 50% hp",
        "value": 0
    },
    "immobile": {
        "name": "Immobile",
        "desc": "Can't move, be moved, or be removed from the battlefield in any way.",
        "value": 0
    },
    "incapacitated": {
        "name": "Incapacitated",
        "desc": "An incapacitated character doesn't take turns, doesn't provide obstruction or engagement, can't move, take actions, or use abilities or traits. All effects on that character end. All effects, marks and summons created by that character are removed. Objects and terrain effects remain.",
        "value": 0
    },
    "counter": {
        "name": "Counter",
        "desc": "When damaged by an ability, deal 2 damage back, each time damage is applied.",
        "value": 0
    },
    "defiance": {
        "name": "Defiance",
        "desc": "Prevents hit points from being reduced past 1 hp. When this triggers, remove this effect and character becomes immune to all damage for the rest of the current turn.",
        "value": 0
    },
    "divine": {
        "name": "Divine",
        "desc": "Damage from this ability cannot be reduced, mitigated, or negated in any way except immunity (ignores armor, weak, resistance, defiance, and bypasses vigor).",
        "value": 0
    },
    "dodge": {
        "name": "Dodge",
        "desc": "Immune to all damage from misses, successful saves, and area effects.",
        "value": 0
    },
    "evasion": {
        "name": "Evasion",
        "desc": "Roll a d6 when attacked. On a 4+, the attack automatically misses. Check before the attack roll.",
        "value": 0
    },
    "flying": {
        "name": "Flying",
        "desc": "A flying character ignores terrain damage and movement penalties, height movement penalties, obstruction, and engagement.",
        "value": 0
    },
    "intangible": {
        "name": "Intangible",
        "desc": "Immune to damage and effects from foes. Does not provide obstruction or engagement.",
        "value": 0
    },
    "phasing": {
        "name": "Phasing",
        "desc": "Can ignore obstruction and pass through, but not end your turn in, terrain, objects, or characters.",
        "value": 0
    },
    "pierce": {
        "name": "Pierce",
        "desc": "Damage cannot be reduced by armor or weakened.",
        "value": 0
    },
    "rampart": {
        "name": "Rampart",
        "desc": "Foes cannot enter or exit a space affected by a rampart effect by dashing, flying, or teleporting.",
        "value": 0
    },
    "regeneration": {
        "name": "Regeneration",
        "desc": "If bloodied, gain 4 vigor at the end of your turn.",
        "value": 0
    },
    "skirmisher": {
        "name": "Skirmisher",
        "desc": "Can move diagonally, and dash is full speed",
        "value": 0
    },
    "stealth": {
        "name": "Stealth",
        "desc": "Cannot be directly targeted except from an adjacent space. Breaks on using any ability other than dash or standard move.",
        "value": 0
    },
    "sturdy": {
        "name": "Sturdy",
        "desc": "When moved or removed and placed by a foe, can only be moved max 1 space a turn.",
        "value": 0
    },
    "trueStrike": {
        "name": "True strike",
        "desc": "Ignores dodge, blind, evasion, and stealth",
        "value": 0
    },
    "unerring": {
        "name": "Unerring",
        "desc": "Ignores cover and aetherwall",
        "value": 0
    },
    "unstoppable": {
        "name": "Unstoppable",
        "desc": "Immune to all statuses. Cannot be moved by foes, and movement ignores engagement and rampart.",
        "value": 0
    },
    "vigilance_x": {
        "name": "Vigilance X",
        "desc": "A special effect with X charges, each represented by a d6. Like triggered effects, vigilance can only be used once per trigger. Vigilance charges stack if a character gains more than one. A character can spend any number of charges of Vigilance for one of the following effects, rolling 1d6 per charge spent and picking the highest result:• When an ally in range 2 is damaged by a foe’s ability, reduce the damage by the amount rolled as if with armor • When a foe breaks adjacency with you, deal that much damage to them.",
        "value": "X"
    },
    "vigor": {
        "name": "Vigor",
        "desc": "Gain a shield that goes over your hit points, equal to your VIT value. Damage goes to Vigor before Hit Points, and it benefits from armor and resistance. Vigor stacks, but cannot go past 25% of your hp. If you gain a vigor surge, gain maximum vigor. Lose all vigor at the end of combat.",
        "value": 0
    }
}

const rules = {
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
    }
}

const keywordData = {
    statusConditions,
    rules,
    combatGlossary
}

export default keywordData;
