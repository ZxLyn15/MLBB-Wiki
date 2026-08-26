export const zhask = {

    /* ================= ZHASK ================= */

    name: "Zhask",
    title: "The King of Swarms",

    class: ["mage"],
    specialty: ["Chase", "Damage"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/zhask/zhask.webp",
    background: "../images/heroes/zhask/zhask-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "6.8",
        physicalAttack: "107",
        physicalDefense: "17",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Decimation",

            type: "Passive",
            skillType: [
                "Summon",
            ],

            image:
                "../images/heroes/zhask/zhask-passive.webp",

            cooldown: "0",
            cost: "0",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "20%",
                },
            ],

            description:
                "Upon death, Zhask summons a frenzied Nightmaric Spawn on the spot, which gradually loses HP over time until death.",

        },

        {
            name: "Nightmaric Spawn",

            type: "Skill 1",
            skillType: [
                "Summon",
            ],
            image:
                "../images/heroes/zhask/zhask-skill1.webp",

            cooldown: "13.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "20%",
                },
            ],

            description:
                "zhask flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Attributes Inherited",

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
            name: "Mind Eater",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Sped Up",
            ],

            image:
                "../images/heroes/zhask/zhask-skill2.webp",

            cooldown: "8.0",
            cost: "50",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "zhask lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time zhask kills an enemy.",

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
                    name: "Complete Damage",

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
            name: "Hive Clones",

            type: "Skill 3",
            skillType: [
                "Slow",
                "Damage",
            ],

            image:
                "../images/heroes/zhask/zhask-skill3.webp",

            cooldown: "10.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "zhask lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time zhask kills an enemy.",

            scaling: [
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
                    name: "Base Damage",

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
            name: "Dominator's Descent",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Slow",
            ],

            image:
                "../images/heroes/zhask/zhask-ultimate.webp",

            cooldown: "48.0",
            cost: "120",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "36%",
                },
            ],

            description:
                "zhask removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Extra HP",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Extra Hybrid Defense",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Lifesteal",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2017"
};