// js/about.js

function initAboutParallax() {
    const aboutCover = document.getElementById("aboutCover");
    if (!aboutCover) return;

    // Отключаем параллакс для мобильных устройств
    if (window.innerWidth < 768) {
        aboutCover.style.backgroundPosition = 'center center';
        return;
    }

    function updateParallax() {
        const rect = aboutCover.getBoundingClientRect();
        // Коэффициент смещения (можно настроить по вкусу)
        const offset = -rect.top * 0.2;
        aboutCover.style.backgroundPosition = `center ${offset}px`;
    }

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);
    updateParallax();
}

document.addEventListener("DOMContentLoaded", initAboutParallax);