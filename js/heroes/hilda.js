export const hilda = {

    /* ================= HILDA ================= */

    name: "Hilda",
    title: "Power of Megalith",

    class: ["fighter", "tank"],
    specialty: ["Damage", "Regen"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/hilda/hilda.webp",
    background: "../images/heroes/hilda/hilda-bg.webp",

    stats: {
        hp: "2600",
        hpRegen: "8.4",
        physicalAttack: "123",
        physicalDefense: "24",
        attackSpeed: "1.05",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Blessing of Wilderness",

            type: "Passive",
            skillType: [
                "Buff",
                "AOE",
            ],

            image:
                "../images/heroes/hilda/hilda-passive.webp",

            cooldown: "0",
            cost: "0",


            description:
                "Hilda recovers 2% HP per second while in the bush. Entering a bush enhances her next Basic Attack, which deals 110 (+130% Total Physical Attack)(+12*Hero Level) Physical Damage to the target, reduces the target's Movement Speed by 40%, and deals 40 (+100% Total Physical Attack)(+10*Hero Level) Physical Damage to enemies behind the target. After using the enhanced Basic Attack, this effect enters a 6s cooldown.<br>Hilda's Basic Attack and skills apply a Wilderness Mark on hit, which lasts up to 4s and stacks up to 6 times. Each stack reduces the enemy hero's Physical Defense and Magic Defense by 3%.",

        },

        {
            name: "Combat Ritual",

            type: "Skill 1",
            skillType: [
                "Speed Up",
                "Buff",
            ],
            image:
                "../images/heroes/hilda/hilda-skill1.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "hilda flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Shield Bonus",

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
            name: "Art of Hunting",

            type: "Skill 2",
            skillType: [
                "Damage",
                "CC",
            ],

            image:
                "../images/heroes/hilda/hilda-skill2.webp",

            cooldown: "7.0",
            cost: "0",

            description:
                "hilda lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time hilda kills an enemy.",

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
                    name: "Base Damage",

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
            name: "Power of Wilderness",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/hilda/hilda-ultimate.webp",

            cooldown: "32.0",
            cost: "0",

            description:
                "hilda removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                {
                    name: "Base Damage",

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