export const lapulapu = {

    /* ================= LAPU-LAPU ================= */

    name: "Lapu-Lapu",
    title: "Corageous Blade",

    class: ["fighter"],
    specialty: ["Chase", "Burst"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/lapulapu/lapulapu.webp",
    background: "../images/heroes/lapulapu/lapulapu-bg.webp",

    stats: {
        hp: "2450",
        hpRegen: "7",
        physicalAttack: "119",
        physicalDefense: "21",
        attackSpeed: "1.12",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Homeland Defender",

            type: "Passive",
            skillType: [
                "Buff",
                "Shield",
            ],

            image:
                "../images/heroes/lapulapu/lapulapu-passive.webp",

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
            name: "Justice Blades",

            type: "Skill 1",
            skillType: [
                "AOE",
            ],
            image:
                "../images/heroes/lapulapu/lapulapu-skill1.webp",

            cooldown: "6.0",
            cost: "0",

            description:
                "lapulapu flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Land Shaker",

            type: "Skill 1 - Greatsword Stance",
            skillType: [
                "CC",
                "AOE",
            ],
            image:
                "../images/heroes/lapulapu/lapulapu-skill1.2.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "lapulapu flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Jungle Warrior",

            type: "Skill 2",
            skillType: [
                "Damage",
                "Mobility",
            ],

            image:
                "../images/heroes/lapulapu/lapulapu-skill2.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "lapulapu lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time lapulapu kills an enemy.",

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
            name: "Storm Sword",

            type: "Skill 2 - Heavysword Stance",
            skillType: [
                "Reduce Damage",
                "AOE",
            ],

            image:
                "../images/heroes/lapulapu/lapulapu-skill2.2.webp",

            cooldown: "6.0",
            cost: "0",

            description:
                "lapulapu lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time lapulapu kills an enemy.",

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
            name: "Bravest Warrior",

            type: "Ultimate",

            skillType: [
                "Morph",
                "Mobility",
            ],

            image:
                "../images/heroes/lapulapu/lapulapu-ultimate.webp",

            cooldown: "55.0",
            cost: "130",

            description:
                "lapulapu removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Base Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Damage Increase",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        },
        {
            name: "Raging Slash",

            type: "Ultimate - Heavysword Stance",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/lapulapu/lapulapu-ultimate2.webp",

            cooldown: "55.0",
            cost: "130",

            description:
                "lapulapu removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Base Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Damage Increase",

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