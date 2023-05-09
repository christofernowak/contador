const timeInput = document.getElementById('timeInput');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
    const countdown = document.getElementById('countdown');

    let countdownInterval;
    let isPaused = false;

    startBtn.addEventListener('click', () => {
      startBtn.style.display = 'none';
      stopBtn.style.display = 'inline-block';

      const input = timeInput.value.split(':');
      let minutes = parseInt(input[0], 10) || 0;
      let seconds = parseInt(input[1], 10) || 0;
      let totalTime = minutes * 60 + seconds;

      if (!countdownInterval) {
        countdownInterval = setInterval(() => {
          if (!isPaused && totalTime > 0) {
            totalTime--;
            minutes = Math.floor(totalTime / 60);
            seconds = totalTime % 60;
            countdown.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          } else if (totalTime === 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
          }    }, 1000);
        }
      });
  
      stopBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        stopBtn.textContent = isPaused ? 'Continuar' : 'Parar';
      });
  
      resetBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        countdownInterval = null;
        startBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        countdown.textContent = '00:00';
        timeInput.value = '';
        isPaused = false;
      });