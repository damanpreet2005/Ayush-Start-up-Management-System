// Handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to server

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in both fields');
    } else {
        // Perform login operation (you can replace this with real authentication)
        alert(`Login successful with email: ${email}`);
    }
});