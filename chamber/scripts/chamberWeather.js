const currentTemp = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
// coordinates for Sioux Falls from Google maps = 43.546102465537956, -96.74376811467437;
const currentWeatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.55&lon=-96.74&appid=b92da245303a816497b90a4eeb90ddf5&units=imperial";

//the following is so that I can get the forecast
const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=43.55&lon=-96.74&appid=b92da245303a816497b90a4eeb90ddf5&units=imperial";

async function fetchWeatherData() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); //testing only.
      displayCurrentWeather(data); //uncomment when checked.
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchForecastData() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchWeatherData();
fetchForecastData();

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp} &deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  const forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = "";

  // Get three days of forecast data
  const forecastDays = data.list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 3);

  forecastDays.forEach((day) => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const temp = day.main.temp;
    const icon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    const description = day.weather[0].description;

    const dayForecast = `
      <div class="forecast-day">
        <h3>${dayName}</h3>
        <img src="${icon}" alt="${description}">
        <p>${temp} &deg;F</p>
        <p>${description}</p>
      </div>
    `;
    forecastElement.innerHTML += dayForecast;
  });
}
