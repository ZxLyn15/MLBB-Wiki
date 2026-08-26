export const bruno = {

    /* ================= BRUNO ================= */

    name: "Bruno",
    title: "The Protector",

    class: ["marksman"],
    specialty: ["Finisher", "Burst"],

    price: {
        battlePoint: "15000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/bruno/bruno.webp",
    background: "../images/heroes/bruno/bruno-bg.webp",

    stats: {
        hp: "2320",
        hpRegen: "6",
        physicalAttack: "145",
        physicalDefense: "17",
        attackSpeed: "1.01",
        attackSpeedRatio: "80%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "245"
    },

    skills: [

        {
            name: "Mecha Legs",

            type: "Passive",

            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/bruno/bruno-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Bruno gains 2.5% extra Crit Chance each time he deals damage with his skills (up to 8 stacks).<br>Bruno has higher Physical Attack but only gains 80% extra Attack Speed from all sources.",

        },

        {
            name: "Valley Shot",

            type: "Skill 1",

            skillType: [
                "Damage",
                "Slow",
            ],

            image:
                "../images/heroes/bruno/bruno-skill1.webp",

            cooldown: "10.0",

            cost: "60",

            description:
                "Bruno kicks a Powerball on his next Basic Attack, dealing 100-225 (+100% Total Physical Attack) Physical Damage to the target, slowing them by 30%, and speeding up by 30% for 0.5s.<br>The Powerball then bounces back toward Bruno and lands on the ground. He or allied heroes can retrieve the Powerball for another attack and reduce the cooldown of Flying Tackle by 1s.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "10.0",
                        "9.5",
                        "9.0",
                        "8.5",
                        "8.0",
                        "7.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "60",
                        "65",
                        "70",
                        "75",
                        "80",
                        "85",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "100",
                        "125",
                        "150",
                        "175",
                        "200",
                        "225",
                    ]
                },


            ]
        },

        {
            name: "Flying Tackle",

            type: "Skill 2",

            skillType: [
                "Mobility",
                "CC",
            ],

            image:
                "../images/heroes/bruno/bruno-skill2.webp",

            cooldown: "7.0",

            cost: "60",

            description:
                "Bruno makes a slide tackle in the target direction, dealing 140 (+40% Total Physical Attack) Physical Damage to enemies in his path and stunning them for 0.5s.<br>If the Powerball is bouncing back, Bruno also draws the Powerball toward him.",

            scaling: [

                {
                    name: "Base Damage",

                    values: [
                        "140",
                        "165",
                        "190",
                        "215",
                        "240",
                        "265",
                    ]
                },
            ]
        },

        {
            name: "Worldie",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/bruno/bruno-ultimate.webp",

            cooldown: "38.0",

            cost: "140",

            description:
                "Bruno kicks his Energy Ball at the target enemy hero, dealing 250-450 (+83% Total Physical Attack) Physical Damage and knocking them back.The Energy Ball then bounces between nearby enemies up to 10 times, each time dealing 150-270 (+ 50 % Total Physical Attack) Physical Damage.Each hit also reduces the enemy's Physical Defense by 4%-8% for 8s (up to 3 stacks).",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "38.0",
                        "33.0",
                        "28.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "140",
                        "160",
                        "180",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "250",
                        "350",
                        "450",
                    ]
                },
                {
                    name: "Physical Defense Reduction",

                    values: [
                        "4%",
                        "6%",
                        "8%",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "150",
                        "210",
                        "270",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};