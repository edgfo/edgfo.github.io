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

            const header =
                document.getElementById("header-placeholder");

            if (header) {

                header.innerHTML = data;

                /* =========================
                   MOBILE MENU
                ========================= */

                const menuButton =
                    document.querySelector(".menu-toggle");

                const nav =
                    document.getElementById("mainNav");

                if (menuButton && nav) {

                    menuButton.addEventListener("click", function () {

                        nav.classList.toggle("active");

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

            const footer =
                document.getElementById("footer-placeholder");

            if (footer) {

                footer.innerHTML = data;

            }

        })
        .catch(function (error) {

            console.error(
                "Footer loading error:",
                error
            );

        });

});
