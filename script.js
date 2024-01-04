const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")
const suggestion = document.getElementById("suggestion");


btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'9a656f14a3ef3313fc4af83507720a83'}`)
 .then(response=>response.json())
 .then(data =>{ console.log(data)
 const iconCode= data.weather[0].icon;
 icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

 const weatherCity=data.name;
 const weatherCountry=data.sys.country;
 
 weather.innerHTML=`${weatherCity},${weatherCountry}`;

 let weatherTemp=data.main.temp;
 weatherTemp=weatherTemp - 274.15;
 const temp=weatherTemp.toFixed(2)
 temperature.innerHTML=`${temp}°C`

 const weatherDesc=data.weather[0].description;
 description.innerHTML=weatherDesc;
 suggestInformation(data.weather[0].main);


});
}


function suggestInformation(weatherCondition) {
    if (weatherCondition.toLowerCase() === 'clear') {
        suggestion.textContent = "Clear skies! Perfect weather for outdoor activities.";
    } else if (weatherCondition.toLowerCase() === 'rain') {
        suggestion.textContent = "Rainy day! Don't forget your umbrella.";

    } 
    else if (weatherCondition.toLowerCase() === 'fog') {
        suggestion.textContent = "Foggy conditions! Drive safely and use fog headlights.";

    } 
    else {
        suggestion.textContent = "Enjoy the weather!";
    }
}