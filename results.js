//==========================================
// EduManage Result Management System
// results.js
//==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Result Management System Loaded");

    //==================================
    // Search Student
    //==================================

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("studentSearch");

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            const rollNo = searchInput.value.trim();

            if (rollNo === "") {

                alert("Please enter a Roll Number.");

                searchInput.focus();

                return;

            }

            alert("Searching result for Roll No: " + rollNo);

        });

    }

    //==================================
    // Calculate Result
    //==================================

    const marks = [88, 91, 95, 86, 80];

    const totalMarks = marks.length * 100;

    const obtainedMarks = marks.reduce((a, b) => a + b, 0);

    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

    let grade = "";
    let status = "PASS ✅";

    if (percentage >= 90) {

        grade = "A+";

    } else if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "F";
        status = "FAIL ❌";

    }

    //==================================
    // Update HTML
    //==================================

    document.getElementById("totalMarks").textContent = totalMarks;
    document.getElementById("obtainedMarks").textContent = obtainedMarks;
    document.getElementById("percentage").textContent = percentage + "%";
    document.getElementById("grade").textContent = grade;

    const finalStatus = document.getElementById("finalStatus");

    finalStatus.textContent = status;

    if (status.includes("FAIL")) {

        finalStatus.style.color = "#dc3545";

    } else {

        finalStatus.style.color = "#198754";

    }

    //==================================
    // Print Result
    //==================================

    const printBtn = document.getElementById("printResult");

    if (printBtn) {

        printBtn.addEventListener("click", function () {

            window.print();

        });

    }

    //==================================
    // Download Result
    //==================================

    const downloadBtn = document.getElementById("downloadResult");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", function () {

            const content = `
Student Result

Name: Muhammad Ali
Roll No: 2026-001

Total Marks: ${totalMarks}
Obtained Marks: ${obtainedMarks}
Percentage: ${percentage}%
Grade: ${grade}
Status: ${status}
`;

            const blob = new Blob([content], { type: "text/plain" });

            const link = document.createElement("a");

            link.href = URL.createObjectURL(blob);

            link.download = "Student_Result.txt";

            link.click();

            URL.revokeObjectURL(link.href);

        });

    }

    //==================================
    // Summary Card Hover
    //==================================

    const cards = document.querySelectorAll(".summary-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    console.log("Result System Ready");

});