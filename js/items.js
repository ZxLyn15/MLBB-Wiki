/* ================= ITEM DATA ================= */

const items = [

    /* ================= ATTACK ITEMS ================= */

    {
        name: "Malefic Gun",
        use: "Increase Attack Range",
        category: ["attack"],

        image: "../images/items/attack/malefic-gun.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+40"
            },
            {
                name: "Attack Speed",
                value: "+20%"
            }
        ],

        price: "2120 Gold",
        upgrade: "730 Gold",
        sell: "1272 Gold",

        description:
            "Best equipped by Marksmen to increase their Attack Range for kiting.",

        effects: [
            {
                effectName: "Armor Buster",

                effect:
                    "Increase Physical Penetration by 30%."
            },

            {
                effectName: "Malefic Energy",

                effect:
                    "Increases Basic Attack range by 12%. When hitting a target, gains 10% Movement Speed for 0.5 seconds."
            }
        ]
    },

    {
        name: "Great Dragon Spear",
        use: "CD Reduction & Crit",
        category: ["attack"],

        image: "../images/items/attack/great-dragon-spear.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+70"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            },
            {
                name: "Critical Chance",
                value: "+20%"
            }
        ],

        price: "2140 Gold",
        upgrade: "460 Gold",
        sell: "1284 Gold",

        description:
            "Suitable for heroes relying on Crit Chance and CD Reduction to improve mobility.",

        effects: [
            {
                effectName: "Supreme Warrior",

                effect:
                    "After casting an Ultimate, increase Movement Speed by 30% for 7.5 seconds. This effect has a 15 seconds cooldown."
            },

        ]
    },

    {
        name: "Sea Halberd",
        use: "Healing Reduction",
        category: ["attack"],

        image: "../images/items/attack/sea-halberd.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+80"
            },
            {
                name: "Attack Speed",
                value: "+20%"
            }
        ],

        price: "2050 Gold",
        upgrade: "540 Gold",
        sell: "1230 Gold",

        description:
            "Best equipped by Physical heroes to reduce enemies' Regen effects (Heal, Shields or Lifesteal).",

        effects: [
            {
                effectName: "Lifebane",

                effect:
                    "Dealing damage to a target will reduce the Shield and HP Regen effects on them to 60% of normal for 3 seconds."
            },

            {
                effectName: "Punish",

                effect:
                    "Increase damage by 8% against enemy heroes with higher extra HP."
            }
        ]
    },

    {
        name: "Rose Gold Meteor",
        use: "Low-HP Shield",
        category: ["attack"],

        image: "../images/items/attack/rose-gold-meteor.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+30"
            },
            {
                name: "Attack Speed",
                value: "+20%"
            },
            {
                name: "Lifesteal",
                value: "+10%"
            }
        ],

        price: "2030 Gold",
        upgrade: "700 Gold",
        sell: "1218 Gold",

        description:
            "Best equipped by Physical DPS heroes to defend against Magic burst damage.",

        effects: [
            {
                effectName: "Dragon Scale",

                effect:
                    "Every 4 extra Physical Attack increases Hybrid Defense by 1, up to 50 (effect is halved if Main Role is not Fighter)."
            },

            {
                effectName: "Lifeline",

                effect:
                    "When taking damage that reduces HP below 30%, gains a (120*Hero Level) shield (increases with level) and 50% Movement Speed that rapidly decays over 3 seconds. This effect has a 60 seconds cooldown."
            }
        ]
    },

    {
        name: "Hunter Strike",
        use: "Brief Speed-Up",
        category: ["attack"],

        image: "../images/items/attack/hunter-strike.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+80"
            },
            {
                name: "Cooldown Reduction",
                value: "+10"
            }

        ],

        price: "2010 Gold",
        upgrade: "480 Gold",
        sell: "1206 Gold",

        description:
            "Best equipped by Physical Assassins that need to deal more damage and increase mobility.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+15 Physical Penetration."
            },

            {
                effectName: "Retribution",

                effect:
                    "Dealing damage to the same enemy hero or creep 5 times in a row grants 50% extra Movement Speed that decays over 3 seconds (8 seconds cooldown)."
            }
        ]
    },

    {
        name: "Blade of Despair",
        use: "Highest Physical Attack",
        category: ["attack"],

        image: "../images/items/attack/blade-of-despair.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+160"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "3010 Gold",
        upgrade: "1190 Gold",
        sell: "1806 Gold",

        description:
            "Best equipped by Physical heroes to greatly increase their Physical Attack attributes in the late game.",
        effects: [
            {
                effectName: "Despair",

                effect:
                    "Dealing damage to non-Minion enemies below 50% HP increases Physical Attack by 25% for 2 seconds (takes effect before the damage is dealt)."
            }
        ]
    },

    {
        name: "Blade of Heptaseas",
        use: "Best for Assassins",
        category: ["attack"],

        image: "../images/items/attack/blade-of-heptaseas.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+70"
            },
            {
                name: "HP",
                value: "+250"
            }

        ],

        price: "1950 Gold",
        upgrade: "470 Gold",
        sell: "1170 Gold",

        description:
            "Best equipped by Physical Assassin that need to deal more damage and increase Crowd Control abilities.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+15 Physical Penetration."
            },

            {
                effectName: "Ambush",

                effect:
                    "If no damage is taken or dealt within 5 seconds (excluding from Minions or Creeps), the next Basic Attack will deal an additional 160 (+40% Total Physical Attack) Physical Damage and slow the target by 40% for 1.5 seconds."
            }
        ]
    },

    {
        name: "Windtalker",
        use: "Splash Damage",
        category: ["attack"],

        image: "../images/items/attack/windtalker.png",

        stats: [
            {
                name: "Attack Speed",
                value: "+35%"
            },
            {
                name: "Crit Chance",
                value: "+20%"
            },
            {
                name: "Movement Speed",
                value: "+20"
            }
        ],

        price: "1880 Gold",
        upgrade: "700 Gold",
        sell: "1128 Gold",

        description:
            "Best equipped by Physical Basic Attack heroes that rely on Attack Speed and Movement Speed.",

        effects: [
            {
                effectName: "Typhoon",

                effect:
                    "Every 5-2 seconds (reduced by 0.2 seconds for each Basic Attack), the next Basic Attack will hit up to 3 enemy units for 150-362 Magic Damage. (This attack can Crit and the damage increases to 200% against Minions.)"
            }
        ]
    },

    {
        name: "Endless Battle",
        use: "Enhanced Basic Attacks",
        category: ["attack"],

        image: "../images/items/attack/endless-battle.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+60"
            },
            {
                name: "HP",
                value: "+250"
            },
            {
                name: "Cooldoewn Reduction",
                value: "+10%"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            },
            {
                name: "Mana Regen",
                value: "+5"
            }

        ],

        price: "2330 Gold",
        upgrade: "630 Gold",
        sell: "1398 Gold",

        description:
            "Best equipped by Physical heroes that add Basic Attacks in between of each skill cast.",

        effects: [
            {
                effectName: "Divine Justice",

                effect:
                    "After casting a skill, the next Basic Attack within 3 seconds deals (60% Total Physical Attack) extra True Damage and recovers 80 (+40% of Total Physical Attack) HP (1.5 seconds cooldown)."
            }
        ]
    },

    {
        name: "Berserker's Fury",
        use: "Crit Chance & Damage",
        category: ["attack"],

        image: "../images/items/attack/berserkers-fury.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+65"
            },
            {
                name: "Critical Chance",
                value: "+25%"
            }
        ],

        price: "2390 Gold",
        upgrade: "840 Gold",
        sell: "1434 Gold",

        description:
            "Best equipped by Physical heroes that rely on Critical Damage.",

        effects: [
            {
                effectName: "Doom",
                effect: "When Basic Attacks Crit, they deal extra True Damage equal to 12% of the damage before reduction."
            }
        ]
    },

    {
        name: "Haas' Claws",
        use: "Lifesteal",
        category: ["attack"],

        image: "../images/items/attack/haas-claws.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+40"
            },
            {
                name: "Attack Speed",
                value: "+15%"
            },
            {
                name: "Critical Chance",
                value: "+20%"
            }
        ],

        price: "2020 Gold",
        upgrade: "470 Gold",
        sell: "1212 Gold",

        description:
            "Best equipped by Marksmen or Fighters that rely on Basic Attacks to increase their sustainability when dealing high damage.",

        effects: [
            {
                effectName: "Unique Attribute",
                effect: "+20% Lifesteal."
            },
            {
                effectName: "Frenzy",
                effect: "Critical strikes grant 20% extra Attack Speed for 2 seconds."
            }
        ]
    },

    {
        name: "Malefic Roar",
        use: "High Physical Penetration",
        category: ["attack"],

        image: "../images/items/attack/malefic-roar.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+60"
            }
        ],

        price: "2060 Gold",
        upgrade: "1150 Gold",
        sell: "1236 Gold",

        description:
            "Best equipped by Physical DPS heroes to counter enemy heroes that have high Defense abilities in the late game.",

        effects: [
            {
                effectName: "Armor Buster",
                effect: "Increase Physical Penetration by 30%."
            },
            {
                effectName: "Breaker",
                effect: "When attacking an enemy, gains 0.1% extra Physical Penetration for each point of the enemy's Physical Defense, capped at 30%."
            }
        ]
    },

    {
        name: "Winter Crown",
        use: "Temporary Invincibility",
        category: ["attack", "magic"],

        image: "../images/items/attack/winter-crown.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: "+45"
            },
            {
                name: "HP",
                value: "+400"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "1910 Gold",
        upgrade: "660 Gold",
        sell: "1146 Gold",

        description:
            "Best equipped by Mages to avoid damage in the late game. Requires accurate control.",

        effects: [
            {
                effectName: "Frozen",
                effect: "Becomes frozen, untarge, and immune to damage for 2 seconds (100 seconds cooldown). Cannot move or cast skills while frozen, but skills already cast won't be interrupted."
            }
        ]
    },

    {
        name: "Fleeting Time",
        use: "Ultimate CD Reduction",
        category: ["attack", "magic", "defense"],

        image: "../images/items/attack/fleeting-time.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: "+30"
            },
            {
                name: "HP",
                value: "+600"
            },
            {
                name: "Cooldown Reduction",
                value: "+15%"
            }
        ],

        price: "2050 Gold",
        upgrade: "650 Gold",
        sell: "1230 Gold",

        description:
            "Best equipped by heroes who rely heavily on Ultimates.",

        effects: [
            {
                effectName: "Timestream",
                effect: "Hero kills or assists reduce the Ultimate's current cooldown by 30%."
            }
        ]
    },

    {
        name: "Sky Piercer",
        use: "Best for Finishers",
        category: ["attack", "magic"],

        image: "../images/items/attack/sky-piercer.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: "+60"
            },
            {
                name: "Movement Speed",
                value: "+15"
            }
        ],

        price: "1500 Gold",
        upgrade: "500 Gold",
        sell: "900 Gold",

        description:
            "Suitable for Finisher Assassins.",

        effects: [
            {
                effectName: "Lethality",
                effect: "After dealing damage to an enemy hero, executes the hero if their HP is lower than 4%. Gains 10 stack(s) of Lethality for each kill and loses 30% current stack(s) for each death. Each stack of Lethality increases the HP threshold of the execute effect by 0.1%, stacking up 80 times."
            }
        ]
    },

    {
        name: "War Axe",
        use: "Continuous Damage Boost",
        category: ["attack"],

        image: "../images/items/attack/war-axe.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35"
            },
            {
                name: "HP",
                value: "+400"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            },
            {
                name: "Hybrid Lifesteal",
                value: "+8%"
            }
        ],

        price: "2100 Gold",
        upgrade: "550 Gold",
        sell: "1260 Gold",

        description:
            "Best equipped by Fighters that need good sustainability.",

        effects: [
            {
                effectName: "Fighting Spirit",
                effect: "Attacks grants 12 extra Physical Attack per second for 4 seconds, up to 6 stacks. Deals 10% extra True Damage based on the damage dealt (no damage reduction counted) at full stacks. (Marksmen, Mages, and Supports only receive 50% of these stacked effects.)"
            }
        ]
    },

    {
        name: "Wind of Nature",
        use: "Physical Damage Immunity",
        category: ["attack"],

        image: "../images/items/attack/wind-of-nature.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+30"
            },
            {
                name: "Attack Speed",
                value: "+620%0"
            },
            {
                name: "Lifesteal",
                value: "+10%"
            }
        ],

        price: "1910 Gold",
        upgrade: "910 Gold",
        sell: "1146 Gold",

        description:
            "Best equipped by Markmen that need to fight Physical Assassins or other Physical Marksmen. Requires accurate control.",

        effects: [
            {
                effectName: "Wind Chant",
                effect: "Become immune to all Physical Damage for 2 seconds (duration is halved if Main Role is not Marksman; 90 seconds cooldown)."
            }
        ]
    },

    {
        name: "Golden Staff",
        use: "Enhanced Attack Effects",
        category: ["attack"],

        image: "../images/items/attack/golden-staff.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+55"
            },
            {
                name: "Attack Speed",
                value: "+15%"
            }
        ],

        price: "2000 Gold",
        upgrade: "900 Gold",
        sell: "1200 Gold",

        description:
            "Best equipped by heroes whose Basic Attacks have special effects. Can also be equipped with Demon Hunter Sword, Feather of Heaven and other equipment.",

        effects: [
            {
                effectName: "Swift",
                effect: "Every 1% extra Crit Chance gained is converted into 1% extra Attack Speed."
            },
            {
                effectName: "Endless Strike",
                effect: "After every 2 non-Crit Basic Attacks, the Attack Speed of the next Basic Attack is increased by 80% (and Attack Speed cap is increased to 500%) and triggers Attack Effects an additional 2 time(s)."
            }
        ]
    },

    {
        name: "Corrosion Scythe",
        use: "One-Hit Slow",
        category: ["attack"],

        image: "../images/items/attack/corrosion-scythe.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+30"
            },
            {
                name: "Attack Speed",
                value: "+30%"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "2050 Gold",
        upgrade: "450 Gold",
        sell: "1230 Gold",

        description:
            "Best equipped by heroes that especially rely on Attack Speed and excel at picking off lone enemies.",

        effects: [
            {
                effectName: "Corrosive",
                effect: "Basic Attacks gain 80 extra Physical Damage and slow the target by 8% (halved for ranged Basic Attacks) for 1.5 seconds. Stacks up to 5 times."
            },
            {
                effectName: "Impulse",
                effect: "Basic Attacks grant 6% extra Attack Speed for 3 seconds, capped at 5 stacks."
            }
        ]
    },

    {
        name: "Demon Hunter Sword",
        use: "Tank Killer",
        category: ["attack"],

        image: "../images/items/attack/demon-hunter-sword.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35"
            },
            {
                name: "Attack Speed",
                value: "+20%"
            }
        ],

        price: "2180 Gold",
        upgrade: "900 Gold",
        sell: "1308 Gold",

        description:
            "Best equipped to fight Tanks. Can also be equipped by heroes that have great Attack Speed or can trigger the effect of their Basic Attack multiple times.",

        effects: [
            {
                effectName: "Engulf",
                effect: "Basic Attacks deal 8% of the target's current HP as extra Physical Damage (capped at 60 against minions)."
            },
            {
                effectName: "Devour",
                effect: "Each Basic Attack recovers 10(+4*Hero Level) HP. This effect is halved against minions."
            }
        ]
    },

    /* ================= SMALL ATTACK ITEMS ================= */

    {
        name: "Swift Crossbow",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/swift-crossbow.png",

        stats: [
            {
                name: "Attack Speed",
                value: "+20%"
            }
        ],

        price: "1050 Gold",
        upgrade: "400 Gold",
        sell: "630 Gold",

        description:
            "Swift Crossbow is a good item for attack speed heroes to farm faster. It is suggested that this item be purchased after footwear equipment.",

        effects: [
            {
                effectName: "Crossbow",
                effect: "Each Basic Attack deals 40 extra Adaptive Damage."
            },
            {
                effectName: "Impulse",
                effect: "Basic Attacks grant 3% extra Attack Speed for 3 seconds, capped at 5 stacks."
            }
        ]
    },

    {
        name: "Magic Blade",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/magic-blade.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35"
            },
            {
                name: "Lifesteal",
                value: "+10%"
            }
        ],

        price: "1050 Gold",
        upgrade: "400 Gold",
        sell: "630 Gold",

        description:
            "Magic Blade is very suitable for all heroes to get some shield and movement speed bonus when low-HP.",

        effects: [
            {
                effectName: "Lifeline",
                effect: "When taking damage that reduces HP below 30%, gains a (+60*Hero Level) shield (increases with level) and 50% Movement Speed that rapidly decays over 3 seconds. This effect has a 60 seconds cooldown."
            }
        ]
    },

    {
        name: "Fury Hammer",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/fury-hammer.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35%"
            }
        ],

        price: "830 Gold",
        upgrade: "580 Gold",
        sell: "498 Gold",

        description:
            "Fury Hammer is a good item for physical heroes to get some physical penetration in early game. It is suggested that this item be purchased after footwear equipment. The physical penetration unique attribute stacks with Hunter Strike and Blade of the Heptaseas. If you are going to buy Hunter Strike or Blade of the Heptaseas, prioritize buy this item first.",

        effects: [
            {
                effectName: "Unique Attribute",
                effect: "+12 Physical Penetration"
            }
        ]
    },

    {
        name: "Rogue Meteor",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/rogue-meteor.png",

        stats: [
            {
                name: "Attack Speed",
                value: "+35%"
            },
            {
                name: "Crit Chance",
                value: "+10%"
            }
        ],

        price: "900 Gold",
        upgrade: "300 Gold",
        sell: "540 Gold",

        description:
            "Rogue Meteor is a good item for physical heroes to get some attack speed and crit chance in early game. If you are going to buy Windtalker, prioritize buy this item first. But if you are going to buy Haas' Claws, prioritize buy this item after purchased Vampire Mallet.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Ogre Tomahawk",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/ogre-tomahawk.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35%"
            },
            {
                name: "HP",
                value: "+230%"
            }
        ],

        price: "650 Gold",
        upgrade: "100 Gold",
        sell: "390 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Legion Sword",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/legion-sword.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+60"
            }
        ],

        price: "910 Gold",
        upgrade: "410 Gold",
        sell: "546 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Regular Spear",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/regular-spear.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+20"
            },
            {
                name: "Attack Speed",
                value: "+10%"
            }
        ],

        price: "600 Gold",
        upgrade: "70 Gold",
        sell: "360 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Expert Gloves",
        use: "",
        category: ["attack", "magic"],

        image: "../images/items/attack/expert-gloves.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: "+30"
            }
        ],

        price: "500 Gold",
        upgrade: "This is a Base Item",
        sell: "300 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Iron Hunting Bow",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/iron-hunting-bow.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+10"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "450 Gold",
        upgrade: "This is a Base Item",
        sell: "270 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Javelin",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/javelin.png",

        stats: [
            {
                name: "Crit Chance",
                value: "+8%"
            }
        ],

        price: "320 Gold",
        upgrade: "This is a Base Item",
        sell: "192 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Knife",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/knife.png",

        stats: [
            {
                name: "Attack Speed",
                value: "+8%"
            }
        ],

        price: "280 Gold",
        upgrade: "This is a Base Item",
        sell: "168 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Dagger",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/dagger.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+15%"
            }
        ],

        price: "250 Gold",
        upgrade: "This is a Base Item",
        sell: "150 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",
                effect: ""
            }
        ]
    },

    {
        name: "Power Potion",
        use: "",
        category: ["attack"],

        image: "../images/items/attack/power-potion.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "1500 Gold",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Power Potion can only be purchased if the user is using all Physical equipment items.",

        effects: [
            {
                effectName: "Increase Power",
                effect: "Automatically used after purchasing, giving 30 Physical Attack and 15% of Lifesteal for 120s. Can only have one potion effect at a time."
            }
        ]
    },

    /* ================= MAGIC ITEMS ================= */

    {
        name: "Wishing Lantern",
        use: "Counter High HP",
        category: ["magic"],

        image: "../images/items/magic/wishing-lantern.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "Mana",
                value: "+400"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "2250 Gold",
        upgrade: "760 Gold",
        sell: "1350 Gold",

        description:
            "Suitable for Magic heroes when up against high-HP enemy heroes.",

        effects: [
            {
                effectName: "Butterfly Goddess",

                effect:
                    "For every 900 Magic Damage dealt to an enemy hero (calculated before Damage Reduction), a Butterfly Goddess is summoned to attack the enemy hero, dealing Magic Damage equal to 8% of their Current HP."
            }
        ]
    },

    {
        name: "Flask of the Oasis",
        use: "Protect Teamates",
        category: ["magic"],

        image: "../images/items/magic/flask-of-the-oasis.png",

        stats: [
            {
                name: "Magic Power",
                value: "+60"
            },
            {
                name: "HP",
                value: "+300"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "1850 Gold",
        upgrade: "280 Gold",
        sell: "1110 Gold",

        description:
            "Suitable for heroes with healing or shielding skills to support teammates.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+12% Healing Effect"
            },
            {
                effectName: "Blessing",

                effect:
                    "When casting a healing or shield skill, if the target's HP is below 35%, or falls below 35% within 3 seconds, they will get a (100*Hero Level) shield that lasts 3 seconds. When this effect triggers, it also reduces the cooldown of the caster's skills by 2 seconds. (This effect can only trigger once every 60 seconds on the same target, and will not trigger on self-only healing and shield skills.)"
            }
        ]
    },

    {
        name: "Genius Wand",
        use: "Magic Defense Reduction",
        category: ["magic"],

        image: "../images/items/magic/genius-wand.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "2000 Gold",
        upgrade: "580 Gold",
        sell: "1200 Gold",

        description:
            "Best equipped by Magic heroes that deal multi-stage damage to greatly increase their damage.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+10% Magic Penetration"
            },
            {
                effectName: "Magic",

                effect:
                    "Dealing Magic Damage to enemy heroes will reduce their Magic Defense by 2.5+(0.5*Hero Level) for 2 seconds. Stacks up to 3 times."
            }
        ]
    },

    {
        name: "Lightning Truncheon",
        use: "Splash Damage",
        category: ["magic"],

        image: "../images/items/magic/lightning-truncheon.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "Mana",
                value: "+400"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "2250 Gold",
        upgrade: "760 Gold",
        sell: "1350 Gold",

        description:
            "Works best in late game where the user has high Magic Power.",

        effects: [
            {
                effectName: "Resonate",

                effect:
                    "Every 6 seconds, the next skill echoes, dealing 255 (+85% Magic Power) extra Magic Damage to all enemies in range."
            }
        ]
    },

    {
        name: "Blood Wings",
        use: "Speed Boost shield",
        category: ["magic"],

        image: "../images/items/magic/blood-wings.png",

        stats: [
            {
                name: "Magic Power",
                value: "+90"
            }
        ],

        price: "2100 Gold",
        upgrade: "460 Gold",
        sell: "1260 Gold",

        description:
            "Final equipment for Magic heroes in the late game.",

        effects: [
            {
                effectName: "Guard",

                effect:
                    "Gains a 800 (+100% Magic Power) Shield that will regenerate 20 seconds after being damaged. The Shield also grants 30 Movement Speed while it lasts and 150 Movement Speed for 1 second after it breaks."
            }
        ]
    },

    {
        name: "Starlium Scythe",
        use: "Enhanced Basic Attacks",
        category: ["magic"],

        image: "../images/items/magic/starlium-scythe.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            },
            {
                name: "Hybrid Lifesteal",
                value: "+8"
            },
            {
                name: "Mana Regen",
                value: "+6"
            }
        ],

        price: "2120 Gold",
        upgrade: "250 Gold",
        sell: "1272 Gold",

        description:
            "Best equipped by Magic heroes that add Basic Attacks in between of each skill cast.",

        effects: [
            {
                effectName: "Crisis",

                effect:
                    "After casting a skill, the next Basic Attack within 3 seconds deals 90 (+60% Total Magic Power) extra True Damage and reduces the target's Movement Speed by 15% for 1.5 seconds (1.5 seconds cooldown)."
            }
        ]
    },

    {
        name: "Glowing Wand",
        use: "Healing Reduction",
        category: ["magic"],

        image: "../images/items/magic/glowing-wand.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "HP",
                value: "+300"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "2150 Gold",
        upgrade: "950 Gold",
        sell: "1290 Gold",

        description:
            "Best equipped by Magic heroes that deal continuous damage to increase their damage.",

        effects: [
            {
                effectName: "Scorch",

                effect:
                    "Dealing Magic Damage burns the targets for 3 seconds, also dealing extra Magic Damage equal to 1% of the target's Max HP per second."
            },
            {
                effectName: "Lifebane",

                effect:
                    "Dealing damage to the target will reduce the Shield and HP Regen effects on them to 60% of normal for 3 seconds."
            }
        ]
    },

    {
        name: "Ice Queen Wand",
        use: "Slow on Skill Hit",
        category: ["magic"],

        image: "../images/items/magic/ice-queen-wand.png",

        stats: [
            {
                name: "Magic Power",
                value: "+60"
            },
            {
                name: "Spell Vamp",
                value: "+10%"
            },
            {
                name: "HP",
                value: "+300"
            },
            {
                name: "Movement Speed",
                value: "+7%"
            }
        ],

        price: "2040 Gold",
        upgrade: "640 Gold",
        sell: "1224 Gold",

        description:
            "Best equipped by Magic heroes to increase their Crowd Control abilities.",

        effects: [
            {
                effectName: "Ice Bound",

                effect:
                    "When a skill deals damage to an enemy hero, it will also slow them by 10% for 2 seconds (stacks up to 3 times). This effect has a 0.4 seconds cooldown."
            }
        ]
    },

    {
        name: "Concentrated Energy",
        use: "Continuous Damage Boost",
        category: ["magic"],

        image: "../images/items/magic/concentrated-energy.png",

        stats: [
            {
                name: "Magic Power",
                value: "+75"
            },
            {
                name: "HP",
                value: "+400"
            }
        ],

        price: "2020 Gold",
        upgrade: "400 Gold",
        sell: "1212 Gold",

        description:
            "Best equipped by Magic heroes to increase their sustainability when dealing high damage.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+20% Hybrid Lifesteal"
            },
            {
                effectName: "Recharge",

                effect:
                    "Increases Magic Power by 5 after dealing Magic Damage (this effect stacks up to 6 times and can only gain 1 stack every 0.4 seconds). When reaching full stacks, increases Magic Damage by 12% for 5 seconds."
            }
        ]
    },


    {
        name: "Holy Crystal",
        use: "Max Magic Power",
        category: ["magic"],

        image: "../images/items/magic/holy-crystal.png",

        stats: [
            {
                name: "Magic Power",
                value: "+165"
            }
        ],

        price: "3000 Gold",
        upgrade: "540 Gold",
        sell: "1800 Gold",

        description:
            "Best equipped by Magic heroes to greatly increase their Magic Power attributes in the mid and late game.",

        effects: [
            {
                effectName: "Mastery",

                effect:
                    "Gains 21%-35% extra Magic Power (scales with level)."
            }
        ]
    },

    {
        name: "Divine Glaive",
        use: "Magic Penetration",
        category: ["magic"],

        image: "../images/items/magic/divine-glaive.png",

        stats: [
            {
                name: "Magic Power",
                value: "+65"
            }
        ],

        price: "1970 Gold",
        upgrade: "1150 Gold",
        sell: "1182 Gold",

        description:
            "Best equipped by Magic DPS heroes to counter enemy heroes that have high Defense abilities in the late game.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+40% Magic Penetration"
            },
            {
                effectName: "Spellbreaker",

                effect:
                    "When attacking an enemy, gains 0.1% extra Magic Penetration for each point of the enemy's Magic Defense, capped at 20%."
            }
        ]
    },

    {
        name: "Clock of Destiny",
        use: "For Magic Tanks",
        category: ["magic"],

        image: "../images/items/magic/clock-of-destiny.png",

        stats: [
            {
                name: "Magic Power",
                value: "+45"
            },
            {
                name: "HP",
                value: "+400"
            },
            {
                name: "Mana",
                value: "+400"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "2030 Gold",
        upgrade: "430 Gold",
        sell: "1218 Gold",

        description:
            "Best equipped by Magic Tanks to increasse their laning sustainability and durability",

        effects: [
            {
                effectName: "Destiny",

                effect:
                    "Gains 4.5(+0.5*Hero Level) Hybrid Defense for 5 seconds when dealing Magic Damage to enemy heroes, stacking up to 6 times (can gain 1 stack every 0.4 seconds)."
            },
            {
                effectName: "Gift",

                effect:
                    "When HP drops below 50%, recovers 15% of HP over the next 3 seconds. When Mana drops below 50%, restores 15% of Mana over the next 3 seconds. Cooldown: 60 seconds."
            }
        ]
    },

    {
        name: "Feather of Heaven",
        use: "Magic Basic Attacks",
        category: ["magic"],

        image: "../images/items/magic/feather-of-heaven.png",

        stats: [
            {
                name: "Magic Power",
                value: "+60"
            },
            {
                name: "Attack Speed",
                value: "+20%"
            },
            {
                name: "Lifesteal",
                value: "+10%"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "2030 Gold",
        upgrade: "580 Gold",
        sell: "1218 Gold",

        description:
            "Best equipped by Magic DPS heroes whose Basic Attacks have special effects.",

        effects: [
            {
                effectName: "Affliction",

                effect:
                    "Each Basic Attack deals extra 50 (+30% Total Magic Power) Magic Damage."
            },
            {
                effectName: "Impulse",

                effect:
                    "Basic Attacks grant 6% extra Attack Speed for 3 seconds, capped at 5 stacks."
            }
        ]
    },

    {
        name: "Enchanted Talisman",
        use: "Mana Regen & CD Reduction",
        category: ["magic"],

        image: "../images/items/magic/enchanted-talisman.png",

        stats: [
            {
                name: "Magic Power",
                value: "+70"
            },
            {
                name: "HP",
                value: "+300"
            },
            {
                name: "Cooldown Reduction",
                value: "+15%"
            }
        ],

        price: "2070 Gold",
        upgrade: "180 Gold",
        sell: "1242 Gold",

        description:
            "Best equipped by Mage or Support heroes that especially rely on cooldown reduction or Mana Regen.",

        effects: [
            {
                effectName: "Mana Spring",

                effect:
                    "Regenerates 15% of Max Mana every 10 seconds."
            },
            {
                effectName: "Magic Mastery",

                effect:
                    "Max Cooldown Reduction is increased by 5%."
            }
        ]
    },

    /* ================= SMALL MAGIC ITEMS ================= */

    {
        name: "Elegant Gem",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/elegant-gem.png",

        stats: [
            {
                name: "HP",
                value: "+300"
            },
            {
                name: "Mana",
                value: "+380"
            }
        ],

        price: "700 Gold",
        upgrade: "180 Gold",
        sell: "420 Gold",

        description:
            "Elegant Gem can be quite handy for Roaming Tanks and especially to those in the Top Lane as they may not need to Recall back to base to regain any of their spent Mana or lost Hitpoints with the help of Gift. In early game if enemy fails to burst damage, the wielder can heal back some health lost.",

        effects: [
            {
                effectName: "Gift",

                effect:
                    "When HP drops below 50%, recovers 15% of HP over the next 3 seconds. When Mana drops below 50%, restores 15% of Mana over the next 3 seconds. Cooldown: 60 seconds."
            }
        ]
    },

    {
        name: "Exotic Veil",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/exotic-veil.png",

        stats: [
            {
                name: "Magic Power",
                value: "+30"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "600 Gold",
        upgrade: "300 Gold",
        sell: "360 Gold",

        description:
            "If your hero deals magical damage, prioritize this item right after the first boots. This item costs the same as 2x Mystery Codex Mystery Codex but with an additional 5% bonus speed for rotation and saves up a slot.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Azure Blade",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/azure-blade.png",

        stats: [
            {
                name: "Mana Regen",
                value: "+5"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "600 Gold",
        upgrade: "360 Gold",
        sell: "360 Gold",

        description:
            "Azure Blade is a good item for every heroes to get some mana regen and cooldown reduction in early game. It is suggested that this item be purchased after footwear equipment. If you are going to buy Endless Battle or Starlium Scythe buy this item first.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Tome of Evil",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/tome-of-evil.png",

        stats: [
            {
                name: "Magic Power",
                value: "+30"
            },
            {
                name: "Mana Regen",
                value: "+2"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "950 Gold",
        upgrade: "380 Gold",
        sell: "570 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Magic Wand",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/magic-wand.png",

        stats: [
            {
                name: "Magic Power",
                value: "45"
            }
        ],

        price: "820 Gold",
        upgrade: "520 Gold",
        sell: "492 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Mystic Container",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/mystic-container.png",

        stats: [
            {
                name: "Magic Power",
                value: "15"
            },
            {
                name: "Spell Vamp",
                value: "+8%"
            }
        ],

        price: "500 Gold",
        upgrade: "200 Gold",
        sell: "300 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Book of Sages",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/book-of-sages.png",

        stats: [
            {
                name: "Magic Power",
                value: "8"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "450 Gold",
        upgrade: "This is a Base Item",
        sell: "270 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Magic Necklace",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/magic-necklace.png",

        stats: [
            {
                name: "Mana Regen",
                value: "+2"
            },
        ],

        price: "120 Gold",
        upgrade: "This is a Base Item",
        sell: "72 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Power Crystal",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/power-crystal.png",

        stats: [
            {
                name: "Mana",
                value: "+280"
            },
        ],

        price: "220 Gold",
        upgrade: "This is a Base Item",
        sell: "132 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Mystery Codex",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/mystery-codex.png",

        stats: [
            {
                name: "Magic Power",
                value: "+15"
            },
        ],

        price: "300 Gold",
        upgrade: "This is a Base Item",
        sell: "182 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    ""
            }
        ]
    },

    {
        name: "Lantern of Hope",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/lantern-of-hope.png",

        stats: [
            {
                name: "Magic Power",
                value: "+20"
            },
            {
                name: "Movement Speed",
                value: "+4%"
            },
            {
                name: "Cooldown Reduction",
                value: "+2%"
            }
        ],

        price: "Free",
        upgrade: "No Upgrade",
        sell: "This Item is Not Sellable",

        description:
            "Lantern of Hope is a special item only available to <strong>Floryn</strong>.",

        effects: [
            {
                effectName: "Lantern of Hope",

                effect:
                    "The equipment's attributes scale with hero level. (+4 Magic Power, +0.4 Movement Speed, +0.2 Cooldown Reduction) Per Level, (+50 Magic Power, +10 Movement Speed, +5 Cooldown Reduction) At Max Level."
            }
        ]
    },

    {
        name: "Flower of Hope",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/flower-of-hope.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: "+5%"
            }
        ],

        price: "Free",
        upgrade: "No Upgrade",
        sell: "This Item is Not Sellable",

        description:
            "Flower of Hope is a special item only available to allied hero that <strong>Floryn</strong> shares with.",

        effects: [
            {
                effectName: "Flower of Hope",

                effect:
                    "Every 6 seconds, the next skill or Basic Attack deals an additional 60 (+30% Total Physical Attack) (+30% Total Magic Power) Magic Damage."
            }
        ]
    },

    {
        name: "Magic Potion",
        use: "",
        category: ["magic"],

        image: "../images/items/magic/magic-potion.png",

        stats: [
            {
                name: "Adaptive Attack",
                value: ""
            }
        ],

        price: "1500",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Magic Potion can only purchasing if using all Magical equipment items.",

        effects: [
            {
                effectName: "Increase Power",

                effect:
                    "Automatically used after purchasing, increases Magic Power by 30 and Cooldown Reduction by 10% for 120s. Can only have one potion effect at a time."
            }
        ]
    },

    /* ================= DEFENSE ITEMS ================= */

    {
        name: "Radiant Armor",
        use: "Magic Damage Reduction",
        category: ["defense"],

        image: "../images/items/defense/radiant-armor.png",

        stats: [
            {
                name: "HP",
                value: "+950"
            },
            {
                name: "Magic Defense",
                value: "+40"
            },
            {
                name: "HP Regen",
                value: "+12"
            }
        ],

        price: "1880 Gold",
        upgrade: "500 Gold",
        sell: "1128 Gold",

        description:
            "Best equipped to fight Magic heroes that cast skills at a quick pace.",

        effects: [
            {
                effectName: "Holy Blessing",

                effect:
                    "Taking Magic Damage grants 5(+1*Hero Level) Magic Defense for 5 seconds, up to 6 stacks (can only gain 1 stack(s) every 0.4 seconds)."
            }
        ]
    },

    {
        name: "Chastise Pauldron",
        use: "Reduce Enemy Attack Speed",
        category: ["defense"],

        image: "../images/items/defense/chastise-pauldron.png",

        stats: [
            {
                name: "HP",
                value: "+900"
            },
            {
                name: "Physical Defense",
                value: "+40"
            }
        ],

        price: "2100 Gold",
        upgrade: "770 Gold",
        sell: "1260 Gold",

        description:
            "Best equipped to counter heroes with high Attack Speed.",

        effects: [
            {
                effectName: "Chastise",

                effect:
                    "Taking damage will reduce the Attack Speed and Attack Speed cap of the attacker to 75% of normal for 2 seconds.",
            },
            {
                effectName: "Redemption",

                effect:
                    "When incoming damage reduces HP below 30%, recover 20% Max HP over the next 2 seconds. This effect has a 60 seconds cooldown."
            }
        ]
    },

    {
        name: "Brute Force Breastplate",
        use: "Attack, Speed Up, CC Reduction",
        category: ["defense"],

        image: "../images/items/defense/brute-force-breastplate.png",

        stats: [
            {
                name: "HP",
                value: "+800"
            },
            {
                name: "Physical Defense",
                value: "+20"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "2070 Gold",
        upgrade: "700 Gold",
        sell: "1242 Gold",

        description:
            "Best equipped by Fighter that need good sustainability.",

        effects: [
            {
                effectName: "Brute Force",

                effect:
                    "Each second after dealing damage, gain 8 extra Adaptive Attack and 2% extra Movement Speed for 4 seconds, up to 6 stacks. Gain 25% extra Control Duration Reduction at full stacks.",
            }
        ]
    },

    {
        name: "Immortality",
        use: "Self-Resurrection",
        category: ["defense"],

        image: "../images/items/defense/immortality.png",

        stats: [
            {
                name: "HP",
                value: "+850"
            },
            {
                name: "Physical Defense",
                value: "+15"
            }
        ],

        price: "220 Gold",
        upgrade: "900 Gold",
        sell: "1272 Gold",

        description:
            "Common equipment that allows a larger margin of error in the late game.",

        effects: [
            {
                effectName: "Immortal",

                effect:
                    "Resurrect 2.5 seconds upon death and gets 16% Max HP and a shield that can absorb 150(+70 * Hero Level) damage. Shield lasts 3 seconds. This effect has a 210 seconds cooldown.",
            }
        ]
    },

    {
        name: "Dominance Ice",
        use: "Healing Reduction",
        category: ["defense"],

        image: "../images/items/defense/dominance-ice.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+40"
            },
            {
                name: "Magic Defense",
                value: "+40"
            },
            {
                name: "Movement Speed",
                value: "+5%"
            }
        ],

        price: "2010 Gold",
        upgrade: "790 Gold",
        sell: "1206 Gold",

        description:
            "Best equipped by Tanks to reduce enemies' Regen effects (Heal, Shields or Lifesteal).",

        effects: [
            {
                effectName: "Fortress Shield",

                effect:
                    "For each enemy hero within 5 units, Hybrid Defense is increased by 8, up to 40.",
            },
            {
                effectName: "Lifebane",

                effect:
                    "Reduces Shield and HP Regen effects of nearby enemies within 5 units to 60% of normal for 1 second.,"
            }
        ]
    },

    {
        name: "Athena's Shield",
        use: "Resist Burst Magic Damage",
        category: ["defense"],

        image: "../images/items/defense/athenas-shield.png",

        stats: [
            {
                name: "HP",
                value: "+900"
            },
            {
                name: "Magic Defense",
                value: "+48"
            },
            {
                name: "HP Regen",
                value: "+2"
            }
        ],

        price: "2150 Gold",
        upgrade: "830 Gold",
        sell: "1290 Gold",

        description:
            "Best equipped by heroes to greatly increase their abilities to resist Magic burst damage.",

        effects: [
            {
                effectName: "Shield",

                effect:
                    "Upon taking Magic Damage from enemy hero skills or Basic Attacks, reduces Magic Damage taken by 25% for 3 seconds (including the damage that triggers the effect)s. Regains this effect 5 seconds after leaving combat.",
            }
        ]
    },

    {
        name: "Oracle",
        use: "Enhanced Regen",
        category: ["defense"],

        image: "../images/items/defense/oracle.png",

        stats: [
            {
                name: "HP",
                value: "+850"
            },
            {
                name: "Magic Defense",
                value: "+20"
            },
            {
                name: "Magic Defense",
                value: "+20"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            }
        ],

        price: "1860 Gold",
        upgrade: "660 Gold",
        sell: "1160 Gold",

        description:
            "Best equipped by heroes that defend against enemies' Magic Power and have strong Regen skills (e.g. Shields, Heal, or Lifesteal).",

        effects: [
            {
                effectName: "Bless",

                effect:
                    "Received Shield and HP Regen effects are increased by 25%.",
            }
        ]
    },

    {
        name: "Antique Cuirass",
        use: "Physical Attack Reduction",
        category: ["defense"],

        image: "../images/items/defense/antique-cuirass.png",

        stats: [
            {
                name: "HP",
                value: "+920"
            },
            {
                name: "Physical Defense",
                value: "+40"
            },
            {
                name: "HP Regen",
                value: "+4%"
            }
        ],

        price: "2170 Gold",
        upgrade: "740 Gold",
        sell: "1302 Gold",

        description:
            "Common equipment to defend against enemies' Physical Damage.",

        effects: [
            {
                effectName: "Deter",

                effect:
                    "When hit by a skill, reduces the attacker's Physical Damage by 6% for 2 seconds (this effect stacks up to 3 times).",
            }
        ]
    },

    {
        name: "Guardian Helmet",
        use: "Constant HP Regen",
        category: ["defense"],

        image: "../images/items/defense/guardian-helmet.png",

        stats: [
            {
                name: "HP",
                value: "+1800"
            },
            {
                name: "HP Regen",
                value: "+20"
            }
        ],

        price: "2500 Gold",
        upgrade: "400 Gold",
        sell: "1500 Gold",

        description:
            "Best equipped by heroes that rely extremely on HP. Can also be equipped by Tank that re-enter the battlefield after taking a round of damage.",

        effects: [
            {
                effectName: "Recovery",

                effect:
                    "After 5 seconds out of combat, recover (2.5% Total HP) HP per second.",
            },
            {
                effectName: "Defender",

                effect:
                    "Upon taking more than 500 damage in a single instance, recover 30 (+0.3% Total HP)% HP from the excess damage beyond that amount.",
            }
        ]
    },

    {
        name: "Thunder Belt",
        use: "Damage for Tanks",
        category: ["defense"],

        image: "../images/items/defense/thunder-belt.png",

        stats: [
            {
                name: "HP",
                value: "+600"
            },
            {
                name: "Physical Defense",
                value: "+15"
            },
            {
                name: "Magic Defense",
                value: "+15"
            },
            {
                name: "Movement Speed",
                value: "+20"
            }
        ],

        price: "1820 Gold",
        upgrade: "680 Gold",
        sell: "1092 Gold",

        description:
            "	Best equipped by Fighter Tanks to deal greater damage.",

        effects: [
            {
                effectName: "Thunderbolt",

                effect:
                    "Every 4 seconds, the next Basic Attack deals 50 (+100% Extra Physical Defense) (+100% Extra Magic Defense) extra True Damage to the target and enemies around them, and briefly slows them by 99%. Hybrid Defense permanently increases by 1 each time the attack hits an enemy hero. (This effect is reduced to 50% for Marksmen and Mages).",
            }
        ]
    },

    {
        name: "Queen's Wings",
        use: "Low-HP Retaliation",
        category: ["defense"],

        image: "../images/items/defense/queens-wings.png",

        stats: [
            {
                name: "HP",
                value: "+750"
            },
            {
                name: "Adaptive Attack",
                value: "+30"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            },
            {
                name: "Spell Vamp",
                value: "+10%"
            }
        ],

        price: "2250 Gold",
        upgrade: "600 Gold",
        sell: "1350 Gold",

        description:
            "Best equipped by Fighter Icon Fighters that rely on skills to increase their durability.",

        effects: [
            {
                effectName: "Demonize",

                effect:
                    "When HP drops below 40%, gains 30% Damage Reduction for 3 seconds and reduces skill cooldowns by 2 seconds. This effect has a 60 seconds cooldown.",
            },
            {
                effectName: "Defiance",

                effect:
                    "For every 1% HP lost, damage is increased by 0.25%, up to 15%.",
            }
        ]
    },

    {
        name: "Blade Armor",
        use: "Damage Reflection",
        category: ["defense"],

        image: "../images/items/defense/blade-armor.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+80"
            }
        ],

        price: "1910 Gold",
        upgrade: "840 Gold",
        sell: "1146 Gold",

        description:
            "	Best equipped by Tanks to fight enemy Marksmen that have great Attack Speed.",

        effects: [
            {
                effectName: "Unique Attribute",

                effect:
                    "+20% Crit Damage Reduction",
            },
            {
                effectName: "Bladed Armor",

                effect:
                    "When struck by a Basic Attack, deals Physical Damage equal to 30 (+2% Total Physical Defense)% of the incoming damage (calculated before Damage Reduction) to the attacker and slows them by 15% for 1 second.",
            }
        ]
    },

    /* ================= SMALL DEFENSE ITEMS ================= */

    {
        name: "Steel Legpates",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/steel-legplates.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+35"
            }
        ],

        price: "630 Gold",
        upgrade: "410 Gold",
        sell: "378 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Dreadnaught Armor",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/dreadnaught-armor.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+30"
            }
        ],

        price: "730 Gold",
        upgrade: "290 Gold",
        sell: "438 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "Deter",

                effect:
                    "When hit by a skill, reduces the attacker's Physical Damage by 4% for 2 seconds (this effect stacks up to 3 times).",
            }
        ]
    },

    {
        name: "Black Ice Shield",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/black-ice-shield.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+20"
            },
            {
                name: "Magic Defense",
                value: "+20"
            }
        ],

        price: "780 Gold",
        upgrade: "340 Gold",
        sell: "468 Gold",

        description:
            "As an all-rounder Tier 2 item, Black Ice Shield provides a good amount of Mana and Physical Defense. Making it a good item to have without upgrading to Dominance Ice.",

        effects: [
            {
                effectName: "Fortress Shield",

                effect:
                    "For each enemy hero within 3.55 units, Hybrid Defense is increased by 4, up to 20.",
            }
        ]
    },

    {
        name: "Silence Robe",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/silence-robe.png",

        stats: [
            {
                name: "HP",
                value: "+540"
            },
            {
                name: "Magic Defense",
                value: "+23"
            }
        ],

        price: "1030 Gold",
        upgrade: "500 Gold",
        sell: "612 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Molten Essence",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/molten-essence.png",

        stats: [
            {
                name: "HP",
                value: "+540"
            }
        ],

        price: "800 Gold",
        upgrade: "500 Gold",
        sell: "480 Gold",

        description:
            "Molten Essence is a best item for Tank to increase their damage, jungling or lane clearing abilities. It is suggested that this item be purchased after footwear equipment. Every second, the <strong>Burning Soul</strong> can deal aura magic damage to adjacent opponents and harass them.",

        effects: [
            {
                effectName: "Burning Soul",

                effect:
                    "Deals (0.6% Total HP) Magic Damage to nearby enemies per second. This damage is increased by 125(+15 * Hero Level)% against creeps and minions.",
            }
        ]
    },

    {
        name: "Ares Belt",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/ares-belt.png",

        stats: [
            {
                name: "HP",
                value: "+600"
            }
        ],

        price: "700 Gold",
        upgrade: "400 Gold",
        sell: "420 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Hero's Ring",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/heros-ring.png",

        stats: [
            {
                name: "HP",
                value: "+150"
            },
            {
                name: "Cooldown Reduction",
                value: "+5%"
            }
        ],

        price: "450 Gold",
        upgrade: "This is a Base Item",
        sell: "270 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Healing Necklace",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/healing-necklace.png",

        stats: [
            {
                name: "HP Regen",
                value: "+4"
            }
        ],

        price: "140 Gold",
        upgrade: "This is a Base Item",
        sell: "84 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Magic Resist Cloak",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/magic-resist-cloak.png",

        stats: [
            {
                name: "Magic Defense",
                value: "+14"
            }
        ],

        price: "220 Gold",
        upgrade: "This is a Base Item",
        sell: "132 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Leather Jerkin",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/leather-jerkin.png",

        stats: [
            {
                name: "Physical Defense",
                value: "+14"
            }
        ],

        price: "220 Gold",
        upgrade: "This is a Base Item",
        sell: "132 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Vital Crystal",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/vital-crystal.png",

        stats: [
            {
                name: "HP",
                value: "+230"
            }
        ],

        price: "300 Gold",
        upgrade: "This is a Base Item",
        sell: "180 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects.",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Rock Potion",
        use: "",
        category: ["defense"],

        image: "../images/items/defense/rock-potion.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "220 Gold",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Rock Potion can only purchase if using all Defense equipment items.",

        effects: [
            {
                effectName: "Increase Power",

                effect:
                    "Upon purchase, grants 500 Max HP and 5% Damage Reduction for 120 seconds. Can only have one potion effect at a time.",
            }
        ]
    },

    /* ================= MOVEMENT ITEMS ================= */

    {
        name: "Demon Shoes",
        use: "Quick Mana Regen",
        category: ["movement"],

        image: "../images/items/movement/demon-shoes.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+40"
            },
            {
                name: "Mana Regen",
                value: "+10"
            }
        ],

        price: "720 Gold",
        upgrade: "230 Gold",
        sell: "432 Gold",

        description:
            "Demon Shoes is a recommended item on heroes that use a lot of mana. Most users of this item are Mage Icons and Support Icons.",

        effects: [
            {
                effectName: "Mysticism",

                effect:
                    "Getting a kill or assist on an enemy Minion will restore 4% Mana. (An assist occurs when a Minion dies within 2 seconds after taking damage from the hero.)",
            }
        ]
    },

    {
        name: "Rapid Boots",
        use: "Movement Speed",
        category: ["movement"],

        image: "../images/items/movement/rapid-boots.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+55"
            },
            {
                name: "Slow Reduction",
                value: "+35%"
            },
            {
                name: "HP Regen",
                value: "+12"
            }
        ],

        price: "720 Gold",
        upgrade: "190 Gold",
        sell: "432 Gold",

        description:
            "Rapid Boots gives you the most movement speed out of the whole shop. This item is great to include in your build to retreat easier if the enemy could be coming or if your hero is particularly slow in walking. ",

        effects: [
            {
                effectName: "This Item Has No Effects",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Swift Boots",
        use: "Attack Speed",
        category: ["movement"],

        image: "../images/items/movement/swift-boots.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+40"
            },
            {
                name: "Attack Speed",
                value: "+15%"
            }
        ],

        price: "720 Gold",
        upgrade: "190 Gold",
        sell: "432 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Arcane Boots",
        use: "Magic Penetration",
        category: ["movement"],

        image: "../images/items/movement/arcane-boots.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+40"
            },
            {
                name: "Magic Power",
                value: "+15"
            },
            {
                name: "Magic Penetration",
                value: "+10"
            }
        ],

        price: "720 Gold",
        upgrade: "170 Gold",
        sell: "432 Gold",

        description:
            "This items is only recommended for Mage / Support role heroes and Magic Damage / Mixed Damage (both Physical Attack and Magic Power) specialty heroes.",

        effects: [
            {
                effectName: "This Item Has No Effects",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Magic Shoes",
        use: "CD Reduction",
        category: ["movement"],

        image: "../images/items/movement/magic-shoes.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+40"
            },
            {
                name: "Cooldown Reduction",
                value: "+10%"
            },
            {
                name: "HP",
                value: "+150"
            }
        ],

        price: "720 Gold",
        upgrade: "20 Gold",
        sell: "432 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Warrior Boots",
        use: "Stackable Physical Defense",
        category: ["movement"],

        image: "../images/items/movement/warrior-boots.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+40"
            },
            {
                name: "Physical Defense",
                value: "+18"
            }
        ],

        price: "720 Gold",
        upgrade: "250 Gold",
        sell: "432 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "Valor",

                effect:
                    "Gains 4 extra Physical Defense for 3 seconds when taking Physical Damage, up to 20.",
            }
        ]
    },

    {
        name: "Boots",
        use: "",
        category: ["movement"],

        image: "../images/items/movement/boots.png",

        stats: [
            {
                name: "Movement Speed",
                value: "+20"
            }
        ],

        price: "250",
        upgrade: "This is a Base Item",
        sell: "150 Gold",

        description:
            "The archaeologists in the Land of Dawn have not reached a clear conclusion about this piece of equipment.",

        effects: [
            {
                effectName: "This Item Has No Effects",

                effect:
                    "",
            }
        ]
    },

    {
        name: "Allow Throw",
        use: "",
        category: ["movement"],

        image: "../images/items/movement/allow-throw.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Allow Throw can only be purchased if there is an allied <strong>Jawhead</strong> on the player's team and has previously purchased Throw Forbidden. Once purchased, the allied <strong>Jawhead</strong> is able to throw the targeted-player again with <strong>Ejector</strong>.",

        effects: [
            {
                effectName: "Trust",

                effect:
                    "Allow allied Jawhead to fling you.",
            }
        ]
    },

    {
        name: "Throw Forbidden",
        use: "",
        category: ["movement"],

        image: "../images/items/movement/throw-forbidden.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Throw Forbidden can only be purchased if there is an allied <strong>Jawhead</strong> on the player's team. Once purchased, the allied <strong>Jawhead</strong> can no longer throw the player with <strong>Ejector</strong> until purchase <strong>Allow Throw</strong>.",

        effects: [
            {
                effectName: "Heavy Mountain",

                effect:
                    "Become immune to allied Jawhead's Ejector in this match.",
            }
        ]
    },

    {
        name: "Broken Heart",
        use: "",
        category: ["movement"],

        image: "../images/items/movement/broken-heart.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Broken Heart can only be purchased by <strong>Carmilla</strong> if allied with <strong>Cecillion</strong>. Once  <strong>Carmilla</strong>, <strong>Cecillion</strong> will be unable to cast <strong>Moonlit Waltz</strong> until purchase <strong>Resonation Heart</strong>.",

        effects: [
            {
                effectName: "Heart Broken",

                effect:
                    "Become immune to allied Cecilion's Moonlit Waltz in this match.",
            }
        ]
    },

    {
        name: "Resonating Heart",
        use: "",
        category: ["movement"],

        image: "../images/items/movement/resonating-heart.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Resonationg Heart can only be purchased by <strong>Carmilla</strong> if allied with <strong>Cecillion</strong>. Once <strong>Carmilla</strong>, <strong>Cecillion</strong> will be able to cast <strong>Moonlit Waltz</strong> again.",

        effects: [
            {
                effectName: "Restore",

                effect:
                    "Allow allied Cecilion to use Moonlit Waltz on the user of this equipment.",
            }
        ]
    },

    /* ================= JUNGLE ================= */

    {
        name: "Flame Retribution",
        use: "",
        category: ["jungle"],

        image: "../images/items/jungle/flame-retri.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Damage from Retribution Retribution does not trigger <strong>Sky Piercer's</strong> passive.",

        effects: [
            {
                effectName: "Unique Active",

                effect:
                    "Retribution's damage against creeps and minions is increased to 150%. When cast on an enemy hero, deals them 100 True Damage and steals 71-120 Physical Attack and Magic Power (scales with level) from them for 3 seconds. <br>Retribution is upgraded when the total number of creep kills, hero kills, and assists reaches 5.",
            }
        ]
    },

    {
        name: "Ice Retribution",
        use: "",
        category: ["jungle"],

        image: "../images/items/jungle/ice-retri.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Fully stacks multiplicatively with other sources of slow.",

        effects: [
            {
                effectName: "Unique Active",

                effect:
                    "Retribution's damage against creeps and minions is increased to 150%. When cast on an enemy hero, deals them 100 True Damage and steals 52-80 Movement Speed (scales with level) from them for 3 seconds. <br>Retribution is upgraded when the total number of creep kills, hero kills, and assists reaches 5.",
            }
        ]
    },

    {
        name: "Bloody Retribution",
        use: "",
        category: ["jungle"],

        image: "../images/items/jungle/bloody-retri.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "Damage from Retribution Retribution does not trigger <strong>Sky Piercer's</strong> passive.",

        effects: [
            {
                effectName: "Unique Active",

                effect:
                    "Retribution's damage against creeps and minions is increased to 150%. When cast on an enemy hero, deals them 100 True Damage and steals HP equal to 300 plus 24% of the caster's extra HP from them for 3 seconds. <br>Retribution is upgraded when the total number of creep kills, hero kills, and assists reaches 5.",
            }
        ]
    },

    {
        name: "Active - Conceal",
        use: "",
        category: ["roam"],

        image: "../images/items/roam/conceal.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "When near allied heroes, you gain 30% EXP and Gold from minions and creeps. Dealing damage to enemy heroes (Cooldown: 15s) or revealing enemies also grants EXP and Gold. This skill can only be <strong>unlocked</strong>  after accumulating 1000 Gold from Thriving.",

        effects: [
            {
                effectName: "Unique Active",

                effect:
                    "Conceals you and nearby allied heroes, granting 40% Movement Speed for 5 seconds, or until taking or dealing damage. (Cooldown: 60 seconds).",
            }
        ]
    },

    {
        name: "Passive - Encourage",
        use: "",
        category: ["roam"],

        image: "../images/items/roam/encourage.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "When near allied heroes, you gain 30% EXP and Gold from minions and creeps. Dealing damage to enemy heroes (Cooldown: 15s) or revealing enemies also grants EXP and Gold. This skill can only be <strong>unlocked</strong> after accumulating 1000 Gold from Thriving.",

        effects: [
            {
                effectName: "Unique Passive",

                effect:
                    "Grants you and nearby allied heroes 20 extra Hybrid Defense. (Cooldown: 0 seconds)",
            }
        ]
    },

    {
        name: "Passive - Favor",
        use: "",
        category: ["roam"],

        image: "../images/items/roam/favor.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "When near allied heroes, you gain 30% EXP and Gold from minions and creeps. Dealing damage to enemy heroes (Cooldown: 15s) or revealing enemies also grants EXP and Gold. This skill can only be <strong>unlocked</strong> after accumulating 1000 Gold from Thriving.",

        effects: [
            {
                effectName: "Unique Passive",

                effect:
                    "Every 15s, your next healing or shield skill recovers 400 extra HP to the lowest-HP allied hero within 5 units (including yourself). Skills that only take effect on yourself cannot trigger this effect. (Cooldown: 15 seconds)",
            }
        ]
    },

    {
        name: "Passive - Dire Hit",
        use: "",
        category: ["roam"],

        image: "../images/items/roam/dire-hit.png",

        stats: [
            {
                name: "This Item Has No Stats",
                value: ""
            }
        ],

        price: "Free",
        upgrade: "This is a Base Item",
        sell: "This Item is Not Sellable",

        description:
            "When near allied heroes, you gain 30% EXP and Gold from minions and creeps. Dealing damage to enemy heroes (Cooldown: 15s) or revealing enemies also grants EXP and Gold. This skill can only be <strong>unlocked</strong> after accumulating 1000 Gold from Thriving.",

        effects: [
            {
                effectName: "Unique Passive",

                effect:
                    "Gains Force while moving, gradually increasingMovement Speed (up to 40). Upon reaching 20 stacks, thenext hit consumes all stacks to deal extra True Damage based on the number of stacks. (Cooldown: 15 seconds)",
            }
        ]
    },

];


