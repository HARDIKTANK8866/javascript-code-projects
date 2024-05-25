const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";

// a8abdc43e3142b36c70bef79ea8f883a
// a8abdc43e3142b36c70bef79ea8f883a 
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore    ";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").Style.display = "block";
    document.querySelector(".weather").Style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
       Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").Style.display = "block";
    document.querySelector(".error").Style.display = "none";
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
}
