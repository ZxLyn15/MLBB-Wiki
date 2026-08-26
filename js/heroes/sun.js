export const sun = {

    /* ================= SUN ================= */

    name: "Sun",
    title: "The Monkey King",

    class: ["fighter"],
    specialty: ["Push", "Damage"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/sun/sun.webp",
    background: "../images/heroes/sun/sun-bg.webp",

    stats: {
        hp: "2500",
        hpRegen: "8.2",
        physicalAttack: "114",
        physicalDefense: "23",
        attackSpeed: "1.14",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Samian God",

            type: "Passive",
            skillType: [
                "Debuff",
                "Heal",
            ],

            image:
                "../images/heroes/sun/sun-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Enemies hit by Sun and his Doppelgangers will have their Physical Defense reduced by 5% (stacks up to 6 times). Sun recovers HP equal to 75 plus 25% of the Doppelganger's Physical Attack each time a Doppelganger deals damage. Sun and his Doppelgangers' Basic Attacks deal 50 extra damage to Creeps.",

        },

        {
            name: "Endless Variety",

            type: "Skill 1",
            skillType: [
                "Summon",
                "AOE",
            ],
            image:
                "../images/heroes/sun/sun-skill1.webp",

            cooldown: "10.0",
            cost: "70",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "40%",
                },
            ],

            description:
                "sun flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Attributes Inherited",

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
            name: "Swift exchange",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Summon",
            ],

            image:
                "../images/heroes/sun/sun-skill2.webp",

            cooldown: "10.0",
            cost: "70",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "40%",
                },
            ],

            description:
                "sun lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time sun kills an enemy.",

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
                    name: "Attributes Inherited",

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
            name: "Instantaneous Move",

            type: "Skill 3",
            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/sun/sun-skill2.webp",

            cooldown: "6.0",
            cost: "40",

            description:
                "sun lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time sun kills an enemy.",

            scaling: [
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
                    name: "damage Bonus",

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
            name: "Clone Techniques",

            type: "Ultimate",

            skillType: [
                "Summon",
            ],

            image:
                "../images/heroes/sun/sun-ultimate.webp",

            cooldown: "36.0",
            cost: "0",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "40%",
                },
            ],


            description:
                "sun removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Attributes Inherited",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        }

    ],

    releaseDate: "December 2016"
};