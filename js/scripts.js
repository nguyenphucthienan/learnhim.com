const date = new Date('Feb 14, 2026 00:00:00').getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = date - now;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('time').innerHTML = '';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('time').innerHTML = days + 'd '
        + String(hours).padStart(2, '0') + 'h '
        + String(minutes).padStart(2, '0') + 'm '
        + String(seconds).padStart(2, '0') + 's ';
}, 1000);
