// 1. Select the button and the body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Check for a previously saved theme in Local Storage
const currentTheme = localStorage.getItem('theme');

// 3. If a theme was saved, apply it immediately on load
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

// 4. Add the click event listener
themeToggle.addEventListener('click', () => {
    // 1. Toggle the 'data-theme' attribute on the body
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

const textElement = document.querySelector('.bubble-text');
const message = "Modern dentistry, redefined for your comfort.";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        // 100ms is "slow and steady". Change to 50ms for faster, 150ms for slower.
        setTimeout(typeWriter, 100); 
    }
}

// Start the effect when the page loads
window.onload = typeWriter;
