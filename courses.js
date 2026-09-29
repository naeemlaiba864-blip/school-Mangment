// ==========================================
// EduManage Courses JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Courses Page Loaded Successfully");

    // ==============================
    // Course Search
    // ==============================

    const searchInput = document.getElementById("searchCourse");
    const courseCards = document.querySelectorAll(".course-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            courseCards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    // ==============================
    // Enroll Button
    // ==============================

    const enrollButtons = document.querySelectorAll(".enroll-btn");

    enrollButtons.forEach(button => {

        button.addEventListener("click", function () {

            const courseName = this.parentElement.querySelector("h3").innerText;

            const confirmEnroll = confirm(
                `Do you want to apply for "${courseName}"?`
            );

            if (confirmEnroll) {

                alert(
                    `Application request for "${courseName}" submitted successfully.\n\nPlease complete the Admission Form.`
                );

                window.location.href = "admissions.html";

            }

        });

    });

    // ==============================
    // Highlight Search Results
    // ==============================

    if (searchInput) {

        searchInput.addEventListener("focus", function () {

            this.style.background = "#eef6ff";

        });

        searchInput.addEventListener("blur", function () {

            this.style.background = "#fff";

        });

    }

    // ==============================
    // Card Hover Effect
    // ==============================

    courseCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transition = "0.3s";

            this.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    // ==============================
    // Course Counter
    // ==============================

    console.log("Total Courses : " + courseCards.length);

});