
function initHeroParallax() {
    const heroCover = document.getElementById("heroCover");
    if (!heroCover) return;

    // Если ширина экрана меньше 768px (мобильное устройство), отключаем параллакс
    if (window.innerWidth < 768) {
        heroCover.style.backgroundPosition = 'center center';
        return;
    }

    function updateParallax() {
        const rect = heroCover.getBoundingClientRect();
        // Коэффициент смещения можно скорректировать по вкусу
        const offset = -rect.top * 0.3;
        heroCover.style.backgroundPosition = `center ${offset}px`;
    }

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);
    updateParallax();
}
document.addEventListener("DOMContentLoaded", initHeroParallax);