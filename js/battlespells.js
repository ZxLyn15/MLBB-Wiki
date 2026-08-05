const headers = document.querySelectorAll(".spell-header");

headers.forEach(header => {

    header.addEventListener("click", () => {

        const card = header.parentElement;

        card.classList.toggle("active");

    });

});