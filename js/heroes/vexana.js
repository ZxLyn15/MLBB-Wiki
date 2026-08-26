export const vexana = {

    /* ================= VEXANA ================= */

    name: "Vexana",
    title: "Shimmer of Hope",

    class: ["mage"],
    specialty: ["Poke", "Control"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/vexana/vexana.webp",
    background: "../images/heroes/vexana/vexana-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "7.6",
        physicalAttack: "112",
        physicalDefense: "17",
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
            name: "Nether Touch",

            type: "Passive",
            skillType: [
                "Damage",
            ],

            image:
                "../images/heroes/vexana/vexana-passive.webp",

            cooldown: "0",
            cost: "0",


            description:
                "Vexana and her Eternal Guard inflict Nether Touch on enemies hit. The mark lasts 5s andvcauses the affected enemy to explode upon death, dealing 108-500 (+60% Total Magic Power) Magic Damage to nearby enemies (base damage scales with level).",

        },

        {
            name: "Deathly Grasp",

            type: "Skill 1",
            skillType: [
                "CC",
                "AOE",
            ],
            image:
                "../images/heroes/vexana/vexana-skill1.webp",

            cooldown: "14.0",
            cost: "80",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "vexana flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Cursed Blast",

            type: "Skill 2",
            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/vexana/vexana-skill2.webp",

            cooldown: "7.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "vexana lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time vexana kills an enemy.",

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
            name: "Eternal Guard",

            type: "Ultimate",

            skillType: [
                "Summon",
                "Damage",
            ],

            image:
                "../images/heroes/vexana/vexana-ultimate.webp",

            cooldown: "60.0",
            cost: "120",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "100%",
                },
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],


            description:
                "vexana removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                {
                    name: "Slash Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Extra HP",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Extra Hybrid Defense",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Extra Magic Power",

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