export const fanny = {

    /* ================= FANNY ================= */

    name: "Fanny",
    title: "Blade Dancer",

    class: ["assassin"],
    specialty: ["Chase", "Finisher"],

    price: {
        battlePoint: "24000",
        ticket: "Can't Use Tickets",
        diamond: "499",
    },

    image: "../images/heroes/fanny/fanny.webp",
    background: "../images/heroes/fanny/fanny-bg.webp",

    stats: {
        hp: "2267",
        hpRegen: "6.6",
        physicalAttack: "126",
        physicalDefense: "16",
        attackSpeed: "1.11",
        attackSpeedRatio: "100%",
        mana: "100",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "265"
    },

    skills: [

        {
            name: "Air Superiority",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/fanny/fanny-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "During flight, Fanny deals 10%-20% extra damage to enemies hit (scales with flying speed) and applies a stack of Prey Mark to them (up to 2 stacks) on each attack. Her subsequent skill hits on marked enemy heroes restore 8 energy per stack for her. The energy restoration is reduced if she hits multiple enemy heroes within a short period of time.",

        },

        {
            name: "Tornado Strike",

            type: "Skill 1",
            skillType: [
                "AOE",
            ],
            image:
                "../images/heroes/fanny/fanny-skill1.webp",

            cooldown: "3.5",
            cost: "12",

            description:
                "Fanny whirls her blades, dealing 275-525 (+85% Total Physical Attack) Physical Damage to nearby enemies.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "3.5",
                        "3.3",
                        "3.1",
                        "2.9",
                        "2.7",
                        "2.5",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "275",
                        "325",
                        "375",
                        "425",
                        "475",
                        "525",
                    ]
                },
            ]
        },

        {
            name: "Steel Cable",

            type: "Skill 2",
            skillType: [
                "Mobility",
            ],

            image:
                "../images/heroes/fanny/fanny-skill2.webp",

            cooldown: "0.0",
            cost: "19",

            description:
                "Fanny shoots a cable in the target direction that pulls her to the first obstacle hit. She can cast this skill again within 2s until her energy runs out, and each successive recast within this period costs 2 less energy.<br>Fanny automatically casts Tornado Strike upon hitting an enemy mid-flight, as long as her energy is sufficient.",

            scaling: [
                {
                    name: "Skill Cost",

                    values: [
                        "19",
                        "18",
                        "17",
                        "16",
                        "15",
                        "14",
                    ]
                },
            ]
        },

        {
            name: "Cut Throat",

            type: "Ultimate",

            skillType: [
                "Burst",
                "Mobility",
            ],

            image:
                "../images/heroes/fanny/fanny-ultimate.webp",

            cooldown: "35.0",
            cost: "12",

            description:
                "Fanny leaps at the target enemy hero or Creep with her blades, dealing 400-650 (+200% Extra Physical Attack) Physical Damage. Each stack of Prey Mark on the target increases this damage by 30%.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "35.0",
                        "30.0",
                        "25.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "400",
                        "525",
                        "650",
                    ]
                },
            ]
        }

    ],

    releaseDate: "Septmeber 30, 2016"
};