let countdownInterval; // Переменная для хранения setInterval

function startCountdown() {
    const targetDateInput = document.getElementById('targetDate').value;

    if (!targetDateInput) {
        alert('Please select a date!');
        return;
    }

    const targetDate = new Date(targetDateInput).getTime();

    // Останавливаем предыдущий таймер, если он был запущен
    clearInterval(countdownInterval);

    // Запускаем новый таймер
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = "<h2>Time's Up!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Обновляем значения на экране
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

    }, 1000);
}
