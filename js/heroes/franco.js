export const franco = {

    /* ================= FRANCO ================= */

    name: "Franco",
    title: "Frozen Warrior",

    class: ["tank"],
    specialty: ["Initiator", "Control"],

    price: {
        battlePoint: "32000",
        ticket: "749",
        diamond: "Can't Use Diamonds",
    },

    image: "../images/heroes/franco/franco.webp",
    background: "../images/heroes/franco/franco-bg.webp",

    stats: {
        hp: "2600",
        hpRegen: "9.2",
        physicalAttack: "116",
        physicalDefense: "25",
        attackSpeed: "1.03",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Wastleland Force",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/franco/franco-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "If no damage is taken within 5s, Franco gains 10% Movement Speed, recovers 1% Max HP per second, and begins accumulating Wasteland Force (up to 10 stacks). Franco will consume all Wasteland Force stacks on his next skill cast to increase the skill's damage by up to 150%.",

        },

        {
            name: "Iron Hook",

            type: "Skill 1",

            skillType: [
                "CC",
                "Damage",
            ],

            image:
                "../images/heroes/franco/franco-skill1.webp",

            cooldown: "15.0",

            cost: "135",

            description:
                "Franco launches an iron hook in the target direction. The hook will snag the first enemy unit hit, dealing 400-650 (+100% Total Physical Attack) Physical Damage and dragging them to Franco.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "15.0",
                        "14.2",
                        "13.4",
                        "12.6",
                        "11.8",
                        "11.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "135",
                        "140",
                        "145",
                        "150",
                        "155",
                        "160",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "400",
                        "450",
                        "500",
                        "550",
                        "600",
                        "650",
                    ]
                },


            ]
        },

        {
            name: "Fury Shock",

            type: "Skill 2",

            skillType: [
                "Slow",
            ],

            image:
                "../images/heroes/franco/franco-skill2.webp",

            cooldown: "7.0",

            cost: "40",

            description:
                "Franco lashes out, dealing Physical Damage equal to 300-450 plus 4% of his Max HP to nearby enemies and slowing them by 70% for 1.5s.",

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
                        "40",
                        "45",
                        "50",
                        "55",
                        "60",
                        "65",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "300",
                        "330",
                        "360",
                        "390",
                        "420",
                        "450",
                    ]
                },

            ]
        },

        {
            name: "Bloody HUnt",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/franco/franco-ultimate.webp",

            cooldown: "62.0",

            cost: "110",

            description:
                "Franco suppresses the target enemy hero for 1.8s and strikes them 6 times over the duration, each time dealing 50-70 (+70% Total Physical Attack) Physical Damage",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "62.0",
                        "55.0",
                        "48.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "110",
                        "125",
                        "140",
                    ]
                },
                {
                    name: "Damage Per Hit",

                    values: [
                        "50",
                        "60",
                        "70",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};