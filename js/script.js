const pages = {

    roles:{

        title:"Roles",

        description:"Learn about the five roles in Mobile Legends and understand their responsibilities during a match.",

        image:"images/homepage/roles.jpg",

        featured:"✓ Jungle\n✓ Mid Lane\n✓ Gold Lane\n✓ EXP Lane\n✓ Roam",

        link:"roles.html"

    },

    heroes:{

        title:"Heroes",

        description:"Browse every hero from every class including their skills and recommended builds.",

        image:"images/homepage/heroes.jpg",

        featured:"✓ Hero Classes\n✓ Skills\n✓ Builds\n✓ Counters\n",

        link:"heroes.html"

    },

    items:{

        title:"Items",

        description:"Find every physical, magic, defense, movement, and jungle item.",

        image:"images/homepage/items.jpg",

        featured:"✓ Physical Items\n✓ Magic Items\n✓ Defense Items\n✓ Movement Items",

        link:"items.html"

    },

    emblems:{

        title:"Emblems",

        description:"Discover the best emblem setups for every hero and role.",

        image:"images/homepage/emblems.jpg",

        featured:"✓ Emblem Types\n✓ Talents\n✓ Recommended Setups\n✓ Role Synergies",

        link:"emblems.html"

    },

    spells:{

        title:"Battle Spells",

        description:"Learn which battle spell fits every hero and every situation.",

        image:"images/homepage/spells.jpg",

        featured:"✓ Spell Effects\n✓ Cooldowns\n✓ Best Uses\n✓ Spell Mechanics",

        link:"spells.html"

    },

};

const cards = document.querySelectorAll(".card");

const title = document.getElementById("previewTitle");
const description = document.getElementById("previewDescription");
const image = document.getElementById("previewImage");
const featured = document.getElementById("featuredText");
const button = document.getElementById("learnMore");

let currentPage = "";

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        currentPage = card.dataset.page;

        const page = pages[currentPage];

        title.textContent = page.title;
        description.textContent = page.description;
        image.src = page.image;
        featured.textContent = page.featured;

    });

    card.addEventListener("click",()=>{

        window.location.href = pages[card.dataset.page].link;

    });

});

button.addEventListener("click",()=>{

    if(currentPage !== ""){

        window.location.href = pages[currentPage].link;

    }

});