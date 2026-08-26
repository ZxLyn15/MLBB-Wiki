export const rafaela = {

    /* ================= RAFAELA ================= */

    name: "Rafaela",
    title: "Wings of Holiness",

    class: ["support"],
    specialty: ["Regen", "Guard"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/rafaela/rafaela.webp",
    background: "../images/heroes/rafaela/rafaela-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "7.2",
        physicalAttack: "117",
        physicalDefense: "15",
        attackSpeed: "0.99",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "245"
    },

    skills: [

        {
            name: "Divine Resurrection",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/rafaela/rafaela-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Rafaela can cast a special skill every 10s. After channeling for 2.5s, she instantly resurrects an ally and increases their Movement Speed by 30% for 5s (taking damage from heroes and Legend Creeps interrupts channeling and puts the skill on base cooldown). This skill's cooldown is increased by 600% of the target's remaining respawn time, capped at 240s. This skill is not affected by Cooldown Reduction.",

        },

        {
            name: "Light of Retribution",

            type: "Skill 1",
            skillType: [
                "AOE",
                "Slow",
            ],

            image:
                "../images/heroes/rafaela/rafaela-skill1.webp",

            cooldown: "5.0",
            cost: "45",

            description:
                "Rafaela strikes the three nearest enemies with Light of Retribution, dealing them 350-600 (+120% Total Magic Power) Magic Damage, briefly revealing their positions, and slowing them by 40% for 1.5s.Enemies hit by Light of Retribution again within 6s will take 20% extra damage(this effect stacks up to 3 times).",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "5.0",
                        "4.6",
                        "4.2",
                        "3.8",
                        "3.4",
                        "3.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "45",
                        "50",
                        "55",
                        "60",
                        "65",
                        "70",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "350",
                        "400",
                        "450",
                        "500",
                        "550",
                        "600",
                    ]
                },
            ]
        },

        {
            name: "Holy Healing",

            type: "Skill 2",
            skillType: [
                "Heal",
                "Spped Up",
            ],

            image:
                "../images/heroes/rafaela/rafaela-skill2.webp",

            cooldown: "10.5",
            cost: "75",

            description:
                "Rafaela calls upon Holy Light, recovering 100-125 (+35% Total Magic Power) HP for nearby allied heroes, plus an additional 150-250 (+65% Total Magic Power) HP for herself and the most injured allied hero in range. She also increases the Movement Speed of nearby allied heroes by 30% and grants Slow Immunity for 1s.<br>Every 10 point(s) of Magic Power will add 1% to the Movement Speed bonus.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "10.5",
                        "10.1",
                        "9.7",
                        "9.3",
                        "8.9",
                        "8.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "75",
                        "80",
                        "85",
                        "90",
                        "95",
                        "100",
                    ]
                },
                {
                    name: "Basic Healing",

                    values: [
                        "100",
                        "105",
                        "110",
                        "115",
                        "120",
                        "125",
                    ]
                },
                {
                    name: "Secondary Heal",

                    values: [
                        "150",
                        "170",
                        "190",
                        "210",
                        "230",
                        "250",
                    ]
                },
            ]
        },

        {
            name: "Holy Baptism",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/rafaela/rafaela-ultimate.webp",

            cooldown: "38.0",
            cost: "120",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                }
            ],

            description:
                "Rafaela unleashes the true power of Holy Light in the target direction, dealing 460 (+120% Total Magic Power) Magic Damage to enemies in a line and stunning them for 1.2s.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "38.0",
                        "34.0",
                        "30.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "140",
                        "160",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "460",
                        "560",
                        "660",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};