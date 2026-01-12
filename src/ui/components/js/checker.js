(function() {
    const inputs = document.querySelectorAll('.mini-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--primary)';
            input.style.background = 'var(--bg-accent)';
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            input.style.background = '#111';
        });
    });

    console.log('Validation Tab Synchronized');
})();