/*=========================================================
  Santulan Therapy Clinic
  Main Application
=========================================================*/

"use strict";

/*=========================================================
  Application
=========================================================*/

const App = {

    /*=====================================================
      Initialize Application
    =====================================================*/

    initialize() {

        this.cacheDOM();

        this.bindConfiguration();

        this.initializeUI();

        this.initializeCurrentYear();

        this.logApplication();

    },

    /*=====================================================
      Cache DOM Elements
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

    bindConfiguration() {

        this.bindPhone();

        this.bindWhatsApp();

        this.bindEmail();

        this.bindAddress();

        this.bindMap();

    },

    /*=====================================================
      Phone
    =====================================================*/

    bindPhone() {

        this.phoneLinks.forEach(link => {

            link.href = CONFIG.contact.phoneLink;

            link.textContent = CONFIG.contact.phone;

        });

    },

    /*=====================================================
      WhatsApp
    =====================================================*/

    bindWhatsApp() {

        this.whatsappLinks.forEach(link => {

            link.href = CONFIG.contact.whatsappLink;

        });

    },

    /*=====================================================
      Email
    =====================================================*/

    bindEmail() {

        this.emailLinks.forEach(link => {

            link.href = CONFIG.contact.emailLink;

            link.textContent = CONFIG.contact.email;

        });

    },

    /*=====================================================
      Address
    =====================================================*/

    bindAddress() {

        this.address.forEach(item => {

            item.textContent =
                CONFIG.location.fullAddress;

        });

    },

    /*=====================================================
      Google Map
    =====================================================*/

    bindMap() {

        this.mapFrames.forEach(frame => {

            frame.src =
                CONFIG.location.mapEmbed;

        });

    },

    /*=====================================================
      Initialize UI Modules
    =====================================================*/

    initializeUI() {

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

    },

    /*=====================================================
      Console Information
    =====================================================*/

    logApplication() {

        console.info(

            `%c${CONFIG.clinic.name}`,

            "color:#2E5E4E;font-size:18px;font-weight:bold;"

        );

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