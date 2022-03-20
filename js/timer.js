const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';
let interval;

const updateTimer = () => {
  const dateNow = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - dateNow) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = days < 0 ? Math.floor(timeRemaining / 60 / 60) : Math.floor(timeRemaining / 60 / 60) - (days * 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fHours = hours < 10 ? '0' + hours : hours;
  const fMinutes = minutes < 10 ? '0' + minutes : minutes;
  const fSeconds = seconds < 10 ? '0' + seconds : seconds;

  switch (days) {
    case 1:
      daysCaption = 'день';
      break;
    case 2:
    case 3:
    case 4:
      daysCaption = 'дня';
      break;
    default:
      daysCaption = 'дней';
  }

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = '00:00:00';
  } else {
    timerBlock.textContent = days > 0 ? `${days} ${daysCaption} ${fHours}:${fMinutes}:${fSeconds}` : `${fHours}:${fMinutes}:${fSeconds}`;
  }
}

interval = setInterval(updateTimer, 500);
