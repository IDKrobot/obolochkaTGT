/**
 * MODULE: Accounts Management
 */
(function() {
    console.log("Accounts module loaded...");

    const modal = document.getElementById('accountModal');
    const addBtn = document.querySelector('.add-account-btn');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.querySelector('.modal-form');

    // Открытие модалки
    if (addBtn) {
        addBtn.onclick = () => modal.style.display = 'flex';
    }

    // Закрытие модалки
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }

    // Логика удаления (Делегирование внутри модуля)
    const tableBody = document.querySelector('.accounts-table tbody');
    if (tableBody) {
        tableBody.onclick = (e) => {
            const deleteBtn = e.target.closest('.delete-btn');
            if (deleteBtn) {
                const row = deleteBtn.closest('tr');
                const id = row.getAttribute('data-account-id');
                if (confirm(`Удалить аккаунт ID: ${id}?`)) {
                    row.remove();
                }
            }
        };
    }

    // Логика формы добавления
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            // ... (код добавления строки, который мы писали ранее)
            modal.style.display = 'none';
        };
    }
})();