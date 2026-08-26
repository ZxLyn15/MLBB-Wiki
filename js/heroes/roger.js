export const roger = {

    /* ================= ROGER ================= */

    name: "Roger",
    title: "Dire Wolf Hunter",

    class: ["fighter", "marksman"],
    specialty: ["Finisher", "Burst"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/roger/roger.webp",
    background: "../images/heroes/roger/roger-bg.webp",

    stats: {
        hp: "2530",
        hpRegen: "7.2",
        physicalAttack: "128",
        physicalDefense: "22",
        attackSpeed: "1.05",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Full Moon Curse",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/roger/roger-passive.webp",

            cooldown: "0",
            cost: "0",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "100%",
                },
            ],

            description:
                "Roger can freely switch between human and wolf forms.<br>In human form, Roger's Basic Attack and skills deal additional damage equal to 4% of the target's current HP.<br>In wolf form, Roger's Basic Attack and skills deal additional damage equal to 4% of the target's lost HP.<br>This effect can only deal up to 60 additional damage against Creeps.",

        },

        {
            name: "Open Fire",

            type: "Skill 1",
            skillType: [
                "Damage",
                "Debuff",
            ],
            image:
                "../images/heroes/roger/roger-skill1.webp",

            cooldown: "7.0",
            cost: "50",

            description:
                "roger flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Physical Damage",

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
            name: "Lycan Pounce",

            type: "Skill 1 - Wolf Form",
            skillType: [
                "Mobility",
                "Burst",
            ],
            image:
                "../images/heroes/roger/roger-skill1.1.webp",

            cooldown: "15.0",
            cost: "50",

            description:
                "roger flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Hunter's Steps",

            type: "Skill 2",
            skillType: [
                "Speed Up",
            ],

            image:
                "../images/heroes/roger/roger-skill2.webp",

            cooldown: "10.0",
            cost: "50",

            description:
                "roger lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time roger kills an enemy.",

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
                    name: "Attack Speed Bonus",

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
            name: "Bloodthirsty Howl",

            type: "Skill 2 - Wolf Form",
            skillType: [
                "Buff",
                "Speed Up",
            ],

            image:
                "../images/heroes/roger/roger-skill2.2.webp",

            cooldown: "6.0",
            cost: "0",

            description:
                "roger lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time roger kills an enemy.",

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
            ]
        },

        {
            name: "Wolf Transformation",

            type: "Ultimate",

            skillType: [
                "Morph",
                "Mobility",
            ],

            image:
                "../images/heroes/roger/roger-ultimate.webp",

            cooldown: "7.5",
            cost: "0",

            description:
                "roger removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Damage Increase",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
            ]
        },
        {
            name: "Restore Human Form",

            type: "Ultimate - Wolf Form",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/roger/roger-ultimate2.webp",

            cooldown: "7.5",
            cost: "0",

            description:
                "roger removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Damage Increase",

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