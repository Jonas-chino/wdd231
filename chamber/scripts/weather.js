

const lat = -16.50;  
const lon = -68.15;  


const API_KEY = 'f134b2c4cc7ae9c523d17b6ca6970686';


const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;


const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');

// Fetch current weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch current weather');
        }
        
        const data = await response.json();
        console.log('Current Weather:', data);
        displayCurrentWeather(data);
        
    } catch (error) {
        console.error('Error fetching current weather:', error);
        currentWeatherDiv.innerHTML = `
            <div class="error">
                <p>Unable to load current weather data</p>
                <p>Please check your API key</p>
            </div>
        `;
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch forecast');
        }
        
        const data = await response.json();
        console.log('Forecast Data:', data);
        displayForecast(data);
        
    } catch (error) {
        console.error('Error fetching forecast:', error);
        forecastDiv.innerHTML = `
            <div class="error">
                <p>Unable to load forecast data</p>
                <p>Please check your API key</p>
            </div>
        `;
    }
}

function displayCurrentWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    
    currentWeatherDiv.innerHTML = `
        <img src="${iconUrl}" alt="${description}" class="weather-icon-large">
        <div class="weather-details">
            <p class="current-temp">${temp}°C</p>
            <p class="weather-description">${description}</p>
            <p class="weather-extra">Feels like: ${feelsLike}°C</p>
            <p class="weather-extra">Humidity: ${humidity}%</p>
            <p class="weather-extra">Wind Speed: ${windSpeed} m/s</p>
        </div>
    `;
}


function displayForecast(data) {

    const dailyForecasts = [];
    const processedDates = new Set();
    

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateString = date.toLocaleDateString();
        const hour = date.getHours();
        
        if (hour >= 11 && hour <= 13 && !processedDates.has(dateString) && dailyForecasts.length < 3) {
            dailyForecasts.push(item);
            processedDates.add(dateString);
        }
    });
    
    if (dailyForecasts.length < 3) {
        const datesNeeded = 3 - dailyForecasts.length;
        for (let i = 0; i < data.list.length && dailyForecasts.length < 3; i++) {
            const date = new Date(data.list[i].dt * 1000);
            const dateString = date.toLocaleDateString();
            if (!processedDates.has(dateString)) {
                dailyForecasts.push(data.list[i]);
                processedDates.add(dateString);
            }
        }
    }
    
    forecastDiv.innerHTML = '';
    
    dailyForecasts.forEach((forecast, index) => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(forecast.main.temp);
        const tempMax = Math.round(forecast.main.temp_max);
        const tempMin = Math.round(forecast.main.temp_min);
        const description = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="forecast-day">${index === 0 ? 'Tomorrow' : dayName}</div>
            <img src="${iconUrl}" alt="${description}" class="forecast-icon">
            <div class="forecast-temp">${temp}°C</div>
            <div class="forecast-desc">${description}</div>
            <div class="temp-range">
                <span class="temp-high">↑ ${tempMax}°</span>
                <span class="temp-low">↓ ${tempMin}°</span>
            </div>
        `;
        
        forecastDiv.appendChild(forecastCard);
    });
}

fetchCurrentWeather();
fetchForecast();



