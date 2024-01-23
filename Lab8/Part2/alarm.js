function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
      const hoursRemaining = Math.floor(remainingSeconds / 3600);
      const minutesRemaining = Math.floor((remainingSeconds % 3600) / 60);
      const secondsRemaining = remainingSeconds % 60;
      const formattedTime =
        `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
      countdownElement.textContent = `Time remaining: ${formattedTime}`;
      if (remainingSeconds <= 0) {
        clearInterval(countdownInterval);
        alert('Alarm! Time to wake up!');
      }
      remainingSeconds -= 1;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    const alarmForm = document.getElementById('alarmForm');
    const timeRemainingElement = document.getElementById('countdown');
    document.getElementById('clearButton').addEventListener('click', function() {
      document.getElementById('hours').value = '0';
      document.getElementById('minutes').value = '0';
      document.getElementById('seconds').value = '0';
      timeRemainingElement.textContent = 'Time remaining: 00:00:00';
      clearInterval(countdownInterval);
    });
});
