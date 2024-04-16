import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary, summons } = keywordData;

const { unerring, divine } = statusConditions
const { summon, boon } = rules;
const { exceed, bonus_damage, mark, teleport_X, aura_x, charge, collide, chain_reaction, finishing_blow, slay} = combatGlossary

const ch1Abilities = [

]

const freelancer = {
    "jobName": "Freelancer",
    "title": "Divine Punisher",
    "img": "",
    "desc": "Freelancers are free-roaming exorcists and hired guns, roaming the land and fighting blights, demons and bandits in the name of justice. They tend to act as wild cards: highly independent, highly effective, and sticking to their codes of honor.\nFreelancers have their history in an ancient disgraced knightly order from one of the Seven Families of the Thrynn. They each wield a bright metal six gun, a bow, or a long rifle with extreme skill, the bullets, shot, or arrows of which they infuse with raw Aether drawn from their very souls. Each weapon is a relic passed down from master to student over the years, and can only be won in a duel with another freelancer. The freelancer's ultimate weapon is the Astral Chain, a holy gauntlet which they use to purge and bind demons and rogue spirits into their service as Seraphim.",
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