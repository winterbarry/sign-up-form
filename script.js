const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    let valid = true;

    const firstName = document.getElementById('firstName');
    const fname = firstName.value;

    if (fname === "") {
        firstName.classList.add('error');
        firstName.placeholder = "Please enter your name";
        valid = false;
    } else {
        firstName.classList.remove('error');
        firstName.placeholder = "First Name";
    }

    const lastName = document.getElementById('lastName');
    const lname = lastName.value;
    if (lname === "") {
        lastName.classList.add('error');
        lastName.placeholder = "Please enter your last name";
        valid = false;
    } else {
        lastName.classList.remove('error');
        lastName.placeholder = "Last Name";
    }

    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('email').classList.add('error');
        document.getElementById('email').placeholder = "Invalid email address";
        valid = false;
    } else {
        document.getElementById('email').classList.remove('error');
        document.getElementById('email').placeholder = "Email";
    }


    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/; 

    if (password === "") {
        document.getElementById('password').classList.add('error');
        document.getElementById('password').placeholder = "Password is required";
        valid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password').classList.add('error');
        document.getElementById('password').placeholder = "Password must contain a number and symbol";
        valid = false;
    } else {
        document.getElementById('password').classList.remove('error');
        document.getElementById('password').placeholder = "Password";
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('error');
        document.getElementById('confirmPassword').placeholder = "Passwords do not match";
        valid = false;
    } else {
        document.getElementById('confirmPassword').classList.remove('error');
        document.getElementById('confirmPassword').placeholder = "Confirm Password";
    }

    if (!valid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
