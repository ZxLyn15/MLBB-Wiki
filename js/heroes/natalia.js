export const natalia = {

    /* ================= NATALIA ================= */

    name: "Natalia",
    title: "Bright Claw",

    class: ["assassin"],
    specialty: ["Chase", "Finisher"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/natalia/natalia.webp",
    background: "../images/heroes/natalia/natalia-bg.webp",

    stats: {
        hp: "2480",
        hpRegen: "7",
        physicalAttack: "121",
        physicalDefense: "18",
        attackSpeed: "1.1",
        attackSpeedRatio: "60%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Assassin Instinct",

            type: "Passive",
            skillType: [
                "Buff",
                "Heal",
            ],

            image:
                "../images/heroes/natalia/natalia-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "If Natalia stays in a bush without taking damage for 1s, she will enter <strong>Camouflage</strong> state and gain 15% Movement Speed. In this state, Natalia's next Basic Attack will teleport her behind her target and deal 200 (+110% Total Physical Attack) Physical Damage while silencing the target for 0.25s.<br>Dealing damage, taking damage or using skills will immediately end the <strong>Camouflage</strong> state, but her next Basic Attack will remain enhanced for another 1s.<br>Natalia's base Crit Damage is reduced to 150%, but her damage to Creeps is increased to 150 %.",

        },

        {
            name: "Claw Dash",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "AOE",
            ],
            image:
                "../images/heroes/natalia/natalia-skill1.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "natalia flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Smoke Bomb",

            type: "Skill 2",
            skillType: [
                "Buff",
                "Slow",
            ],

            image:
                "../images/heroes/natalia/natalia-skill2.webp",

            cooldown: "12.0",
            cost: "0",

            description:
                "natalia lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time natalia kills an enemy.",

            scaling: [
                {
                    name: "Slow Effect",

                    values: [
                        "12.0",
                        "11.4",
                        "10.8",
                        "10.2",
                        "9.6",
                        "9.0",
                    ]
                },
            ]
        },

        {
            name: "The Hunt",

            type: "Ultimate",

            skillType: [
                "Camouflage",
                "Buff",
            ],

            image:
                "../images/heroes/natalia/natalia-ultimate.webp",

            cooldown: "3.0",
            cost: "0",

            description:
                "natalia removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
                {
                    name: "Crit Chane",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Skill Recharge Time",

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