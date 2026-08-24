/* =========================================================
   HERO DATA
========================================================= */
const modalCard = document.querySelector(".modal-card");
const heroes = [

    /* ================= MIYA ================= */
    {
        name: "Miya",
        title: "The Moonlight Archer",

        class: ["marksman"],
        specialty: ["Finisher", "Damage"],

        price: {
            battlePoint: "10800",
            ticket: "399",
            diamond: "Can't Use Diamonds",
        },

        image: "../images/heroes/miya/miya.webp",
        background: "../images/heroes/miya/miya-bg.webp",

        stats: {
            hp: "2320",
            hpRegen: "6",
            physicalAttack: "115",
            physicalDefense: "17",
            attackSpeed: "1.06",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "250"
        },

        skills: [

            {
                name: "Moon Blessing",

                type: "Passive",

                skillType: [
                    "Buff",
                ],

                image:
                    "../images/heroes/miya/miya-passive.webp",

                cooldown: "0",

                cost: "0",

                extraInfo: [
                    {
                        name: "Attack Effects",
                        value: "25%"
                    },
                ],

                description:
                    "Each time Miya hits a target with her Basic Attack, she gains 5% Attack Speed for 4 seconds. Stacks up to 5 times. <br> After reaching full stacks, Miya summons a Moonlight Shadow with each Basic Attack that deals 30 (+25% Total Physical Attack) Physical Damage and inherits a portion of Attack Effects.",

                scaling: [

                    {
                        name: "Extra Attack Speed",

                        values: [
                            "5%",
                        ]
                    }

                ]
            },

            {
                name: "Moon Arrow",

                type: "Skill 1",

                skillType: [
                    "Buff",
                    "AOE",
                ],

                image:
                    "../images/heroes/miya/miya-skill1.webp",

                cooldown: "11.0",

                cost: "60",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Miya shoots two extra arrows with each Basic Attack, dealing 10-35 (+100% Total Physical Attack) Physical Damage to the target enemy and 30% damage to nearby targets. This effect lasts 4 seconds. Each extra arrow inherits a portion of Attack Effects.",

                scaling: [

                    {
                        name: "Skill Cost",

                        values: [
                            "60",
                            "65",
                            "70",
                            "75",
                            "80",
                            "85"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "10",
                            "15",
                            "20",
                            "25",
                            "30",
                            "35"
                        ]
                    },

                    {
                        name: "Duration",

                        values: [
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                        ]
                    }

                ]
            },

            {
                name: "Arrow of Eclipse",

                type: "Skill 2",

                skillType: [
                    "CC",
                    "AOE"
                ],

                image:
                    "../images/heroes/miya/miya-skill2.webp",

                cooldown: "8.0",

                cost: "90",

                description:
                    "Miya launches an empowered arrow on the target area, dealing 270-420 (+45% Total Physical Attack) Physical Damage to enemies within and immobilizing them for 1.2 seconds. The arrow then splits into 6 scattering minor arrows, each dealing 40-105 (+20% Total Physical Attack) Physical Damage to the first enemy hit and slowing them by 30% for 2 seconds.",

                scaling: [

                    {
                        name: "Skill Cost",

                        values: [
                            "90",
                            "100",
                            "110",
                            "120",
                            "130",
                            "140"
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "270",
                            "300",
                            "330",
                            "360",
                            "390",
                            "420"
                        ]
                    },
                    {
                        name: "Arrow Damage",

                        values: [
                            "40",
                            "53",
                            "33",
                            "79",
                            "92",
                            "105"
                        ]
                    },




                ]
            },

            {
                name: "Hidden Moonlight",

                type: "Ultimate",

                skillType: [
                    "Conceal",
                    "Remove CC",
                ],

                image:
                    "../images/heroes/miya/miya-ultimate.webp",

                cooldown: "30.0",

                cost: "120",

                description:
                    "Miya removes all debuffs on her and conceals herself, gaining 65% extra Movement Speed. This state lasts 2 seconds or until she launches an attack.<br>Miya gains full stacks of Moon Blessing upon leaving the state.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "30.0",
                            "25.0",
                            "20.0"
                        ]
                    },

                    {
                        name: "Skill Cost",

                        values: [
                            "120",
                            "145",
                            "170"
                        ]
                    }

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= BALMOND ================= */
    {
        name: "Balmond",
        title: "The Bloody Beast",

        class: ["fighter"],
        specialty: ["Regen", "Damage"],

        price: {
            battlePoint: "6500",
            ticket: "Can't Use Tickets",
            diamond: "299",
        },

        image: "../images/heroes/balmond/balmond.webp",
        background: "../images/heroes/balmond/balmond-bg.webp",

        stats: {
            hp: "2558",
            hpRegen: "9.4",
            physicalAttack: "119",
            physicalDefense: "25",
            attackSpeed: "1.06",
            attackSpeedRatio: "100%",
            mana: "0",
            manaRegen: "0",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "260"
        },

        skills: [

            {
                name: "Bloodthirst",

                type: "Passive",

                skillType: [
                    "Heal",
                ],

                image:
                    "../images/heroes/balmond/balmond-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "Balmond recovers 5% Max HP after killing a Minion or Creep, and 20% Max HP after killing a hero.",


            },

            {
                name: "Soul Lock",

                type: "Skill 1",

                skillType: [
                    "Mobility",
                    "Slow",
                ],

                image:
                    "../images/heroes/balmond/balmond-skill1.webp",

                cooldown: "8.0",

                cost: "0",

                description:
                    "Balmond charges to the target direction for a set distance or until he hits an enemy hero, dealing 150-275 (+60% Total Physical Attack) Physical Damage to enemies along the way. The enemy hero hit will be knocked back slightly, and will have their Movement Speed reduced by 40% and Physical Defense reduced by 40% for 3 seconds.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "8.0",
                            "7.6",
                            "7.2",
                            "6.8",
                            "6.4",
                            "6.0"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "150",
                            "175",
                            "200",
                            "225",
                            "250",
                            "275"
                        ]
                    },

                ]
            },

            {
                name: "Cyclone Sweep",

                type: "Skill 2",

                skillType: [
                    "AOE",
                    "Buff",
                ],

                image:
                    "../images/heroes/balmond/balmond-skill2.webp",

                cooldown: "6.0",

                cost: "0",

                description:
                    "Balmond gains 15% Movement Speed and spins with his axe for 3s, dealing 30 (+1.3% Total HP) (+25% Total Physical Attack) Physical Damage per hit to nearby enemies up to 14 times.<br>Each hit reduces the target's Physical Defense by 5% (up to 40%).",

                scaling: [

                    {
                        name: "Base Damage",

                        values: [
                            "30",
                            "35",
                            "40",
                            "45",
                            "50",
                            "55"
                        ]
                    }

                ]
            },

            {
                name: "Lethal Counter",

                type: "Ultimate",

                skillType: [
                    "Burst",
                ],

                image:
                    "../images/heroes/balmond/balmond-ultimate.webp",

                cooldown: "34",

                cost: "0",

                description:
                    "Balmond unleashes a huge strike in the target direction (this skill can only be interrupted by Suppression), dealing 150 (+70% Total Physical Attack) (+Target's 30%-45% Lost HP) True Damage.<br>This skill only deals up to 1000-2000 damage to non-hero units.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "34.0",
                            "29.0",
                            "24.0",
                        ]
                    },

                    {
                        name: "Extra Damage",

                        values: [
                            "30%",
                            "37.5%",
                            "45%",
                        ]
                    },

                    {
                        name: "Non-Hero Unit Damage Cap",

                        values: [
                            "1000",
                            "1500",
                            "2000",
                        ]
                    }

                ]
            },

        ],

        releaseDate: "2016"
    },

    /* ================= SABER ================= */
    {
        name: "Saber",
        title: "The Wandering Sword",

        class: ["assassin"],
        specialty: ["Charge", "Finisher"],

        price: {
            battlePoint: "6500",
            ticket: "Can't Use Tickets",
            diamond: "299",
        },

        image: "../images/heroes/saber/saber.webp",

        background: "../images/heroes/saber/saber-bg.webp",

        stats: {
            hp: "2500",
            hpRegen: "7",
            physicalAttack: "118",
            physicalDefense: "20",
            attackSpeed: "1.08",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "260"
        },

        skills: [

            {
                name: "Enemy's clint",

                type: "Passive",

                skillType: [
                    "Debuff",
                ],

                image:
                    "../images/heroes/saber/saber-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "Saber's attacks reduce enemies' Physical Defense by 3-8 for 5 seconds on hit. This effect stacks up to 5 times.",

                scaling: [

                    {
                        name: "Physical Defense Reduction (level 1)",

                        values: [
                            "3",
                            "6",
                            "9",
                            "12",
                            "15"
                        ]
                    },

                    {
                        name: "Physical Defense Reduction (level 8)",

                        values: [
                            "5",
                            "10",
                            "15",
                            "20",
                            "25"
                        ]
                    },

                    {
                        name: "Physical Defense Reduction (level 15)",

                        values: [
                            "8",
                            "16",
                            "24",
                            "32",
                            "40"
                        ]
                    },

                ]
            },

            {
                name: "Orbiting Swords",

                type: "Skill 1",

                skillType: [
                    "AOE",
                    "Buff",
                ],

                image:
                    "../images/heroes/saber/saber-skill1.webp",

                cooldown: "10.0",

                cost: "60",

                description:
                    "Saber shoots out 5 swords that orbit around him, dealing 80-105 (+30% Extra Physical Attack) Physical Damage to enemies on contact. After orbiting around Saber for roughly 5 seconds, the swords will fly back to Saber.<br>Within the duration of this skill, when Saber deals damage with his Basic Attacks or skills, he will send an orbiting sword towards the target, dealing 200-300 (+50% Extra Physical Attack) Physical Damage to the main target and 50% of the damage to other targets it passes through and reducing the cooldown of Charge by 1 second. It deals only 50% damage to all non-hero enemies such as minions and creeps.",

                scaling: [

                    {
                        name: "Skill Cost",

                        values: [
                            "60",
                            "65",
                            "70",
                            "75",
                            "80",
                            "85"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "75",
                            "85",
                            "95",
                            "105",
                            "115",
                            "125"
                        ]
                    },

                    {
                        name: "Extra Damage",

                        values: [
                            "200",
                            "220",
                            "240",
                            "260",
                            "280",
                            "300"
                        ]
                    },

                ]
            },

            {
                name: "Charge",

                type: "Skill 2",

                skillType: [
                    "Mobility",
                ],

                image:
                    "../images/heroes/saber/saber-skill2.webp",

                cooldown: "7.0",

                cost: "40",

                description:
                    "Saber dashes in the target direction, dealing 75-150 (+50% Extra Physical Attack) Physical Damage to enemies along the way while enhancing his next Basic Attack. Saber can dash to the target, and his enhanced Basic Attack deals 75-150 (+120% Total Physical Attack) Physical Damage and slows the target by 60% for 1 second.",

                scaling: [

                    {
                        name: "Skill Cost",

                        values: [
                            "70",
                            "65",
                            "60",
                            "55",
                            "50",
                            "45"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "75",
                            "90",
                            "105",
                            "120",
                            "135",
                            "150"
                        ]
                    },

                    {
                        name: "Enhanced Damage",

                        values: [
                            "75",
                            "90",
                            "105",
                            "120",
                            "135",
                            "150"
                        ]
                    },

                ]
            },

            {
                name: "Triple Sweep",

                type: "Ultimate",

                skillType: [
                    "Burst",
                    "CC",
                ],

                image:
                    "../images/heroes/saber/saber-ultimate.webp",

                cooldown: "44.0",

                cost: "100",

                description:
                    "Saber charges at the target enemy hero, knocking them airborne for 1.2s (unaffected by Resilience). He strikes them 3 times over the duration, dealing 120-220 (+80% Extra Physical Attack) Physical Damage with the first 2 strikes and 240-440 (+160% Extra Physical Attack) Physical Damage with the third.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "44.0",
                            "40.0",
                            "36.0"
                        ]
                    },

                    {
                        name: "Skill Cost",

                        values: [
                            "100",
                            "120",
                            "140"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "120",
                            "170",
                            "220"
                        ]
                    },

                    {
                        name: "Extra Damage",

                        values: [
                            "240",
                            "340",
                            "440"
                        ]
                    },

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= ALICE ================= */
    {
        name: "Alice",
        title: "The Queen of Blood",

        class: ["tank", "mage"],
        specialty: ["Charge", "Regen"],

        price: {
            battlePoint: "15000",
            ticket: "Can't Use Tickets",
            diamond: "399",
        },

        image: "../images/heroes/alice/alice.webp",
        background: "../images/heroes/alice/alice-bg.webp",

        stats: {
            hp: "2452",
            hpRegen: "7.2",
            physicalAttack: "114",
            physicalDefense: "25",
            attackSpeed: "1",
            attackSpeedRatio: "100%",
            mana: "0",
            manaRegen: "0",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "240"
        },

        skills: [

            {
                name: "Crimson Blood Banquet",

                type: "Passive",

                skillType: [
                    "AOE",
                    "Heal",
                ],

                image:
                    "../images/heroes/alice/alice-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "When Alice's skills hit, she gains 1 stack(s) of Crimson, lasting 4 seconds. Once Crimson reaches 2 stacks, Blood Banquet activates, dealing 25 (+30% Total Magic Power) plus 0.5%~2.5% of the target's Max HP (scales with level) as Magic Damage to nearby units (hitting heroes with skills refreshes the duration) and recovering 10 (+3% Extra HP) for Alice every 0.5 seconds.<br>While Blood Banquet is active, Alice gains 8% Movement Speed. Blood Banquet can deal up to 70(+10*Hero Level) Magic Damage to creeps.",

            },

            {
                name: "Crimson Gleam",

                type: "Skill 1",

                skillType: [
                    "Mobility",
                    "AOE",
                ],

                image:
                    "../images/heroes/alice/alice-skill1.webp",

                cooldown: "12.0",

                cost: "0",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Alice fires blood energy forward, dealing 100-200 (+50% Total Magic Power) Magic Damage. Before the blood energy dissipates, this skill can be cast again to activate Scarlet Shadow, allowing Alice to blink to the blood energy's location.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "12.0",
                            "11.2",
                            "10.4",
                            "9.6",
                            "8.8",
                            "8.0"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "100",
                            "120",
                            "140",
                            "160",
                            "180",
                            "200"
                        ]
                    },

                ]
            },

            {
                name: "Doom Waltz",

                type: "Skill 2",

                skillType: [
                    "Slow",
                    "AOE",
                ],

                image:
                    "../images/heroes/alice/alice-skill2.webp",

                cooldown: "4.0",

                cost: "0",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Alice performs a deadly dance, dealing 350-550 (+130% Total Magic Power) Magic Damage to nearby enemies and slowing them by 70% for 1 second. If Blood Banquet is active at this time, it also scorches enemies, dealing 300% of Blood Banquet's damage and healing Alice for the same amount.",

                scaling: [

                    {
                        name: "Base Damage",

                        values: [
                            "350",
                            "390",
                            "430",
                            "470",
                            "510",
                            "550"
                        ]
                    },

                ]
            },

            {
                name: "Throne of Ruin",

                type: "Ultimate",

                skillType: [
                    "CC",
                    "AOE",
                ],

                image:
                    "../images/heroes/alice/alice-ultimate.webp",

                cooldown: "44.0",

                cost: "100",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Alice surrounds herself with blood, gaining Control Immunity and 50% Damage Reduction while slowing herself by 50%. After 1.5 seconds, she descends with force, dealing 500-700 (+200% Total Magic Power) (+20% Extra HP) Magic Damage to all enemies in range and immobilizing them for 1 second.<br>While charging her Ultimate, Alice can only use Scarlet Shadow",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "60.0",
                            "55.0",
                            "50.0"
                        ]
                    },

                    {
                        name: "Base Damage",

                        values: [
                            "500",
                            "600",
                            "700"
                        ]
                    },

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= NANA ================= */
    {
        name: "Nana",
        title: "Sweet Leonin",

        class: ["mage"],
        specialty: ["Control", "Burst"],

        price: {
            battlePoint: "6500",
            ticket: "Can't Use Tickets",
            diamond: "299",
        },

        image: "../images/heroes/nana/nana.webp",
        background: "../images/heroes/nana/nana-bg.webp",

        stats: {
            hp: "2380",
            hpRegen: "6.8",
            physicalAttack: "115",
            physicalDefense: "17",
            attackSpeed: "1.08",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "250"
        },

        skills: [

            {
                name: "Molina's Gift",

                type: "Passive",

                skillType: [
                    "Death Immune",
                ],

                image:
                    "../images/heroes/nana/nana-passive.webp",

                cooldown: "150",

                cost: "0",

                description:
                    "Upon taking fatal damage, Nana removes all debuffs on her and transforms, becoming untargetable and invincible, and gains 30% Movement Speed for 2 seconds. She also recovers 10% Max HP over the duration.<br>Nana can only transform once every 150 seconds and cannot cast skills in the transformed form.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "150.0s",
                        ]
                    }

                ]
            },

            {
                name: "Magic Boomerang",

                type: "Skill 1",

                skillType: [
                    "AOE",
                ],

                image:
                    "../images/heroes/nana/nana-skill1.webp",

                cooldown: "6.0",

                cost: "55",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Nana hurls her Magical Boomerang in the target direction, dealing damage to enemies hit on its way out and back. The boomerang deals 300-500 (+100% Total Magic Power) Magic Damage to the first enemy For every additional enemy hit, the damage is reduced by 10% (max reduction of 30%).",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "6.0",
                            "5.7",
                            "5.4",
                            "5.1",
                            "4.8",
                            "4.5"
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "55",
                            "60",
                            "65",
                            "70",
                            "75",
                            "80"
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "300",
                            "340",
                            "380",
                            "420",
                            "460",
                            "500"
                        ]
                    },
                ]
            },

            {
                name: "Molina Smooch",

                type: "Skill 2",

                skillType: [
                    "CC",
                    "Debuff",
                ],

                image:
                    "../images/heroes/nana/nana-skill2.webp",

                cooldown: "12",

                cost: "80",

                description:
                    "Nana throws Molina at the target location, dealing 250-375 (+50% Total Magic Power) Magic Damage to enemies within range and Transforming enemy heroes hit into small animals.<br>If Molina does not hit an enemy hero, she will remain on the ground and chase the nearestenemy hero that comes into range, Transforming the first enemy hero she touches.<br>Transform: Reduces the target's Movement Speed by 50% and Magic Defense by 30% for1.5s.Transformed heroes cannot attack or use skills.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "12.0",
                            "11.4",
                            "10.8",
                            "10.2",
                            "9.6",
                            "9.0"
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
                        name: "Morph Damage",

                        values: [
                            "250",
                            "275",
                            "300",
                            "325",
                            "350",
                            "370",

                        ]
                    },

                ]
            },

            {
                name: "Molina Blitz",

                type: "Ultimate",

                skillType: [
                    "Burst",
                    "CC",
                ],

                image:
                    "../images/heroes/nana/nana-ultimate.webp",

                cooldown: "36.0",

                cost: "135",

                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%"
                    },
                ],

                description:
                    "Nana summons Molina to strike the target area 3 times, each time dealing 440-600(+140% TotalMagic Power) Magic Damage to enemies within and slowing them by 30% for 1s. Enemies hit consecutively will be stunned for 1s.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "36.0",
                            "32.0",
                            "28.0"
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "135",
                            "150",
                            "165"
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "440",
                            "520",
                            "600"

                        ]
                    }

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= TIGREAL ================= */
    {
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
    },

    /* ================= ALUCARD ================= */
    {
        name: "Alucard",
        title: "Demon Hunter",

        class: ["fighter", "assassin"],
        specialty: ["Chase", "Damage"],

        price: {
            battlePoint: "15000",
            ticket: "399",
            diamond: "Can't Use Diamonds",
        },

        image: "../images/heroes/alucard/alucard.webp",
        background: "../images/heroes/alucard/alucard-bg.webp",

        stats: {
            hp: "2443",
            hpRegen: "7.8",
            physicalAttack: "123",
            physicalDefense: "21",
            attackSpeed: "1.12",
            attackSpeedRatio: "100%",
            mana: "0",
            manaRegen: "0",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "260"
        },

        skills: [

            {
                name: "Pursuit",

                type: "Passive",

                skillType: [
                    "Buff",
                ],

                image:
                    "../images/heroes/alucard/alucard-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "After each skill cast, Alucard's next Basic Attack allows him to dash to the target's location and deal (125% Total Physical Attack) Physical Damage.<br><strong>Demon Hunter:</strong> Alucard deals 10% extra damage to Creeps.",

            },

            {
                name: "Groundsplitter",

                type: "Skill 1",

                skillType: [
                    "Mobility",
                    "AOE",
                ],

                image:
                    "../images/heroes/alucard/alucard-skill1.webp",

                cooldown: "8.5",

                cost: "0",

                description:
                    "Alucard rolls to the target location and slams his blade on the ground, dealing 270-370 (+85% Extra Physical Attack) Physical Damage to enemies hit and slowing them by 40% for 2s.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "8.5",
                            "8.1",
                            "7.7",
                            "7.3",
                            "6.9",
                            "6.5",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "270",
                            "290",
                            "310",
                            "330",
                            "350",
                            "370",
                        ]
                    },


                ]
            },

            {
                name: "Whirling Smash",

                type: "Skill 2",

                skillType: [
                    "AOE",
                ],

                image:
                    "../images/heroes/alucard/alucard-skill2.webp",

                cooldown: "6.0",

                cost: "0",

                description:
                    "Alucard launches a whirling slash, dealing 345 (+120% Extra Physical Attack) Physical Damage to nearby enemies.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "6.0",
                            "5.6",
                            "5.2",
                            "4.8",
                            "4.4",
                            "4.0",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "345",
                            "390",
                            "435",
                            "480",
                            "525",
                            "570",
                        ]
                    },

                ]
            },

            {
                name: "Fission Wave",

                type: "Ultimate",

                skillType: [
                    "Buff",
                    "Burst",
                ],

                image:
                    "../images/heroes/alucard/alucard-ultimate.webp",

                cooldown: "40.0",

                cost: "0",

                description:
                    "<strong>Passive:</strong> Alucard permanently gains 10% Hybrid Lifesteal.<br><strong>Active:</strong> Alucard absorbs the energy of enemies in the target area, reducing their Movement Speed by 30% and Hybrid Defense by 10-20. Alucard gains 10-20 Hybrid Defense for each enemy hero hit, and reduces the cooldown of his other skills to 50% for 6s.>br><strong>Use Again:</strong> Alucard releases a shockwave in the target direction, dealing 400-700 (+ 200 % Extra Physical Attack) Physical Damage to enemies hit.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "40.0",
                            "35.0",
                            "30.0"
                        ]
                    },
                    {
                        name: "Hybrid Lifesteal",

                        values: [
                            "10%",
                            "20%",
                            "30%"
                        ]
                    },
                    {
                        name: "Hybrid Defense Reduction",

                        values: [
                            "10",
                            "15",
                            "20"
                        ]
                    },
                    {
                        name: "Hybrid Defense Boost",

                        values: [
                            "10",
                            "15",
                            "20"
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "400",
                            "550",
                            "700",
                        ]
                    }

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= KARINA ================= */
    {
        name: "Karina",
        title: "Shadow Blade",

        class: ["assassin"],
        specialty: ["Finisher", "Magic Damage"],

        price: {
            battlePoint: "32000",
            ticket: "Can't Use Tickets",
            diamond: "599",
        },

        image: "../images/heroes/karina/karina.webp",
        background: "../images/heroes/karina/karina-bg.webp",

        stats: {
            hp: "2474",
            hpRegen: "7.8",
            physicalAttack: "121",
            physicalDefense: "20",
            attackSpeed: "1.12",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "260"
        },

        skills: [

            {
                name: "Shadow Combo",

                type: "Passive",

                skillType: [
                    "Buff",
                    "Damage",
                ],

                image:
                    "../images/heroes/karina/karina-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "Karina's third consecutive attack on the same enemy deals extra True Damage equal to 100 plus 5 (+2.5% Total Magic Power)% of their lost HP (up to 2000 True Damage against creeps).<br>If the target is an enemy hero, the cooldowns of Karina's non-Ultimate skills are reduced by 1.5s.",

            },

            {
                name: "Dance of Blades",

                type: "Skill 1",

                skillType: [
                    "Buff",
                    "Speed Up",
                ],

                image:
                    "../images/heroes/karina/karina-skill1.webp",

                cooldown: "7.0",

                cost: "50",

                description:
                    "Karina enters the Dance of Blades state for 3.5s, during which she gains 45% extra Movement Speed, blocks all incoming Basic Attacks, and reflects 100-200 (+30% Total Magic Power) Magic Damage back to the attacker (the damage reflection effect has a cooldown of 0.4s). <br>Karina's next Basic Attack within the duration deals 150-225 (+55% Total Magic Power) Magic Damage, slows the target by 45% for 1s, and is guaranteed to Crit. Casting the enhanced Basic Attack or Shadow Assault ends the Dance of Blades state early.",

                scaling: [

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
                        name: "Reflect Damage",

                        values: [
                            "100",
                            "120",
                            "140",
                            "160",
                            "180",
                            "200",
                        ]
                    },
                    {
                        name: "Enhanced Damage",

                        values: [
                            "150",
                            "165",
                            "180",
                            "195",
                            "210",
                            "225",
                        ]
                    },


                ]
            },

            {
                name: "Dance of Death",

                type: "Skill 2",

                skillType: [
                    "AOE",
                ],

                image:
                    "../images/heroes/karina/karina-skill2.webp",

                cooldown: "6.0",

                cost: "60",

                description:
                    "Karina launches a spinning slash, dealing 375 (+125% Total Magic Power) Magic Damage to nearby enemies.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "6.0",
                            "5.7",
                            "5.4",
                            "5.1",
                            "4.8",
                            "4.5",
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
                            "375",
                            "420",
                            "465",
                            "510",
                            "555",
                            "600",
                        ]
                    },

                ]
            },

            {
                name: "Shadow Assault",

                type: "Ultimate",

                skillType: [
                    "Burst",
                    "Mobility",
                ],

                image:
                    "../images/heroes/karina/karina-ultimate.webp",

                cooldown: "34.0",

                cost: "100",

                description:
                    "Karina dashes to the target enemy hero, dealing them 350-750 (+160% Total Magic Power) Magic Damage, applying a Shadow Mark to them, and leaving a Shadowform behind them.The Shadow Mark and Shadowform both last 5s.If the enemy dies within the duration, the cooldown of this skill is reset.<br><strong>Use Again:</strong> Karina dashes back to the Shadowform's location, dealing 150-250 (+50% Total Magic Power) Magic Damage to enemies along the way.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "34.0",
                            "30.0",
                            "26.0",
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "100",
                            "120",
                            "140",
                        ]
                    },
                    {
                        name: "Base damage",

                        values: [
                            "350",
                            "550",
                            "750",
                        ]
                    },
                    {
                        name: "Path damage",

                        values: [
                            "150",
                            "200",
                            "250",
                        ]
                    },

                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= AKAI ================= */
    {
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
    },

    /* ================= FRANCO ================= */
    {
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
    },

    /* ================= BANE ================= */
    {
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
    },

    /* ================= BRUNO ================= */
    {
        name: "clint",
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
    },

    /* ================= CLINT ================= */
    {
        name: "Clint",
        title: "West Justice",

        class: ["marksman"],
        specialty: ["Finisher", "Burst"],

        price: {
            battlePoint: "15000",
            ticket: "Can't Use Tickets",
            diamond: "399",
        },

        image: "../images/heroes/clint/clint.webp",
        background: "../images/heroes/clint/clint-bg.webp",

        stats: {
            hp: "2260",
            hpRegen: "7.2",
            physicalAttack: "120",
            physicalDefense: "16",
            attackSpeed: "1.05",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "245"
        },

        skills: [

            {
                name: "Double Shot",

                type: "Passive",

                skillType: [
                    "Burst",
                ],

                image:
                    "../images/heroes/clint/clint-passive.webp",

                cooldown: "0",

                cost: "0",

                description:
                    "After each skill cast, Clint's next Basic Attack within 4s penetrates a line of enemies, dealing 150 (+100% Total Physical Attack) Physical Damage. This damage can trigger attack effects, and the part affected by Physical Attack can Crit.",

            },

            {
                name: "Quick Draw",

                type: "Skill 1",

                skillType: [
                    "AOE",
                ],

                image:
                    "../images/heroes/clint/clint-skill1.webp",

                cooldown: "8.0",

                cost: "50",

                description:
                    "Clint fires 5 bullets in quick succession in the target direction, each dealing 250-400 (+85% Total Physical Attack) Physical Damage to the enemy hit.<br>The bullets will spread evenly across enemies in a fan-shaped area. Enemies hit by multiple bullets will take less damage after the first bullet.",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "8.0",
                            "7.4",
                            "6.8",
                            "6.2",
                            "5.6",
                            "5.0",
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
                            "250",
                            "280",
                            "310",
                            "340",
                            "370",
                            "400",
                        ]
                    },
                    {
                        name: "Decay Ratio",

                        values: [
                            "11%",
                            "12%",
                            "13%",
                            "14%",
                            "15%",
                            "16%",
                        ]
                    },


                ]
            },

            {
                name: "Trapping Recoil",

                type: "Skill 2",

                skillType: [
                    "Mobility",
                    "CC",
                ],

                image:
                    "../images/heroes/clint/clint-skill2.webp",

                cooldown: "10.0",

                cost: "80",

                description:
                    "Clint shoots a trap net in the target direction, slightly jumping back while dealing 140-240 (+30 %Total Physical Attack) (+150 % Total Magic Power) Physical Damage to the first enemy hit and immobilizing them for 1.2s. Successfully hitting an enemy reduces the cooldown of this skill by 40%.",

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
                        name: "Base Damage",

                        values: [
                            "140",
                            "160",
                            "180",
                            "200",
                            "220",
                            "240",
                        ]
                    },
                ]
            },

            {
                name: "Grenade Bombardment",

                type: "Ultimate",

                skillType: [
                    "AOE",
                    "Slow",
                ],

                image:
                    "../images/heroes/clint/clint-ultimate.webp",

                cooldown: "1.5",

                cost: "50",

                description:
                    "Clint launches a grenade in the target direction that explodes on the first enemy hit, dealing 280-400 (+100% Total Physical Attack) Physical Damage and slowing them by 50% for 0.5s.<br>Clint gains a grenade charge every 10s (up to 3).",

                scaling: [

                    {
                        name: "Cooldown",

                        values: [
                            "1.5",
                            "1.0",
                            "0.5",
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "50",
                            "55",
                            "60",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "280",
                            "340",
                            "400",
                        ]
                    },
                    {
                        name: "Skill recharge Time",

                        values: [
                            "10%",
                            "7.5",
                            "5",
                        ]
                    },
                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= RAFAELA ================= */
    {
        name: "Rafaela",
        title: "Wings of Holiness",

        class: ["support"],
        specialty: ["Regen", "Guard"],

        price: {
            battlePoint: "6500",
            ticket: "Can't Use Tickets",
            diamond: "299",
        },

        image: "../images/heroes/rafaela/rafaela.webp",
        background: "../images/heroes/rafaela/rafaela-bg.webp",

        stats: {
            hp: "2320",
            hpRegen: "7.2",
            physicalAttack: "117",
            physicalDefense: "15",
            attackSpeed: "0.99",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "245"
        },

        skills: [

            {
                name: "Divine Resurrection",

                type: "Passive",
                skillType: [
                    "Buff",
                ],

                image:
                    "../images/heroes/rafaela/rafaela-passive.webp",

                cooldown: "0",
                cost: "0",

                description:
                    "Rafaela can cast a special skill every 10s. After channeling for 2.5s, she instantly resurrects an ally and increases their Movement Speed by 30% for 5s (taking damage from heroes and Legend Creeps interrupts channeling and puts the skill on base cooldown). This skill's cooldown is increased by 600% of the target's remaining respawn time, capped at 240s. This skill is not affected by Cooldown Reduction.",

            },

            {
                name: "Light of Retribution",

                type: "Skill 1",
                skillType: [
                    "AOE",
                    "Slow",
                ],

                image:
                    "../images/heroes/rafaela/rafaela-skill1.webp",

                cooldown: "5.0",
                cost: "45",

                description:
                    "Rafaela strikes the three nearest enemies with Light of Retribution, dealing them 350-600 (+120% Total Magic Power) Magic Damage, briefly revealing their positions, and slowing them by 40% for 1.5s.Enemies hit by Light of Retribution again within 6s will take 20% extra damage(this effect stacks up to 3 times).",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "5.0",
                            "4.6",
                            "4.2",
                            "3.8",
                            "3.4",
                            "3.0",
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "45",
                            "50",
                            "55",
                            "60",
                            "65",
                            "70",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "350",
                            "400",
                            "450",
                            "500",
                            "550",
                            "600",
                        ]
                    },
                ]
            },

            {
                name: "Holy Healing",

                type: "Skill 2",
                skillType: [
                    "Heal",
                    "Spped Up",
                ],

                image:
                    "../images/heroes/rafaela/rafaela-skill2.webp",

                cooldown: "10.5",
                cost: "75",

                description:
                    "Rafaela calls upon Holy Light, recovering 100-125 (+35% Total Magic Power) HP for nearby allied heroes, plus an additional 150-250 (+65% Total Magic Power) HP for herself and the most injured allied hero in range. She also increases the Movement Speed of nearby allied heroes by 30% and grants Slow Immunity for 1s.<br>Every 10 point(s) of Magic Power will add 1% to the Movement Speed bonus.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "10.5",
                            "10.1",
                            "9.7",
                            "9.3",
                            "8.9",
                            "8.5",
                        ]
                    },
                    {
                        name: "Skill Cost",

                        values: [
                            "75",
                            "80",
                            "85",
                            "90",
                            "95",
                            "100",
                        ]
                    },
                    {
                        name: "Basic Healing",

                        values: [
                            "100",
                            "105",
                            "110",
                            "115",
                            "120",
                            "125",
                        ]
                    },
                    {
                        name: "Secondary Heal",

                        values: [
                            "150",
                            "170",
                            "190",
                            "210",
                            "230",
                            "250",
                        ]
                    },
                ]
            },

            {
                name: "Holy Baptism",

                type: "Ultimate",

                skillType: [
                    "CC",
                    "AOE",
                ],

                image:
                    "../images/heroes/rafaela/rafaela-ultimate.webp",

                cooldown: "38.0",
                cost: "120",
                extraInfo: [
                    {
                        name: "Spell Vamp Ratio",
                        value: "50%",
                    }
                ],

                description:
                    "Rafaela unleashes the true power of Holy Light in the target direction, dealing 460 (+120% Total Magic Power) Magic Damage to enemies in a line and stunning them for 1.2s.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "38.0",
                            "34.0",
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
                            "460",
                            "560",
                            "660",
                        ]
                    },
                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= EUDORA ================= */
    {
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
    },

    /* ================= ZILONG ================= */
    {
        name: "Zilong",
        title: "Spear of the Dragon",

        class: ["fighter", "assassin"],
        specialty: ["Chase", "Damage"],

        price: {
            battlePoint: "15000",
            ticket: "399",
            diamond: "Can't Use Diamonds",
        },

        image: "../images/heroes/zilong/zilong.webp",
        background: "../images/heroes/zilong/zilong-bg.webp",

        stats: {
            hp: "2511",
            hpRegen: "7",
            physicalAttack: "123",
            physicalDefense: "25",
            attackSpeed: "1.05",
            attackSpeedRatio: "100%",
            mana: "500",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "265"
        },

        skills: [

            {
                name: "Dragon Flurry",

                type: "Passive",
                skillType: [
                    "Buff",
                    "Heal",
                ],
                extraInfo: [
                    {
                        name: "Attack Effects",

                        value: "50%",
                    }
                ],

                image:
                    "../images/heroes/zilong/zilong-passive.webp",

                cooldown: "0",
                cost: "0",

                description:
                    "After dealing damage 3 time(s) with Basic Attacks or skills, Zilong triggers Dragon Flurry on the next Basic Attack, hitting the target 3 time(s). Each hit deals 80 (+30% Total Physical Attack) Basic Attack Damage and heals himself for 50 (+20% Total Physical Attack) HP.<br>Zilong's Basic Attack deals 100 (+80% Total Physical Attack) Physical Damage.<br>If the target's HP is below 50%, all damage dealt by Zilong's skills and Basic Attacks is increased by 30.",

            },

            {
                name: "Spear Flip",

                type: "Skill 1",
                skillType: [
                    "CC",
                    "Damage",
                ],
                image:
                    "../images/heroes/zilong/zilong-skill1.webp",

                cooldown: "12.0",
                cost: "80",

                description:
                    "Zilong flings the target enemy over his head, dealing 250-350 (+80% Total Physical Attack) Physical Damage",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "12.0",
                            "11.2",
                            "11.0",
                            "10.5",
                            "10.0",
                            "9.5",
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
                name: "Spear Strike",

                type: "Skill 2",
                skillType: [
                    "Mobility",
                    "Debuff",
                ],

                image:
                    "../images/heroes/zilong/zilong-skill2.webp",

                cooldown: "12.0",
                cost: "40",

                description:
                    "Zilong lunges at the target enemy, dealing 250-450 (+60% Total Physical Attack) Physical Damage and reducing their Physical Defense by 15 for 2s.<br>The cooldown of Spear Strike is reset each time Zilong kills an enemy.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "12.0",
                            "11.4",
                            "10.8",
                            "10.2",
                            "9.6",
                            "9.0",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "250",
                            "290",
                            "330",
                            "370",
                            "410",
                            "450",
                        ]
                    },
                    {
                        name: "Physical Defense Reduction",

                        values: [
                            "15",
                            "18",
                            "21",
                            "24",
                            "27",
                            "30",
                        ]
                    },
                ]
            },

            {
                name: "Supreme Warrior",

                type: "Ultimate",

                skillType: [
                    "Speed Up",
                    "Buff",
                ],

                image:
                    "../images/heroes/zilong/zilong-ultimate.webp",

                cooldown: "35.0",
                cost: "120",

                description:
                    "Zilong removes all slow effects on himself and gains 40% Movement Speed, 35%-55% Attack Speed, and Slow Immunity for 7.5s.<br>During this time, Dragon Flurry triggers every 2 attacks (instead of the previous 3).",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "35.0",
                            "31.0",
                            "27.0",
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
                        name: "Attack Speed Bonus",

                        values: [
                            "35%",
                            "45%",
                            "55%",
                        ]
                    },
                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= FANNY ================= */
    {
        name: "Fanny",
        title: "Blade Dancer",

        class: ["assassin"],
        specialty: ["Chase", "Finisher"],

        price: {
            battlePoint: "24000",
            ticket: "Can't Use Tickets",
            diamond: "499",
        },

        image: "../images/heroes/fanny/fanny.webp",
        background: "../images/heroes/fanny/fanny-bg.webp",

        stats: {
            hp: "2267",
            hpRegen: "6.6",
            physicalAttack: "126",
            physicalDefense: "16",
            attackSpeed: "1.11",
            attackSpeedRatio: "100%",
            mana: "100",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "265"
        },

        skills: [

            {
                name: "Air Superiority",

                type: "Passive",
                skillType: [
                    "Buff",
                ],

                image:
                    "../images/heroes/fanny/fanny-passive.webp",

                cooldown: "0",
                cost: "0",

                description:
                    "During flight, Fanny deals 10%-20% extra damage to enemies hit (scales with flying speed) and applies a stack of Prey Mark to them (up to 2 stacks) on each attack. Her subsequent skill hits on marked enemy heroes restore 8 energy per stack for her. The energy restoration is reduced if she hits multiple enemy heroes within a short period of time.",

            },

            {
                name: "Tornado Strike",

                type: "Skill 1",
                skillType: [
                    "AOE",
                ],
                image:
                    "../images/heroes/fanny/fanny-skill1.webp",

                cooldown: "3.5",
                cost: "12",

                description:
                    "Fanny whirls her blades, dealing 275-525 (+85% Total Physical Attack) Physical Damage to nearby enemies.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "3.5",
                            "3.3",
                            "3.1",
                            "2.9",
                            "2.7",
                            "2.5",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "275",
                            "325",
                            "375",
                            "425",
                            "475",
                            "525",
                        ]
                    },
                ]
            },

            {
                name: "Steel Cable",

                type: "Skill 2",
                skillType: [
                    "Mobility",
                ],

                image:
                    "../images/heroes/fanny/fanny-skill2.webp",

                cooldown: "0.0",
                cost: "19",

                description:
                    "Fanny shoots a cable in the target direction that pulls her to the first obstacle hit. She can cast this skill again within 2s until her energy runs out, and each successive recast within this period costs 2 less energy.<br>Fanny automatically casts Tornado Strike upon hitting an enemy mid-flight, as long as her energy is sufficient.",

                scaling: [
                    {
                        name: "Skill Cost",

                        values: [
                            "250",
                            "290",
                            "330",
                            "370",
                            "410",
                            "450",
                        ]
                    },
                ]
            },

            {
                name: "Cut Throat",

                type: "Ultimate",

                skillType: [
                    "Burst",
                    "Mobility",
                ],

                image:
                    "../images/heroes/fanny/fanny-ultimate.webp",

                cooldown: "35.0",
                cost: "12",

                description:
                    "Fanny leaps at the target enemy hero or Creep with her blades, dealing 400-650 (+200% Extra Physical Attack) Physical Damage. Each stack of Prey Mark on the target increases this damage by 30%.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "35.0",
                            "30.0",
                            "25.0",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "400",
                            "525",
                            "650",
                        ]
                    },
                ]
            }

        ],

        releaseDate: "2016"
    },

    /* ================= LAYLA ================= */
    {
        name: "Layla",
        title: "Energy Gunner",

        class: ["marksman"],
        specialty: ["Finisher", "Damage"],

        price: {
            battlePoint: "2000",
            ticket: "Can't Use Tickets",
            diamond: "299",
        },

        image: "../images/heroes/layla/layla.webp",
        background: "../images/heroes/layla/layla-bg.webp",

        stats: {
            hp: "2267",
            hpRegen: "6.6",
            physicalAttack: "126",
            physicalDefense: "16",
            attackSpeed: "1.11",
            attackSpeedRatio: "100%",
            mana: "100",
            manaRegen: "4",
            magicPower: "0",
            magicDefense: "15",
            movementSpeed: "265"
        },

        skills: [

            {
                name: "Air Superiority",

                type: "Passive",
                skillType: [
                    "Buff",
                ],

                image:
                    "../images/heroes/layla/layla-passive.webp",

                cooldown: "0",
                cost: "0",

                description:
                    "During flight, layla deals 10%-20% extra damage to enemies hit (scales with flying speed) and applies a stack of Prey Mark to them (up to 2 stacks) on each attack. Her subsequent skill hits on marked enemy heroes restore 8 energy per stack for her. The energy restoration is reduced if she hits multiple enemy heroes within a short period of time.",

            },

            {
                name: "Tornado Strike",

                type: "Skill 1",
                skillType: [
                    "AOE",
                ],
                image:
                    "../images/heroes/layla/layla-skill1.webp",

                cooldown: "3.5",
                cost: "12",

                description:
                    "layla whirls her blades, dealing 275-525 (+85% Total Physical Attack) Physical Damage to nearby enemies.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "3.5",
                            "3.3",
                            "3.1",
                            "2.9",
                            "2.7",
                            "2.5",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "275",
                            "325",
                            "375",
                            "425",
                            "475",
                            "525",
                        ]
                    },
                ]
            },

            {
                name: "Steel Cable",

                type: "Skill 2",
                skillType: [
                    "Mobility",
                ],

                image:
                    "../images/heroes/layla/layla-skill2.webp",

                cooldown: "0.0",
                cost: "19",

                description:
                    "layla shoots a cable in the target direction that pulls her to the first obstacle hit. She can cast this skill again within 2s until her energy runs out, and each successive recast within this period costs 2 less energy.<br>layla automatically casts Tornado Strike upon hitting an enemy mid-flight, as long as her energy is sufficient.",

                scaling: [
                    {
                        name: "Skill Cost",

                        values: [
                            "250",
                            "290",
                            "330",
                            "370",
                            "410",
                            "450",
                        ]
                    },
                ]
            },

            {
                name: "Cut Throat",

                type: "Ultimate",

                skillType: [
                    "Burst",
                    "Mobility",
                ],

                image:
                    "../images/heroes/layla/layla-ultimate.webp",

                cooldown: "35.0",
                cost: "12",

                description:
                    "layla leaps at the target enemy hero or Creep with her blades, dealing 400-650 (+200% Extra Physical Attack) Physical Damage. Each stack of Prey Mark on the target increases this damage by 30%.",

                scaling: [
                    {
                        name: "Cooldown",

                        values: [
                            "35.0",
                            "30.0",
                            "25.0",
                        ]
                    },
                    {
                        name: "Base Damage",

                        values: [
                            "400",
                            "525",
                            "650",
                        ]
                    },
                ]
            }

        ],

        releaseDate: "2016"
    },

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const heroGrid =
    document.getElementById("hero-grid");

