export const layla = {

    /* ================= LAYLA ================= */

    name: "Layla",
    title: "Energy Gunner",

    class: ["marksman"],
    specialty: ["Finisher", "Damage"],

    price: {
        battlePoint: "2000",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/layla/layla.webp",
    background: "../images/heroes/layla/layla-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "5.4",
        physicalAttack: "133",
        physicalDefense: "17",
        attackSpeed: "1.06",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Malefic Gun",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/layla/layla-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Layla deals increased damage to targets farther away from her (starting at 100% and increasing to 115% at 6 units away). This does not apply to Turrets.",

        },

        {
            name: "Malefic Bomb",

            type: "Skill 1",
            skillType: [
                "Burst",
                "Buff",
            ],
            image:
                "../images/heroes/layla/layla-skill1.webp",

            cooldown: "6.0",
            cost: "35",

            description:
                "Layla fires a Malefic Bomb in the target direction, dealing 200-400 (+80% Total Physical Attack) Physical Damage to the first enemy hit (can Crit). Upon hitting an enemy, Layla's Basic Attacks and Void Projectile gain extra range for 3s, and she gains 60% extra Movement Speed that decays over 1.2s. The duration of the Movement Speed boost is doubled if an enemy hero is hit.",

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
                    name: "Skill Cost",

                    values: [
                        "35",
                        "40",
                        "45",
                        "50",
                        "55",
                        "60",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "200",
                        "240",
                        "280",
                        "320",
                        "360",
                        "400",
                    ]
                },
            ]
        },

        {
            name: "Void Projectile",

            type: "Skill 2",
            skillType: [
                "AOE",
                "CC",
            ],

            image:
                "../images/heroes/layla/layla-skill2.webp",

            cooldown: "7.5",
            cost: "70",

            description:
                "Layla fires an an orb of Malefic Energy at the target, dealing 170-320 (+65% Total Physical Attack) Physical Damage to the target and nearby enemies and applying a Magic Mark to the target for 3s. When Layla hits an enemy with a Magic Mark, she deals 100-200 (+35% Total Physical Attack) Physical Damage to the target and nearby enemies, stunning them for 0.25s.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "7.5",
                        "7.3",
                        "7.1",
                        "6.9",
                        "6.7",
                        "6.5",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "170",
                        "200",
                        "230",
                        "260",
                        "290",
                        "320",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "100",
                        "120",
                        "140",
                        "160",
                        "180",
                        "200",
                    ]
                },
            ]
        },

        {
            name: "Destruction Rush",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Buff",
            ],

            image:
                "../images/heroes/layla/layla-ultimate.webp",

            cooldown: "37.0",
            cost: "130",

            description:
                "<strong>Passive:</strong> The range of Void Projectile and Basic Attacks is increased by 0.6-1.8 units. Layla's sight range is slightly increased each time this skill is upgraded.<br><strong>Active:</strong> Layla fires a blast of Malefic Energy in the target direction, dealing 500-800 (+150% Total Physical Attack) Physical Damage to enemies in a line.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "37.0",
                        "32.0",
                        "27.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "130",
                        "150",
                        "170",
                    ]
                },
                {
                    name: "Range Increase",

                    values: [
                        "0.6",
                        "1.2",
                        "1.8",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "500",
                        "650",
                        "800",
                    ]
                },
            ]
        }

    ],

    releaseDate: "Spetember 23, 2016"
};