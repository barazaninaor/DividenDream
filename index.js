document.querySelectorAll('.fade, .fade-img').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
});
