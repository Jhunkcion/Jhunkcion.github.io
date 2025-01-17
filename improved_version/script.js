// Function to trigger confetti effect when text is clicked
document.getElementById('special-text').addEventListener('click', function() {
    // Show confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
});

function triggerSurprise() {
    // Trigger confetti effect before alert
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });

    // Show alert
    alert('You are the love of my life! ❤️');

    // Trigger confetti effect after alert
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.5 }
    });
}

function showContent(language) {
    const indoMessage = document.getElementById('message-indo');
    const englishMessage = document.getElementById('message-english');

    if (language === 'indo') {
        indoMessage.classList.remove('hidden');
        englishMessage.classList.add('hidden');
    } else if (language === 'english') {
        englishMessage.classList.remove('hidden');
        indoMessage.classList.add('hidden');
    }
}

// New function for call-to-action buttons
function navigateToPage(page) {
    window.location.href = page + '.html';
}

// Countdown Timer Functionality
const countdownDate = new Date("2025-12-31T00:00:00").getTime(); // Set your target date here

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
