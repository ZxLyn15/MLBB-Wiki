export const hayabusa = {

    /* ================= HAYABUSA ================= */

    name: "Hayabusa",
    title: "Crimson Shadow",

    class: ["assassin"],
    specialty: ["Chase", "Burst"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/hayabusa/hayabusa.webp",
    background: "../images/heroes/hayabusa/hayabusa-bg.webp",

    stats: {
        hp: "2270",
        hpRegen: "7.4",
        physicalAttack: "117",
        physicalDefense: "17",
        attackSpeed: "1.06",
        attackSpeedRatio: "100%",
        mana: "100",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Ninjutsu: Trace of Shadow",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/hayabusa/hayabusa-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Hayabusa's attacks apply a stack of Shadow Mark on hit (up to 4 stacks). Each stack lasts 6s and increases Hayabusa's damage to the enemy by 5%.",

        },

        {
            name: "Ninjutsu: Phantom Shuriken",

            type: "Skill 1",
            skillType: [
                "Damage",
                "Buff",
            ],
            image:
                "../images/heroes/hayabusa/hayabusa-skill1.webp",

            cooldown: "4.0",
            cost: "30",

            description:
                "<strong>Passive:</strong> Hayabusa permanently gains 3%-18% Spell Vamp. Active: Hayabusa throws three returning shurikens in the target direction, each dealing 220-280 (+75% Extra Physical Attack) Physical Damage to enemies hit and slowing them by 35% for 2s. Subsequent hits on the same enemy deal 70% less damage (only 50% less to creeps). He also restores 10 Energy when hitting non-minion enemies.",

            scaling: [
                {
                    name: "Skill Cost",

                    values: [
                        "30",
                        "28",
                        "26",
                        "24",
                        "22",
                        "20",
                    ]
                },
                {
                    name: "Spell vamp",

                    values: [
                        "3%",
                        "6%",
                        "9%",
                        "12%",
                        "15%",
                        "18%",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "220",
                        "232",
                        "244",
                        "256",
                        "268",
                        "280",
                    ]
                },
            ]
        },

        {
            name: "Ninjutsu: Quad Shadow",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Summon",
            ],

            image:
                "../images/heroes/hayabusa/hayabusa-skill2.webp",

            cooldown: "16.0",
            cost: "25",

            description:
                "Hayabusa dashes in the target direction and releases four phantoms that travel in separate directions. The phantoms will remain at the end of their paths or attach themselves to the first enemy hero hit, dealing 130 (+30% Extra Physical Attack) Physical Damage and slowing them by 40% for 2s. Hayabusa will immediately stop if he hits an enemy hero during the dash.<br><strong>Use Again:</strong> Hayabusa teleports to a phantom's location and reduces the cooldown of <strong>Ninjutsu: Phantom Shuriken</strong> by 1s. If the phantom is attached to an enemy hero, he also deals 130 (+30% Extra Physical Attack) Physical Damage to the enemy.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "16.0",
                        "15.6",
                        "15.2",
                        "14.8",
                        "14.4",
                        "14.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "130",
                        "140",
                        "150",
                        "160",
                        "170",
                        "180",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "130",
                        "140",
                        "150",
                        "160",
                        "170",
                        "180",
                    ]
                },
            ]
        },

        {
            name: "Ougi: Shadow Kill",

            type: "Ultimate",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/hayabusa/hayabusa-ultimate.webp",

            cooldown: "40.0",
            cost: "0",

            description:
                "Hayabusa blends into the shadows and launches 6 single-target attacks on enemies in the area, each dealing 140 (+32% Extra Physical Attack) Physical Damage.<br>The attacks prioritize enemies with Shadow Mark and each will consume a mark to deal 90 (+40% Extra Physical Attack) extra Physical Damage. Shadow Kill does not apply Shadow Mark.",

            scaling: [
                {
                    name: "Hits",

                    values: [
                        "55.0",
                        "50.0",
                        "45.0",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "100",
                        "140",
                        "180",
                    ]
                },
                {
                    name: "Extra Damage Bonus",

                    values: [
                        "600",
                        "900",
                        "1200",
                    ]
                },
            ]
        }

    ],

    releaseDate: "November 4, 2016"
};