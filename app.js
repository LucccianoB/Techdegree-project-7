//* Alert Banner and Notification    *//
const alertBanner = document.getElementById("alert");
const notificationIcon = document.getElementsByClassName("notification-icon");



alertBanner.innerHTML = 
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`
;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
        notificationIcon[0].style.display = "none"
    }
});

//* Traffic Chart  *//
const tarfficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"], 
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(166, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(tarfficCanvas, {
   type: 'line',
   data: trafficData,
   options: trafficOptions 
});

function chartHourly() {
    trafficChart.data.datasets[0].data = [50, 80, 130, 100, 150, 200, 200, 225, 156, 225, 250, 225, 170]
    trafficChart.update();
};

function chartDaily() {
    trafficChart.data.datasets[0].data = [100, 100, 80, 150, 250, 220, 320, 350, 380, 320, 200, 200, 140]
    trafficChart.update();
};

function chartWeekly() {
    trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
    trafficChart.update();
};

function chartMonthly() {
    trafficChart.data.datasets[0].data = [800, 1500, 2000, 1555, 2000, 2300, 1800, 2250, 1500, 1550, 1750, 1250, 1750]
    trafficChart.update();
};

//*  bar graph *//

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '$ of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/* doughnut chart   */

const mobileCanvas = document.getElementById("Users-chart");

const mobileData = {
    labels: ["Desktop", "Tabelt", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 550],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CFb2',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//* Message section *//

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', ()=> {
    if(user.value === "" && message.value ==="") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

