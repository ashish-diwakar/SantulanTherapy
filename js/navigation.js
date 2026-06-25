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

        });

    });

}

/*=========================================================
  Active Menu
=========================================================*/

function setupActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

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

function setupMobileMenu() {

    const button =

        document.getElementById("mobileMenu");

    const nav =

        document.querySelector(".nav-links");

    if (!button || !nav)
        return;

    button.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

        button.classList.toggle("active");

    });

    const links =

        nav.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

            button.classList.remove("active");

        });

    });

}

/*=========================================================
  Close Mobile Menu
=========================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        const nav =

            document.querySelector(".nav-links");

        const button =

            document.getElementById("mobileMenu");

        if (nav)
            nav.classList.remove("mobile-open");

        if (button)
            button.classList.remove("active");

    }

});