const heroModal =
    document.getElementById("hero-modal");

const modalContent =
    document.getElementById("modal-content");

const closeModal =
    document.getElementById("close-modal");

const classTabs =
    document.querySelectorAll(".class-tab");


/* =========================================================
   CLASS NAME
========================================================= */

function getClassName(heroClass) {

    return heroClass
        .map(
            item =>
                item.charAt(0).toUpperCase()
                + item.slice(1)
        )
        .join(" / ");

}


/* =========================================================
   SPECIALTY NAME
========================================================= */

function getSpecialtyName(specialties) {

    return specialties.join(" / ");

}


/* =========================================================
   DISPLAY HEROES
========================================================= */

function displayHeroes(selectedClass = "all") {

    heroGrid.innerHTML = "";

    heroes.forEach((hero, index) => {

        /*
            Because class is an ARRAY,
            one hero can belong to multiple classes.
        */

        if (
            selectedClass !== "all" &&
            !hero.class.includes(selectedClass)
        ) {

            return;

        }


        const card =
            document.createElement("div");

        card.classList.add("hero-card");


        card.innerHTML = `

    <img
        src="${hero.image}"
        alt="${hero.name}"
    >

    <h3>
        ${hero.name}
    </h3>

    <p class="hero-title">
        ${hero.title}
    </p>

    <p class="hero-class">
        ${getClassName(hero.class)}
    </p>

    <p class="hero-specialty">
        ${getSpecialtyName(hero.specialty)}
    </p>

`;


        card.addEventListener(
            "click",
            () => openHero(index)
        );


        heroGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN HERO
========================================================= */

function openHero(index) {

    const hero = heroes[index];

    const modalBackground =
        document.querySelector(".modal-background");

    modalBackground.style.backgroundImage =
        `url("${hero.background}")`;

    modalContent.innerHTML = `

        <!-- HERO HEADER -->

        <img
            src="${hero.image}"
            alt="${hero.name}"
            class="modal-icon"
        >

        <h2 class="modal-title">
            ${hero.name}
        </h2>

        <p class="modal-hero-title">
        ${hero.title}
        </p>

        <p class="modal-class">
            ${getClassName(hero.class)}
        </p>

        <p class="modal-specialty">
            ${getSpecialtyName(hero.specialty)}
        </p>


        <!-- STATS -->

        <div class="hero-modal-section">

            <h3>
                Hero Stats
            </h3>

            <div class="stats-grid">

                <div class="stat-box">
                    <h4>HP</h4>
                    <p>${hero.stats.hp}</p>
                </div>

                <div class="stat-box">
                    <h4>HP Regen</h4>
                    <p>${hero.stats.hpRegen}</p>
                </div>

                <div class="stat-box">
                    <h4>Physical Attack</h4>
                    <p>${hero.stats.physicalAttack}</p>
                </div>

                <div class="stat-box">
                    <h4>Physical Defense</h4>
                    <p>${hero.stats.physicalDefense}</p>
                </div>

                <div class="stat-box">
                    <h4>Attack Speed</h4>
                    <p>${hero.stats.attackSpeed}</p>
                </div>

                <div class="stat-box">
                    <h4>Attack Speed Ratio</h4>
                    <p>${hero.stats.attackSpeedRatio}</p>
                </div>

                <div class="stat-box">
                    <h4>Mana</h4>
                    <p>${hero.stats.mana}</p>
                </div>

                <div class="stat-box">
                    <h4>Mana Regen</h4>
                    <p>${hero.stats.manaRegen}</p>
                </div>

                <div class="stat-box">
                    <h4>Magic Power</h4>
                    <p>${hero.stats.magicPower}</p>
                </div>

                <div class="stat-box">
                    <h4>Magic Defense</h4>
                    <p>${hero.stats.magicDefense}</p>
                </div>

                <div class="stat-box">
                    <h4>Movement Speed</h4>
                    <p>${hero.stats.movementSpeed}</p>
                </div>

            </div>

        </div>

        <!-- HERO PRICE -->

        <div class="hero-modal-section">

            <h3>
                Hero Price
            </h3>

        <div class="hero-price">

        <div class="price-box">

            <h4>
                Battle Points
            </h4>

            <p>
                <img
                src="../images/icons/battlepoints.webp"
                alt="bp">
                ${hero.price.battlePoint}
            </p>

        </div>

        <div class="price-box">

            <h4>
                Diamonds
            </h4>

            <p>
                <img
                src="../images/icons/diamonds.webp"
                alt="Diamonds">
                ${hero.price.diamond}
            </p>

        </div>

        <div class="price-box">

            <h4>
                Tickets
            </h4>

            <p>
            <img
                src="../images/icons/tickets.webp"
                alt="ticket"
            >
                ${hero.price.ticket}
            </p>

        </div>

    </div>

    </div>

        <!-- SKILLS -->

        <div class="hero-modal-section">

            <h3>
                Skills
            </h3>

            <div
                id="skill-selector"
                class="skill-selector">
            </div>

            <div
                id="skill-details"
                class="skill-details">
            </div>

        </div>


        <!-- RELEASE DATE -->

        <div class="release-date">

            Release Date:
            <span>
                ${hero.releaseDate}
            </span>

        </div>

    `;


    /*
        Create the skill tabs AFTER
        inserting the modal HTML.
    */

    const skillSelector =
        document.getElementById("skill-selector");


    hero.skills.forEach(
        (skill, skillIndex) => {

            const skillTab =
                document.createElement("button");

            skillTab.classList.add("skill-tab");


            if (skillIndex === 0) {

                skillTab.classList.add("active");

            }


            skillTab.innerHTML = `

                <img
                    src="${skill.image}"
                    alt="${skill.name}"
                >

                <span>
                    ${skill.name}
                </span>

            `;


            skillTab.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".skill-tab")
                        .forEach(tab =>
                            tab.classList.remove("active")
                        );

                    skillTab.classList.add("active");

                    displaySkill(
                        hero,
                        skillIndex
                    );

                }
            );


            skillSelector.appendChild(skillTab);

        }
    );


    /*
        Display the first skill
        automatically.
    */

    displaySkill(hero, 0);


    heroModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   DISPLAY SELECTED SKILL
========================================================= */

function displaySkill(hero, skillIndex) {

    const skill =
        hero.skills[skillIndex];

    const skillDetails =
        document.getElementById("skill-details");


    let scalingHTML = "";


    /*
        If the skill has scaling,
        generate the table automatically.
    */

    if (
        skill.scaling &&
        skill.scaling.length > 0
    ) {

        scalingHTML = `

            <div class="scaling-title">
                Power Scaling
            </div>

            <div class="scaling-table-wrapper">

                <table class="scaling-table">

                    <thead>

                        <tr>

                            <th>
                                Attribute
                            </th>

                            ${skill.scaling[0].values
                .map(
                    (_, index) =>
                        `<th>Level ${index + 1}</th>`
                )
                .join("")
            }

                        </tr>

                    </thead>

                    <tbody>

                        ${skill.scaling
                .map(
                    scale => `

                                    <tr>

                                        <td>
                                            ${scale.name}
                                        </td>

                                        ${scale.values
                            .map(
                                value =>
                                    `<td>${value}</td>`
                            )
                            .join("")
                        }

                                    </tr>

                                `
                )
                .join("")
            }

                    </tbody>

                </table>

            </div>

        `;

    }


    skillDetails.innerHTML = `

        <div class="skill-header">

            <img
                src="${skill.image}"
                alt="${skill.name}"
            >

            <div>

    <h4>
        ${skill.name}
    </h4>

    <p class="skill-type">
        ${skill.type}
    </p>

    <div class="skill-type-tags">

        ${skill.skillType
            ? skill.skillType
                .map(type => `
                        <span class="skill-type-tag">
                            ${type}
                        </span>
                    `)
                .join("")
            : ""
        }

    </div>

</div>

        </div>


        <div class="skill-info">

            <div class="skill-info-box">

                <h5>
                    Cooldown
                </h5>

                <p>
                    ${skill.cooldown}
                </p>

            </div>

            <div class="skill-info-box">

                <h5>
                    Cost
                </h5>

                <p>
                    ${skill.cost}
                </p>

            </div>

             ${skill.extraInfo
            ? skill.extraInfo
                .map(info => `
            <div class="skill-info-box">

                <h5>
                    ${info.name}
                </h5>

                <p>
                    ${info.value}
                </p>

            </div>
        `)
                .join("")
            : ""
        }

        </div>


        <p class="skill-description">
            ${skill.description}
        </p>


        ${scalingHTML}

    `;

}


/* =========================================================
   CLASS FILTERING
========================================================= */

classTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            classTabs.forEach(
                button =>
                    button.classList.remove("active")
            );


            tab.classList.add("active");


            const selectedClass =
                tab.dataset.class;


            displayHeroes(selectedClass);

        }
    );

});


/* =========================================================
   CLOSE MODAL
========================================================= */

closeModal.addEventListener(
    "click",
    closeHero
);


/* Close when clicking outside modal */

heroModal.addEventListener(
    "click",
    event => {

        if (
            event.target === heroModal
        ) {

            closeHero();

        }

    }
);


/* Close with ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeHero();

        }

    }
);


function closeHero() {

    heroModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href =
        "../login.html";

}


/* =========================================================
   INITIAL DISPLAY
========================================================= */

displayHeroes();