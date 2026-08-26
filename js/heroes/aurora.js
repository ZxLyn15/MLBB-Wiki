export const aurora = {

    /* ================= AURORA ================= */

    name: "Aurora",
    title: "Maiden of the Glacier",

    class: ["mage"],
    specialty: ["Crowd Control", "Poke"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/aurora/aurora.webp",
    background: "../images/heroes/aurora/aurora-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "6.8",
        physicalAttack: "110",
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
            name: "Pride of Ice",

            type: "Passive",
            skillType: [
                "Death Immune",
            ],

            image:
                "../images/heroes/aurora/aurora-passive.webp",

            cooldown: "150",
            cost: "0",


            description:
                "Upon taking fatal damage, Aurora freezes herself for 1.5s, becoming invincible and gradually recovering 30% Max HP. Cooldown: 150s.<br>Aurora's freeze effects can also affect Turrets.",

        },

        {
            name: "Hailstone Blast",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/aurora/aurora-skill1.webp",

            cooldown: "5.0",
            cost: "60",

            description:
                "aurora flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Frosty Breeze",

            type: "Skill 2",
            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/aurora/aurora-skill2.webp",

            cooldown: "10.0",
            cost: "75",

            description:
                "aurora lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time aurora kills an enemy.",

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
            name: "Frigid Glacier",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/aurora/aurora-ultimate.webp",

            cooldown: "50.0",
            cost: "140",

            description:
                "aurora removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "AOE Damage",

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