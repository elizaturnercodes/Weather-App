"use strict";
// OPEN WEATHER API INFORMATION
const apiKey = "4c4edad1ef476b69e85ca8ec66880af0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

// QUERY SELECTORS
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");

// RETRIEVING WEATHER INFORMATION
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

  // RETRIEVING CORRECT IMAGES
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  }
}

// SEARCH BUTTON EVENT LISTENER
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  const weatherContainer = document.querySelector(".weather");
  weatherContainer.classList.remove("hidden");
});
