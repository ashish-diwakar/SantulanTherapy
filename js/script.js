/*=========================================================
  Santulan Therapy Clinic
  Main Application
=========================================================*/

"use strict";

/*=========================================================
  Application
=========================================================*/

const App = {

    initialize() {

        this.cacheDOM();

        this.bindData();

        this.initializeModules();

        this.initializeCurrentYear();

        console.info(

            `%c${CONFIG.clinic.name}`,

            "color:#2E5E4E;font-size:18px;font-weight:bold;"

        );

    },

    /*=====================================================
      Cache DOM
    =====================================================*/

    cacheDOM() {

        this.phoneLinks =
            document.querySelectorAll(".js-phone");

        this.whatsappLinks =
            document.querySelectorAll(".js-whatsapp");

        this.emailLinks =
            document.querySelectorAll(".js-email");

        this.address =
            document.querySelectorAll(".js-address");

        this.mapFrames =
            document.querySelectorAll(".js-map");

        this.currentYear =
            document.querySelectorAll(".js-current-year");

    },

    /*=====================================================
      Bind Configuration
    =====================================================*/

    bindData() {

        this.phoneLinks.forEach(item => {

            item.href = CONFIG.contact.phoneLink;

            item.textContent = CONFIG.contact.phone;

        });

        this.whatsappLinks.forEach(item => {

            item.href = CONFIG.contact.whatsappLink;

        });

        this.emailLinks.forEach(item => {

            item.href = CONFIG.contact.emailLink;

            item.textContent = CONFIG.contact.email;

        });

        this.address.forEach(item => {

            item.textContent =

                CONFIG.location.fullAddress;

        });

        this.mapFrames.forEach(item => {

            item.src =

                CONFIG.location.mapEmbed;

        });

    },

    /*=====================================================
      Modules
    =====================================================*/

    initializeModules() {

        if (typeof initializeNavigation === "function") {

            initializeNavigation();

        }

        if (typeof initializeFAQ === "function") {

            initializeFAQ();

        }

        if (typeof initializeAnimations === "function") {

            initializeAnimations();

        }

    },

    /*=====================================================
      Footer Year
    =====================================================*/

    initializeCurrentYear() {

        const year = new Date().getFullYear();

        this.currentYear.forEach(item => {

            item.textContent = year;

        });

    }

};

/*=========================================================
  Start Application
=========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        App.initialize();

    }

);