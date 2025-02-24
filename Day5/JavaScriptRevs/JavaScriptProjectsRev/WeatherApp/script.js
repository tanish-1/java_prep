const APIKEY = "b294e5a54adc0c574823f259162fc1e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${APIKEY}`);
    const data  = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/cloudes';
        weatherIcon.alt = 'cloudes';
    } else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = 'images/Clear';
        weatherIcon.alt = 'Clear';
    } else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = 'images/Rain';
        weatherIcon.alt = 'Rain';
    } else{
        weatherIcon.src = 'images/Mist';
        weatherIcon.alt = 'Mist';
    }
}


searchbtn.addEventListener("click", function(){
    checkWeather(search.value);
})