/* =========================
   LOAD CENTRAL HEADER
========================= */

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading header:", error);
    });


/* =========================
   LOAD CENTRAL FOOTER
========================= */

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading footer:", error);
    });


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }

}
