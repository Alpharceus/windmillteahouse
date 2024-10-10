document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameField = document.querySelector('input[name="name"]');
    const emailField = document.querySelector('input[name="email"]');
    const subjectField = document.querySelector('input[name="subject"]');
    const messageField = document.querySelector('textarea[name="message"]');

    form.addEventListener('submit', function (e) {
        let isValid = true;

        // Simple Validation Check
        if (nameField.value.trim() === "") {
            alert('Please enter your name.');
            isValid = false;
        }
        if (emailField.value.trim() === "" || !validateEmail(emailField.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        if (subjectField.value.trim() === "") {
            alert('Please enter a subject.');
            isValid = false;
        }
        if (messageField.value.trim() === "") {
            alert('Please enter a message.');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
