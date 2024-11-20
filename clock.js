let hr = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
setInterval(() => {
    let Day = new Date()
    let hh = new Date().getHours() * 30;
    let mm = new Date().getMinutes() * 6;
    let ss = new Date().getSeconds() * 6;


    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;



// digital clock

let h = document.getElementById('hours');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');
let am = document.getElementById('ampm');

let today = new Date();
let hrs = today.getHours();
let mins = today.getMinutes();
let secs = today.getSeconds();

let pm = hr >= 12 ? 'am' : 'pm'

if (hr > 12) {
    hr = hr - 12
}

h.innerHTML= hrs;
m.innerHTML = mins;
s.innerHTML = secs;
am.innerHTML = pm;
})