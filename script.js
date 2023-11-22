
const apiKey = "82a1532c95724225b6d94e82f7d32f57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector('.search input');
const inputBtn = document.querySelector('.search button');

const icon = document.querySelector('.weather-icon');

inputBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
    calcTime(inputBox.value);

})

// check weather
async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();

    console.log(data);
    const condition = data.weather[0].main;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.condition').innerHTML = condition;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";

    if (condition == "Clouds") {
        icon.src = "images/clouds.png";
    }
    else if (condition == "Clear") {
        icon.src = "images/clear.png";
    }
    else if (condition == "Rain") {
        icon.src = "images/rain.png";
    }
    else if (condition == "Drizzle") {
        icon.src = "images/drizzle.png";
    }
    else if (condition == "Mist") {
        icon.src = "images/mist.png";
    }
    else if (condition == "Snow") {
        icon.src = "images/snow.png";
    }
    else if (condition == "Smoke") {
        icon.src = "images/smoke.png";
    }
}

// calc time and date
async function calcTime(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();
    const unixTimestamp = data.dt;

    var a = new Date(unixTimestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var date = date + ' ' + month + ' ' + year;

    var time = a.toLocaleTimeString("en-US");
    console.log(time)

    console.log("###############" + time);
    //document.querySelector('.timeStamp').innerHTML = time;
    document.querySelector('.dateStamp').innerHTML = date;

}