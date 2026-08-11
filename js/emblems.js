function showEmblem(emblemId, button){

    // Hides emblem pages
    const pages = document.querySelectorAll(".emblem-page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });

    // Removes the active tab
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });

    // Shows the  selected page
    document.getElementById(emblemId).classList.add("active-page");

    // Highlights the selected tab
    button.classList.add("active");

}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href="../login.html";

}