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

                const menuToggle =
                    document.getElementById("menuToggle");

                const mainNav =
                    document.getElementById("mainNav");


                if (menuToggle && mainNav) {

                    menuToggle.addEventListener(
                        "click",
                        function () {

                            mainNav.classList.toggle("active");

                            const isOpen =
                                mainNav.classList.contains("active");

                            menuToggle.setAttribute(
                                "aria-expanded",
                                isOpen ? "true" : "false"
                            );

                        }
                    );


                    /* CLOSE MENU WHEN A LINK IS CLICKED */

                    const navLinks =
                        mainNav.querySelectorAll("a");

                    navLinks.forEach(function (link) {

                        link.addEventListener(
                            "click",
                            function () {

                                mainNav.classList.remove("active");

                                menuToggle.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }
                        );

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
