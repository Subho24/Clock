const changeTime = () => {
    let time = new Date()
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    /*The code above is getiing the 
    real time and storing it to the variables. */

    if (hours > 12) {
        document.getElementById('clock-ampm').innerHTML = ('PM');
    }
    if (hours > 12) {
        hours = hours % 12
    }
    if (hours===0) {
        hours = 12
    }
    // The code above is making sure that the time is displayed in 12-hour format. 

    if (hours < 10) {
        hours = '0' + hours
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    /* The code above is making sure that 
    the time is always displayed as two digits despite the actual time*/

    document.getElementById('clock-time').innerHTML = (hours + ':' + min + ':' + sec);
    // The above line is implementing the timechanges to the HTML file.
}

setInterval(changeTime, 500);
/* The above line is making sure that the changeTime() is repeating every 500 miliseconds,
so that the clock keeps running wihtout us having to actually refresh the page everytime.*/


