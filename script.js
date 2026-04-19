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
const toothData = {
    enamel: {
        title: "Advanced Enamel Care",
        desc: "We use specialized fluoride treatments and laser technology to strengthen your tooth's outer shield."
    },
    dentin: {
        title: "Dentin Protection",
        desc: "Our bio-compatible bonding agents seal the sensitive layers of your teeth to eliminate cold and heat pain."
    },
    root: {
        title: "Deep Root Health",
        desc: "Precision endodontic care ensures the foundation of your smile remains healthy and infection-free."
    }
};

// 2. Function to update the detail card
function showDetail(part) {
    const card = document.getElementById('detail-card');
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-desc');

    // Start fade-out
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    // Wait 300ms for fade-out to finish, then swap text and fade-in
    setTimeout(() => {
        title.textContent = toothData[part].title;
        desc.textContent = toothData[part].desc;
        
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
}

const textElement = document.querySelector('.bubble-text');
const message = "Tori ባለፉት 5 ዓመታት በአዲስ አበባ ከተማ ውስጥ ጥራት ያለው የጥርስ ሕክምና አገልግሎት በመስጠት ላይ ይገኛል.... በዚህ አጭር ጊዜ ውስጥ ከ 100,000 በላይ ታካሚዎችን በማከም የብዙዎችን ፈገግታ መመለስ ችሏል.... ማዕከላችን በዘመናዊ ቴክኖሎጂ የታገዘ ቀልጣፋ አገልግሎት በመስጠት የታካሚዎቹን እርካታ ማረጋገጥ ግቡ አድርጎ ይሰራል...";
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
