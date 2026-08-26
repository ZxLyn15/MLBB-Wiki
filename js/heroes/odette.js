export const odette = {

    /* ================= ODETTE ================= */

    name: "Odette",
    title: "Swan Princess",

    class: ["mage"],
    specialty: ["Burst", "Poke"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/odette/odette.webp",
    background: "../images/heroes/odette/odette-bg.webp",

    stats: {
        hp: "2440",
        hpRegen: "6.8",
        physicalAttack: "105",
        physicalDefense: "18",
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
            name: "Lakeshore Ambience",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/odette/odette-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "For 8s after casting a skill, Odette's next Basic Attack gains extra range and bounces between enemies (or an enemy and herself), dealing 144-200 (+50% Total Magic Power) Magic Damage per hit.<br>Odette's skills also trigger this effect on hit (up to 3 stacks).",

        },

        {
            name: "Avian Authority",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/odette/odette-skill1.webp",

            cooldown: "6.0",
            cost: "55",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "odette flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Blue Nova",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Sped Up",
            ],

            image:
                "../images/heroes/odette/odette-skill2.webp",

            cooldown: "12.0",
            cost: "75",

            description:
                "odette lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time odette kills an enemy.",

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
            name: "Swan Song",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/odette/odette-ultimate.webp",

            cooldown: "35.0",
            cost: "120",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "25%",
                },
            ],

            description:
                "odette removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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

    releaseDate: "Septmeber 29, 2017"
};