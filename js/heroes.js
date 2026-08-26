/* =========================================================
   HERO DATA
========================================================= */
const modalCard = document.querySelector(".modal-card");

import { miya } from "./heroes/miya.js";
import { balmond } from "./heroes/balmond.js";
import { saber } from "./heroes/saber.js";
import { alice } from "./heroes/alice.js";
import { nana } from "./heroes/nana.js";
import { tigreal } from "./heroes/tigreal.js";
import { alucard } from "./heroes/alucard.js";
import { karina } from "./heroes/karina.js";
import { akai } from "./heroes/akai.js";
import { franco } from "./heroes/franco.js";
import { bane } from "./heroes/bane.js";
import { bruno } from "./heroes/bruno.js";
import { clint } from "./heroes/clint.js";
import { rafaela } from "./heroes/rafaela.js";
import { eudora } from "./heroes/eudora.js";
import { zilong } from "./heroes/zilong.js";
import { fanny } from "./heroes/fanny.js";
import { layla } from "./heroes/layla.js";
import { minotaur } from "./heroes/minotaur.js";
import { lolita } from "./heroes/lolita.js";
import { hayabusa } from "./heroes/hayabusa.js";
import { freya } from "./heroes/freya.js";

/*fake - need to be finished in the future*/
import { gord } from "./heroes/gord.js";
import { natalia } from "./heroes/natalia.js";
import { kagura } from "./heroes/kagura.js";
import { chou } from "./heroes/chou.js";
import { sun } from "./heroes/sun.js";
import { alpha } from "./heroes/alpha.js";
import { ruby } from "./heroes/ruby.js";
import { yisunshin } from "./heroes/yisunshin.js";
import { moscov } from "./heroes/moscov.js";
import { johnson } from "./heroes/johnson.js";
import { cyclops } from "./heroes/cyclops.js";
import { estes } from "./heroes/estes.js";
import { hilda } from "./heroes/hilda.js";
import { aurora } from "./heroes/aurora.js";
import { lapulapu } from "./heroes/lapulapu.js";
import { vexana } from "./heroes/vexana.js";
import { roger } from "./heroes/roger.js";
import { karrie } from "./heroes/karrie.js";
import { gatotkaca } from "./heroes/gatotkaca.js";
import { harley } from "./heroes/harley.js";
import { irithel } from "./heroes/irithel.js";
import { grock } from "./heroes/grock.js";
import { argus } from "./heroes/argus.js";
import { odette } from "./heroes/odette.js";
import { lancelot } from "./heroes/lancelot.js";
import { diggie } from "./heroes/diggie.js";
import { hylos } from "./heroes/hylos.js";
import { zhask } from "./heroes/zhask.js";
/*
import { helcurt } from "./heroes/helcurt.js";
import { pharsa } from "./heroes/pharsa.js";
import { lesley } from "./heroes/lesley.js";
import { jawhead } from "./heroes/jawhead.js";
import { angela } from "./heroes/angela.js";
import { gusion } from "./heroes/gusion.js";
import { valir } from "./heroes/valir.js";
import { martis } from "./heroes/martis.js";
import { uranus } from "./heroes/uranus.js";
import { hanabi } from "./heroes/hanabi.js";
import { change } from "./heroes/change.js";
import { kaja } from "./heroes/kaja.js";
import { selena } from "./heroes/selena.js";
import { aldous } from "./heroes/aldous.js";
import { claude } from "./heroes/claude.js";
import { vale } from "./heroes/vale.js";
import { leomord } from "./heroes/sun.js";
import { lunox } from "./heroes/lunox.js";
import { hanzo } from "./heroes/hanzo.js";
import { belerick } from "./heroes/belerick.js";
import { kimmy } from "./heroes/kimmy.js";
import { thamuz } from "./heroes/thamuz.js";
import { harith } from "./heroes/harith.js";
import { minsitthar } from "./heroes/minsitthar.js";
import { kadita } from "./heroes/kadita.js";
import { faramis } from "./heroes/faramis.js";
import { badang } from "./heroes/badang.js";
import { khufra } from "./heroes/khufra.js";
import { granger } from "./heroes/granger.js";
import { guinevere } from "./heroes/guinevere.js";
import { esmeralda } from "./heroes/esmeralda.js";
import { terizla } from "./heroes/terizla.js";
import { xborg } from "./heroes/xborg.js";
import { ling } from "./heroes/ling.js";
import { dyrroth } from "./heroes/dyrroth.js";
import { lylia } from "./heroes/lylia.js";
import { baxia } from "./heroes/baxia.js";
import { masha } from "./heroes/masha.js";
import { wanwan } from "./heroes/wanwan.js";
import { silvanna } from "./heroes/silvanna.js";
import { cecillion } from "./heroes/cecillion.js";
import { carmilla } from "./heroes/carmilla.js";
import { atlas } from "./heroes/atlas.js";
import { popolkupa } from "./heroes/popolkupa.js";
import { yuzhong } from "./heroes/yuzhong.js";
import { luoyi } from "./heroes/luoyi.js";
import { benedetta } from "./heroes/bendetta.js";
import { khaleed } from "./heroes/khaleed.js";
import { barats } from "./heroes/barats.js";
import { brody } from "./heroes/brody.js";
import { yve } from "./heroes/yve.js";
import { mathilda } from "./heroes/mathilda.js";
import { paquito } from "./heroes/paquito.js";
import { gloo } from "./heroes/gloo.js";
import { beatrix } from "./heroes/beatrix.js";
import { phoveus } from "./heroes/phoveus.js";
import { natan } from "./heroes/natan.js";
import { aulus } from "./heroes/aulus.js";
import { aamon } from "./heroes/aamon.js";
import { valentina } from "./heroes/valentina.js";
import { edith } from "./heroes/edith.js";
import { floryn } from "./heroes/floryn.js";
import { yin } from "./heroes/yin.js";
import { melissa } from "./heroes/melissa.js";
import { xavier } from "./heroes/xavier.js";
import { julian } from "./heroes/julian.js";
import { fredrinn } from "./heroes/fredrinn.js";
import { joy } from "./heroes/joy.js";
import { novaria } from "./heroes/novaria.js";
import { arlott } from "./heroes/arlott.js";
import { ixia } from "./heroes/ixia.js";
import { nolan } from "./heroes/nolan.js";
import { cici } from "./heroes/cici.js";
import { chip } from "./heroes/chip.js";
import { zhuxin } from "./heroes/zhuxin.js";
import { suyou } from "./heroes/suyou.js";
import { lukas } from "./heroes/lukas.js";
import { kalea } from "./heroes/kalea.js";
import { zetian } from "./heroes/zetian.js";
import { obsidia } from "./heroes/obsidia.js";
import { sora } from "./heroes/sora.js";
import { marcel } from "./heroes/marcel.js";
import { hirara } from "./heroes/hirara.js";
*/

