export const bane = {

    /* ================= BANE ================= */

    name: "Bane",
    title: "Frozen King",

    class: ["figter", "mage"],
    specialty: ["Push", "Burst"],

    price: {
        battlePoint: "6500",
        ticket: "Can't Use Tickets",
        diamond: "299",
    },

    image: "../images/heroes/bane/bane.webp",
    background: "../images/heroes/bane/bane-bg.webp",

    stats: {
        hp: "2381",
        hpRegen: "8.4",
        physicalAttack: "117",
        physicalDefense: "23",
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
            name: "Shark Bite",

            type: "Passive",

            skillType: [
                "Burst",
            ],

            image:
                "../images/heroes/bane/bane-passive.webp",

            cooldown: "0",

            cost: "0",

            description:
                "Bane infuses his weapon with a stack of Power of Tide each time he uses a skill (up to 2 stacks). Each of his subsequent Basic Attacks consumes a stack to deal Physical Damage equal to (95% Total Physical Attack) plus 4 (+0.4*Hero Level)% of the target's Max HP to nearby enemies.",

        },

        {
            name: "Crab Claw Cannon",

            type: "Skill 1",

            skillType: [
                "Damage",
            ],

            image:
                "../images/heroes/bane/bane-skill1.webp",

            cooldown: "8.0",

            cost: "30",

            description:
                "Bane fires his Crab Claw Cannon in the target direction, dealing 150-350 (+160% Total Physical Attack) Physical Damage to the first enemy hit and then 150% damage to a random enemy behind them (prioritizes enemy heroes). Enemies hit are slowed by 10 (+10% Total Magic Power)% for 1s.<br>Every 100 Physical Attack Bane possesses reduces this skill's cooldown by an additional 8%.",

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
                    name: "Target Damage",

                    values: [
                        "150",
                        "190",
                        "230",
                        "270",
                        "310",
                        "350",
                    ]
                },
                {
                    name: "Extra Damage",

                    values: [
                        "150%",
                        "160%",
                        "170%",
                        "180%",
                        "190%",
                        "200%",
                    ]
                },


            ]
        },

        {
            name: "Sea Ink",

            type: "Skill 2",

            skillType: [
                "Heal",
                "AOE",
            ],

            image:
                "../images/heroes/bane/bane-skill2.webp",

            cooldown: "7.5",

            cost: "50",

            description:
                "Bane swallows a cup of sea ink, recovering 200 (+150% Total Magic Power) (+ 5 (+1.5% Total Magic Power)% his lost HP), and gaining 50% Movement Speed that decays over 2.5s.<br><strong>Use Again:</strong> Bane spits corrosive ink in a fan-shaped area, dealing 140-340 (+130% Total Magic Power) Magic Damage(up to 200% with charging time).<br>Every 100 Magic Power Bane possesses reduces this skill's cooldown by 7%.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "7.5",
                        "6.9",
                        "6.3",
                        "5.7",
                        "5.1",
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
                    name: "Venom Damage",

                    values: [
                        "140",
                        "180",
                        "220",
                        "260",
                        "300",
                        "340",
                    ]
                },
                {
                    name: "HP Regen",

                    values: [
                        "5%",
                        "6%",
                        "7%",
                        "8%",
                        "9%",
                        "10%",
                    ]
                },

            ]
        },

        {
            name: "Deadly Catch",

            type: "Ultimate",

            skillType: [
                "Burst",
                "CC",
            ],

            image:
                "../images/heroes/bane/bane-ultimate.webp",

            cooldown: "40.0",

            cost: "120",

            extraInfo: [
                {
                    name: "Spell Vamp Ratio",
                    value: "50%",
                }
            ],

            description:
                "Bane summons a school of sharks to charge in the target direction, dealing 700-1100 (+80% Total Physical Attack) (+150% Total Magic Power) Magic Damage to enemies hit, knocking them airborne for 0.6s, and slowing them by 75% (decays over 3s).<br>This skill deals 40% damage to turrets.",

            scaling: [

                {
                    name: "Cooldown",

                    values: [
                        "40.0",
                        "35.0",
                        "30.0",
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
                    name: "Base Damage",

                    values: [
                        "700",
                        "900",
                        "1100",
                    ]
                },
            ]
        }

    ],

    releaseDate: "2016"
};