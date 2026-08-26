export const gord = {

    /* ================= GORD ================= */

    name: "Gord",
    title: "Professor of the Mystics",

    class: ["mage"],
    specialty: ["Poke", "Burst"],

    price: {
        battlePoint: "24000",
        ticket: "499",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/gord/gord.webp",
    background: "../images/heroes/gord/gord-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "6.4",
        physicalAttack: "110",
        physicalDefense: "17",
        attackSpeed: "0.96",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Mystic Favor",

            type: "Passive",
            skillType: [
                "Buff",
                "Slow",
            ],

            image:
                "../images/heroes/gord/gord-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "After Gord hits an enemy 4 times with Basic Attacks or skills within a short period of time, the next attack on the target will deal an additional 140 (+60% Total Magic Power) True Damage and slow them by 20% for 1 second (the slow effect stacks up to 2 times).",

        },

        {
            name: "Mystic Projectile",

            type: "Skill 1",
            skillType: [
                "CC",
            ],
            image:
                "../images/heroes/gord/gord-skill1.webp",

            cooldown: "12.0",
            cost: "80",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio:",
                    value: "50%",
                }
            ],

            description:
                "gord flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                        "80",
                        "85",
                        "90",
                        "95",
                        "100",
                        "105",
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
            name: "Mystic Junction",

            type: "Skill 2",
            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/gord/gord-skill2.webp",

            cooldown: "12.0",
            cost: "40",

            description:
                "gord lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time gord kills an enemy.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.4",
                        "10.8",
                        "10.2",
                        "9.6",
                        "9.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "250",
                        "290",
                        "330",
                        "370",
                        "410",
                        "450",
                    ]
                },
                {
                    name: "Physical Defense Reduction",

                    values: [
                        "15",
                        "18",
                        "21",
                        "24",
                        "27",
                        "30",
                    ]
                },
            ]
        },

        {
            name: "Mystic Gush",

            type: "Ultimate",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/gord/gord-ultimate.webp",

            cooldown: "35.0",
            cost: "120",

            description:
                "gord removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "35.0",
                        "31.0",
                        "27.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Attack Speed Bonus",

                    values: [
                        "35%",
                        "45%",
                        "55%",
                    ]
                },
            ]
        }

    ],

    releaseDate: "November 2016"
};