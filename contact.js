//==========================================
// EduManage Contact Page
// contact.js
//==========================================


document.addEventListener("DOMContentLoaded", function () {


    console.log("Contact Page Loaded");


    //==================================
    // Contact Form Validation
    //==================================


    const contactForm = document.getElementById("contactForm");


    if(contactForm){


        contactForm.addEventListener("submit", function(e){


            e.preventDefault();



            const name =
            document.getElementById("name").value.trim();


            const email =
            document.getElementById("email").value.trim();


            const subject =
            document.getElementById("subject").value.trim();


            const message =
            document.getElementById("message").value.trim();



            // Empty Field Check

            if(
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ){


                alert("Please fill all fields!");

                return;


            }



            // Email Validation

            const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



            if(!emailPattern.test(email)){


                alert("Please enter a valid email address.");

                return;


            }



            // Success Message


            alert(
                "Thank you " + name +
                "! Your message has been sent successfully."
            );



            // Reset Form


            contactForm.reset();



        });


    }



    //==================================
    // Button Hover Effect
    //==================================


    const button =
    document.querySelector(".contact-form .btn");



    if(button){


        button.addEventListener("mouseenter",function(){


            this.innerHTML =
            '<i class="fa-solid fa-check"></i> Ready To Send';


        });



        button.addEventListener("mouseleave",function(){


            this.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Send Message';


        });


    }



    console.log("Contact System Ready");


});