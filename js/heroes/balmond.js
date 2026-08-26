export const balmond = {


    /* ================= BALMOND ================= */

    name: "Balmond",
    title: "The Bloody Beast",

    class: ["fighter"],
    specialty: ["Regen", "Damage"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/balmond/balmond.webp",
    background: "../images/heroes/balmond/balmond-bg.webp",

    stats: {
        hp: "2558",
        hpRegen: "9.4",
        physicalAttack: "119",
        physicalDefense: "25",
        attackSpeed: "1.06",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Bloodthirst",

            type: "Passive",

            skillType: [
                "Heal",
            ],

            image:
                "../images/heroes/balmond/balmond-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Balmond recovers 5% Max HP after killing a Minion or Creep, and 20% Max HP after killing a hero.",


        },

        {
            name: "Soul Lock",

            type: "Skill 1",

            skillType: [
                "Mobility",
                "Slow",
            ],

            image:
                "../images/heroes/balmond/balmond-skill1.webp",

            cooldown: "8.0",

            cost: "0",

            description:
                "Balmond charges to the target direction for a set distance or until he hits an enemy hero, dealing 150-275 (+60% Total Physical Attack) Physical Damage to enemies along the way. The enemy hero hit will be knocked back slightly, and will have their Movement Speed reduced by 40% and Physical Defense reduced by 40% for 3 seconds.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "8.0",
                        "7.6",
                        "7.2",
                        "6.8",
                        "6.4",
                        "6.0"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "150",
                        "175",
                        "200",
                        "225",
                        "250",
                        "275"
                    ]
                },

            ]
        },

        {
            name: "Cyclone Sweep",

            type: "Skill 2",

            skillType: [
                "AOE",
                "Buff",
            ],

            image:
                "../images/heroes/balmond/balmond-skill2.webp",

            cooldown: "6.0",

            cost: "0",

            description:
                "Balmond gains 15% Movement Speed and spins with his axe for 3s, dealing 30 (+1.3% Total HP) (+25% Total Physical Attack) Physical Damage per hit to nearby enemies up to 14 times.<br>Each hit reduces the target's Physical Defense by 5% (up to 40%).",

            scaling: [

                {
                    name: "Base Damage",

                    values: [
                        "30",
                        "35",
                        "40",
                        "45",
                        "50",
                        "55"
                    ]
                }

            ]
        },

        {
            name: "Lethal Counter",

            type: "Ultimate",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/balmond/balmond-ultimate.webp",

            cooldown: "34",

            cost: "0",

            description:
                "Balmond unleashes a huge strike in the target direction (this skill can only be interrupted by Suppression), dealing 150 (+70% Total Physical Attack) (+Target's 30%-45% Lost HP) True Damage.<br>This skill only deals up to 1000-2000 damage to non-hero units.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "34.0",
                        "29.0",
                        "24.0",
                    ]
                },

                {
                    name: "Extra Damage",

                    values: [
                        "30%",
                        "37.5%",
                        "45%",
                    ]
                },

                {
                    name: "Non-Hero Unit Damage Cap",

                    values: [
                        "1000",
                        "1500",
                        "2000",
                    ]
                }

            ]
        },

    ],

    releaseDate: "2016"

};