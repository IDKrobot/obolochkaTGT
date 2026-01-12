/**
 * AUTO REPLY MODULE LOGIC
 * Управление ползунком задержки и инициализация модуля
 */

(function() {
    // Получаем элементы
    const delayInput = document.getElementById('replyDelay');
    const delayValueDisplay = document.getElementById('replyDelayVal');

    // Функция для склонения минут (чтобы было красиво: 1 минута, 2 минуты, 5 минут)
    function getMinutesText(value) {
        const lastDigit = value % 10;
        const lastTwoDigits = value % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'МИНУТ';
        }
        if (lastDigit === 1) {
            return 'МИНУТА';
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'МИНУТЫ';
        }
        return 'МИНУТ';
    }

    // Проверяем, существуют ли элементы на странице (чтобы не было ошибок в консоли)
    if (delayInput && delayValueDisplay) {
        
        // Слушаем событие ввода на ползунке
        delayInput.addEventListener('input', (e) => {
            const value = e.target.value;
            const text = getMinutesText(value);
            
            // Обновляем текст в span
            delayValueDisplay.textContent = `${value} ${text}`;
            
            // Добавляем небольшой эффект свечения при изменении (опционально)
            delayValueDisplay.style.textShadow = '0 0 10px var(--primary)';
            setTimeout(() => {
                delayValueDisplay.style.textShadow = 'none';
            }, 300);
        });
    }

    // Сохранение текста (простая заготовка для интеграции)
    const textarea = document.querySelector('.reply-textarea');
    if (textarea) {
        textarea.addEventListener('change', (e) => {
            console.log('Текст автоответа сохранен:', e.target.value);
            // Тут в будущем будет отправка на сервер или в localstorage
        });
    }

    console.log('Auto Reply Module: Инициализирован');
})();