const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Cỏ mây",
        icon: "🌤️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

 
function displayWeather(city) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const errorMessage = document.getElementById('errorMessage');
    weatherDisplay.innerHTML = '';  
    errorMessage.innerHTML = ''; 

    const weather = weatherData[city];

    if (weather) {
       
        weatherDisplay.innerHTML = `  
            <h2>${city}</h2>  
            <p>${weather.icon} ${weather.temperature} °C</p>  
            <p>Độ ẩm: ${weather.humidity}%</p>  
            <p>Tốc độ gió: ${weather.windSpeed} km/h</p>  
            <p>Thời tiết: ${weather.description}</p>  
        `;
    } else {
       
        errorMessage.innerHTML = "Thành phố không tồn tại trong danh sách.";
    }
}


document.getElementById('searchButton').addEventListener('click', function () {
    const cityInput = document.getElementById('cityInput').value.trim();
    if (cityInput) {
        displayWeather(cityInput);
    } else {
      
        document.getElementById('weatherDisplay').innerHTML = '';
        document.getElementById('errorMessage').innerHTML = "Vui lòng nhập tên thành phố.";
    }
});  