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

// --- Navigation & Frame Switching Logic ---
const pills = document.querySelectorAll('.nav-pill');
const homeFrame = document.getElementById('home-frame');
const aboutFrame = document.getElementById('about-frame');
const bookFrame = document.getElementById('book-frame'); // New variable

pills.forEach(pill => {
    pill.addEventListener('click', function(e) {
        e.preventDefault();

        // 1. Handle Pill UI (Solid gold switch)
        document.querySelector('.nav-pill.active-pill')?.classList.remove('active-pill');
        this.classList.add('active-pill');

        // 2. Hide all frames first to ensure a clean swap
        [homeFrame, aboutFrame, bookFrame].forEach(frame => {
            if(frame) frame.style.display = 'none';
        });

        // 3. Handle Frame Switching logic
        const clickedText = this.textContent.trim().toLowerCase();

        if (clickedText.includes('about')) {
            aboutFrame.style.display = 'block';
        } else if (clickedText.includes('book')) {
            bookFrame.style.display = 'block';
        } else {
            homeFrame.style.display = 'block';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// --- Typing Effect for About Section ---

// 1. Define the full content (including HTML like <strong> and emojis)
const aboutContent = `
    <strong>TORI የጥርስ ሕክምና 🦷 ማዕከል</strong> ከአምስት ዓመታት 📅 በፊት በአዲስ አበባ 🇪🇹 ከተማ ሲመሠረት፣ አንድ ግልጽ ግብ ነበረው፦ እሱም <strong>"በሀገራችን ያለውን የጥርስ ሕክምና ጥራት ወደ ላቀ ደረጃ ማድረስና የዘመናዊ ሕክምና ተጠቃሚዎችን ቁጥር መጨመር"</strong>..... በወቅቱ በትንሽ የባለሙያዎች 👨‍⚕️ ቡድን እና ውስን በሆኑ መሣሪያዎች 🛠️ ስራችንን ብንጀምርም፣ ለታካሚዎቻችን የምንሰጠው ትኩረት ❤️ እና የምንከተለው የላቀ የሕክምና ስነ-ምግባር በአጭር ጊዜ ውስጥ ተመራጭ እንድንሆን አድርጎናል🌱..... ባለፉት አምስት ዓመታት ውስጥ በምናደርገው ያላሰለሰ ጥረት፣ ቶሪ ከሕክምና ተቋምነት ባለፈ በሺዎች የሚቆጠሩ ቤተሰቦች የታመነ ወዳጅ 🤝 መሆን ችሏል። እስካሁን ድረስ <strong>ከ 100,000 በላይ ታካሚዎችን 👥</strong> በማከም የብዙዎችን የጥርስ ጤና በመጠበቅ እና ፈገግታቸውን 😁 በመመለስ ትልቅ ኩራት ይሰማናል...... ይህ ስኬት ✨ የመጣው በታካሚዎቻችን እምነት እና በባለሙያዎቻችን ጠንካራ ስራ ነው💪..... ዛሬ ላይ ቶሪ በዘመናዊ የዲጂታል 💻 የጥርስ ሕክምና መሣሪያዎች የታገዘ፣ ምቹ እና ደረጃውን የጠበቀ አገልግሎት የሚሰጥ ቀዳሚ ማዕከል ሆኗል..... እያደግን በመጣን ቁጥር አገልግሎታችንን ይበልጥ በማዘመን እና የሕክምና ተደራሽነታችንን በማስፋት፣ በአዲስ አበባ ብቻ ሳይሆን በመላው ሀገሪቱ ጥራት ያለው የጥርስ ሕክምና ተምሳሌት 🏆 ለመሆን እንተጋለን...... የሁልጊዜም መርኃችን <strong>"የእርስዎ ፈገግታ 😁 የኛ ስኬት 🌟 ነው!"</strong> የሚል ነው......<br><br><br><br> ሰላምና ጤና ለሁላችሁ! 🙌✨
`;

// 2. Typing function variables
let charIndex = 0;
let typingInterval;
const typingSpeed = 50; // Milliseconds per character (lower is faster)
const textElement = document.getElementById('typing-text');

function startTyping(content) {
    // Clear any previous typing session
    clearInterval(typingInterval);
    charIndex = 0;
    textElement.innerHTML = '';
    cursor.classList.remove('hidden'); // Ensure cursor is visible

    // Start the typing timer
    typingInterval = setInterval(() => {
        if (charIndex < content.length) {
            textElement.innerHTML = content.substring(0, charIndex + 1);
            charIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, typingSpeed);
}

// 3. Update your navigation pill logic to trigger the typing
// Add this 'if' block INSIDE your existing pills.forEach logic, right after the frame switching
document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', function(e) {
        // ... (your existing code that hides all frames and shows the clicked one) ...

        const clickedText = this.textContent.trim().toLowerCase();
        
        // --- ADD THIS Logic: ---
        if (clickedText.includes('about')) {
            // Trigger the typing effect ONLY when 'About' is shown
            // A slight 300ms delay helps it feel smoother with the frame swap
            setTimeout(() => startTyping(aboutContent), 300);
        } else {
            // If they click 'Home' or 'Book', stop the typing to save performance
            clearInterval(typingInterval);
        }
    });
});

// --- Translation Logic ---
const englishContent = `
    <strong>TORI Dental 🦷 Center</strong> was founded five years 📅 ago in Addis Ababa 🇪🇹 with a clear mission: <strong>"To elevate the quality of dental care in our country and expand access to modern treatments."</strong>..... Starting with a small team 👨‍⚕️ and limited tools 🛠️, our dedication ❤️ and medical ethics quickly made us a trusted name 🌱..... Over the past five years, Tori has become more than just a clinic—it is a trusted partner 🤝 for thousands of families. To date, we have treated <strong>over 100,000 patients 👥</strong>, restoring their health and smiles 😁 with great pride...... This success ✨ is built on patient trust and the hard work of our professionals💪..... Today, Tori is a leading center equipped with modern digital 💻 technology, providing high-standard services..... As we grow, we strive to be a symbol 🏆 of quality dental care throughout Ethiopia, not just in Addis Ababa...... Our motto is: <strong>"Your Smile 😁 is Our Success 🌟!"</strong><br><br><br><br> Peace and health to you all! 🙌✨
`;

const translateBtn = document.getElementById('translate-btn');
const cursor = document.querySelector('.typing-cursor');
let isEnglish = false;

translateBtn.addEventListener('click', () => {
    // Stop any ongoing typing animation
    clearInterval(typingInterval);
    
    if (!isEnglish) {
        // Switch to English AND trigger typing effect
        translateBtn.innerHTML = "📖 ወደ አማርኛ";
        isEnglish = true;
        startTyping(englishContent); 
    } else {
        // Switch back to Amharic AND trigger typing effect
        translateBtn.innerHTML = "📖 Translate";
        isEnglish = false;
        startTyping(aboutContent);
    }
});

/* --- 1. The Global Auth State --- */
let loggedInEmail = ""; // This will hold the email for the database

/* --- 2. The Google Account Picker Logic --- */
const googleBtn = document.querySelector('.google-auth');
const emailBtn = document.querySelector('.email-auth');
const phoneInput = document.getElementById('patient-phone');
const nameInput = document.getElementById('patient-name');
const finalSubmitBtn = document.getElementById('submit-appointment');

if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
        try {
            const result = await window.signInWithPopup(window.auth, window.googleProvider);
            const user = result.user;

            // --- ADDED: Store the email for the dashboard ---
            loggedInEmail = user.email; 

            if (nameInput) {
                nameInput.value = user.displayName;
            }

            googleBtn.innerHTML = `✅ Linked as ${user.displayName.split(' ')[0]}`;
            googleBtn.style.borderColor = "var(--gold-accent)";

            phoneInput?.focus();
            validateBookingForm();

        } catch (error) {
            console.error("Auth Error:", error);
            if (error.code === 'auth/popup-closed-by-user') {
                alert("Sign-in was closed. Please select an account to auto-fill your info!");
            }
        }
    });
}

