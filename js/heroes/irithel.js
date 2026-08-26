export const irithel = {

    /* ================= IRITHEL ================= */

    name: "Irithel",
    title: "Jungle Heart",

    class: ["assassin",],
    specialty: ["Burst", "Poke"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/irithel/irithel.webp",
    background: "../images/heroes/irithel/irithel-bg.webp",

    stats: {
        hp: "2260",
        hpRegen: "7",
        physicalAttack: "125",
        physicalDefense: "16",
        attackSpeed: "1.03",
        attackSpeedRatio: "80%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Jungle Heart",

            type: "Passive",
            skillType: [
                "Debuff",
            ],

            image:
                "../images/heroes/irithel/irithel-passive.webp",

            cooldown: "0",
            cost: "0",
            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "55%",
                },
            ],

            description:
                "Irithel and Leo's immaculate teamwork allows her to shoot while moving. Each Basic Attack will shoot 2 crossbow bolt(s) (but takes longer to refill) that deal (55% Total Physical Attack) Physical Damage per bolt (inherits a portion of Attack Effects).<br>Moving will build up Jungle Heart, up to a maximum of 10 units, and cause the next Basic Attack to unleash 1 additional bolt(s).",

        },

        {
            name: "Strafe",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Debuff",
            ],
            image:
                "../images/heroes/irithel/irithel-skill1.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "irithel flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
            name: "Force of The Queen",

            type: "Skill 2",
            skillType: [
                "Slow",
                "AOE",
            ],

            image:
                "../images/heroes/irithel/irithel-skill2.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "irithel lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time irithel kills an enemy.",

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
            ]
        },

        {
            name: "Heavy Crossbow",

            type: "Ultimate",

            skillType: [
                "Buff",
                "Mobility",
            ],

            image:
                "../images/heroes/irithel/irithel-ultimate.webp",

            cooldown: "30.0",
            cost: "0",

            description:
                "irithel removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
            ]
        }

    ],

    releaseDate: "August 15, 2017"
};