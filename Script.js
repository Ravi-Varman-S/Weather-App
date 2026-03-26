const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    const weatherHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌥️ Condition: ${data.weather[0].main}</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data!";
  }
}