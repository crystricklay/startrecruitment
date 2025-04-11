// js/reasons.js
document.addEventListener('DOMContentLoaded', function () {
    // Находим все пункты списка причин
    const reasonItems = document.querySelectorAll('.reason-item');

    // Создаем IntersectionObserver для отслеживания появления элементов в зоне видимости
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент появился в зоне видимости, добавляем класс "visible"
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Останавливаем наблюдение, если анимация уже выполнена
            }
        });
    }, { threshold: 0.2 });

    reasonItems.forEach(item => {
        observer.observe(item);
    });
});