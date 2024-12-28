const endDate = new Date("19 Dec, 2024 21:44:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //calculate days, min, hrs, secs
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecondInMillis = (1000);
    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs =  Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));
    const min = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMillis));
    const sec = Math.floor((distancePending%(oneMinInMillis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    //calulate width percentage for progress bar
    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }   

  
}
, 1000)

