
var cityTextArea = document.getElementById("city");

var searchCityBtn = document.getElementsByClassName("cityButton");

var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="
var apiKey = "bd08044f4b83ef10ec4cb21575356c6f"

//get city
searchCityBtn[0].addEventListener("click", function () {
    var city = cityTextArea.value;
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
            console.log(data.current.temp)
            return
        })
    })

    var fiveDay = function (res) {
//future date icon tem wind humidity
    }
})










//get forecast data


