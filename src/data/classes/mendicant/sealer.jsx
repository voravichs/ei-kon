import keywordData from "../../keywords";
// import img from "../../../assets/images/bastion.PNG"

const { statusConditions, rules, combatGlossary } = keywordData;

const { vigor, dodge, bloodied, divine} = statusConditions
const { boon, interrupt} = rules;
const { bonus_damage, exceed, blessing, power_die, teleport_X} = combatGlossary

const ch1Abilities = [

]

const sealer = {
    "jobName": "Sealer",
    "title": "Holy Judge and Purger of Evil",
    "img": "",
    "desc": "Traveling priests, monks, judges, and doctors, the Sealers roam the world from village to village, performing necessary rituals, marriages, ceremonies, and yearly festivals. They are a welcome sight in most villages, and most perform the important function of traveling judge and medium, acting as an impartial party translating for the will of the local spirits. They often travel with many blessed relics of the deities of the land or even portable shrines on their back.\nIn their other role, Sealers are legendary monster hunters and exorcists of unbelievable prowess and unshakeable faith. Whenever an especially bad blight or an arch demon appears, the Sealers are usually there to drive it back with ancient sealing magic, blessed brands, and flaming weapons.",
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
    "abilities": { ch1Abilities },
    "limitbreak": {
        "name": "Passage to the Afterlife",
        "resolve": 5,
        "action": 2,
        "bonus_boon": 1,
        "desc": "You unleash the supreme Sealer war art, inflicting ten thousand blows and shattering the connections of your foe's vital energy to their body, hurrying on the transmigration of immortal souls.",
        "attackroll": "On hit: [D] + fray, three times. Miss: Once.",
        "extra_effects": [
            {
                "type": "Exceed",
                "desc": "Deal [D]+fray two more times."
            },
        ],
        "effects": [
            "You may teleport adjacent to the target before the attack if they're in range 3. Every ally in range 3 of the target can also teleport adjacent to your target, or as close as possible. Your target then takes 2 additional divine damage, once, per adjacent ally.",
        ],
        "ultimate": {
            "name": "Reach Heaven Through Violence",
            "desc": "The teleport effect has the range of the battlefield for both allied characters and yourself. If your target is at or under 25% hp, they take 2 divine damage twice for each adjacent ally instead."
        },
        "tags": [divine, exceed, teleport_X]
    }
}

export default sealer;