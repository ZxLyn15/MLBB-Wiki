export const chou = {

    /* ================= CHOU ================= */

    name: "Chou",
    title: "Kung Fu Boy",

    class: ["fighter"],
    specialty: ["Chase", "Control"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/chou/chou.webp",
    background: "../images/heroes/chou/chou-bg.webp",

    stats: {
        hp: "2530",
        hpRegen: "7.8",
        physicalAttack: "121",
        physicalDefense: "23",
        attackSpeed: "1.1",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Only Fast",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/chou/chou-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "After traveling 5 units, Chou deals 180% damage on his next Basic Attack (cannot Crit), briefly slows the target by 90% and reduces their Physical Defense by 10(+ 1 * Hero Level) for 3s(up to 2 stacks).",

        },

        {
            name: "Jeet Kune do",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Mobility",
            ],
            image:
                "../images/heroes/chou/chou-skill1.webp",

            cooldown: "9.5",
            cost: "0",

            description:
                "chou flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Shunpo",

            type: "Skill 2",
            skillType: [
                "Mobility",
            ],

            image:
                "../images/heroes/chou/chou-skill2.webp",

            cooldown: "5.0",
            cost: "0",

            description:
                "chou lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time chou kills an enemy.",

            scaling: [
                {
                    name: "Shield",

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
            name: "The Way of Dragon",

            type: "Ultimate",

            skillType: [
                "CC",
                "Burst",
            ],

            image:
                "../images/heroes/chou/chou-ultimate.webp",

            cooldown: "36.0",
            cost: "0",

            description:
                "chou removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Chase Damage",

                    values: [
                        "480",
                        "580",
                        "680",
                    ]
                },
            ]
        }

    ],

    releaseDate: "December 2016"
};