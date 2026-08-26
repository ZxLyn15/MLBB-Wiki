export const lancelot = {

    /* ================= LANCELOT ================= */

    name: "Lancelot",
    title: "Mage Genius",

    class: ["assassin",],
    specialty: ["Chase", "Burst"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/lancelot/lancelot.webp",
    background: "../images/heroes/lancelot/lancelot-bg.webp",

    stats: {
        hp: "2390",
        hpRegen: "7",
        physicalAttack: "124",
        physicalDefense: "16",
        attackSpeed: "1.08",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Soul Cutter",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/lancelot/lancelot-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Each time Lancelot charges, his damage is increased by 7.5% for 4s, up to 30%.",

        },

        {
            name: "Puncture",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "AOE",
            ],
            image:
                "../images/heroes/lancelot/lancelot-skill1.webp",

            cooldown: "6.0",
            cost: "55",

            description:
                "lancelot flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Thorned Rose",

            type: "Skill 2",
            skillType: [
                "AOE",
                "Slow",
            ],

            image:
                "../images/heroes/lancelot/lancelot-skill2.webp",

            cooldown: "11.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "lancelot lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time lancelot kills an enemy.",

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
            name: "Phantom Execution",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/lancelot/lancelot-ultimate.webp",

            cooldown: "36.0",
            cost: "100",

            description:
                "lancelot removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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