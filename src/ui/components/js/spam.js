document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Слайдер задержки
    const delayRange = document.getElementById('delayRange');
    const rangeVal = document.getElementById('rangeVal');

    if (delayRange) {
        delayRange.addEventListener('input', (e) => {
            rangeVal.textContent = `${e.target.value} сек`;
        });
    }

    // 2. Минимум участников
    const minMembersInput = document.getElementById('minMembers');
    const minMembersVal = document.getElementById('minMembersVal');
    
    if (minMembersInput) {
        minMembersInput.addEventListener('input', (e) => {
            minMembersVal.textContent = e.target.value;
        });
    }

    // 3. Количество просмотров
    const viewCountInput = document.getElementById('viewCount');
    const viewCountVal = document.getElementById('viewCountVal');

    if (viewCountInput) {
        viewCountInput.addEventListener('input', (e) => {
            viewCountVal.textContent = e.target.value;
        });
    }

    // 4. Логика кнопки AI (заглушка)
    const aiBtn = document.querySelector('.ai-button');
    const textarea = document.querySelector('textarea');

    if (aiBtn && textarea) {
        aiBtn.addEventListener('click', () => {
            if (textarea.value.trim() === "") {
                alert("Сначала введите текст, чтобы AI мог его улучшить!");
            } else {
                textarea.value = "Улучшенный через AI текст: " + textarea.value;
            }
        });
    }
});