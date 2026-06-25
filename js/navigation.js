/*=========================================================
  Santulan Therapy Clinic
  Navigation
=========================================================*/

"use strict";

// document.addEventListener("DOMContentLoaded", () => {

//     initializeNavigation();

// });

/*=========================================================
  Initialize
=========================================================*/

function initializeNavigation() {

    setupStickyHeader();

    setupSmoothScrolling();

    setupActiveNavigation();

    setupMobileMenu();

}

/*=========================================================
  Sticky Header
=========================================================*/

function setupStickyHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });

}

/*=========================================================
  Smooth Scroll
=========================================================*/

function setupSmoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#")
                return;

            const target = document.querySelector(targetId);

            if (!target)
                return;

            e.preventDefault();

            const headerHeight = 90;

            const top =

                target.offsetTop - headerHeight;

            window.scrollTo({

                top,

                behavior: "smooth"

            });

            const mobileMenu =
                document.getElementById("mobileNavigation");

            const overlay =
                document.getElementById("mobileOverlay");

            const button =
                document.getElementById("mobileMenu");

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

            }

            if (overlay) {

                overlay.classList.remove("active");

            }

            if (button) {

                button.innerHTML = "☰";

                button.setAttribute(

                    "aria-expanded",

                    "false"

                );

            }

            document.body.style.overflow = "";

        });

    });

}

/*=========================================================
  Active Menu
=========================================================*/

function setupActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a, .mobile-navigation a");

    if (!sections.length || !navLinks.length)
        return;

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =

                section.offsetTop - 150;

            const sectionHeight =

                section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&

                window.scrollY < sectionTop + sectionHeight

            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =

                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

}

/*=========================================================
  Mobile Menu
=========================================================*/

/*=========================================================
  Mobile Navigation
=========================================================*/

function setupMobileMenu() {

    const button =
        document.getElementById("mobileMenu");

    const menu =
        document.getElementById("mobileNavigation");

    const overlay =
        document.getElementById("mobileOverlay");

    if (!button || !menu || !overlay)
        return;

    const openMenu = () => {

        menu.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

        button.setAttribute(
            "aria-expanded",
            "true"
        );

        button.classList.add("active");

    };

    const closeMenu = () => {

        menu.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow = "";

        button.setAttribute(
            "aria-expanded",
            "false"
        );

        button.classList.remove("active");

    };

    button.addEventListener(

        "click",

        () => {

            if (menu.classList.contains("active")) {

                closeMenu();

            } else {

                openMenu();

            }

        }

    );

    overlay.addEventListener(

        "click",

        closeMenu

    );

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener(

            "click",

            closeMenu

        );

    });

    document.addEventListener(

        "keydown",

        e => {

            if (

                e.key === "Escape"

            ) {

                closeMenu();

            }

        }

    );

    window.addEventListener(

        "resize",

        () => {

            if (

                window.innerWidth > 992

            ) {

                closeMenu();

            }

        }

    );

}

/*=========================================================
  Close Mobile Menu
=========================================================*/

// window.addEventListener("resize", () => {

//     if (window.innerWidth > 992) {

//         const nav =

//             document.querySelector(".nav-links");

//         const button =

//             document.getElementById("mobileMenu");

//         if (nav)
//             nav.classList.remove("mobile-open");

//         if (button)
//             button.classList.remove("active");

//     }

// });