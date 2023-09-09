
function updateDateTime() {
    const currentDate = new Date();
    const currentDayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const currentHours = currentDate.getUTCHours().toString().padStart(2, '0');
    const currentMinutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const currentSeconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

   
    document.getElementById('currentDayOfTheWeek').textContent = currentDayOfWeek;
    document.getElementById('currentUTCTime').textContent = currentTime;
}


updateDateTime();

setInterval(updateDateTime, 1000);
