function ValidateForm(){
    const form = document.querySelector('.main-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const selectInput = document.getElementById('select');
    const sendButton = document.getElementById('send');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        let errorMessage = '';

        // Name validation
        if (nameInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Please enter your name.\n';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Select validation
        if (selectInput.value === 'Select option') {
            isValid = false;
            errorMessage += 'Please select an option.\n';
        }

        if (!isValid) {
            alert(errorMessage);
        } else {
            alert('Thank you for contacting us!');
            form.reset();
        }
    });
}