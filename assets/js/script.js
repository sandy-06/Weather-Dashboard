
var cityTextArea = document.getElementById("city");

var searchCityBtn = document.getElementsByClassName("cityButton");

var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="
var apiKey = "bd08044f4b83ef10ec4cb21575356c6f"

//get city
searchCityBtn[0].addEventListener("click", function () {

    var city = cityTextArea.value;
    var location = document.getElementById("location")
    location.textContent = city
    var priorCity = document.createElement("button")
    priorCity.textContent = "city";

    fetch(`${requestURL}${city}&appid=${apiKey}`).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        var lat = res.city.coord.lat;
        var lon = res.city.coord.lon;
       
      
        
        //city date ,temp wind humidity uv index with color 

        var multiDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`

        fetch(multiDay).then(function (res) {
            return res.json()

        }).then(function (data) {
            console.log(data)
            localStorage
           var pCity = document.getElementById(city)
            //var today = document.getElementById("today")
            var date = moment(data.current.dt * 1000).format("MM/DD/YYYY")
            //today.textContent = date;
            location.textContent = city + "(" + date + ")"
            var temp = document.getElementById("temp0")
            var currentTemp = data.current.temp
            temp.textContent = "Temp: " + currentTemp + " F"

            var wind = document.getElementById("wind0")
            var currentWind = data.current.wind_speed
            wind.textContent = "Wind: " + currentWind + " mph"

            var humidity = document.getElementById("humidity0")
            var currentHumidity = data.current.humidity
            humidity.textContent = "Humidity: " + currentHumidity + " %"
            var uvi = document.getElementById("uv0")
            var currentUvi = data.current.uvi
            uvi.textContent = "UV Index: " + currentUvi

            
        
                
    
                    for (let i = 1; i < 6; i++) {
                        var pCity = document.getElementById("city" + i)

                        var newDate = document.getElementById("date" + i)
                        var fiveDayDate = moment(data.daily[i].dt * 1000).format("MM/DD/YY")
                        console.log(fiveDayDate)
                        var newWind = data.daily[i].wind_speed
                        var newHumidity = data.daily[i].humidity
                        console.log(newHumidity)
                        newDate.textContent= fiveDayDate
                        var newIcons = document.getElementById("icon" + i)                     
                        var iconUrl = "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
                        var icon= document.createElement('img');
                        icon.src =iconUrl;
                        document.getElementById("icon" + i).appendChild(icon);

                        var pWind = document.getElementById("wind" + i)
                        pWind.textContent=`Wind:${newWind}mph`;

                        var pHumidity = document.getElementById("Humidity" + i)
                        pHumidity.textContent = "Humidity:" + newHumidity + "%";



                    }              
                });    
            })
                
               })