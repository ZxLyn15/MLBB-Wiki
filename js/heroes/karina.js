export const karina = {

    /* ================= KARINA ================= */

    name: "Karina",
    title: "Shadow Blade",

    class: ["assassin"],
    specialty: ["Finisher", "Magic Damage"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/karina/karina.webp",
    background: "../images/heroes/karina/karina-bg.webp",

    stats: {
        hp: "2474",
        hpRegen: "7.8",
        physicalAttack: "121",
        physicalDefense: "20",
        attackSpeed: "1.12",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Shadow Combo",

            type: "Passive",

            skillType: [
                "Buff",
                "Damage",
            ],

            image:
                "../images/heroes/karina/karina-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Karina's third consecutive attack on the same enemy deals extra True Damage equal to 100 plus 5 (+2.5% Total Magic Power)% of their lost HP (up to 2000 True Damage against creeps).<br>If the target is an enemy hero, the cooldowns of Karina's non-Ultimate skills are reduced by 1.5s.",

        },

        {
            name: "Dance of Blades",

            type: "Skill 1",

            skillType: [
                "Buff",
                "Speed Up",
            ],

            image:
                "../images/heroes/karina/karina-skill1.webp",

            cooldown: "7.0",

            cost: "50",

            description:
                "Karina enters the Dance of Blades state for 3.5s, during which she gains 45% extra Movement Speed, blocks all incoming Basic Attacks, and reflects 100-200 (+30% Total Magic Power) Magic Damage back to the attacker (the damage reflection effect has a cooldown of 0.4s). <br>Karina's next Basic Attack within the duration deals 150-225 (+55% Total Magic Power) Magic Damage, slows the target by 45% for 1s, and is guaranteed to Crit. Casting the enhanced Basic Attack or Shadow Assault ends the Dance of Blades state early.",

            scaling: [

                {
                    name: "Skill Cost",

                    values: [
                        "50",
                        "55",
                        "60",
                        "65",
                        "70",
                        "75",
                    ]
                },
                {
                    name: "Reflect Damage",

                    values: [
                        "100",
                        "120",
                        "140",
                        "160",
                        "180",
                        "200",
                    ]
                },
                {
                    name: "Enhanced Damage",

                    values: [
                        "150",
                        "165",
                        "180",
                        "195",
                        "210",
                        "225",
                    ]
                },


            ]
        },

        {
            name: "Dance of Death",

            type: "Skill 2",

            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/karina/karina-skill2.webp",

            cooldown: "6.0",

            cost: "60",

            description:
                "Karina launches a spinning slash, dealing 375 (+125% Total Magic Power) Magic Damage to nearby enemies.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "6.0",
                        "5.7",
                        "5.4",
                        "5.1",
                        "4.8",
                        "4.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "60",
                        "65",
                        "70",
                        "75",
                        "80",
                        "85",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "375",
                        "420",
                        "465",
                        "510",
                        "555",
                        "600",
                    ]
                },

            ]
        },

        {
            name: "Shadow Assault",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/karina/karina-ultimate.webp",

            cooldown: "34.0",

            cost: "100",

            description:
                "Karina dashes to the target enemy hero, dealing them 350-750 (+160% Total Magic Power) Magic Damage, applying a Shadow Mark to them, and leaving a Shadowform behind them.The Shadow Mark and Shadowform both last 5s.If the enemy dies within the duration, the cooldown of this skill is reset.<br><strong>Use Again:</strong> Karina dashes back to the Shadowform's location, dealing 150-250 (+50% Total Magic Power) Magic Damage to enemies along the way.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "34.0",
                        "30.0",
                        "26.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "100",
                        "120",
                        "140",
                    ]
                },
                {
                    name: "Base damage",

                    values: [
                        "350",
                        "550",
                        "750",
                    ]
                },
                {
                    name: "Path damage",

                    values: [
                        "150",
                        "200",
                        "250",
                    ]
                },

            ]
        }

    ],

    releaseDate: "2016"
};