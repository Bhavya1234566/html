function validateAndSubmitForm() {
            // Fetch form field values
            const firstName = document.getElementById("firstName").value;
            const workEmail = document.getElementById("workEmail").value;
            const phone = document.getElementById("phone").value;
            const website = document.getElementById("website").value;
            const revenue = document.getElementById("revenue").value;

            // Fetch error elements
            const firstNameError = document.getElementById("firstNameError");
            const workEmailError = document.getElementById("workEmailError");
            const phoneError = document.getElementById("phoneError");
            const websiteError = document.getElementById("websiteError");
            const revenueError = document.getElementById("revenueError");

            // Clear previous error messages
            firstNameError.textContent = "";
            workEmailError.textContent = "";
            phoneError.textContent = "";
            websiteError.textContent = "";
            revenueError.textContent = "";

            // Validation
            let isValid = true;
            if (firstName === "" || /\d/.test(firstName)) {
                firstNameError.textContent = "Please enter a valid first name.";
                isValid = false;
            }
            if (workEmail === "" || !workEmail.includes("@")) {
                workEmailError.textContent = "Please enter a valid work email.";
                isValid = false;
            }
            if (phone === "" || phone.length < 10) {
                phoneError.textContent = "Please enter a valid phone number with at least 10 digits.";
                isValid = false;
            }
            if (website === "") {
                websiteError.textContent = "Please enter your website URL.";
                isValid = false;
            }
            if (revenue === "") {
                revenueError.textContent = "Please select your monthly revenue.";
                isValid = false;
            }

            // If the form is valid, show the message and redirect
            if (isValid) {
                window.location.href = "thankyou.html"; // Replace with your target URL
            }

            // Prevent form submission if validation fails
            return false;
        }