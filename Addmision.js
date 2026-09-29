// =========================================
// EduManage Admission Form JavaScript
// =========================================

const form = document.getElementById("admissionForm");

const successMessage = document.getElementById("successMessage");

const errorMessage = document.getElementById("errorMessage");

// ==============================
// Form Submit
// ==============================

form.addEventListener("submit", function(e){

    e.preventDefault();

    let isValid = true;

    // Required Inputs
    const requiredFields = form.querySelectorAll("input[required], select[required]");

    requiredFields.forEach(field=>{

        if(field.value.trim()===""){

            field.classList.remove("valid");
            field.classList.add("invalid");

            isValid=false;

        }

        else{

            field.classList.remove("invalid");
            field.classList.add("valid");

        }

    });

    // Email Validation
    const email=document.getElementById("email");

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        email.classList.add("invalid");

        isValid=false;

    }

    // Phone Validation
    const phone=document.getElementById("phone");

    const phonePattern=/^03[0-9]{9}$/;

    if(!phonePattern.test(phone.value)){

        phone.classList.add("invalid");

        isValid=false;

    }

    // CNIC Validation
    const cnic=document.getElementById("cnic");

    if(cnic.value!==""){

        const cnicPattern=/^[0-9]{5}-[0-9]{7}-[0-9]$/;

        if(!cnicPattern.test(cnic.value)){

            cnic.classList.add("invalid");

            isValid=false;

        }

    }

    // Percentage Validation
    const percentage=document.getElementById("percentage");

    if(percentage.value!==""){

        if(percentage.value<0 || percentage.value>100){

            percentage.classList.add("invalid");

            isValid=false;

        }

    }

    // Success / Error
    if(isValid){

        successMessage.style.display="block";

        errorMessage.style.display="none";

        alert("🎉 Admission Form Submitted Successfully!");

        form.reset();

        document.querySelectorAll(".valid").forEach(input=>{

            input.classList.remove("valid");

        });

    }

    else{

        errorMessage.style.display="block";

        successMessage.style.display="none";

        alert("Please fill all required fields correctly.");

    }

});

// ==============================
// Remove Error While Typing
// ==============================

const fields=form.querySelectorAll("input,select,textarea");

fields.forEach(field=>{

    field.addEventListener("input",function(){

        this.classList.remove("invalid");

        if(this.value.trim()!==""){

            this.classList.add("valid");

        }

    });

});

// ==============================
// Reset Button
// ==============================

form.addEventListener("reset",function(){

    successMessage.style.display="none";

    errorMessage.style.display="none";

    document.querySelectorAll(".valid,.invalid").forEach(field=>{

        field.classList.remove("valid");

        field.classList.remove("invalid");

    });

});

// ==============================
// Welcome Console Message
// ==============================

console.log("EduManage Admission System Loaded Successfully");