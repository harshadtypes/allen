let hoursMain = (new Date()).getHours();
    if (hoursMain>=13) {
        let hourMain = hoursMain-12;
        let meridianMain = 'PM';
        let minsMain = (new Date()).getMinutes();
        if (minsMain<=9) {
            let minMain = `0${minsMain}`;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        } else {
            let minMain = minsMain;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        }
    } else {
        let hourMain = hoursMain;
        let meridianMain = 'AM';
        let minsMain = (new Date()).getMinutes();
        if (minsMain<=9) {
            let minMain = `0${minsMain}`;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        } else {
            let minMain = minsMain;
            document.getElementById('timex').innerHTML = `${hourMain}:${minMain} ${meridianMain}`;
        }
    }

setInterval(() => {
    let hours = (new Date()).getHours();
    if (hours>=13) {
        let hour = hours-12;
        let meridian = 'PM';
        let mins = (new Date()).getMinutes();
        if (mins<=9) {
            let min = `0${mins}`;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        } else {
            let min = mins;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        }
    } else {
        let hour = hours;
        let meridian = 'AM';
        let mins = (new Date()).getMinutes();
        if (mins<=9) {
            let min = `0${mins}`;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        } else {
            let min = mins;
            document.getElementById('timex').innerHTML = `${hour}:${min} ${meridian}`;
        }
    }
}, 1000);

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
splitDate = (date.split("-"))
const monthList = ["ignoreMe", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("date").innerHTML = splitDate[2] + " " + monthList[(parseInt(splitDate[1]))] + " " + splitDate[0];

// var exitImg = getElementById('exit');

function slide() {
    document.getElementById('exit').classList.add('slide');
    setTimeout(() => { document.getElementById('exit').classList.remove('slide'); }, 2000);
};

var prevImg = document.getElementById('prev-img');

prevImg.addEventListener('click', function() {
    window.open('https://byjus.com/physics/capacitor-and-capacitance/', '_blank');
})

startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
    window.open('/start/', '_self');
});

liveBtn = document.getElementById('live-btn');

liveBtn.addEventListener('click', function() {
    window.open('/live/', '_self');
});

recordedBtn = document.getElementById('recorded-btn');

recordedBtn.addEventListener('click', function() {
    window.open('/recorded/', '_self');
});

doubtBtn = document.getElementById('doubt-btn');

doubtBtn.addEventListener('click', function() {
    window.open('/doubt/', '_self');
});

inboxBtn = document.getElementById('inbox-btn');

inboxBtn.addEventListener('click', function() {
    window.open('/inbox/', '_self');
});

documentsBtn = document.getElementById('documents-btn');

documentsBtn.addEventListener('click', function() {
    window.open('/documents/', '_self');
});

exitBtn = document.getElementById('exit');

exitBtn.addEventListener('click', function() {
    window.open('/exit/', '_self');
});

profileBtn = document.getElementById('profile-btn');

profileBtn.addEventListener('click', function() {
    window.open('/profile/', '_self');
});

let flag=0;
rsetBtn = document.getElementById('rset');

rsetBtn.addEventListener('click', function() {
    if (flag==0) {
        rsetBtn.classList.add('rset');
        rsetBtn.innerHTML = 'Reminder Set!';
        flag=1;
    } else {
        rsetBtn.classList.remove('rset');
        rsetBtn.innerHTML = 'Remind Me';
        flag=0;
    }
    
});