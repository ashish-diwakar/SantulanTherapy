/*=========================================================
  Santulan Therapy Clinic
  Configuration File
=========================================================*/

"use strict";

/*=========================================================
  Website Configuration
=========================================================*/

const CONFIG = {

    clinic: {

        name: "Santulan Therapy Clinic",

        therapist: "Rashi Tangri",

        designation: "Counseling Psychologist",

        tagline: "Helping You Find Balance Through Compassionate Therapy",

        description:
            "Professional psychological counselling for individuals, couples, children and families."

    },

    contact: {

        phone: "+91 96508 30779",

        phoneLink: "tel:+919650830779",

        whatsapp: "+91 96508 30779",

        whatsappNumber: "919650830779",

        whatsappMessage:
            "Hello Rashi Tangri, I would like to book an appointment.",

        email: "rashitangri7231@gmail.com",

        emailLink: "mailto:rashitangri7231@gmail.com"

    },

    location: {

        address1: "DDA Flats",

        address2: "Satyam Enclave",

        area: "Jhilmil",

        city: "Delhi",

        pincode: "110095",

        latitude: "28.6674552",

        longitude: "77.3048308",

        mapEmbed:
            "https://www.google.com/maps?q=28.6674552,77.3048308&z=17&output=embed",

        mapLink:
            "https://www.google.com/maps/place/Accurate+Dewatering+Systems/@28.6674552,77.3048308,17z"

    },

    businessHours: {

        monday: "10:00 AM - 7:00 PM",

        tuesday: "10:00 AM - 7:00 PM",

        wednesday: "10:00 AM - 7:00 PM",

        thursday: "10:00 AM - 7:00 PM",

        friday: "10:00 AM - 7:00 PM",

        saturday: "10:00 AM - 5:00 PM",

        sunday: "By Appointment"

    },

    social: {

        facebook: "",

        instagram: "",

        linkedin: "",

        youtube: ""

    },

    appointment: {

        enabled: true,

        mode: "WhatsApp"

    },

    theme: {

        primary: "#2E5E4E",

        accent: "#C8A25A"

    }

};

/*=========================================================
  Derived Values
=========================================================*/

CONFIG.contact.whatsappLink =
    `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(CONFIG.contact.whatsappMessage)}`;

CONFIG.location.fullAddress =

    `${CONFIG.location.address1},
${CONFIG.location.address2},
${CONFIG.location.area},
${CONFIG.location.city} - ${CONFIG.location.pincode}`;

/*=========================================================
  Freeze Configuration
=========================================================*/

Object.freeze(CONFIG);

/*=========================================================
  Helper Functions
=========================================================*/

function getWhatsAppLink() {

    return CONFIG.contact.whatsappLink;

}

function getMapLink() {

    return CONFIG.location.mapLink;

}

function getMapEmbed() {

    return CONFIG.location.mapEmbed;

}

function getPhoneLink() {

    return CONFIG.contact.phoneLink;

}

function getEmailLink() {

    return CONFIG.contact.emailLink;

}

function getFullAddress() {

    return CONFIG.location.fullAddress;

}

function getClinicName() {

    return CONFIG.clinic.name;

}

function getTherapistName() {

    return CONFIG.clinic.therapist;

}