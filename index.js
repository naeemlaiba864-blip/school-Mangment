// =========================================
// EduManage JavaScript
// =========================================

// Page Loaded
window.addEventListener("load", function () {
    console.log("EduManage Website Loaded Successfully");
});

// ==============================
// Portal Login Button
// ==============================

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        alert("Welcome to EduManage Portal!\n\nLogin System Coming Soon.");

    });
}

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// Navbar Shadow
// ==============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#084298";

        header.style.transition = "0.4s";

    }

    else {

        header.style.background = "#0d6efd";

    }

});

// ==============================
// Hero Button Animation
// ==============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});

// ==============================
// Feature Cards Hover
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ==============================
// News Cards Hover
// ==============================

const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==============================
// Statistics Counter Animation
// ==============================

const counters = document.querySelectorAll(".stat-box h2");

function startCounter() {

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let count = 0;

        const speed = number / 80;

        const update = () => {

            count += speed;

            if (count < number) {

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = text;

            }

        };

        update();

    });

}

startCounter();

// ==============================
// Welcome Message
// ==============================

setTimeout(function () {

    console.log("Welcome to EduManage");

},1000);