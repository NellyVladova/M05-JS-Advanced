function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onConvert);

    const timeInfo = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function onConvert(event){
        const input = event.target.parentElement.querySelector('input[type="text"]');
    
        const convertedTime = convertTime(input.value, input.id);
        daysInput.value = convertedTime.days;
        hoursInput.value = convertedTime.hours;
        minutesInput.value = convertedTime.minutes;
        secondsInput.value = convertedTime.seconds;
    }

    function convertTime(value, unit){
        let time = value / timeInfo[unit];

        return {
            days: time,
            hours: time * timeInfo.hours,
            minutes: time * timeInfo.minutes,
            seconds: time * timeInfo.seconds
        };
    }
}