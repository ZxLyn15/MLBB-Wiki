const roles = {

    jungle:{

        title:"Jungle",

        description:"The Jungler clears neutral monsters, secures Turtle and Lord, and supports teammates through rotations and ganks.",

        image:"../images/roles/jungle.jpg",

        featured:"✓ Responsibilities\n✓ Objectives\n✓ Rotation Guide\n✓ Recommended Heroes\n✓ Battle Spell",

        link:"../Roles/jungle.html"

    },

    mid:{

        title:"Mid Lane",

        description:"The Mid Laner controls the center lane, clears waves quickly, and rotates to help every side of the map.",

        image:"../images/roles/mid.jpg",

        featured:"✓ Wave Clear\n✓ Rotations\n✓ Recommended Heroes\n✓ Team Fights\n✓ Positioning",

        link:"../Roles/mid.html"

    },

    gold:{

        title:"Gold Lane",

        description:"Gold Laners focus on farming safely and becoming the team's primary damage dealer in the late game.",

        image:"../images/roles/gold.jpg",

        featured:"✓ Farming\n✓ Positioning\n✓ Gold Advantage\n✓ Recommended Heroes\n✓ Power Spikes",

        link:"../Roles/gold.html"

    },

    exp:{

        title:"EXP Lane",

        description:"EXP Laners are durable fighters who gain extra experience and often initiate fights for the team.",

        image:"../images/roles/exp.jpg",

        featured:"✓ Lane Control\n✓ Team Initiation\n✓ Recommended Heroes\n✓ Durability\n✓ Split Push",

        link:"../Roles/exp.html"

    },

    roam:{

        title:"Roam",

        description:"Roamers protect teammates, provide vision, and create opportunities through crowd control and map awareness.",

        image:"../images/roles/roam.jpg",

        featured:"✓ Vision\n✓ Team Support\n✓ Initiation\n✓ Recommended Heroes\n✓ Map Control",

        link:"../Roles/roam.html"

    }

};

const cards = document.querySelectorAll(".card");

const title = document.getElementById("previewTitle");
const description = document.getElementById("previewDescription");
const image = document.getElementById("previewImage");
const featured = document.getElementById("featuredText");
const button = document.getElementById("learnMore");

let currentRole = "";

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        currentRole = card.dataset.role;

        const role = roles[currentRole];

        title.textContent = role.title;

        description.textContent = role.description;

        image.src = role.image;

        featured.textContent = role.featured;

    });

    card.addEventListener("click",()=>{

        window.location.href = roles[card.dataset.role].link;

    });

});

button.addEventListener("click",()=>{

    if(currentRole !== ""){

        window.location.href = roles[currentRole].link;

    }

});

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href="../login.html";

}