// js/fallback.js

function initFallback() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            const originalSrc = img.getAttribute("src");
            // Очистка src и повторная установка через 500 мс
            img.setAttribute("src", "");
            setTimeout(() => {
                img.setAttribute("src", originalSrc);
            }, 500);
        }
    });
}

document.addEventListener("DOMContentLoaded", initFallback);