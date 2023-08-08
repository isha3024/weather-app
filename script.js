const API_KEY = "0c80f5d76b5489937f633b198a6899a6";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const img = document.querySelector(".w-img");
async function checkWeather(city){
    const response = await fetch(API_URL+city+`&appid=${API_KEY}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    document.querySelector(".weather").style.display = "block";
    var weatherImg = data.weather[0].main;
    var result = weatherImg.toLowerCase();
    console.log(result);
    switch(result){
        case 'clear':
            img.src="./images/clear.png";
            break;
        case 'clouds':
            img.src="./images/clouds.png";
            break;
        case 'drizzle':
            img.src="./images/drizzle.png";
            break;
        case 'humidity':
            img.src="./images/humidity.png";
            break;
        case 'mist':
            img.src="./images/mist.png";
            break;
        case 'rain':
            img.src="./images/rain.png";
            break;
        case 'thunderstorm':
            img.src="./images/thunderstrom.png";
            break;
        case 'snow':
            img.src="./images/snow.png";
            break;
        case 'haze':
            img.src="./images/haze.png";
            break;
        case 'wind':
            img.src="./images/wind.png";
            break;     
        default:
            img.src="./images/clear.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})