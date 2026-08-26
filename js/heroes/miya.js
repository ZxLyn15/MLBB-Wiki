export const miya = {

    /* ================= MIYA ================= */

    name: "Miya",
    title: "The Moonlight Archer",

    class: ["marksman"],
    specialty: ["Finisher", "Damage"],

    price: {
        battlePoint: "10800",
        ticket: "399",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/miya/miya.webp",
    background: "../images/heroes/miya/miya-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "6",
        physicalAttack: "115",
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
            name: "Moon Blessing",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/miya/miya-passive.webp",

            cooldown: "0",

            cost: "0",

            extraInfo: [
                {
                    name: "Attack Effects",
                    value: "25%"
                },
            ],

            description:
                "Each time Miya hits a target with her Basic Attack, she gains 5% Attack Speed for 4 seconds. Stacks up to 5 times. <br> After reaching full stacks, Miya summons a Moonlight Shadow with each Basic Attack that deals 30 (+25% Total Physical Attack) Physical Damage and inherits a portion of Attack Effects.",

            scaling: [

                {
                    name: "Extra Attack Speed",

                    values: [
                        "5%",
                    ]
                }

            ]
        },

        {
            name: "Moon Arrow",

            type: "Skill 1",

            skillType: [
                "Buff",
                "AOE",
            ],

            image:
                "../images/heroes/miya/miya-skill1.webp",

            cooldown: "11.0",

            cost: "60",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Miya shoots two extra arrows with each Basic Attack, dealing 10-35 (+100% Total Physical Attack) Physical Damage to the target enemy and 30% damage to nearby targets. This effect lasts 4 seconds. Each extra arrow inherits a portion of Attack Effects.",

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
                        "10",
                        "15",
                        "20",
                        "25",
                        "30",
                        "35"
                    ]
                },

                {
                    name: "Duration",

                    values: [
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                    ]
                }

            ]
        },

        {
            name: "Arrow of Eclipse",

            type: "Skill 2",

            skillType: [
                "CC",
                "AOE"
            ],

            image:
                "../images/heroes/miya/miya-skill2.webp",

            cooldown: "8.0",

            cost: "90",

            description:
                "Miya launches an empowered arrow on the target area, dealing 270-420 (+45% Total Physical Attack) Physical Damage to enemies within and immobilizing them for 1.2 seconds. The arrow then splits into 6 scattering minor arrows, each dealing 40-105 (+20% Total Physical Attack) Physical Damage to the first enemy hit and slowing them by 30% for 2 seconds.",

            scaling: [

                {
                    name: "Skill Cost",

                    values: [
                        "90",
                        "100",
                        "110",
                        "120",
                        "130",
                        "140"
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "270",
                        "300",
                        "330",
                        "360",
                        "390",
                        "420"
                    ]
                },
                {
                    name: "Arrow Damage",

                    values: [
                        "40",
                        "53",
                        "33",
                        "79",
                        "92",
                        "105"
                    ]
                },




            ]
        },

        {
            name: "Hidden Moonlight",

            type: "Ultimate",

            skillType: [
                "Conceal",
                "Remove CC",
            ],

            image:
                "../images/heroes/miya/miya-ultimate.webp",

            cooldown: "30.0",

            cost: "120",

            description:
                "Miya removes all debuffs on her and conceals herself, gaining 65% extra Movement Speed. This state lasts 2 seconds or until she launches an attack.<br>Miya gains full stacks of Moon Blessing upon leaving the state.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "30.0",
                        "25.0",
                        "20.0"
                    ]
                },

                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "145",
                        "170"
                    ]
                }

            ]
        }

    ],

    releaseDate: "2016"
};