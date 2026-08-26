export const harley = {

    /* ================= HARLEY ================= */

    name: "Harley",
    title: "Mage Genius",

    class: ["assassin", "mage"],
    specialty: ["Burst", "Poke"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/harley/harley.webp",
    background: "../images/heroes/harley/harley-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "7.2",
        physicalAttack: "114",
        physicalDefense: "19",
        attackSpeed: "1.06",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Magic Master",

            type: "Passive",
            skillType: [
                "Debuff",
            ],

            image:
                "../images/heroes/harley/harley-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Harley's mastery of magic allows his Basic Attacks and skills to reduce the enemy's Magic Defense by 2 and increase his Attack Speed by 5%-10% (scales with hero level) for 3s on hit. This effect stacks up to 10 times. Harley's Basic Attacks deal 60 (+50% Total Physical Attack) (+60% Total Magic Power) Magic Damage.",

        },

        {
            name: "Poker Trick",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Buff",
            ],
            image:
                "../images/heroes/harley/harley-skill1.webp",

            cooldown: "6.0",
            cost: "55",

            description:
                "harley flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "250",
                        "270",
                        "290",
                        "310",
                        "330",
                        "350",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "250",
                        "270",
                        "290",
                        "310",
                        "330",
                        "350",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "250",
                        "270",
                        "290",
                        "310",
                        "330",
                        "350",
                    ]
                },
            ]
        },

        {
            name: "Space Escape",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Sped Up",
            ],

            image:
                "../images/heroes/harley/harley-skill2.webp",

            cooldown: "9.0",
            cost: "75",

            description:
                "harley lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time harley kills an enemy.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "120",
                        "104",
                        "108",
                        "132",
                        "126",
                        "100",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "104",
                        "108",
                        "132",
                        "126",
                        "100",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "120",
                        "104",
                        "108",
                        "132",
                        "126",
                        "100",
                    ]
                },
            ]
        },

        {
            name: "Deadly Magic",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Slow",
            ],

            image:
                "../images/heroes/harley/harley-ultimate.webp",

            cooldown: "35.0",
            cost: "120",

            description:
                "harley removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Skill cost",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        }

    ],

    releaseDate: "July 29, 2017"
};