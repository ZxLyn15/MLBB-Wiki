export const yisunshin = {

    /* ================= YI-SUN-SHIN ================= */

    name: "Yi Sun-Shin",
    title: "Paenlong Legend",

    class: ["assassin", "marksman"],
    specialty: ["Finisher", "Chase"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/yisunshin/yisunshin.webp",
    background: "../images/heroes/yisunshin/yisunshin-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "7.2",
        physicalAttack: "110",
        physicalDefense: "22",
        attackSpeed: "1.03",
        attackSpeedRatio: "40%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "10",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Heavenly Vow",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/yisunshin/yisunshin-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Yi Sun-shin attacks with his longbow or glaive based on his distance from the target. Weapon Mastery: After each weapon swap, his next 2 Basic Attacks gain extra Attack Speed and deal 70% and 55% Crit Damage respectively. He also gains 15% Movement Speed for 1s.",

        },

        {
            name: "Traceless",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "AOE",
            ],
            image:
                "../images/heroes/yisunshin/yisunshin-skill1.webp",

            cooldown: "12.0",
            cost: "50",

            description:
                "yisunshin flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Blood Floods",

            type: "Skill 2",
            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/yisunshin/yisunshin-skill2.webp",

            cooldown: "11.0",
            cost: "60",

            description:
                "yisunshin lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time yisunshin kills an enemy.",

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
                    name: "Slash damage",

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
                    name: "Arrow damage",

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
            name: "Mountain Shocker",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/yisunshin/yisunshin-ultimate.webp",

            cooldown: "40.0",
            cost: "80",

            description:
                "yisunshin removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
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
            ]
        }

    ],

    releaseDate: "2017"
};