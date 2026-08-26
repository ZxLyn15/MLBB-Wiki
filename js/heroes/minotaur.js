export const minotaur = {

    /* ================= MINOTAUR ================= */

    name: "Minotaur",
    title: "Son or Minos",

    class: ["tank", "support"],
    specialty: ["Crowd Control"],

    price: {
        battlePoint: "15000",
        ticket: "Can't Use Tickets",
        diamond: "399",
    },

    image: "../images/heroes/minotaur/minotaur.webp",
    background: "../images/heroes/minotaur/minotaur-bg.webp",

    stats: {
        hp: "2750",
        hpRegen: "8.8",
        physicalAttack: "123",
        physicalDefense: "23",
        attackSpeed: "0.91",
        attackSpeedRatio: "100%",
        mana: "0",
        manaRegen: "0",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Rage Incarnate",

            type: "Passive",
            skillType: [
                "Buff",
            ],

            image:
                "../images/heroes/minotaur/minotaur-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "After casting a skill, Minotaur gains Motivation, recovering HP equal to 5 (+1*Hero Level)% of damage taken from enemy heroes for 3s.<br><strong>Enraged State:</strong> Motivation HP recovery is increased to 200%.",

        },

        {
            name: "Despair Stomp",

            type: "Skill 1",
            skillType: [
                "CC",
                "AOE",
            ],
            image:
                "../images/heroes/minotaur/minotaur-skill1.webp",

            cooldown: "12.0",
            cost: "0",

            description:
                "Minotaur jumps to the target location, dealing 325 (+60% Total Physical Attack) Physical Damage to enemies in the area and briefly knocking them airborne. Enemies hit will also be slowed by 40% while Minotaur enhances his Basic Attacks to deal 25 (+5% Total HP) extra Physical Damage for 2s.<br><strong>Enraged:</strong> Increases the AOE range and the damage dealt by 25 (+5% Total HP) Physical Damage.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "12.0",
                        "11.5",
                        "11.0",
                        "10.5",
                        "10.0",
                        "9.5",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "325",
                        "360",
                        "395",
                        "430",
                        "465",
                        "500",
                    ]
                },
            ]
        },

        {
            name: "Motivation Roar",

            type: "Skill 2",
            skillType: [
                "Heal",
                "Buff",
            ],

            image:
                "../images/heroes/minotaur/minotaur-skill2.webp",

            cooldown: "10.0",
            cost: "0",

            description:
                "Minotaur heals himself and the nearby ally with the lowest HP, recovering 220 (+60% Total Magic Power) HP for both of them and healing himself for an additional 8% of his lost HP<br><strong>Enraged:</strong> Minotaur heals himself and all nearby allied heroes.",

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
                    name: "HP Regen",

                    values: [
                        "170",
                        "200",
                        "230",
                        "260",
                        "290",
                        "320",
                    ]
                },
            ]
        },

        {
            name: "Minoan Fury",

            type: "Ultimate",

            skillType: [
                "CC",
            ],

            image:
                "../images/heroes/minotaur/minotaur-ultimate.webp",

            cooldown: "60.0",
            cost: "0",

            description:
                "Minotaur enters Enraged state and smashes the ground 3 times. The first 2 hits deal 180(+85% Total Physical Attack) Physical Damage to nearby enemies and slow them by 60%,while the final hit deals 200 (+85% Total Physical Attack) True Damage and knocks targetsairborne for 0.8s. Minotaur is immune to control effects during this attack.<br>The Enraged state lasts 12s and enhances Minotaur's skills for the duration.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "60.0",
                        "55.0",
                        "50.0",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "180",
                        "240",
                        "300",
                    ]
                },
                {
                    name: "True Damage",

                    values: [
                        "200",
                        "250",
                        "300",
                    ]
                },
            ]
        }

    ],

    releaseDate: "October 14, 2016"
};