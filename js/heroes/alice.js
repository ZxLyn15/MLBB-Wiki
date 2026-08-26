export const alice = {

    /* ================= ALICE ================= */

    name: "Alice",
    title: "The Queen of Blood",

    class: ["tank", "mage"],
    specialty: ["Charge", "Regen"],

    price: {
        battlePoint: "15000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/alice/alice.webp",
    background: "../images/heroes/alice/alice-bg.webp",

    stats: {
        hp: "2452",
        hpRegen: "7.2",
        physicalAttack: "114",
        physicalDefense: "25",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Crimson Blood Banquet",

            type: "Passive",

            skillType: [
                "AOE",
                "Heal",
            ],

            image:
                "../images/heroes/alice/alice-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "When Alice's skills hit, she gains 1 stack(s) of Crimson, lasting 4 seconds. Once Crimson reaches 2 stacks, Blood Banquet activates, dealing 25 (+30% Total Magic Power) plus 0.5%~2.5% of the target's Max HP (scales with level) as Magic Damage to nearby units (hitting heroes with skills refreshes the duration) and recovering 10 (+3% Extra HP) for Alice every 0.5 seconds.<br>While Blood Banquet is active, Alice gains 8% Movement Speed. Blood Banquet can deal up to 70(+10*Hero Level) Magic Damage to creeps.",

        },

        {
            name: "Crimson Gleam",

            type: "Skill 1",

            skillType: [
                "Mobility",
                "AOE",
            ],

            image:
                "../images/heroes/alice/alice-skill1.webp",

            cooldown: "12.0",

            cost: "0",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Alice fires blood energy forward, dealing 100-200 (+50% Total Magic Power) Magic Damage. Before the blood energy dissipates, this skill can be cast again to activate Scarlet Shadow, allowing Alice to blink to the blood energy's location.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.2",
                        "10.4",
                        "9.6",
                        "8.8",
                        "8.0"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "100",
                        "120",
                        "140",
                        "160",
                        "180",
                        "200"
                    ]
                },

            ]
        },

        {
            name: "Doom Waltz",

            type: "Skill 2",

            skillType: [
                "Slow",
                "AOE",
            ],

            image:
                "../images/heroes/alice/alice-skill2.webp",

            cooldown: "4.0",

            cost: "0",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Alice performs a deadly dance, dealing 350-550 (+130% Total Magic Power) Magic Damage to nearby enemies and slowing them by 70% for 1 second. If Blood Banquet is active at this time, it also scorches enemies, dealing 300% of Blood Banquet's damage and healing Alice for the same amount.",

            scaling: [

                {
                    name: "Base Damage",

                    values: [
                        "350",
                        "390",
                        "430",
                        "470",
                        "510",
                        "550"
                    ]
                },

            ]
        },

        {
            name: "Throne of Ruin",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/alice/alice-ultimate.webp",

            cooldown: "44.0",

            cost: "100",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Alice surrounds herself with blood, gaining Control Immunity and 50% Damage Reduction while slowing herself by 50%. After 1.5 seconds, she descends with force, dealing 500-700 (+200% Total Magic Power) (+20% Extra HP) Magic Damage to all enemies in range and immobilizing them for 1 second.<br>While charging her Ultimate, Alice can only use Scarlet Shadow",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "60.0",
                        "55.0",
                        "50.0"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "500",
                        "600",
                        "700"
                    ]
                },

            ]
        }

    ],

    releaseDate: "2016"
}