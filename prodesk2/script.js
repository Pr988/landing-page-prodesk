// ===============================
// DOM Loaded
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Theme Toggle
    // ===============================

    const themeBtn = document.getElementById("themeBtn");

    let darkMode = false;

    themeBtn.addEventListener("click", () => {

        if (darkMode) {

            document.body.className = "default";
            themeBtn.innerHTML = "light_mode";

        } else {

            document.body.className = "dark";
            themeBtn.innerHTML = "dark_mode";

        }

        darkMode = !darkMode;

    });

    // ===============================
    // Get Started Button
    // ===============================

    const getStartedBtn = document.getElementById("getStartedBtn");

    getStartedBtn.addEventListener("click", () => {

        document.getElementById("services").scrollIntoView({
            behavior: "smooth"
        });

        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            card.classList.add("highlight");

            setTimeout(() => {
                card.classList.remove("highlight");
            }, 1500);

        });

    });

    // ===============================
    // Hamburger Menu
    // ===============================

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {

        mobileMenu.classList.toggle("show");

    });

    // ===============================
    // Close Mobile Menu
    // ===============================

    const links = document.querySelectorAll(".mobile-menu a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("show");

        });

    });

    // ===============================
    // Smooth Scroll for Desktop Links
    // ===============================

    const desktopLinks = document.querySelectorAll(".nav-links a");

    desktopLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

    // ===============================
    // Smooth Scroll for Mobile Links
    // ===============================

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});