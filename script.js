// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.search-form');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => tabs.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Switch forms (you can add more forms later)
        const tabName = tab.dataset.tab;
        forms.forEach(form => {
            form.style.display = form.id === `${ tabName }` -form ? 'block' : 'none';
        });
    });
});

// Simple form validation
document.querySelector('.search-btn').addEventListener('click', (e) => {
    const inputs = document.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('Please fill in all fields!');
        e.preventDefault();
    } else {
        alert('Searching... (This is a demo)');
    }
});