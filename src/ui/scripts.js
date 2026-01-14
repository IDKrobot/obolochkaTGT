/**
 * PROJECT: TG Traffic Manager Pro
 * MAIN CONTROLLER
 */

const SYSTEM_STATES = {
    run: { label: 'ACTIVE', color: '#10b981', glowClass: 'pulse-run' },
    hold: { label: 'PAUSED', color: '#ffa32a', glowClass: 'pulse-hold' },
    kill: { label: 'TERMINATED', color: '#ff4b4b', glowClass: 'pulse-kill' }
};

document.addEventListener('DOMContentLoaded', () => {
    // Элементы Top-Bar (они не меняются)
    const actionPanel  = document.querySelector('.action-panel');
    const statusLabel  = document.querySelector('.status-label');
    const statusDot    = document.querySelector('.dot');
    const statusBadge  = document.querySelector('.status-indicator');
    
    // Элементы навигации
    const contentArea  = document.getElementById('content-viewport');
    const menuItems    = document.querySelectorAll('.menu-item');

    /**
     * 1. ЛОГИКА СИСТЕМНЫХ СТАТУСОВ (RUN/HOLD/KILL)
     */
    const updateSystemStatus = (stateKey) => {
        const state = SYSTEM_STATES[stateKey];
        if (!state || !statusDot) return;

        // Сброс
        statusDot.classList.remove('pulse-run', 'pulse-hold', 'pulse-kill');
        statusLabel.classList.remove('blink-text');

        // Применение стилей
        statusLabel.innerText = state.label;
        statusLabel.style.color = state.color;
        statusDot.style.backgroundColor = state.color;
        
        statusBadge.style.borderColor = `${state.color}40`; 
        statusBadge.style.backgroundColor = `${state.color}0a`;
        statusBadge.style.boxShadow = `0 0 20px ${state.color}33`;

        statusDot.classList.add(state.glowClass);
        statusLabel.classList.add('blink-text');
    };

    // Слушатель для панели кнопок (делегирование внутри top-bar)
    if (actionPanel) {
        actionPanel.addEventListener('click', (e) => {
            const btn = e.target.closest('.action-btns');
            if (!btn) return;

            actionPanel.querySelectorAll('.action-btns').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.classList.contains('btn-run'))  updateSystemStatus('run');
            if (btn.classList.contains('btn-hold')) updateSystemStatus('hold');
            if (btn.classList.contains('btn-kill')) updateSystemStatus('kill');
        });
    }

    /**
     * 2. ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК
     */
    const loadTabScript = (tabName) => {
        const oldScript = document.getElementById('tab-script');
        if (oldScript) oldScript.remove();
        const script = document.createElement('script');
        script.src = `components/js/${tabName}.js`; 
        script.id = 'tab-script';
        document.body.appendChild(script);
    };

    const loadTabStyle = (tabName) => {
        // 1. Ищем старый стиль по ID
        const oldStyle = document.getElementById('tab-style');
        
        // 2. Удаляем его, если он существует
        if (oldStyle) oldStyle.remove();

        // 3. Создаем новый элемент link
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'tab-style';
        
        // 4. Указываем путь к файлу
        link.href = `components/css/${tabName}.css`; 
        
        // 5. Добавляем в head документа
        document.head.appendChild(link);
    };

    async function loadTab(tabName) {
        try {
            contentArea.style.opacity = '0';
            const response = await fetch(`components/html/${tabName}.html`);
            const html = await response.text();
            
            setTimeout(() => {
                contentArea.innerHTML = html;
                contentArea.style.opacity = '1';
                loadTabScript(tabName);
            }, 150);
        } catch (err) {
            contentArea.innerHTML = `<div style="padding:40px; color:var(--danger);">Ошибка загрузки</div>`;
        }
    }

    // Слушатель для меню
    document.querySelector('.navigation').addEventListener('click', (e) => {
        const item = e.target.closest('.menu-item');
        if (!item) return;
        
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        loadTab(item.getAttribute('data-tab'));
    });

    // Старт системы
    loadTab('overview');
    updateSystemStatus('run');
});