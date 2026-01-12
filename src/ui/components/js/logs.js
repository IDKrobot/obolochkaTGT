function addLog(message, type = 'info') {
    const consoleBody = document.getElementById('logConsole');
    const container = document.getElementById('logContainer');
    const isAutoScroll = document.getElementById('autoScrollCheck').checked;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    let icon = 'fa-circle-info';
    if(type === 'success') icon = 'fa-circle-check';
    if(type === 'warning') icon = 'fa-circle-exclamation';

    const logDiv = document.createElement('div');
    logDiv.className = `log-item ${type}`;
    logDiv.innerHTML = `
        <span class="time">[${time}]</span>
        <i class="fa-solid ${icon}"></i>
        <span class="message">${message}</span>
    `;

    container.appendChild(logDiv);

    // Прокрутка внутри блока console-body
    if (isAutoScroll) {
        consoleBody.scrollTop = consoleBody.scrollHeight;
    }
}

function clearLogs() {
    document.getElementById('logContainer').innerHTML = '';
}