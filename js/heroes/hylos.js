export const hylos = {

    /* ================= HYLOS ================= */

    name: "Hylos",
    title: "Grand Warden",

    class: ["tank",],
    specialty: ["Guard", "Initiator"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/hylos/hylos.webp",
    background: "../images/heroes/hylos/hylos-bg.webp",

    stats: {
        hp: "2700",
        hpRegen: "18.4",
        physicalAttack: "105",
        physicalDefense: "22",
        attackSpeed: "1.03",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Thickened Blood",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/hylos/hylos-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Hylos gains 1.5 extra Max HP for every 1 extra Max Mana he possesses.<br>When out of Mana, Hylos can use his HP for skill casts.",

        },

        {
            name: "Law and Order",

            type: "Skill 1",
            skillType: [
                "CC",
                "Damage",
            ],
            image:
                "../images/heroes/hylos/hylos-skill1.webp",

            cooldown: "12.0",
            cost: "80",

            description:
                "hylos flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Ring of Punishment",

            type: "Skill 2",
            skillType: [
                "AOE",
                "Debuff",
            ],

            image:
                "../images/heroes/hylos/hylos-skill2.webp",

            cooldown: "1.0",
            cost: "30",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "hylos lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time hylos kills an enemy.",

            scaling: [
                {
                    name: "Skil Cost",

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
                    name: "Damage Per Second",

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
                    name: "Damage Bonus",

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
            name: "Glorious Pathway",

            type: "Ultimate",

            skillType: [
                "Speed Up",
                "Heal",
            ],

            image:
                "../images/heroes/hylos/hylos-ultimate.webp",

            cooldown: "40.0",
            cost: "150",

            description:
                "hylos removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "HP Regen",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Movement Speed Bonus",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Slow Effect",

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