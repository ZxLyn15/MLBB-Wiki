export const kagura = {

    /* ================= KAGURA ================= */

    name: "Kagura",
    title: "Onyomouji Master",

    class: ["mage",],
    specialty: ["Poke", "Finisher"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Diamonds",
        diamond: "599",
    },

    image: "../images/heroes/kagura/kagura.webp",
    background: "../images/heroes/kagura/kagura-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "7",
        physicalAttack: "118",
        physicalDefense: "17",
        attackSpeed: "1.02",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Yin Yang Gathering",

            type: "Passive",
            skillType: [
                "Shield",
                "CC",
            ],

            image:
                "../images/heroes/kagura/kagura-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Upon retrieving the <strong>Seimei Umbrella</strong>, Kagura gains a 450 (+80% Total Magic Power) shield, stuns nearby enemies for 0.5s, and slows them by 60% for 1s. Cooldown: 4.5s.",

        },

        {
            name: "Seimei Umbrella Open",

            type: "Skill 1",
            skillType: [
                "Damage",
                "Slow",
            ],
            image:
                "../images/heroes/kagura/kagura-skill1.webp",

            cooldown: "5.0",
            cost: "45",
            extraInfo: [
                {
                    name: "Spell vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "kagura flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.2",
                        "11.0",
                        "10.5",
                        "10.0",
                        "9.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "80",
                        "85",
                        "90",
                        "95",
                        "100",
                        "105",
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
            name: "Rasho Umbrella Flee",

            type: "Skill 2 - With Umbrella",
            skillType: [
                "Remove CC",
                "Mobility",
            ],

            image:
                "../images/heroes/kagura/kagura-skill2.webp",

            cooldown: "12.0",
            cost: "55",
            extraInfo: [
                {
                    name: "Spell vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "kagura lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time kagura kills an enemy.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.4",
                        "10.8",
                        "10.2",
                        "9.6",
                        "9.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "250",
                        "290",
                        "330",
                        "370",
                        "410",
                        "450",
                    ]
                },
            ]
        },
        {
            name: "Rasho Umbrella Flee",

            type: "Skill 2 - Without Umbrella",
            skillType: [
                "Mobility",
                "Damage",
            ],

            image:
                "../images/heroes/kagura/kagura-skill2.2.webp",

            cooldown: "12.0",
            cost: "55",
            extraInfo: [
                {
                    name: "Spell vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "kagura lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time kagura kills an enemy.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.4",
                        "10.8",
                        "10.2",
                        "9.6",
                        "9.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "250",
                        "290",
                        "330",
                        "370",
                        "410",
                        "450",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "250",
                        "290",
                        "330",
                        "370",
                        "410",
                        "450",
                    ]
                },
            ]
        },

        {
            name: "Yin Yang Overturn",

            type: "Ultimate",

            skillType: [
                "CC",
                "Burst",
            ],

            image:
                "../images/heroes/kagura/kagura-ultimate.webp",

            cooldown: "36.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "kagura removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "35.0",
                        "31.0",
                        "27.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "35%",
                        "45%",
                        "55%",
                    ]
                },
            ]
        },
        {
            name: "Yin Yang Overturn",

            type: "Ultimate - Without Umbrella",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/kagura/kagura-ultimate2.webp",

            cooldown: "36.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "kagura removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "35.0",
                        "31.0",
                        "27.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "35%",
                        "45%",
                        "55%",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "35%",
                        "45%",
                        "55%",
                    ]
                },
            ]
        }

    ],

    releaseDate: "December 2016"
};