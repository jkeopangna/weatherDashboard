var searchButton = document.getElementById('search')
var currentWeather = document.getElementById('cityDisplay')
var citySearch = document.getElementById('citySearch')
var firstDay = document.getElementById('firstDay')
var fiveDay = document.getElementsByClassName('card-body')
var city = '';
var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var yo = "&appid=d9455727a2f0e9d6ddcc523dfad9a385&units=imperial";


searchButton.addEventListener('click', getApi)


function getApi() {
     var requestToday = "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=d9455727a2f0e9d6ddcc523dfad9a385&units=imperial";
    
    fetch(requestToday)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        console.log(data.weather[0].icon)


           var dateData = (data.dt);
        //    console.log(date);
           var datems = dateData * 1000;
           var dateObject = new Date(datems);
           var currentDate = dateObject.toLocaleDateString();
           console.log(currentDate);
           var date = document.createElement('h2');
           date.textContent = ('(' + currentDate + ')');
        //    currentWeather.append(date);
            
            var iconCode = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            $(".icon").html(data.name + ' (' + currentDate + ')' + "<img src='" + iconUrl  + "'>");

        //    var location = document.createElement('h2');
        //    location.textContent = data.name + ' (' + currentDate + ')';
        //    currentWeather.append(location)

            var currentTemp = document.createElement('p');
           currentTemp.textContent = ('Temperature: ' + data.main.temp);
           currentWeather.appendChild(currentTemp);

           var currentHumid = document.createElement('p');
           currentHumid.textContent = ('Humidity: ' + data.main.humidity + '%');
           currentWeather.appendChild(currentHumid);

           var currentWind = document.createElement('p');
           currentWind.textContent = ('Wind Speed: ' + data.wind.speed + ' MPH');
           currentWeather.appendChild(currentWind);
            
           var uvIndex = 'https://api.openweathermap.org/data/2.5/uvi?lat=39.74&lon=-104.98&appid=d9455727a2f0e9d6ddcc523dfad9a385&units=imperial';
        
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

    });
}

getApi();

    /////////////////////UV INDEX CALL//////////////////////////
    // function uv(){

    //     var uvIndex = 'https://api.openweathermap.org/data/2.5/uvi?lat=39.74&lon=-104.98&appid=d9455727a2f0e9d6ddcc523dfad9a385&units=imperial';
        
    //     fetch(uvIndex)
    //     .then (function(response){
    //         return response.json()
    //     })
    //     .then(function (data) {
    //         console.log(data)

    //         var currentIndex = document.createElement('p');
    //         currentIndex.textContent = ('UV Index: ' + data.value);
    //         currentWeather.appendChild(currentIndex);
    //     })
    // }

    // uv();


    

function forecastApi(){

    var requestForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=d9455727a2f0e9d6ddcc523dfad9a385';

    fetch(requestForecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        
        $('.card-body').each(function () {
        $('#firstDay').html(data.list[1].dt_txt)
        $('#firstTemp').html(data.list[1].main.temp)
        $('#secondDay').html(data.list[9].dt_txt)
        $('#thirdDay').html(data.list[17].dt_txt)
        $('#fourthDay').html(data.list[25].dt_txt)
        $('#fifthDay').html(data.list[33].dt_txt)


    })

    })
}

forecastApi();
