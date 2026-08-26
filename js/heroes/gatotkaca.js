export const gatotkaca = {

    /* ================= GATOTKACA ================= */

    name: "Gatotkaca",
    title: "Mighty Legend",

    class: ["tank", "fighter"],
    specialty: ["Finisher", "Chase"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/gatotkaca/gatotkaca.webp",
    background: "../images/heroes/gatotkaca/gatotkaca-bg.webp",

    stats: {
        hp: "2600",
        hpRegen: "8.4",
        physicalAttack: "128",
        physicalDefense: "15",
        attackSpeed: "1.02",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Steel Bones",

            type: "Passive",
            skillType: [
                "Buff",
                "Heal",
            ],

            image:
                "../images/heroes/gatotkaca/gatotkaca-passive.webp",

            cooldown: "0",
            cost: "0",


            description:
                "Gatotkaca gains Physical Defense equal to 2% of his lost HP (up to 200). He gains 5 Rage (up to 100) for every 300 damage taken (calculated before reduction). Upon reaching 25 Rage, Gatotkaca's next Basic Attack is enhanced, consuming all Rage to deal (100% Total Physical Attack) (+200% Total Magic Power) (+8.2-11* Consumed Rage) Magic Damage (scales with hero level) and recover (8 * Consumed Rage) HP.",

        },

        {
            name: "Blast Iron Fist",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/gatotkaca/gatotkaca-skill1.webp",

            cooldown: "8.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Spell Vamp ratio",
                    value: "50%",
                },
            ],

            description:
                "gatotkaca flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Unbreakable",

            type: "Skill 2",
            skillType: [
                "CC",
                "Mobility",
            ],

            image:
                "../images/heroes/gatotkaca/gatotkaca-skill2.webp",

            cooldown: "12.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Spell Vamp ratio",
                    value: "50%",
                },
            ],

            description:
                "gatotkaca lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time gatotkaca kills an enemy.",

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
            name: "Avatar of the Guardian",

            type: "Ultimate",

            skillType: [
                "CC",
                "Mobility",
            ],

            image:
                "../images/heroes/gatotkaca/gatotkaca-ultimate.webp",

            cooldown: "54.0",
            cost: "0",

            description:
                "gatotkaca removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
            ]
        }

    ],

    releaseDate: "July 2017"
};