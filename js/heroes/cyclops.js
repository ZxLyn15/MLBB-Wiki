export const cyclops = {

    /* ================= CYCLOPS ================= */

    name: "Cyclops",
    title: "Starsoul Magician",

    class: ["mage"],
    specialty: ["Damage", "Control"],

    price: {
        battlePoint: "15000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/cyclops/cyclops.webp",
    background: "../images/heroes/cyclops/cyclops-bg.webp",

    stats: {
        hp: "2440",
        hpRegen: "7.6",
        physicalAttack: "112",
        physicalDefense: "18",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Starlit Hourglass",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/cyclops/cyclops-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Each time Cyclops hits an enemy with his skills, all his skill cooldowns are reduced by 0.5s.",

        },

        {
            name: "Stardust Shock",

            type: "Skill 1",
            skillType: [
                "AOE",
            ],
            image:
                "../images/heroes/cyclops/cyclops-skill1.webp",

            cooldown: "7.5",
            cost: "50",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "cyclops flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            ]
        },

        {
            name: "Planets Attack",

            type: "Skill 2",
            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/cyclops/cyclops-skill2.webp",

            cooldown: "14.0",
            cost: "60",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "125%",
                },
            ],

            description:
                "cyclops lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time cyclops kills an enemy.",

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
            name: "Star Power Lockdown",

            type: "Ultimate",

            skillType: [
                "CC",
                "Damage",
            ],

            image:
                "../images/heroes/cyclops/cyclops-ultimate.webp",

            cooldown: "26.0",
            cost: "60",

            description:
                "cyclops removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
            ]
        }

    ],

    releaseDate: "2017"
};