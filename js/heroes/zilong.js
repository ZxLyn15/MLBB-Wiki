export const zilong = {

    /* ================= ZILONG ================= */

    name: "Zilong",
    title: "Spear of the Dragon",

    class: ["fighter", "assassin"],
    specialty: ["Chase", "Damage"],

    price: {
        battlePoint: "15000",
        ticket: "399",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/zilong/zilong.webp",
    background: "../images/heroes/zilong/zilong-bg.webp",

    stats: {
        hp: "2511",
        hpRegen: "7",
        physicalAttack: "123",
        physicalDefense: "25",
        attackSpeed: "1.05",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "265"
    },

    skills: [

        {
            name: "Dragon Flurry",

            type: "Passive",
            skillType: [
                "Buff",
                "Heal",
            ],
            extraInfo: [
                {
                    name: "Attack Effects",

                    value: "50%",
                }
            ],

            image:
                "../images/heroes/zilong/zilong-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "After dealing damage 3 time(s) with Basic Attacks or skills, Zilong triggers Dragon Flurry on the next Basic Attack, hitting the target 3 time(s). Each hit deals 80 (+30% Total Physical Attack) Basic Attack Damage and heals himself for 50 (+20% Total Physical Attack) HP.<br>Zilong's Basic Attack deals 100 (+80% Total Physical Attack) Physical Damage.<br>If the target's HP is below 50%, all damage dealt by Zilong's skills and Basic Attacks is increased by 30.",

        },

        {
            name: "Spear Flip",

            type: "Skill 1",
            skillType: [
                "CC",
                "Damage",
            ],
            image:
                "../images/heroes/zilong/zilong-skill1.webp",

            cooldown: "12.0",
            cost: "80",

            description:
                "Zilong flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Spear Strike",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Debuff",
            ],

            image:
                "../images/heroes/zilong/zilong-skill2.webp",

            cooldown: "12.0",
            cost: "40",

            description:
                "Zilong lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time Zilong kills an enemy.",

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
                {
                    name: "Physical Defense Reduction",

                    values: [
                        "15",
                        "18",
                        "21",
                        "24",
                        "27",
                        "30",
                    ]
                },
            ]
        },

        {
            name: "Supreme Warrior",

            type: "Ultimate",

            skillType: [
                "Speed Up",
                "Buff",
            ],

            image:
                "../images/heroes/zilong/zilong-ultimate.webp",

            cooldown: "35.0",
            cost: "120",

            description:
                "Zilong removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Attack Speed Bonus",

                    values: [
                        "35%",
                        "45%",
                        "55%",
                    ]
                },
            ]
        }

    ],

    releaseDate: "September 9, 2016"
};