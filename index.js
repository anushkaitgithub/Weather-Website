
let button = document.getElementById("button")
let city = document.getElementById("city")
let weathertype = document.getElementById("weatherType")
let description = document.getElementById("descrip")
let humidity = document.getElementById("humidity")
let temp = document.getElementById("temp")
let minTemp = document.getElementById("min-temp")
let maxTemp = document.getElementById("max-temp")
let wind = document.getElementById("wind")


let url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
let apikey = "6839bd72b7e2dc6f4a970223b7e570d7"

getWeather = async(city)=> {
    let getweatherReport =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6839bd72b7e2dc6f4a970223b7e570d7&units=metric`)
    let response = getweatherReport.json()
    return response

}

button.addEventListener("click", function(){
    let input = document.getElementById("search").value;
    getWeather(input)
    .then((response)=> {
        console.log(response)
        city.innerText = response["name"]
        weathertype.innerText = response["weather"]["0"]["main"]
        description.innerText = response["weather"]["0"]["description"]
        let humiditytext = response["main"]["humidity"]
        humidity.innerText = `Humidity : ${humiditytext}`
        temp.innerText = response["main"]["temp"]
        minTemp.innerText = response["main"]["temp_min"]
        maxTemp.innerText = response["main"]["temp_max"]
        wind.innerText  = response["wind"]["speed"]
    })
    .catch((err)=> {
        console.log(err)
    }
)
})

