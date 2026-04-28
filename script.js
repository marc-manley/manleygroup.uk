function fireConfetti() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}

window.addEventListener("load", () => {
  setTimeout(fireConfetti, 500);
});
