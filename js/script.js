// ================= NAVBAR =================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbarCollapse);

            bsCollapse.hide();
        }

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");

    } else {

        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");

    }

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});


// ================= SCROLL ANIMATION =================

const cards =
    document.querySelectorAll(
        ".project-card, .service-card, .timeline-item"
    );

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});


// ================= CURRENT YEAR =================

const year = new Date().getFullYear();

document.querySelector(".copyright").innerHTML =
    `© ${year} Aman Shikalgar. All Rights Reserved.`;