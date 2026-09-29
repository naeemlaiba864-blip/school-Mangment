//==========================================
// EduManage Fee Management System
// fees.js
//==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Fee Management System Loaded");

    //==================================
    // Search Student
    //==================================

    const searchBtn = document.getElementById("searchFeeBtn");
    const searchInput = document.getElementById("rollSearch");

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            const rollNo = searchInput.value.trim();

            if (rollNo === "") {

                alert("Please enter a Roll Number.");
                searchInput.focus();
                return;

            }

            alert("Searching fee record for Roll No: " + rollNo);

        });

    }

    //==================================
    // Fee Calculation
    //==================================

    const totalFee = 50000;
    const paidFee = 35000;
    const remainingFee = totalFee - paidFee;

    document.getElementById("totalFee").textContent =
        "Rs. " + totalFee.toLocaleString();

    document.getElementById("paidFee").textContent =
        "Rs. " + paidFee.toLocaleString();

    document.getElementById("remainingFee").textContent =
        "Rs. " + remainingFee.toLocaleString();

    document.getElementById("remainingAmount").textContent =
        "Rs. " + remainingFee.toLocaleString();

    //==================================
    // Payment Status
    //==================================

    const paymentStatus = document.getElementById("paymentStatus");

    if (remainingFee === 0) {

        paymentStatus.textContent = "PAID";
        paymentStatus.classList.add("status-paid");

    }

    else if (remainingFee < totalFee) {

        paymentStatus.textContent = "PARTIALLY PAID";
        paymentStatus.classList.add("status-partial");

    }

    else {

        paymentStatus.textContent = "PENDING";
        paymentStatus.classList.add("status-pending");

    }

    //==================================
    // Print Receipt
    //==================================

    const printBtn = document.getElementById("printReceipt");

    if (printBtn) {

        printBtn.addEventListener("click", function () {

            window.print();

        });

    }

    //==================================
    // Download Receipt
    //==================================

    const downloadBtn = document.getElementById("downloadReceipt");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", function () {

            const receipt = `
=============================
EduManage Fee Receipt
=============================

Student Name : Muhammad Ali
Roll Number  : 2026-001
Class        : ICS Part-I

Total Fee    : Rs. ${totalFee}
Paid Fee     : Rs. ${paidFee}
Remaining    : Rs. ${remainingFee}

Status       : ${paymentStatus.textContent}

Due Date     : 31 December 2026

Thank You!
`;

            const blob = new Blob([receipt], {
                type: "text/plain"
            });

            const link = document.createElement("a");

            link.href = URL.createObjectURL(blob);

            link.download = "Fee_Receipt.txt";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            URL.revokeObjectURL(link.href);

        });

    }

    //==================================
    // Summary Card Hover
    //==================================

    const summaryCards =
        document.querySelectorAll(".summary-card");

    summaryCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    //==================================
    // Fee Table Row Hover
    //==================================

    const rows =
        document.querySelectorAll(".fee-table tbody tr");

    rows.forEach(function (row) {

        row.addEventListener("mouseenter", function () {

            this.style.background = "#eef6ff";

        });

        row.addEventListener("mouseleave", function () {

            this.style.background = "";

        });

    });

    //==================================
    // Dashboard Ready
    //==================================

    console.log("Fee Management Ready");

});