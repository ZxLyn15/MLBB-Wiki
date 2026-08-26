export const freya = {

    /* ================= FREYA ================= */

    name: "Freya",
    title: "Valkyrie",

    class: ["assassin"],
    specialty: ["Chase", "Burst"],

    price: {
        battlePoint: "Can't Use Battle Points",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/freya/freya.webp",
    background: "../images/heroes/freya/freya-bg.webp",

    stats: {
        hp: "2550",
        hpRegen: "9.8",
        physicalAttack: "120",
        physicalDefense: "22",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Power of Einherjar",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/freya/freya-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Freya gains 1 Sacred Orb with each Basic Attack (up to 6 Sacred Orbs). Consuming 1 Sacred Orb grants Freya 100% Attack Speed for her next Basic Attack (up to 6 stacks).<br>While out of combat, Sacred Orbs regenerate gradually.",

        },

        {
            name: "Leap of Faith",

            type: "Skill 1",
            skillType: [
                "CC",
                "Shield",
            ],
            image:
                "../images/heroes/freya/freya-skill1.webp",

            cooldown: "8.0",
            cost: "0",

            description:
                "Freya leaps to the target area and strikes the ground with her shield, gaining 500-900 (+100% Total Physical Attack) shield and dealing 200-300 (+80% Extra Physical Attack) Physical Damage to enemies within while knocking them airborne for 0.4s.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "8.0",
                        "7.6",
                        "7.2",
                        "6.8",
                        "6.4",
                        "6.0",
                    ]
                },
                {
                    name: "Shield",

                    values: [
                        "500",
                        "580",
                        "660",
                        "740",
                        "820",
                        "900",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "220",
                        "220",
                        "240",
                        "260",
                        "280",
                        "300",
                    ]
                },
            ]
        },

        {
            name: "Valkyrie Slash",

            type: "Skill 2",
            skillType: [
                "Mobility",
                "Damage",
            ],

            image:
                "../images/heroes/freya/freya-skill2.webp",

            cooldown: "0.4",
            cost: "0",

            description:
                "Freya charges forward and slashes, dealing 150-300 (+50% Total Physical Attack) Physical Damage and slowing enemies by 30% for 0.5s.<br>This skill has no base cooldown but consumes 2 Sacred Orbs per cast.<br>It deals 50% damage to creeps.",

            scaling: [
                {
                    name: "Base Damage",

                    values: [
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                    ]
                },
            ]
        },

        {
            name: "Valkyrie Descent",

            type: "Ultimate",

            skillType: [
                "Morph",
                "Buff",
            ],

            image:
                "../images/heroes/freya/freya-ultimate.webp",

            cooldown: "44.0",
            cost: "0",

            description:
                "Freya selects a target area and dives down as a Sacred Orb (gaining Control Immunity), dealing 300-550 (+75% Total Physical Attack) Physical Damage and 40% slow to enemies in her path and at the landing point for 2s.Upon landing, Freya enters the Valkyrie state for 10s, during which her Basic Attacks deal 30-60 extra damage(extra damage cannot Crit) and she recovers 40-80 (+ 40 % Total Physical Attack) HP per Basic Attack, and her Basic Attacks deal splash damage.",

            scaling: [
                {
                    name: "cooldown",

                    values: [
                        "41.0",
                        "36.0",
                        "28.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "300",
                        "425",
                        "550",
                    ]
                },
                {
                    name: "Damage Increase",

                    values: [
                        "30",
                        "45",
                        "60",
                    ]
                },
                {
                    name: "HP Regen",

                    values: [
                        "40",
                        "60",
                        "80",
                    ]
                },
            ]
        }

    ],

    releaseDate: "November 2016"
};