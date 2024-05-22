const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation logic
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('uname').value;
    const pnumber = document.getElementById('phone').value;

    if (name.length < 6) {
        alert('Name must be at least 6 characters long.');
        return;
    }


    if (password.length < 6) {
        alert('password must be at least 6 characters long.');
        return;
    }

    if (!emailIsValid(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    if(pnumber.length !== 10){
        alert('phone number must contain 10 digits!')
    }

    // If validation passes, submit the form
    form.submit();
    alert('form submitted successfully!')
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}