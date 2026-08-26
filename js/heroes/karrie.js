export const karrie = {

    /* ================= KARRIE ================= */

    name: "Karrie",
    title: "Lost Star",

    class: ["marksman"],
    specialty: ["Finisher", "Damage"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/karrie/karrie.webp",
    background: "../images/heroes/karrie/karrie-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "8",
        physicalAttack: "120",
        physicalDefense: "17",
        attackSpeed: "1.04",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Lightwheel Mark",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/karrie/karrie-passive.webp",

            cooldown: "0",
            cost: "0",


            description:
                "Karrie's Basic Attacks and skills apply a stack of Lightwheel Mark on hit. Once a target has 5 stacks of Lightwheel Marks, the marks will turn into a lightwheel, dealing True Damage equal to 5 (+1% Extra Physical Attack)% of the target's Max HP to them (only up to 300 damage against Creeps).",

        },

        {
            name: "Spinning Lightwheel",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/karrie/karrie-skill1.webp",

            cooldown: "10.0",
            cost: "50",

            description:
                "karrie flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            ]
        },

        {
            name: "Phantom Step",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Damage",
            ],

            image:
                "../images/heroes/karrie/karrie-skill2.webp",

            cooldown: "12.0",
            cost: "90",

            description:
                "karrie lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time karrie kills an enemy.",

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
            name: "Speedy Lightwheel",

            type: "Ultimate",

            skillType: [
                "Buff",
                "Burst",
            ],

            image:
                "../images/heroes/karrie/karrie-ultimate.webp",

            cooldown: "55.0",
            cost: "130",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "50%",
                },
            ],

            description:
                "karrie removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
            ]
        }

    ],

    releaseDate: "2017"
};