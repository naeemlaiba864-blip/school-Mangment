// ==========================================
// EduManage Student Dashboard JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Dashboard Loaded Successfully");

    // ==========================
    // Welcome Message
    // ==========================

    setTimeout(function () {

        alert("👋 Welcome to EduManage Student Dashboard!");

    }, 500);

    // ==========================
    // Current Date
    // ==========================

    const today = new Date();

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    console.log("Today's Date : " + today.toLocaleDateString("en-US", options));

    // ==========================
    // Quick Action Buttons
    // ==========================

    const actionCards = document.querySelectorAll(".action-card");

    actionCards.forEach(function(card){

        card.addEventListener("mouseenter",function(){

            this.style.transform="translateY(-8px) scale(1.03)";

        });

        card.addEventListener("mouseleave",function(){

            this.style.transform="translateY(0)";

        });

    });

    // ==========================
    // Profile Button
    // ==========================

    const profileButton = document.querySelector(".profile-card .btn");

    if(profileButton){

        profileButton.addEventListener("click",function(){

            alert("✏ Profile editing feature will be available soon.");

        });

    }

    // ==========================
    // Dashboard Cards Animation
    // ==========================

    const cards = document.querySelectorAll(
        ".info-card,.stat-card,.announcement-card,.task-card"
    );

    cards.forEach(function(card,index){

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        setTimeout(function(){

            card.style.transition="0.6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

    // ==========================
    // Schedule Row Hover
    // ==========================

    const rows=document.querySelectorAll(".schedule-table tbody tr");

    rows.forEach(function(row){

        row.addEventListener("mouseenter",function(){

            this.style.background="#eef6ff";

        });

        row.addEventListener("mouseleave",function(){

            this.style.background="";

        });

    });

    // ==========================
    // Announcement Click
    // ==========================

    const announcements=document.querySelectorAll(".announcement-card");

    announcements.forEach(function(item){

        item.addEventListener("click",function(){

            alert("📢 Announcement opened successfully.");

        });

    });

    // ==========================
    // Task Complete
    // ==========================

    const tasks=document.querySelectorAll(".task-card");

    tasks.forEach(function(task){

        task.addEventListener("click",function(){

            this.style.borderLeft="6px solid green";

            this.style.background="#eafaf1";

            alert("✅ Task marked as completed.");

        });

    });

    // ==========================
    // Footer
    // ==========================

    console.log("EduManage Dashboard Ready");

});