// --- Appointment Confirmation & Firebase Integration ---
const submitBtn = document.getElementById('submit-appointment');
const appointmentForm = document.querySelector('.appointment-form');

if (submitBtn && appointmentForm) {
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const nameVal = document.getElementById('patient-name').value;
        const phoneVal = document.getElementById('patient-phone').value;
        const causeVal = document.getElementById('visit-cause').value;

        if (!nameVal || !phoneVal) {
            alert("Please provide both a name and phone number.");
            return;
        }

        try {
            const { collection, addDoc, serverTimestamp } = window.dbMethods;
            const logsRef = collection(window.db, "agents", "tori_data", "logs");

            // --- UPDATED: Now includes the patientEmail field ---
            await addDoc(logsRef, {
                patientName: nameVal,
                patientEmail: loggedInEmail || "Guest User", // Saves email or "Guest"
                phone: "+251" + phoneVal,
                cause: causeVal,
                timestamp: serverTimestamp(),
                status: "pending_call",
                agent_origin: "Tori Clinic Web"
            });

            appointmentForm.classList.add('form-success');

            setTimeout(() => {
                appointmentForm.innerHTML = `
                    <div class="success-message" style="display: block;">
                        <h2 style="color: var(--gold-accent); margin-bottom: 15px;">Appointment Sent!</h2>
                        <p style="color: white;">Thank you for choosing Tori Clinic. <br> We will call you shortly at +251 ${phoneVal}.</p>
                        <div class="dot ultra-blue" style="position: relative; margin: 30px auto; float: none;"></div>
                    </div>
                `;
                appointmentForm.classList.remove('form-success');
            }, 500);

        } catch (error) {
            console.error("Firebase Error:", error);
            alert("Connection error. Ensure your Firebase Rules are updated.");
        }
    });
}

function validateBookingForm() {
    if (!phoneInput || !nameInput || !finalSubmitBtn) return;
    const isPhoneValid = phoneInput.value.trim().length === 9;
    const isNameValid = nameInput.value.trim().length > 0;

    finalSubmitBtn.disabled = !(isPhoneValid && isNameValid);
    finalSubmitBtn.style.opacity = finalSubmitBtn.disabled ? "0.5" : "1";
    finalSubmitBtn.style.cursor = finalSubmitBtn.disabled ? "not-allowed" : "pointer";
}
// Keep these listeners right below the function:
phoneInput?.addEventListener('input', validateBookingForm);
nameInput?.addEventListener('input', validateBookingForm);
validateBookingForm();
