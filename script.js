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

// 1. Data for the tooth parts
// --- Clean Typewriter Logic ---
const message = "Tori ባለፉት 5 ዓመታት በአዲስ አበባ ከተማ ውስጥ ጥራት ያለው የጥርስ ሕክምና አገልግሎት በመስጠት ላይ ይገኛል.... በዚህ አጭር ጊዜ ውስጥ ከ 100,000 በላይ ታካሚዎችን በማከም የብዙዎችን ፈገግታ መመለስ ችሏል.... ማዕከላችን በዘመናዊ ቴክኖሎጂ የታገዘ ቀልጣፋ አገልግሎት በመስጠት የታካሚዎቹን እርካታ ማረጋገጥ ግቡ አድርጎ ይሰራል...";
let index = 0;

function typeWriter() {
    const textElement = document.querySelector('.bubble-text');
    
    // Check if element exists and we haven't finished the message
    if (textElement && index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        
        // Slightly faster speed (70ms) to keep the user engaged with the long text
        setTimeout(typeWriter, 70); 
    }
}

// Ensure the effect starts after the full page (including images) is ready
window.addEventListener('load', typeWriter);
