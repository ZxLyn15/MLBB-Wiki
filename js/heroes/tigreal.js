export const tigreal = {


    /* ================= TIGREAL ================= */

    name: "Tigreal",
    title: "Warrior of Dawn",

    class: ["tank"],
    specialty: ["Crowd Control"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/tigreal/tigreal.webp",
    background: "../images/heroes/tigreal/tigreal-bg.webp",

    stats: {
        hp: "2700",
        hpRegen: "8.4",
        physicalAttack: "112",
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
            name: "Fearless",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/tigreal/tigreal-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Tigreal gains a stack of Fearless each time he uses a skill or is hit by a Basic Attack. After getting 4 stacks, Tigreal will consume all Fearless stacks to block the next incoming Basic Attack (including attacks from Turrets).<br>Attacks from Minions do not grant Fearless stacks nor trigger its effect.",

        },

        {
            name: "Attack Wave",

            type: "Skill 1",

            skillType: [
                "AOE",
                "Slow",
            ],

            image:
                "../images/heroes/tigreal/tigreal-skill1.webp",

            cooldown: "7.0",

            cost: "45",

            description:
                "Tigreal smashes the ground with his hammer and sends a shockwave that erupts 3 times in the target direction, each time dealing 270-520 (+70% Total Physical Attack) Physical Damage to enemies along the fan-shaped area and slowing them by 20%/40%/60% for 1.5s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "7.0",
                        "6.4",
                        "5.8",
                        "5.2",
                        "4.6",
                        "4.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "270",
                        "320",
                        "370",
                        "420",
                        "470",
                        "520"
                    ]
                },


            ]
        },

        {
            name: "Sacred Hammer",

            type: "Skill 2",

            skillType: [
                "Charge",
                "CC",
            ],

            image:
                "../images/heroes/tigreal/tigreal-skill2.webp",

            cooldown: "16.0",

            cost: "70",

            description:
                "Tigreal charges in the target direction, dealing (100% Total Physical Attack) Physical Damage to enemies along the way and pushing them to the end of the charge.<br><strong>Use Again:</strong> Tigreal can use this skill again within 4s, dealing 280-380 (+60% Total Physical Attack) Physical Damage to enemies in front of him and knocking them airborne for 0.6s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "16.0",
                        "15.4",
                        "14.8",
                        "14.2",
                        "13.6",
                        "13.0"
                    ]
                },
                {
                    name: "Airborne Damage",

                    values: [
                        "280",
                        "300",
                        "320",
                        "340",
                        "360",
                        "380"
                    ]
                },

            ]
        },

        {
            name: "Implosion",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/tigreal/tigreal-ultimate.webp",

            cooldown: "55.0",

            cost: "120",

            description:
                "Tigreal unleashes the power of his hammer, pulling nearby enemies to him and stunning them for 1.8s while dealing 600-1000 (+130% Total Physical Attack) Physical Damage.<br>The first half of the channeling can be interrupted by control effects. The second half of the channeling can only be interrupted by Suppression.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "55.0",
                        "50.0",
                        "45.0"
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "120",
                        "140",
                        "160"
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "600",
                        "800",
                        "1000",
                    ]
                }

            ]
        }

    ],

    releaseDate: "2016"
};