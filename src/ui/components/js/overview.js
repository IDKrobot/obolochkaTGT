/**
 * MODULE: Overview / Dashboard
 */
(function() {
    console.log("Overview module loaded...");
    
    const ctx = document.getElementById('activityChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['12:00', '13:00', '14:00', '15:00', '16:00'],
                datasets: [{
                    data: [420, 680, 590, 910, 1240],
                    borderColor: '#3b82f6',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }
})();