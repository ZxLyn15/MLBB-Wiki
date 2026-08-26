export const alucard = {

    /* ================= ALUCARD ================= */

    name: "Alucard",
    title: "Demon Hunter",

    class: ["fighter", "assassin"],
    specialty: ["Chase", "Damage"],

    price: {
        battlePoint: "15000",
        ticket: "399",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/alucard/alucard.webp",
    background: "../images/heroes/alucard/alucard-bg.webp",

    stats: {
        hp: "2443",
        hpRegen: "7.8",
        physicalAttack: "123",
        physicalDefense: "21",
        attackSpeed: "1.12",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Pursuit",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/alucard/alucard-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "After each skill cast, Alucard's next Basic Attack allows him to dash to the target's location and deal (125% Total Physical Attack) Physical Damage.<br><strong>Demon Hunter:</strong> Alucard deals 10% extra damage to Creeps.",

        },

        {
            name: "Groundsplitter",

            type: "Skill 1",

            skillType: [
                "Mobility",
                "AOE",
            ],

            image:
                "../images/heroes/alucard/alucard-skill1.webp",

            cooldown: "8.5",

            cost: "0",

            description:
                "Alucard rolls to the target location and slams his blade on the ground, dealing 270-370 (+85% Extra Physical Attack) Physical Damage to enemies hit and slowing them by 40% for 2s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "8.5",
                        "8.1",
                        "7.7",
                        "7.3",
                        "6.9",
                        "6.5",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "270",
                        "290",
                        "310",
                        "330",
                        "350",
                        "370",
                    ]
                },


            ]
        },

        {
            name: "Whirling Smash",

            type: "Skill 2",

            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/alucard/alucard-skill2.webp",

            cooldown: "6.0",

            cost: "0",

            description:
                "Alucard launches a whirling slash, dealing 345 (+120% Extra Physical Attack) Physical Damage to nearby enemies.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "6.0",
                        "5.6",
                        "5.2",
                        "4.8",
                        "4.4",
                        "4.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "345",
                        "390",
                        "435",
                        "480",
                        "525",
                        "570",
                    ]
                },

            ]
        },

        {
            name: "Fission Wave",

            type: "Ultimate",

            skillType: [
                "Buff",
                "Burst",
            ],

            image:
                "../images/heroes/alucard/alucard-ultimate.webp",

            cooldown: "40.0",

            cost: "0",

            description:
                "<strong>Passive:</strong> Alucard permanently gains 10% Hybrid Lifesteal.<br><strong>Active:</strong> Alucard absorbs the energy of enemies in the target area, reducing their Movement Speed by 30% and Hybrid Defense by 10-20. Alucard gains 10-20 Hybrid Defense for each enemy hero hit, and reduces the cooldown of his other skills to 50% for 6s.>br><strong>Use Again:</strong> Alucard releases a shockwave in the target direction, dealing 400-700 (+ 200 % Extra Physical Attack) Physical Damage to enemies hit.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "40.0",
                        "35.0",
                        "30.0"
                    ]
                },
                {
                    name: "Hybrid Lifesteal",

                    values: [
                        "10%",
                        "20%",
                        "30%"
                    ]
                },
                {
                    name: "Hybrid Defense Reduction",

                    values: [
                        "10",
                        "15",
                        "20"
                    ]
                },
                {
                    name: "Hybrid Defense Boost",

                    values: [
                        "10",
                        "15",
                        "20"
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "400",
                        "550",
                        "700",
                    ]
                }

            ]
        }

    ],

    releaseDate: "2016"
};