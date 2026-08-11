/* ================= ITEM DATA ================= */

const items = [

    /* ================= ATTACK ITEMS ================= */

    {
        name: "Malefic Gun",
        use: "Increase Attack Range",
        category: "attack",

        image: "../images/items/malefic-gun.png",

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

        price: "3010 Gold",
        upgrade: "0 Gold",
        sell: "2107 Gold",

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
        name: "Blade of Despair",
        use: "Highest Physical Attack",
        category: "attack",

        image: "../images/items/blade-of-despair.png",

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
        upgrade: "0 Gold",
        sell: "2107 Gold",

        description:
            "A powerful physical attack item designed for heroes who want to maximize their damage output.",

        effectName: "Despair",

        effect:
            "Increases the hero's Physical Attack when attacking enemies with low HP."
    },


    {
        name: "Berserker's Fury",
        use: "Critical Damage",
        category: "attack",

        image: "../images/items/berserkers-fury.png",

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

        price: "2350 Gold",
        upgrade: "0 Gold",
        sell: "1645 Gold",

        description:
            "An offensive item that greatly improves a hero's critical strike potential.",

        effectName: "Doom",

        effect:
            "Critical Strikes increase Critical Damage for a short period."
    },


    {
        name: "Haas's Claws",
        use: "Attack & Lifesteal",
        category: "attack",

        image: "../images/items/haas-claws.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+70"
            },
            {
                name: "Physical Lifesteal",
                value: "+25%"
            }
        ],

        price: "2220 Gold",
        upgrade: "0 Gold",
        sell: "1554 Gold",

        description:
            "A physical attack item that provides strong sustain through Physical Lifesteal.",

        effectName: "Insanity",

        effect:
            "Provides additional Physical Lifesteal when the hero's HP becomes low."
    },


    {
        name: "Demon Hunter Sword",
        use: "Anti-HP",
        category: "attack",

        image: "../images/items/demon-hunter-sword.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+35"
            },
            {
                name: "Attack Speed",
                value: "+25%"
            }
        ],

        price: "2180 Gold",
        upgrade: "0 Gold",
        sell: "1526 Gold",

        description:
            "A strong anti-tank item designed for dealing consistent damage against high-HP enemies.",

        effectName: "Devour",

        effect:
            "Basic attacks deal additional physical damage based on the target's current HP."
    },


    {
        name: "Malefic Roar",
        use: "Physical Penetration",
        category: "attack",

        image: "../images/items/malefic-roar.png",

        stats: [
            {
                name: "Physical Attack",
                value: "+60"
            },
            {
                name: "Physical Penetration",
                value: "+30%"
            }
        ],

        price: "2060 Gold",
        upgrade: "0 Gold",
        sell: "1442 Gold",

        description:
            "A penetration item designed to help physical damage heroes deal with enemies who have high Physical Defense.",

        effectName: "Armor Buster",

        effect:
            "Provides additional Physical Penetration based on the target's Physical Defense."
    },


    {
        name: "Windtalker",
        use: "Attack Speed",
        category: "attack",

        image: "../images/items/windtalker.png",

        stats: [
            {
                name: "Attack Speed",
                value: "+35%"
            },
            {
                name: "Movement Speed",
                value: "+20"
            }
        ],

        price: "1820 Gold",
        upgrade: "0 Gold",
        sell: "1274 Gold",

        description:
            "A fast-paced attack item that improves attack speed and mobility.",

        effectName: "Typhoon",

        effect:
            "Basic attacks trigger additional magic damage that can hit multiple nearby enemies."
    }

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
            item.category !== category
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

        jungle: "Jungling"

    };

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