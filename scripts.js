// Animasi teks hero berganti
const texts = ["Selamat Datang!", "Belajar Coding Itu Seru!", "Ayo Mulai Sekarang!"];
let index = 0;
const heroText = document.getElementById("hero-text");

setInterval(() => {
  index = (index + 1) % texts.length;
  heroText.textContent = texts[index];
}, 3000);
