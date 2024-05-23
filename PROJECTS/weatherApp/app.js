const apiUrl =" https://www.weatherapi.com/docs/weather_conditions.json";
        async function checkWeather(){
            const response = await fetch(apiUrl)
            let data = await response.json()

            console.log(data);
        }
        checkWeather()