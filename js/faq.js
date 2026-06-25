/*=========================================================
  Santulan Therapy Clinic
  FAQ Accordion
=========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initializeFAQ();

});

/*=========================================================
  Initialize FAQ
=========================================================*/

function initializeFAQ() {

    const faqItems = document.querySelectorAll(
        ".faq-container details"
    );

    if (!faqItems.length)
        return;

    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (!item.open)
                return;

            closeOtherFAQs(item, faqItems);

            scrollFAQIntoView(item);

        });

    });

}

/*=========================================================
  Close Other FAQs
=========================================================*/

function closeOtherFAQs(currentItem, faqItems) {

    faqItems.forEach(item => {

        if (item !== currentItem) {

            item.open = false;

        }

    });

}

/*=========================================================
  Scroll Active FAQ Into View
=========================================================*/

function scrollFAQIntoView(item) {

    const headerOffset = 100;

    const elementPosition =
        item.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition =
        elementPosition - headerOffset;

    window.scrollTo({

        top: offsetPosition,

        behavior: "smooth"

    });

}

/*=========================================================
  Open First FAQ (Optional)
=========================================================*/

// Uncomment if you want the first FAQ
// to remain open by default.

/*
document.addEventListener("DOMContentLoaded", () => {

    const firstFAQ =
        document.querySelector(".faq-container details");

    if(firstFAQ){

        firstFAQ.open = true;

    }

});
*/