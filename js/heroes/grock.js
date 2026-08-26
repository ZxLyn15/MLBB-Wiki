export const grock = {

    /* ================= GROCK ================= */

    name: "Grock",
    title: "Fortress Titan",

    class: ["tank", "fighter"],
    specialty: ["Burst", "Poke"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/grock/grock.webp",
    background: "../images/heroes/grock/grock-bg.webp",

    stats: {
        hp: "2700",
        hpRegen: "8.4",
        physicalAttack: "135",
        physicalDefense: "21",
        attackSpeed: "1.01",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Bastion of Stone",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/grock/grock-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Grock gains a Shield equal to 14% of his Max HP and empowers the next Basic Attack to deal Physical Damage equal to 4 (+2% Total Physical Defense)% of the target's Max HP (capped at 300(+20*Hero Level) against non-hero units). This effect has a 18-12s cooldown (decreases with level), which reduces by 200% when near terrain.<br>Grock's skills cannot be interrupted, and he gains 30(+6*Hero Level)% extra Physical Defense while the Shield is active.",

        },

        {
            name: "Mighty Swing",

            type: "Skill 1",
            skillType: [
                "CC",
                "AOE",
            ],
            image:
                "../images/heroes/grock/grock-skill1.webp",

            cooldown: "8.0",
            cost: "0",

            description:
                "grock flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

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
                    name: "Base Damage",

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
            name: "Earthen Rampart",

            type: "Skill 2",
            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/grock/grock-skill2.webp",

            cooldown: "14.0",
            cost: "0",

            description:
                "grock lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time grock kills an enemy.",

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
            name: "Tectonic Charge",

            type: "Ultimate",

            skillType: [
                "Mobility",
                "AOE",
            ],

            image:
                "../images/heroes/grock/grock-ultimate.webp",

            cooldown: "35.0",
            cost: "120",

            description:
                "grock removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

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
                    name: "Explosion Damage",

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