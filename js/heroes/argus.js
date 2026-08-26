export const argus = {

    /* ================= ARGUS ================= */

    name: "Argus",
    title: "Dark Angel",

    class: ["fighter",],
    specialty: ["Burst", "Poke"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/argus/argus.webp",
    background: "../images/heroes/argus/argus-bg.webp",

    stats: {
        hp: "2600",
        hpRegen: "8",
        physicalAttack: "120",
        physicalDefense: "21",
        attackSpeed: "1.09",
        attackSpeedRatio: "80%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Warmonger",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/argus/argus-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "When Argus' Meteoric Sword reaches 100 Malice Energy, his next Basic Attack unleashes Demonic Slash, dealing 120 (+25% Total Physical Attack) Physical Damage and recovering 140 HP. This attack ignores 30% of the target's Physical Defense.<br>Argus's Meteoric Sword gains 5 Malice Energy per second and 25 Energy per Basic Attack (critical strikes grant an additional 25 Energy). The Energy cap is 200. Each Demonic Slash consumes 100 Energy.",

        },

        {
            name: "Demonic Grip",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "Debuff",
            ],
            image:
                "../images/heroes/argus/argus-skill1.webp",

            cooldown: "12.0",
            cost: "0",

            description:
                "argus flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                {
                    name: "Extra Damage",

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
            name: "Meteoric Sword",

            type: "Skill 2",
            skillType: [
                "damage",
                "Buff",
            ],

            image:
                "../images/heroes/argus/argus-skill2.webp",

            cooldown: "8.0",
            cost: "0",

            description:
                "argus lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time argus kills an enemy.",

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
                {
                    name: "Base Speed Damage",

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
            name: "Eternal Evil",

            type: "Ultimate",

            skillType: [
                "Death Immune",
                "BUff",
            ],

            image:
                "../images/heroes/argus/argus-ultimate.webp",

            cooldown: "42.0",
            cost: "0",

            description:
                "argus removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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

    releaseDate: "2017"
};