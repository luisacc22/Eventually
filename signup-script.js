document.addEventListener("DOMContentLoaded", function () {
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");

    // month
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    for (let i = 0; i < monthNames.length; i++) {
        const optionmonth  = document.createElement("option");
        optionmonth.value = i + 1;
        optionmonth.text = monthNames[i];
        monthSelect.appendChild(optionmonth);
    }
    // day
    for (let day = 1; day <= 31; day++) {
        const optionday = document.createElement("option");
        optionday.value = day;
        optionday.text = day;
        daySelect.appendChild(optionday);
    }
    // year
    for (let year = 2023; year >= 1924; year--) {
        const optionyear = document.createElement("option");
        optionyear.value = year;
        optionyear.text = year;
        yearSelect.appendChild(optionyear);
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordMessage = document.getElementById("confirmPasswordMessage");

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === "" && confirmPassword === "") {
            confirmPasswordMessage.style.display = "none";
        } else {
            confirmPasswordMessage.style.display = "block";

            if (password === confirmPassword) {
                confirmPasswordMessage.textContent = "Passwords match!";
                confirmPasswordMessage.style.color = "green";
            } else {
                confirmPasswordMessage.textContent = "Passwords do not match!";
                confirmPasswordMessage.style.color = "red";
            }
        }
    }


    const signupForm = document.querySelector('.signup-form form');
    
    signupForm.addEventListener("submit", function (event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert("Passwords do not match. Please correct and submit again.");
        }
    });

    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validatePassword);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loading-overlay').classList.remove('hide'); 

    setTimeout(() =>{
    document.getElementById('loading-overlay').classList.add('hide');
    }, 1000);
});