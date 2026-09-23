const apiKey = "72731d68411dd61e195d72f61c682e9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")

async function checkweather(city) {
    const cityName = city || "New York";
    const response = await fetch(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`);

    if (!response.ok) {
        throw new Error(`Weather request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;


if (data.weather[0].main=="Clouds"){
    weatherIcon.src="image/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="image/clear (2).png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="image/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="image/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="image/mist (1).png";
}

document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

checkweather("New York");