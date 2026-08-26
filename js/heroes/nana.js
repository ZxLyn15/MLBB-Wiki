export const nana = {

    /* ================= NANA ================= */

    name: "Nana",
    title: "Sweet Leonin",

    class: ["mage"],
    specialty: ["Control", "Burst"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/nana/nana.webp",
    background: "../images/heroes/nana/nana-bg.webp",

    stats: {
        hp: "2380",
        hpRegen: "6.8",
        physicalAttack: "115",
        physicalDefense: "17",
        attackSpeed: "1.08",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Molina's Gift",

            type: "Passive",

            skillType: [
                "Death Immune",
            ],

            image:
                "../images/heroes/nana/nana-passive.webp",

            cooldown: "150",

            cost: "0",

            description:
                "Upon taking fatal damage, Nana removes all debuffs on her and transforms, becoming untargetable and invincible, and gains 30% Movement Speed for 2 seconds. She also recovers 10% Max HP over the duration.<br>Nana can only transform once every 150 seconds and cannot cast skills in the transformed form.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "150.0s",
                    ]
                }

            ]
        },

        {
            name: "Magic Boomerang",

            type: "Skill 1",

            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/nana/nana-skill1.webp",

            cooldown: "6.0",

            cost: "55",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Nana hurls her Magical Boomerang in the target direction, dealing damage to enemies hit on its way out and back. The boomerang deals 300-500 (+100% Total Magic Power) Magic Damage to the first enemy For every additional enemy hit, the damage is reduced by 10% (max reduction of 30%).",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "6.0",
                        "5.7",
                        "5.4",
                        "5.1",
                        "4.8",
                        "4.5"
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "55",
                        "60",
                        "65",
                        "70",
                        "75",
                        "80"
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "300",
                        "340",
                        "380",
                        "420",
                        "460",
                        "500"
                    ]
                },
            ]
        },

        {
            name: "Molina Smooch",

            type: "Skill 2",

            skillType: [
                "CC",
                "Debuff",
            ],

            image:
                "../images/heroes/nana/nana-skill2.webp",

            cooldown: "12",

            cost: "80",

            description:
                "Nana throws Molina at the target location, dealing 250-375 (+50% Total Magic Power) Magic Damage to enemies within range and Transforming enemy heroes hit into small animals.<br>If Molina does not hit an enemy hero, she will remain on the ground and chase the nearestenemy hero that comes into range, Transforming the first enemy hero she touches.<br>Transform: Reduces the target's Movement Speed by 50% and Magic Defense by 30% for1.5s.Transformed heroes cannot attack or use skills.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.4",
                        "10.8",
                        "10.2",
                        "9.6",
                        "9.0"
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "80",
                        "85",
                        "90",
                        "95",
                        "100",
                        "105",

                    ]
                },
                {
                    name: "Morph Damage",

                    values: [
                        "250",
                        "275",
                        "300",
                        "325",
                        "350",
                        "370",

                    ]
                },

            ]
        },

        {
            name: "Molina Blitz",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/nana/nana-ultimate.webp",

            cooldown: "36.0",

            cost: "135",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%"
                },
            ],

            description:
                "Nana summons Molina to strike the target area 3 times, each time dealing 440-600(+140% TotalMagic Power) Magic Damage to enemies within and slowing them by 30% for 1s. Enemies hit consecutively will be stunned for 1s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "36.0",
                        "32.0",
                        "28.0"
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "135",
                        "150",
                        "165"
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "440",
                        "520",
                        "600"

                    ]
                }

            ]
        }

    ],

    releaseDate: "2016"
};