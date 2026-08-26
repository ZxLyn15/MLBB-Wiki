export const eudora = {

    /* ================= EUDORA ================= */

    name: "Eudora",
    title: "Lightning Weaver",

    class: ["mage"],
    specialty: ["Control", "Burst"],

    price: {
        battlePoint: "2000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/eudora/eudora.webp",
    background: "../images/heroes/eudora/eudora-bg.webp",

    stats: {
        hp: "2440",
        hpRegen: "7.6",
        physicalAttack: "112",
        physicalDefense: "18",
        attackSpeed: "1",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "250"
    },

    skills: [

        {
            name: "Superconductor",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/eudora/eudora-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Eudora's skills inflict Superconductor for 5s on non-minion units hit and can trigger additional effects against enemies affected by Superconductor.",

        },

        {
            name: "Forked Lightning",

            type: "Skill 1",
            skillType: [
                "AOE",
            ],
            image:
                "../images/heroes/eudora/eudora-skill1.webp",

            cooldown: "5.0",
            cost: "40",
            extraInfo: [
                {
                    name: "Spell Vamp Ratio",

                    value: "50%",
                }
            ],

            description:
                "Eudora casts Forked Lightning in a fan-shaped area, dealing 275-500 (+100% Total Magic Power) Magic Damage (increased to 200% against minions) to enemies within.<br>When hitting targets affected by Superconductor, Eudora forms a lightning chain with the target, gaining 40% Movement Speed during the chain for up to 1s.<br>The lightning chain deals 10-20 (+ 4 % Total Magic Power) Magic Damage over time and an additional 275-500 (+100 % Total Magic Power) Magic Damage when it ends.If this hit lands, it reduces this skill's cooldown by 50%.",

            scaling: [
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
                        "275",
                        "320",
                        "365",
                        "410",
                        "455",
                        "500",
                    ]
                },
                {
                    name: "Trigger Damage",

                    values: [
                        "10",
                        "12",
                        "14",
                        "16",
                        "18",
                        "20",
                    ]
                },
                {
                    name: "Delayed Damage",

                    values: [
                        "275",
                        "320",
                        "365",
                        "410",
                        "455",
                        "500",
                    ]
                },

            ]
        },

        {
            name: "Ball Lightning",

            type: "Skill 2",
            skillType: [
                "CC",
                "Damage",
            ],

            image:
                "../images/heroes/eudora/eudora-skill2.webp",

            cooldown: "11.0",
            cost: "80",

            description:
                "Eudora hurls an orb of lightning at the target enemy, reducing their Magic Defense by 10-25 for 1.8s, dealing 300-400 (+ 50 % Total Magic Power) Magic Damage, and stunning them for 1s. If the target is affected by Superconductor, the lightning orb reduces the Magic Defense of nearby enemies, deals AOE damage centered on the target, and stuns all nearby enemies.",

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
                        "80",
                        "85",
                        "90",
                        "95",
                        "100",
                        "105",
                    ]
                },
                {
                    name: "Magic Defense Reduction",

                    values: [
                        "10",
                        "13",
                        "16",
                        "19",
                        "22",
                        "25",
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
            name: "Thunder's Wrath",

            type: "Ultimate",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/eudora/eudora-ultimate.webp",

            cooldown: "32.0",
            cost: "130",

            description:
                "Eudora calls down a blast of lightning on the target area, dealing 600-1000 (+160% Total Magic Power) Magic Damage to targets at the center. Then it strikes targets outside the center, dealing 300-500 (+100% Total Magic Power) Magic Damage.<br>Every time Thunder's Wrath hits a target affected by Superconductor, it triggers a Thunderburst centered on the Superconductor target after a short delay, dealing 330-550 (+110% Total Magic Power) Magic Damage.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "32.0",
                        "29.0",
                        "26.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "130",
                        "160",
                        "190",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "600",
                        "800",
                        "1000",
                    ]
                },
                {
                    name: "Delayed Damage",

                    values: [
                        "300",
                        "400",
                        "500",
                    ]
                },
                {
                    name: "Diffusion Damage",

                    values: [
                        "330",
                        "440",
                        "550",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};