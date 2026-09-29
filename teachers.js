//==========================================
// EduManage Teacher Dashboard JavaScript
//==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Teacher Dashboard Loaded Successfully");

    //======================================
    // Welcome Message
    //======================================

    setTimeout(function () {

        alert("👨‍🏫 Welcome to EduManage Teacher Dashboard!");

    }, 500);

    //======================================
    // Current Date & Time
    //======================================

    const today = new Date();

    console.log("Current Date : " + today.toLocaleDateString());
    console.log("Current Time : " + today.toLocaleTimeString());

    //======================================
    // Edit Profile Button
    //======================================

    const profileBtn = document.querySelector(".profile-card .btn");

    if (profileBtn) {

        profileBtn.addEventListener("click", function () {

            alert("✏ Edit Profile feature will be available soon.");

        });

    }

    //======================================
    // Class Cards
    //======================================

    const classCards = document.querySelectorAll(".class-card");

    classCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const className = this.querySelector("h3").innerText;

            alert("📚 Opening details for " + className);

        });

    });

    //======================================
    // Activity Cards
    //======================================

    const activities = document.querySelectorAll(".activity-card");

    activities.forEach(function (activity) {

        activity.addEventListener("click", function () {

            alert("✅ Activity opened successfully.");

        });

    });

    //======================================
    // Notifications
    //======================================

    const notifications = document.querySelectorAll(".notification-card");

    notifications.forEach(function (note) {

        note.addEventListener("click", function () {

            this.style.background = "#d4edda";
            this.style.borderLeft = "5px solid green";

            alert("🔔 Notification marked as read.");

        });

    });

    //======================================
    // Schedule Table Hover
    //======================================

    const rows = document.querySelectorAll(".schedule-table tbody tr");

    rows.forEach(function (row) {

        row.addEventListener("mouseenter", function () {

            this.style.background = "#eef5ff";

        });

        row.addEventListener("mouseleave", function () {

            this.style.background = "";

        });

    });

    //======================================
    // Quick Info Cards Animation
    //======================================

    const infoCards = document.querySelectorAll(".info-card");

    infoCards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(function () {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

    //======================================
    // Dashboard Ready
    //======================================

    console.log("Teacher Dashboard Ready!");

});