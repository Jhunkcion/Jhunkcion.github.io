// Fungsi untuk memicu efek confetti saat teks diklik
document.getElementById('special-text').addEventListener('click', function() {
    // Menampilkan efek confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
});

function triggerSurprise() {
    // Memicu efek confetti sebelum alert
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });

    // Menampilkan alert
    alert('You are the love of my life! ❤️');

    // Memicu efek confetti setelah alert
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