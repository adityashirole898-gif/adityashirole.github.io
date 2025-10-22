// Set the date of the anniversary: October 23, 2025 (The date you provided)
const anniversaryDate = new Date("October 23, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = anniversaryDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get the total time elapsed since the start date (1 month ago)
    // Assuming 30 days exactly for "1 month" for simplicity here
    const startDate = new Date(anniversaryDate - (30 * 24 * 60 * 60 * 1000)).getTime(); 
    const timeElapsed = now - startDate;
    
    // Calculate how many days, hours, minutes, seconds have passed
    const elapsedDays = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const elapsedHours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const elapsedSeconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    if (distance > 0) {
        // If the anniversary is still in the future, show countdown to it
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    } else {
        // If the anniversary has arrived (or passed), show how long you've been together
        document.getElementById("countdown").innerHTML = 
            `<div class="elapsed">We've been together for: 
                <span id="elapsedDays">${elapsedDays.toString().padStart(2, '0')}</span> days, 
                <span id="elapsedHours">${elapsedHours.toString().padStart(2, '0')}</span> hours, 
                <span id="elapsedMinutes">${elapsedMinutes.toString().padStart(2, '0')}</span> min, 
                <span id="elapsedSeconds">${elapsedSeconds.toString().padStart(2, '0')}</span> sec
            </div>`;
        
        // Change the title text for the elapsed time view
        document.querySelector('.slide-1 h2').textContent = "We did it! One Month Down!";
        
        // Stop the interval if you want, but letting it count up is nice too
        // clearInterval(x);
    }
}, 1000);