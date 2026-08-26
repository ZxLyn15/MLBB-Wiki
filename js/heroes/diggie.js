export const diggie = {

    /* ================= DIGGIE ================= */

    name: "Diggie",
    title: "Timekeeper",

    class: ["support",],
    specialty: ["Guard", "Poke"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/diggie/diggie.webp",
    background: "../images/heroes/diggie/diggie-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "7.2",
        physicalAttack: "115",
        physicalDefense: "15",
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
            name: "Young Again",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/diggie/diggie-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Upon death, Diggie reverses time and turns back to egg form, in which he can continue to move around and gains a new set of skills. He cannot be targeted in egg form and will revive after a period of time.",

        },

        {
            name: "Auto Alarm Bomb",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/diggie/diggie-skill1.webp",

            cooldown: "8.0",
            cost: "70",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "diggie flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Reverse Time",

            type: "Skill 2",
            skillType: [
                "CC",
                "Damage",
            ],

            image:
                "../images/heroes/diggie/diggie-skill2.webp",

            cooldown: "15.0",
            cost: "90",

            description:
                "diggie lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time diggie kills an enemy.",

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
            name: "Time Journey",

            type: "Ultimate",

            skillType: [
                "CC Immune",
                "Speed Up",
            ],

            image:
                "../images/heroes/diggie/diggie-ultimate.webp",

            cooldown: "76.0",
            cost: "130",

            description:
                "diggie removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Base Shield",

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

    releaseDate: "November 19, 2017"
};