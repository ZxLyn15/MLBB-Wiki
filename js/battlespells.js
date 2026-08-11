const tabs = document.querySelectorAll(".spell-tab");
const pages = document.querySelectorAll(".spell-page");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        pages.forEach(p => p.classList.remove("active-page"));

        tab.classList.add("active");

        const page = document.getElementById(tab.dataset.target);

        page.classList.add("active-page");

        // Wait for the content to become visible
        setTimeout(() => {

            const navHeight = document.querySelector(".top-nav").offsetHeight;
            const breadcrumbHeight = document.querySelector(".breadcrumb").offsetHeight;

            const offset = navHeight + breadcrumbHeight + 20;

            const pagePosition = page.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: pagePosition - offset,
                behavior: "smooth"
            });

        }, 50);

    });

});

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href="../login.html";

}