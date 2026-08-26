export const clint = {

    /* ================= CLINT ================= */

    name: "Clint",
    title: "West Justice",

    class: ["marksman"],
    specialty: ["Finisher", "Burst"],

    price: {
        battlePoint: "15000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/clint/clint.webp",
    background: "../images/heroes/clint/clint-bg.webp",

    stats: {
        hp: "2260",
        hpRegen: "7.2",
        physicalAttack: "120",
        physicalDefense: "16",
        attackSpeed: "1.05",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "245"
    },

    skills: [

        {
            name: "Double Shot",

            type: "Passive",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/clint/clint-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "After each skill cast, Clint's next Basic Attack within 4s penetrates a line of enemies, dealing 150 (+100% Total Physical Attack) Physical Damage. This damage can trigger attack effects, and the part affected by Physical Attack can Crit.",

        },

        {
            name: "Quick Draw",

            type: "Skill 1",

            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/clint/clint-skill1.webp",

            cooldown: "8.0",

            cost: "50",

            description:
                "Clint fires 5 bullets in quick succession in the target direction, each dealing 250-400 (+85% Total Physical Attack) Physical Damage to the enemy hit.<br>The bullets will spread evenly across enemies in a fan-shaped area. Enemies hit by multiple bullets will take less damage after the first bullet.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "8.0",
                        "7.4",
                        "6.8",
                        "6.2",
                        "5.6",
                        "5.0",
                    ]
                },
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
                    name: "Base Damage",

                    values: [
                        "250",
                        "280",
                        "310",
                        "340",
                        "370",
                        "400",
                    ]
                },
                {
                    name: "Decay Ratio",

                    values: [
                        "11%",
                        "12%",
                        "13%",
                        "14%",
                        "15%",
                        "16%",
                    ]
                },


            ]
        },

        {
            name: "Trapping Recoil",

            type: "Skill 2",

            skillType: [
                "Mobility",
                "CC",
            ],

            image:
                "../images/heroes/clint/clint-skill2.webp",

            cooldown: "10.0",

            cost: "80",

            description:
                "Clint shoots a trap net in the target direction, slightly jumping back while dealing 140-240 (+30 %Total Physical Attack) (+150 % Total Magic Power) Physical Damage to the first enemy hit and immobilizing them for 1.2s. Successfully hitting an enemy reduces the cooldown of this skill by 40%.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "10.0",
                        "9.6",
                        "9.2",
                        "8.8",
                        "8.4",
                        "8.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "140",
                        "160",
                        "180",
                        "200",
                        "220",
                        "240",
                    ]
                },
            ]
        },

        {
            name: "Grenade Bombardment",

            type: "Ultimate",

            skillType: [
                "AOE",
                "Slow",
            ],

            image:
                "../images/heroes/clint/clint-ultimate.webp",

            cooldown: "1.5",

            cost: "50",

            description:
                "Clint launches a grenade in the target direction that explodes on the first enemy hit, dealing 280-400 (+100% Total Physical Attack) Physical Damage and slowing them by 50% for 0.5s.<br>Clint gains a grenade charge every 10s (up to 3).",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "1.5",
                        "1.0",
                        "0.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "50",
                        "55",
                        "60",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "280",
                        "340",
                        "400",
                    ]
                },
                {
                    name: "Skill recharge Time",

                    values: [
                        "10%",
                        "7.5",
                        "5",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};