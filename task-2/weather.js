const apiKey = "25666f872ed085b9f8493738fc54f8e2";
const city = "Guntur"; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const description = data.weather[0].description;
    const cityName = data.name;

    document.getElementById("city").innerText = cityName;
    document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
    document.getElementById("description").innerText = `Description: ${description}`;
    document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${windSpeed} m/s`;
  })
  .catch(error => console.error('Error:', error));