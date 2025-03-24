// Get DOM elements  
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const form = document.getElementById('login-form');

const errorMessages = {
    username: "Please enter a valid username.",
    password: "Please enter a valid password.",
};

// Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    resetForm();

    loadingSpinner.style.display = 'block';
    loginBtn.textContent = "Logging in...";
    loginBtn.disabled = true;

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    let valid = true;

    if (!username) {
        showError(usernameField, errorMessages.username);
        valid = false;
    }

    if (!password) {
        showError(passwordField, errorMessages.password);
        valid = false;
    }

    if (valid) {
        simulateLogin(username, password);
    } else {
        stopLoading();
    }
});

// Fake Login Simulation
function simulateLogin(username, password) {
    setTimeout(() => {
        if (username === "user123" && password === "password123") {
            successFeedback();
        } else {
            errorFeedback();
        }
    }, 2000);
}

// Success
function successFeedback() {
    stopLoading();
    alert("Login successful!");
    window.location.href = "music.html";
}

// Error
function errorFeedback() {
    stopLoading();
    showError(usernameField, "Invalid credentials.");
    showError(passwordField, "Invalid credentials.");
}

// Reset Functions
function resetForm() {
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    usernameField.classList.remove('input-error');
    passwordField.classList.remove('input-error');
}

function showError(input, message) {
    const errorText = document.createElement('span');
    errorText.classList.add('error-message');
    errorText.textContent = message;
    input.classList.add('input-error');
    input.parentElement.appendChild(errorText);
}

function stopLoading() {
    loadingSpinner.style.display = 'none';
    loginBtn.textContent = "Login";
    loginBtn.disabled = false;
}