const heroes = [

    miya,
    balmond,
    saber,
    alice,
    nana,
    tigreal,
    alucard,
    karina,
    akai,
    franco,
    bane,
    bruno,
    clint,
    rafaela,
    eudora,
    zilong,
    fanny,
    layla,
    minotaur,
    lolita,
    hayabusa,
    freya,

    /*fake - need to be finished in the future*/
    gord,
    natalia,
    kagura,
    chou,
    sun,
    alpha,
    ruby,
    yisunshin,
    moscov,
    johnson,
    cyclops,
    estes,
    hilda,
    aurora,
    lapulapu,
    vexana,
    roger,
    karrie,
    gatotkaca,
    harley,
    irithel,
    grock,
    argus,
    odette,
    lancelot,
    diggie,
    hylos,
    zhask,
    /*
    helcurt,
    pharsa,
    lesley,
    jawhead,
    angela,
    gusion,
    valir,
    martis,
        uranus,
        hanabi,
        change,
        kaja,
        selena,
        aldous,
        claude,
        vale,
        leomord,
        lunox,
        hanzo,
        belerick,
        kimmy,
        thamuz,
        harith,
        minsitthar,
        kadita,
        faramis,
        badang,
        khufra,
        granger,
        guinevere,
        esmeralda,
        terizla,
        xborg,
        ling,
        dyrroth,
        lylia,
        baxia,
        masha,
        wanwan,
        silvanna,
        cecillion,
        carmilla,
        atlas,
        popolkupa,
        yuzhong,
        luoyi,
        benedetta,
        khaleed,
        barats,
        brody,
        yve,
        mathilda,
        paquito,
        gloo,
        beatrix,
        phoveus,
        natan,
        aulus,
        aamon,
        valentina,
        edith,
        floryn,
        yin,
        melissa,
        xavier,
        julian,
        fredrinn,
        joy,
        novaria,
        arlott,
        ixia,
        nolan,
        cici,
        chip,
        zhuxin,
        suyou,
        lukas,
        kalea,
        zetian,
        obsidia,
        sora,
        marcel,
        hirara,
    */

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


    /* ================= EXTRA INFO ================= */

    let extraInfoHTML = "";

    if (
        skill.extraInfo &&
        skill.extraInfo.length > 0
    ) {

        extraInfoHTML = skill.extraInfo
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
            .join("");

    }


    /* ================= SCALING ================= */

    let scalingHTML = "";

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
                        `<th>
                                            Level ${index + 1}
                                        </th>`
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
                                    `<td>
                                                        ${value}
                                                    </td>`
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


    /* ================= SKILL DETAILS ================= */

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


                <!-- SKILL TYPE TAGS -->

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


        <!-- ================= SKILL INFO ================= -->

        <div class="skill-info">

            <!-- COOLDOWN -->

            <div class="skill-info-box">

                <h5>
                    Cooldown
                </h5>

                <p>
                    ${skill.cooldown}
                </p>

            </div>


            <!-- COST -->

            <div class="skill-info-box">

                <h5>
                    Cost
                </h5>

                <p>
                    ${skill.cost}
                </p>

            </div>


            <!-- EXTRA INFO -->

            ${extraInfoHTML}

        </div>


        <!-- ================= DESCRIPTION ================= -->

        <p class="skill-description">
            ${skill.description}
        </p>


        <!-- ================= SCALING ================= -->

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