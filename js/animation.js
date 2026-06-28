/*=========================================================
  Santulan Therapy Clinic
  Scroll Animations
=========================================================*/

"use strict";

// document.addEventListener("DOMContentLoaded", () => {

//     initializeAnimations();

// });

/*=========================================================
  Initialize
=========================================================*/

function initializeAnimations(){

    const animatedElements =

        document.querySelectorAll(

        ".reveal,.fade,.scale,.slide-left,.slide-right"

    );

    if(animatedElements.length){

        const observer =

            new IntersectionObserver(

                handleIntersection,

                {

                    threshold:.15

                }

            );

        animatedElements.forEach(

            element=>observer.observe(element)

        );

    }

    staggerAnimation(".service-card");

    staggerAnimation(".feature-card");

    staggerAnimation(".process-card");

    staggerAnimation(".testimonial-card");

    staggerAnimation(".stat-card");

}

/*=========================================================
  Observer Callback
=========================================================*/

function handleIntersection(entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting)
            return;

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

    });

}

/*=========================================================
  Stagger Animation
=========================================================*/

// document.addEventListener("DOMContentLoaded", () => {

//     staggerAnimation(

//         ".service-card"

//     );

//     staggerAnimation(

//         ".feature-card"

//     );

//     staggerAnimation(

//         ".process-card"

//     );

//     staggerAnimation(

//         ".testimonial-card"

//     );

//     staggerAnimation(

//         ".stat-card"

//     );

// });

/*=========================================================
  Apply Delay
=========================================================*/

function staggerAnimation(selector) {

    const items = document.querySelectorAll(selector);

    if (!items.length)
        return;

    items.forEach((item,index)=>{

        item.style.transitionDelay =

            `${index * 100}ms`;

    });

}

/*=========================================================
  Reset
=========================================================*/

function resetAnimations(){

    document

        .querySelectorAll(".active")

        .forEach(element=>{

            element.classList.remove("active");

        });

}


document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".reveal,.slide-left,.slide-right,.scale,.fade")
        .forEach((element) => observer.observe(element));

});