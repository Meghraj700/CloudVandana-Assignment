function checkEmailFormat(email) {
    // Simple email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function checkMobileFormat(mobile) {
    // Simple mobile number format validation (digits only)
    const mobileRegex = /^\d+$/;
    return mobileRegex.test(mobile);
}

function checkFields() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    return (
        firstName &&
        lastName &&
        dob &&
        country &&
        gender &&
        profession &&
        email &&
        checkEmailFormat(email) && // Check email format
        mobile &&
        checkMobileFormat(mobile) // Check mobile format
    );
}

function submitForm() {
    if (!checkFields()) {
        alert("Please fill in all required fields with correct formats.");
        return;
    }

    // Get values from form inputs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display a simple alert with the form values
    const message = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;

    alert(message);
}

function resetForm() {
    document.getElementById('survey-form').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
