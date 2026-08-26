export const johnson = {

    /* ================= JOHNSON ================= */

    name: "Johnson",
    title: "Wild Engine",

    class: ["fighter"],
    specialty: ["Crowd Control", "Regen"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/johnson/johnson.webp",
    background: "../images/heroes/johnson/johnson-bg.webp",

    stats: {
        hp: "2700",
        hpRegen: "8.4",
        physicalAttack: "120",
        physicalDefense: "30",
        attackSpeed: "1.03",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "255"
    },

    skills: [

        {
            name: "Electro Airbag",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/johnson/johnson-passive.webp",

            cooldown: "100",
            cost: "0",

            description:
                "When Johnson's HP drops below 30%, he gains a 300 (+700% Total Physical Defense) shield for 10s. Cooldown: 100s.",

        },

        {
            name: "Impact Wrench",

            type: "Skill 1",
            skillType: [
                "CC",
                "AOE",
            ],
            image:
                "../images/heroes/johnson/johnson-skill1.webp",

            cooldown: "8.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "johnson flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

            scaling: [
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
            name: "Electromagnetic Waves",

            type: "Skill 2",
            skillType: [
                "AOE",
                "Slow",
            ],

            image:
                "../images/heroes/johnson/johnson-skill2.webp",

            cooldown: "10.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "johnson lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time johnson kills an enemy.",

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
                    name: "Base damage",

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
            name: "Full Throttle",

            type: "Ultimate",

            skillType: [
                "Morph",
                "CC",
            ],

            image:
                "../images/heroes/johnson/johnson-ultimate.webp",

            cooldown: "36.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "johnson removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Physical damage Bonus",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Min Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Max Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Sustained Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        }

    ],

    releaseDate: "March 14, 2017"
};