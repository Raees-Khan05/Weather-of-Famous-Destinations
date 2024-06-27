

function getWeather() {
    var location = document.getElementById('locations').value;
    var apiKey = '4fca510e603afb8f14a08ba90625ad48';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey + '&units=metric';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperature = data.main.temp;
            var humidity = data.main.humidity;
            var weatherInfo = `
                        <p><i class="fas fa-thermometer-half"></i> Temperature: ${temperature}°C</p>
                        <p><i class="fas fa-tint"></i> Humidity: ${humidity}%</p>
                    `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}
