export const alpha = {

    /* ================= ALPHA ================= */

    name: "Alpha",
    title: "Blade of Enmity",

    class: ["fighter"],
    specialty: ["Chase", "Damage"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/alpha/alpha.webp",
    background: "../images/heroes/alpha/alpha-bg.webp",

    stats: {
        hp: "2468",
        hpRegen: "7.8",
        physicalAttack: "121",
        physicalDefense: "25",
        attackSpeed: "1.14",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "6",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Beta, Advance!",

            type: "Passive",
            skillType: [
                "Damage",
                "Slow",
            ],

            image:
                "../images/heroes/alpha/alpha-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "When Alpha uses a skill, Beta will be summoned to attack. Enemies that are hit by Beta 2 time(s) will be Locked On.,br.<strong>Locked On:</strong> After Alpha deals damage to the target, Beta will fire a laser at them, dealing 80 (+80 % Extra Physical Attack)(+8 * Hero Level) True Damage and briefly applying a powerful slow effect.<br>This skill only deals 75% damage to Creeps.",

        },

        {
            name: "Rotary Impact",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/alpha/alpha-skill1.webp",

            cooldown: "4.0",
            cost: "50",

            description:
                "alpha flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

            scaling: [
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
                    name: "Spray Damage",

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
            name: "Force swing",

            type: "Skill 2",
            skillType: [
                "AOE",
                "Heal",
            ],

            image:
                "../images/heroes/alpha/alpha-skill2.webp",

            cooldown: "6.0",
            cost: "45",

            description:
                "alpha lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time alpha kills an enemy.",

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
                    name: "HP Regen",

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
                    name: "Spray damage",

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
            name: "Spear of Alpha",

            type: "Ultimate",

            skillType: [
                "Mobility",
                "CC",
            ],

            image:
                "../images/heroes/alpha/alpha-ultimate.webp",

            cooldown: "20.0",
            cost: "70",

            description:
                "alpha removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "End Damage",

                    values: [
                        "350",
                        "450",
                        "550",
                    ]
                },
                {
                    name: "Beta Damage",

                    values: [
                        "480",
                        "580",
                        "680",
                    ]
                },
            ]
        }

    ],

    releaseDate: "January 2017"
};