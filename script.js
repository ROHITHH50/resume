// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#333';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// Dark mode CSS styles
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    .dark-mode {
        background-color: #333;
        color: white;
    }

    .dark-mode header {
        background-color: #222;
    }

    .dark-mode footer {
        background-color: #222;
    }

    .dark-mode h1, .dark-mode h2 {
        color: white;
    }

    .dark-mode a {
        color: #4CAF50;
    }

    .dark-mode .container {
        color: white;
    }
`;
document.head.appendChild(darkModeStyles);

// Simple form validation (if you have a contact form)
function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
}

// If there's a form, add this to validate it
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}
