document.addEventListener("DOMContentLoaded", function() {
    // Get all "Learn More" buttons
    var learnMoreButtons = document.querySelectorAll('.learn-more');
    var modals = document.querySelectorAll('.cat-modal');
    var closeButtons = document.querySelectorAll('.close');

    // Add event listeners to each "Learn More" button
    learnMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var catId = button.getAttribute('data-cat');
            var modal = document.getElementById('catModal' + catId);
            modal.style.display = 'block';
        });
    });

    // Add event listeners to each close button
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    // Close modal if clicking outside of the modal content
    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Add event listeners to each "Adopt" button
    var adoptButtons = document.querySelectorAll('.adopt-button');
    adoptButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modalContent = button.parentElement;

            // Clear previous form if exists
            var existingForm = modalContent.querySelector('.adoption-form');
            if (existingForm) {
                existingForm.remove();
            }

            // Create the adoption form
            var form = document.createElement('form');
            form.classList.add('adoption-form');
            form.innerHTML = `
                <h3>Adoption Form</h3>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="text" placeholder="Your Address" required>
                <textarea placeholder="Why do you want to adopt this cat?" required></textarea>
                <button type="submit">Submit</button>
            `;

            // Add the form below the "Adopt" button
            modalContent.appendChild(form);

            // Handle form submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your interest in adopting ' + modalContent.querySelector('h3').textContent + '! We will get in touch with you shortly.');
                modalContent.parentElement.style.display = 'none';
            });
        });
    });
});
