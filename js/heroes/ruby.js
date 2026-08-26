export const ruby = {

    /* ================= RUBY ================= */

    name: "Ruby",
    title: "Little Red Hood",

    class: ["fighter"],
    specialty: ["Crowd Control", "Regen"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/ruby/ruby.webp",
    background: "../images/heroes/ruby/ruby-bg.webp",

    stats: {
        hp: "2331",
        hpRegen: "6",
        physicalAttack: "129",
        physicalDefense: "18",
        attackSpeed: "1.07",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "6",
        magicPower: "0",
        magicDefense: "10",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Let's Dance",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/ruby/ruby-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Ruby's skills have a 75% Spell Vamp Ratio (her Basic Attacks cannot trigger Lifesteal). For every 1% HP lost, her Spell Vamp Ratio increases by 1%, up to 150%.<br>After each skill cast, Ruby can dash to another location and gain 8-25 Physical & Magic Defense (scales with level) for 4s (stacks up to 3 times).",

        },

        {
            name: "Be Good!",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],
            image:
                "../images/heroes/ruby/ruby-skill1.webp",

            cooldown: "4.0",
            cost: "25",

            description:
                "ruby flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Scythe Damage",

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
                    name: "Shockwave Damage",

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
            name: "Don't Run, Wolf King!",

            type: "Skill 2",
            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/ruby/ruby-skill2.webp",

            cooldown: "7.0",
            cost: "50",

            description:
                "ruby lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time ruby kills an enemy.",

            scaling: [
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
            ]
        },

        {
            name: "I'm Offended",

            type: "Ultimate",

            skillType: [
                "Mobility",
                "CC",
            ],

            image:
                "../images/heroes/ruby/ruby-ultimate.webp",

            cooldown: "40.0",
            cost: "80",

            description:
                "ruby removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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