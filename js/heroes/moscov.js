export const moscov = {

    /* ================= MOSCOV ================= */

    name: "Moscov",
    title: "Spear of Quiescence",

    class: ["marksman"],
    specialty: ["Finisher", "Chase"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/moscov/moscov.webp",
    background: "../images/heroes/moscov/moscov-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "6.4",
        physicalAttack: "125",
        physicalDefense: "18",
        attackSpeed: "1.01",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Spear of Quiescnece",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/moscov/moscov-passive.webp",

            cooldown: "0",
            cost: "0",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "100%",
                },
            ],

            description:
                "Moskov's Basic Attacks can penetrate the target and deal (68% Total Physical Attack)- (110% Total Physical Attack) Physical Damage to enemies behind them (scales with hero level). Each Basic Attack hit reduces the cooldowns of Abyss Walker by 0.8s and Spear of Misery by 0.8s.",

        },

        {
            name: "Abyss Walker",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "Buff",
            ],
            image:
                "../images/heroes/moscov/moscov-skill1.webp",

            cooldown: "10.0",
            cost: "50",

            description:
                "moscov flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Attack Speed Bonus",

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
            name: "Spear of Misery",

            type: "Skill 2",
            skillType: [
                "CC",
                "Damage",
            ],

            image:
                "../images/heroes/moscov/moscov-skill2.webp",

            cooldown: "12.0",
            cost: "90",

            description:
                "moscov lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time moscov kills an enemy.",

            scaling: [
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
            name: "Spear of Destruction",

            type: "Ultimate",

            skillType: [
                "Slow",
                "Teleport",
            ],

            image:
                "../images/heroes/moscov/moscov-ultimate.webp",

            cooldown: "55.0",
            cost: "130",

            description:
                "moscov removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
            ]
        }

    ],

    releaseDate: "2017"
};