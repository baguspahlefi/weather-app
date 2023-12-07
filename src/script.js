const apiKey = "548b5b917b7d3ef83f7fd5711da22d47";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeathers(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "../images/clouds.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "../images/rain.png"
    }
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "../images/clouds.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "../images/rain.png"
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "../images/clear.png"
    }
    else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "../images/mist.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeathers(searchBox.value);
} 
)