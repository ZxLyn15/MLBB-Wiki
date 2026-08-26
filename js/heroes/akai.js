export const akai = {

    /* ================= AKAI ================= */

    name: "Akai",
    title: "Panda Warrior",

    class: ["tank"],
    specialty: ["Guard", "Crowd Control"],

    price: {
        battlePoint: "32000",
        ticket: "599",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/akai/akai.webp",
    background: "../images/heroes/akai/akai-bg.webp",

    stats: {
        hp: "2660",
        hpRegen: "8.4",
        physicalAttack: "115",
        physicalDefense: "24",
        attackSpeed: "1.06",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Tai Chi",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/akai/akai-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Akai gains a 25 (+5% Total HP) shield for 4s on each skill cast. His skills also mark targets. His next Basic Attack against a marked target deals 35 (+6% Total HP) extra Physical Damage.",

        },

        {
            name: "Headbutt",

            type: "Skill 1",

            skillType: [
                "Mobility",
                "CC",
            ],

            image:
                "../images/heroes/akai/akai-skill1.webp",

            cooldown: "11.0",

            cost: "50",

            description:
                "Akai charges in the target direction, dealing 300 (+50% Total Physical Attack) Physical Damage to enemies along the way. If Akai hits an enemy hero during this process, he'll knock them airborne for 0.5s and be able to roll in the Joystick's direction once.<br>Akai can cast Headbutt during Heavy Spin to quickly adjust his position.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "11.0",
                        "10.5",
                        "10.0",
                        "9.5",
                        "9.0",
                        "8.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "50",
                        "60",
                        "70",
                        "80",
                        "90",
                        "100",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "300",
                        "320",
                        "340",
                        "360",
                        "380",
                        "400",
                    ]
                },


            ]
        },

        {
            name: "Body Slam",

            type: "Skill 2",

            skillType: [
                "AOE",
            ],

            image:
                "../images/heroes/akai/akai-skill2.webp",

            cooldown: "7.0",

            cost: "50",

            description:
                "Akai smashes the ground with his body, dealing 270-420 (+6% Total HP) Physical Damage to nearby enemies and slowing them by 45% for 2s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "7.0",
                        "6.5",
                        "6.0",
                        "5.5",
                        "5.0",
                        "4.5",
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
                        "270",
                        "300",
                        "330",
                        "36",
                        "390",
                        "420",
                    ]
                },

            ]
        },

        {
            name: "Heavy Spin",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/akai/akai-ultimate.webp",

            cooldown: "55.0",

            cost: "120",

            description:
                "Akai removes all debuffs on him and spins for 4s, gaining Slow Immunity while continuously dealing 100-120 (+50% Total Physical Attack) Physical Damage to nearby enemies and knocking them back. Enemy heroes knocked back will knock back other heroes they collide with during the process.<br> Akai also gradually increases his Movement Speed by 70% over the duration.This skill can only be interrupted by Suppression.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "55.0",
                        "50.0",
                        "45.0",
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
                    name: "Damage Per Hit",

                    values: [
                        "100",
                        "150",
                        "200",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};