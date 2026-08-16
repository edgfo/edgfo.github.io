document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LOAD CENTRAL HEADER
    ========================= */

    fetch("header.html")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load header.html");
            }

            return response.text();

        })
        .then(function (data) {

            const headerPlaceholder =
                document.getElementById("header-placeholder");

            if (headerPlaceholder) {

                headerPlaceholder.innerHTML = data;


                /* =========================
                   MOBILE MENU
                ========================= */

                const menuToggle =
                    document.getElementById("menuToggle");

                const mainNav =
                    document.getElementById("mainNav");


                if (menuToggle && mainNav) {

                    menuToggle.addEventListener("click", function () {

                        mainNav.classList.toggle("active");

                        const isOpen =
                            mainNav.classList.contains("active");


                        menuToggle.setAttribute(
                            "aria-expanded",
                            isOpen ? "true" : "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        );

                    });


                    /* =========================
                       CLOSE MENU AFTER LINK CLICK
                    ========================= */

                    const navLinks =
                        mainNav.querySelectorAll("a");


                    navLinks.forEach(function (link) {

                        link.addEventListener("click", function () {

                            mainNav.classList.remove("active");

                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            menuToggle.setAttribute(
                                "aria-label",
                                "Open navigation menu"
                            );

                        });

                    });

                }

            }

        })
        .catch(function (error) {

            console.error(
                "Header loading error:",
                error
            );

        });


    /* =========================
       LOAD CENTRAL FOOTER
    ========================= */

    fetch("footer.html")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load footer.html");
            }

            return response.text();

        })
        .then(function (data) {

            const footerPlaceholder =
                document.getElementById("footer-placeholder");

            if (footerPlaceholder) {

                footerPlaceholder.innerHTML = data;

            }

        })
        .catch(function (error) {

            console.error(
                "Footer loading error:",
                error
            );

        });


    /* =========================
       REMOVE LOADER LOGO
       FROM ALL PAGES
    ========================= */

    const loaderLogos =
        document.querySelectorAll(".loader-logo");


    loaderLogos.forEach(function (logo) {

        logo.remove();

    });

});


/* =========================
   EDGF PAGE LOADER
========================= */

window.addEventListener("load", function () {

    /* =========================
       REMOVE LOADER LOGO AGAIN
       BEFORE HIDING LOADER
    ========================= */

    const loaderLogos =
        document.querySelectorAll(".loader-logo");


    loaderLogos.forEach(function (logo) {

        logo.remove();

    });


    /* =========================
       HIDE PAGE LOADER
    ========================= */

    const loader =
        document.getElementById("pageLoader");


    if (loader) {

        setTimeout(function () {

            loader.classList.add("loader-hidden");

        }, 300);

    }

});
