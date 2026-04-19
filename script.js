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
