// Define the epoch date and time
const epoch = new Date(Date.UTC(1518, 10, 19, 6, 49, 53)); // November 19, 1518, at 6:49:53 AM UTC

// Conversion factors
const SECONDS_IN_JJBRALDO_DAY = 133066.80;
const SECONDS_IN_JOOLIOSKO = 814790.4;
const SECONDS_IN_JJBRALDO_YEAR = 26323924.8;

const JJBRALDO_HOURS_IN_DAY = 36;
const JJBRALDO_MINUTES_IN_HOUR = 60;
const JJBRALDO_SECONDS_IN_MINUTE = 60;

function updateJjbraldoTime() {
    const now = new Date();
    const elapsedSeconds = Math.floor((now - epoch) / 1000);

    // Calculate Jjbraldo years, Joolosko, days, hours, minutes, and seconds
    const jjbraldoYears = Math.floor(elapsedSeconds / SECONDS_IN_JJBRALDO_YEAR);
    let remainingSeconds = elapsedSeconds % SECONDS_IN_JJBRALDO_YEAR;

    const joolosko = Math.floor(remainingSeconds / SECONDS_IN_JOOLIOSKO);
    remainingSeconds %= SECONDS_IN_JOOLIOSKO;

    const jjbraldoDays = Math.floor(remainingSeconds / SECONDS_IN_JJBRALDO_DAY);
    remainingSeconds %= SECONDS_IN_JJBRALDO_DAY;

    const jjbraldoHours = Math.floor(remainingSeconds / (SECONDS_IN_JJBRALDO_DAY / JJBRALDO_HOURS_IN_DAY));
    remainingSeconds %= (SECONDS_IN_JJBRALDO_DAY / JJBRALDO_HOURS_IN_DAY);

    const jjbraldoMinutes = Math.floor(remainingSeconds / (SECONDS_IN_JJBRALDO_DAY / (JJBRALDO_HOURS_IN_DAY * JJBRALDO_MINUTES_IN_HOUR)));
    remainingSeconds %= (SECONDS_IN_JJBRALDO_DAY / (JJBRALDO_HOURS_IN_DAY * JJBRALDO_MINUTES_IN_HOUR));

    const jjbraldoSeconds = Math.floor(remainingSeconds / (SECONDS_IN_JJBRALDO_DAY / (JJBRALDO_HOURS_IN_DAY * JJBRALDO_MINUTES_IN_HOUR * JJBRALDO_SECONDS_IN_MINUTE)));

    // Format time string
    const timeString = `Year: ${jjbraldoYears}, Joolosko: ${joolosko + 1}, Day: ${jjbraldoDays + 1}, Time: ${jjbraldoHours.toString().padStart(2, '0')}:${jjbraldoMinutes.toString().padStart(2, '0')}:${jjbraldoSeconds.toString().padStart(2, '0')}`;

    // Update the HTML
    document.getElementById('jjbraldo-time').textContent = timeString;
}

// Update the time every second
setInterval(updateJjbraldoTime, 1000);

// Initial call to display the time immediately
updateJjbraldoTime();
