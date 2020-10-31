var searchButton = document.getElementById('search')
var currentWeather = document.getElementById('cityDisplay')




searchButton.addEventListener('click', getApi)


function getApi() {
    var requestToday = 'https://api.openweathermap.org/data/2.5/weather?q=denver&appid=d9455727a2f0e9d6ddcc523dfad9a385&units=imperial'
    
    fetch(requestToday)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        // console.log(data.weather)
        
        var location = document.createElement('h2');
        location.textContent = data.name;
        currentWeather.append(location)

            var currentTemp = document.createElement('p');
           currentTemp.textContent = ('Temperature: ' + data.main.temp);
           currentWeather.appendChild(currentTemp);

           var currentHumid = document.createElement('p');
           currentHumid.textContent = ('Humidity: ' + data.main.humidity + '%');
           currentWeather.appendChild(currentHumid);

           var currentWind = document.createElement('p');
           currentWind.textContent = ('Wind Speed: ' + data.wind.speed + ' MPH');
           currentWeather.appendChild(currentWind);



        //    var date = (data.dt);
        //    console.log(date);
        //    var datems = date * 1000;
        //    var dateObject = new Date(datems);
        //    var dateString = dateObject.toLocaleDateString();
        //    console.log(dateString);

            

    });
}

getApi();

    /////////////////////UV INDEX CALL//////////////////////////
    function uv(){

        var uvIndex = 'https://api.openweathermap.org/data/2.5/uvi?lat=39.74&lon=-104.98&appid=d9455727a2f0e9d6ddcc523dfad9a385';
        
        fetch(uvIndex)
        .then (function(response){
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            var currentIndex = document.createElement('p');
            currentIndex.textContent = ('UV Index: ' + data.value);
            currentWeather.appendChild(currentIndex);
        })
    }

    uv()


    

function fiveApi(){

    var requestFive = 'https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=d9455727a2f0e9d6ddcc523dfad9a385'

    fetch(requestFive)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data)

        for (var i = 0; i < 5; i++) {
            console.log(data)
        }
    })
}

fiveApi();