/* ================= HTML ELEMENTS ================= */

const itemGrid = document.getElementById("item-grid");

const categoryTabs =
    document.querySelectorAll(".category-tab");

const modal =
    document.getElementById("item-modal");

const modalContent =
    document.getElementById("modal-content");

const closeModal =
    document.getElementById("close-modal");


/* ================= CREATE ITEM CARDS ================= */

function displayItems(category = "all") {

    itemGrid.innerHTML = "";

    items.forEach((item, index) => {

        if (
            category !== "all" &&
            !item.category.includes(category)
        ) {

            return;

        }


        const card =
            document.createElement("div");

        card.classList.add("item-card");


        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <h3>
                ${item.name}
            </h3>

            <p class="item-use">
                ${item.use}
            </p>

            <p class="item-category">
                ${getCategoryName(item.category)}
            </p>

        `;


        card.addEventListener(
            "click",
            () => openItem(index)
        );


        itemGrid.appendChild(card);

    });

}


/* ================= CATEGORY NAME ================= */

function getCategoryName(category) {

    const names = {

        attack: "Attack",

        magic: "Magic",

        defense: "Defense",

        movement: "Movement",

        jungle: "Jungling",

        roam: "Roaming"
    };

    // Multiple categories
    if (Array.isArray(category)) {

        return category
            .map(cat => names[cat] || cat)
            .join(" • ");

    }

    // Single category
    return names[category] || category;

}


/* ================= OPEN ITEM ================= */

function openItem(index) {

    const item = items[index];


    let statsHTML = "";


    item.stats.forEach(stat => {

        statsHTML += `

            <div class="stat-box">

                <h4>
                    ${stat.name}
                </h4>

                <p>
                    ${stat.value}
                </p>

            </div>

        `;

    });


    modalContent.innerHTML = `

        <!-- IMAGE -->

        <img
            class="modal-icon"
            src="${item.image}"
            alt="${item.name}"
        >


        <!-- NAME -->

        <h2 class="modal-title">
            ${item.name}
        </h2>


        <!-- USE -->

        <p class="modal-use">
            ${item.use}
        </p>


        <!-- CATEGORY -->

        <p class="modal-category">
            ${getCategoryName(item.category)}
        </p>


        <!-- STATS -->

        <div class="stats-grid">

            ${statsHTML}

        </div>


        <!-- PRICES -->

        <div class="price-section">

            <div class="price-box">

                <h4>
                    Purchase Price
                </h4>

                <p>
                    ${item.price}
                </p>

            </div>


            <div class="price-box">

                <h4>
                    Upgrade Price
                </h4>

                <p>
                    ${item.upgrade}
                </p>

            </div>


            <div class="price-box">

                <h4>
                    Sell Price
                </h4>

                <p>
                    ${item.sell}
                </p>

            </div>

        </div>


        <!-- DESCRIPTION -->

        <div class="modal-section">

            <h3>
                Description
            </h3>

            <p>
                ${item.description}
            </p>

        </div>


        <!-- EFFECT -->

            <div class="modal-section">

            <h3>Effects</h3>

                ${item.effects.map(effect => `

            <div class="item-effect">

            <h4>
                ${effect.effectName}
            </h4>

            <p>
                ${effect.effect}
            </p>

            </div>

    `).join("")}
</div>
    
    `;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* ================= CLOSE MODAL ================= */

function closeItem() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeItem
);


/* ================= CLOSE WHEN CLICKING OUTSIDE ================= */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeItem();

    }

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeItem();

    }

});


/* ================= CATEGORY FILTER ================= */

categoryTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        categoryTabs.forEach(t => {

            t.classList.remove("active");

        });


        tab.classList.add("active");


        const category =
            tab.dataset.category;


        displayItems(category);

    });

});

/* ================= LOGOUT ================= */

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "../login.html";

}

/* ================= INITIAL DISPLAY ================= */

displayItems();