(function() {
    const saveBtn = document.querySelector('.save-preset-btn');
    const modules = document.querySelectorAll('.module-item');

    // 1. Управление модулями (Включение/Выключение)
    modules.forEach(item => {
        item.onclick = () => {
            const isActive = item.classList.toggle('active');
            item.classList.toggle('disabled', !isActive);
            
            const statusText = item.querySelector('.mod-status');
            statusText.innerText = isActive ? "МОДУЛЬ ИНИЦИАЛИЗИРОВАН" : "НАЖМИТЕ ДЛЯ АКТИВАЦИИ";

            // Логика значка ACTIVE
            const existingTag = item.querySelector('.status-tag');
            if (isActive && !existingTag) {
                const tag = document.createElement('span');
                tag.className = 'status-tag';
                tag.innerText = 'ACTIVE';
                item.appendChild(tag);
            } else if (!isActive && existingTag) {
                existingTag.remove();
            }
        };
    });

    // 2. Кнопка сохранения
    if (saveBtn) {
        saveBtn.onclick = () => {
            const originalHTML = saveBtn.innerHTML;
            saveBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> СОХРАНЕНИЕ';
            saveBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                // Обновляем текст в "Current: ..."
                const delayInput = document.getElementById('input-delay');
                const delayDisplay = document.getElementById('current-delay');
                if (delayInput && delayDisplay) delayDisplay.innerText = delayInput.value;

                const dirInput = document.getElementById('input-dir');
                const dirDisplay = document.getElementById('current-dir');
                if (dirInput && dirDisplay) dirDisplay.innerText = dirInput.value;

                // Эффект успеха
                saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> СОХРАНЕНО';
                saveBtn.style.background = '#10b981';
                saveBtn.style.borderColor = '#10b981';

                setTimeout(() => {
                    saveBtn.innerHTML = originalHTML;
                    saveBtn.style.background = '';
                    saveBtn.style.borderColor = '';
                    saveBtn.style.pointerEvents = 'all';
                }, 1500);
            }, 600);
        };
    }
})();