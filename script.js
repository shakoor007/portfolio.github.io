// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Notification Feature
    if ('Notification' in window) {
        // Check for notification permission
        if (Notification.permission !== "granted" && Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Welcome to Anas Shakoor's Portfolio!");
                }
            });
        }
    }

    // Event Handler - Button click for colour scheme change
    const colourSchemeButtons = document.querySelectorAll('.colour-scheme-btn');
    colourSchemeButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Changing theme to: ${this.getAttribute('data-colour-scheme')}`); // Change 4: Adding console log to verify function call
            changeColourScheme(this.getAttribute('data-colour-scheme')); // Change 5: Correctly retrieving the data-colour-scheme attribute
        });
    });

    // Colour Scheme Changer Function
    function changeColourScheme(scheme) {
        console.log(`Applying scheme: ${scheme}`); // Additional console log to see which scheme is being applied
        const root = document.documentElement;
        switch (scheme) {
            case 'default':
                root.style.setProperty('--primary-color', '#ade6d0');
                root.style.setProperty('--text-color', '#000');
                break;
            case 'dark':
                root.style.setProperty('--primary-color', '#333');
                root.style.setProperty('--text-color', '#fff');
                break;
            case 'light':
                root.style.setProperty('--primary-color', '#f5f5f5');
                root.style.setProperty('--text-color', '#000');
                break;
        }
    }

    // Enhanced Form Validation
    const form = document.querySelector('#contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to check for validation
        
        // Getting form values
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const subject = document.querySelector('#subject').value;
        const message = document.querySelector('#message').value;
        let valid = true;

        // Checking if all required fields are filled
        if (!name || !email || !phone || !subject || !message) {
            alert('All fields are required.');
            valid = false;
        }

        // Using the pattern attribute for email validation, already in HTML
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Validating phone number length
        if (phone && phone.length < 10) {
            alert('Please enter a valid phone number with at least 10 digits.');
            valid = false;
        }

        if (valid) {
            alert('Thank you for your message!');
            form.submit();
        }
    });

});
