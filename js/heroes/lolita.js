export const lolita = {

    /* ================= LOLITA ================= */

    name: "Lolita",
    title: "Steel Elf",

    class: ["support", "tank"],
    specialty: ["Gurad", "Crowd Control"],

    price: {
        battlePoint: "32000",
        ticket: "Can't Use Tickets",
        diamond: "599",
    },

    image: "../images/heroes/lolita/lolita.webp",
    background: "../images/heroes/lolita/lolita-bg.webp",

    stats: {
        hp: "2342",
        hpRegen: "9.6",
        physicalAttack: "115",
        physicalDefense: "20",
        attackSpeed: "0.98",
        attackSpeedRatio: "100%",
        mana: "500",
        manaRegen: "4",
        magicPower: "0",
        magicDefense: "15",
        movementSpeed: "260"
    },

    skills: [

        {
            name: "Noumenon Energy Core",

            type: "Passive",
            skillType: [
                "Shield",
            ],

            image:
                "../images/heroes/lolita/lolita-passive.webp",

            cooldown: "0",
            cost: "0",

            description:
                "Every 6s to 3s (scales with Noumenon Blast level), the Noumenon Energy Core grants Lolita20 (+2.5% Total HP) (+20% Total Magic Power) shield. When Lolita casts a skill, the Noumenon Energy Core grants Lolita and nearby allied heroes an extra shield. This shield can stack up to 3 times and lasts 30s.",

        },

        {
            name: "Power Charge",

            type: "Skill 1",
            skillType: [
                "Mobility",
                "CC",
            ],
            image:
                "../images/heroes/lolita/lolita-skill1.webp",

            cooldown: "10.0",
            cost: "70",

            description:
                "lolita jumps to the target location, dealing 325 (+60% Total Physical Attack) Physical Damage to enemies in the area and briefly knocking them airborne. Enemies hit will also be slowed by 40% while lolita enhances his Basic Attacks to deal 25 (+5% Total HP) extra Physical Damage for 2s.<br><strong>Enraged:</strong> Increases the AOE range and the damage dealt by 25 (+5% Total HP) Physical Damage.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "10.0",
                        "9.6",
                        "9.2",
                        "8.8",
                        "8.4",
                        "8.0",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "70",
                        "75",
                        "80",
                        "85",
                        "90",
                        "95",
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
            name: "Guardian's Reflection",

            type: "Skill 2",
            skillType: [
                "Shield",
                "Damage",
            ],

            image:
                "../images/heroes/lolita/lolita-skill2.webp",

            cooldown: "15.0",
            cost: "90",

            description:
                "Lolita raises her shield and reflects all incoming ranged Basic Attacks and Projectiles in the direction of the shield for 3s. The shield will break after taking 1000 (+15% Total HP) damage.<br>The damage and effects from the Unique Passives of an attacker's equipment will not apply to the shield and will not be reflected. This skill can be interrupted by high level control effects.",

            scaling: [
                {
                    name: "Cooldown",

                    values: [
                        "15.0",
                        "14.5",
                        "14.0",
                        "13.5",
                        "13.0",
                        "12.5",
                    ]
                },
                {
                    name: "Skill Cost",

                    values: [
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "115",
                    ]
                },
                {
                    name: "Shield HP",

                    values: [
                        "1000",
                        "1200",
                        "1400",
                        "1600",
                        "1800",
                        "2000",
                    ]
                },
            ]
        },

        {
            name: "Noumenon Blasr",

            type: "Ultimate",

            skillType: [
                "CC",
                "AOE",
            ],

            image:
                "../images/heroes/lolita/lolita-ultimate.webp",

            cooldown: "55.0",
            cost: "100",

            description:
                "<strong>Passive:</strong> Reduces the interval of Noumenon Energy Core by 1s each time this skill is upgraded.<br><strong>Active:</strong> Lolita begins charging for 2s while slowing enemies in a fan-shaped area by 60%. When the charging is complete or is stopped, Lolita slams her hammer on the ground, dealing up to 600 (+100% Total Physical Attack) Physical Damage to enemies in the area and stunning them for up to 2s (damage and stun duration scale with charge time).<br><strong>Use Again:</strong> Lolita immediately stops charging and slams her hammer on the ground.",

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
                        "100",
                        "140",
                        "180",
                    ]
                },
                {
                    name: "Base Damage",

                    values: [
                        "600",
                        "900",
                        "1200",
                    ]
                },
            ]
        }

    ],

    releaseDate: "October 28, 2016"
};