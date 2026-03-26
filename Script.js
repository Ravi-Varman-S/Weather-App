const apiKey = "15a01f6be3a7694a2f1c9408bcb43322";//Add your API Key here 

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
