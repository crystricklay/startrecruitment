function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}
// Загрузка данных о сотрудниках
document.addEventListener("DOMContentLoaded", function() {
    fetch('employees/employees.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('employeesContainer');
            if (!container) return;
            data.forEach(emp => {
                const empCard = document.createElement('div');
                empCard.className = 'employeeCard';
                empCard.innerHTML = `
                    <img src="employees/avatars/${emp.image}" alt="${emp.name}">
                    <h3>${emp.name}</h3>
                `;
                container.appendChild(empCard);
            });
        })
        .catch(error => console.error("Ошибка загрузки сотрудников:", error));
});