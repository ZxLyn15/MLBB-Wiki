export const estes = {

    /* ================= ESTES ================= */

    name: "Estes",
    title: "Moon Elf King",

    class: ["support"],
    specialty: ["Regen", "Guard"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/estes/estes.webp",
    background: "../images/heroes/estes/estes-bg.webp",

    stats: {
        hp: "2260",
        hpRegen: "7.2",
        physicalAttack: "120",
        physicalDefense: "13",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "240"
    },

    skills: [

        {
            name: "Scripture of the Moon Elf",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/estes/estes-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Scripture of the Moon Elf slowly charges energy for Estes. Upon reaching 100 stacks, it enhances his next Basic Attack, dealing 250 (+100% Total Physical Attack) (+150% Total Magic Power) Magic Damage to the target. The attack will ricochet to nearby enemies, dealing 125 (+50% Total Physical Attack) (+75% Total Magic Power) Magic Damage and slowing them by 60% for 1.5s.",

        },

        {
            name: "Moonlight immersion",

            type: "Skill 1",
            skillType: [
                "Heal",
                "Buff",
            ],
            image:
                "../images/heroes/estes/estes-skill1.webp",

            cooldown: "10.0",
            cost: "50",

            description:
                "estes flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Basic Healing",

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
                    name: "Sustained Healing",

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
            name: "Domain of Moon Goddess",

            type: "Skill 2",
            skillType: [
                "Slow",
                "AOE",
            ],

            image:
                "../images/heroes/estes/estes-skill2.webp",

            cooldown: "12.0",
            cost: "80",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                },
            ],

            description:
                "estes lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time estes kills an enemy.",

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
            name: "Blessing of Moon Goddess",

            type: "Ultimate",

            skillType: [
                "Heal",
                "Buff",
            ],

            image:
                "../images/heroes/estes/estes-ultimate.webp",

            cooldown: "55.0",
            cost: "140",

            description:
                "estes removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "HP Regen",

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