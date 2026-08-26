export const saber = {

    /* ================= SABER ================= */

    name: "Saber",
    title: "The Wandering Sword",

    class: ["assassin"],
    specialty: ["Charge", "Finisher"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/saber/saber.webp",

    background: "../images/heroes/saber/saber-bg.webp",

    stats: {
        hp: "2500",
        hpRegen: "7",
        physicalAttack: "118",
        physicalDefense: "20",
        attackSpeed: "1.08",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Enemy's clint",

            type: "Passive",

            skillType: [
                "Debuff",
            ],

            image:
                "../images/heroes/saber/saber-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Saber's attacks reduce enemies' Physical Defense by 3-8 for 5 seconds on hit. This effect stacks up to 5 times.",

            scaling: [

                {
                    name: "Physical Defense Reduction (level 1)",

                    values: [
                        "3",
                        "6",
                        "9",
                        "12",
                        "15"
                    ]
                },

                {
                    name: "Physical Defense Reduction (level 8)",

                    values: [
                        "5",
                        "10",
                        "15",
                        "20",
                        "25"
                    ]
                },

                {
                    name: "Physical Defense Reduction (level 15)",

                    values: [
                        "8",
                        "16",
                        "24",
                        "32",
                        "40"
                    ]
                },

            ]
        },

        {
            name: "Orbiting Swords",

            type: "Skill 1",

            skillType: [
                "AOE",
                "Buff",
            ],

            image:
                "../images/heroes/saber/saber-skill1.webp",

            cooldown: "10.0",

            cost: "60",

            description:
                "Saber shoots out 5 swords that orbit around him, dealing 80-105 (+30% Extra Physical Attack) Physical Damage to enemies on contact. After orbiting around Saber for roughly 5 seconds, the swords will fly back to Saber.<br>Within the duration of this skill, when Saber deals damage with his Basic Attacks or skills, he will send an orbiting sword towards the target, dealing 200-300 (+50% Extra Physical Attack) Physical Damage to the main target and 50% of the damage to other targets it passes through and reducing the cooldown of Charge by 1 second. It deals only 50% damage to all non-hero enemies such as minions and creeps.",

            scaling: [

                {
                    name: "Skill Cost",

                    values: [
                        "60",
                        "65",
                        "70",
                        "75",
                        "80",
                        "85"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "75",
                        "85",
                        "95",
                        "105",
                        "115",
                        "125"
                    ]
                },

                {
                    name: "Extra Damage",

                    values: [
                        "200",
                        "220",
                        "240",
                        "260",
                        "280",
                        "300"
                    ]
                },

            ]
        },

        {
            name: "Charge",

            type: "Skill 2",

            skillType: [
                "Mobility",
            ],

            image:
                "../images/heroes/saber/saber-skill2.webp",

            cooldown: "7.0",

            cost: "40",

            description:
                "Saber dashes in the target direction, dealing 75-150 (+50% Extra Physical Attack) Physical Damage to enemies along the way while enhancing his next Basic Attack. Saber can dash to the target, and his enhanced Basic Attack deals 75-150 (+120% Total Physical Attack) Physical Damage and slows the target by 60% for 1 second.",

            scaling: [

                {
                    name: "Skill Cost",

                    values: [
                        "70",
                        "65",
                        "60",
                        "55",
                        "50",
                        "45"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "75",
                        "90",
                        "105",
                        "120",
                        "135",
                        "150"
                    ]
                },

                {
                    name: "Enhanced Damage",

                    values: [
                        "75",
                        "90",
                        "105",
                        "120",
                        "135",
                        "150"
                    ]
                },

            ]
        },

        {
            name: "Triple Sweep",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/saber/saber-ultimate.webp",

            cooldown: "44.0",

            cost: "100",

            description:
                "Saber charges at the target enemy hero, knocking them airborne for 1.2s (unaffected by Resilience). He strikes them 3 times over the duration, dealing 120-220 (+80% Extra Physical Attack) Physical Damage with the first 2 strikes and 240-440 (+160% Extra Physical Attack) Physical Damage with the third.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "44.0",
                        "40.0",
                        "36.0"
                    ]
                },

                {
                    name: "Skill Cost",

                    values: [
                        "100",
                        "120",
                        "140"
                    ]
                },

                {
                    name: "Base Damage",

                    values: [
                        "120",
                        "170",
                        "220"
                    ]
                },

                {
                    name: "Extra Damage",

                    values: [
                        "240",
                        "340",
                        "440"
                    ]
                },

            ]
        }

    ],

    releaseDate: "2016"

};