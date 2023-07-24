// fetching api

// to convert fahrenheit to degree
// need to use "units" as per given in openweather website
// this "unit" need to use after api keys => &units=metric <= like this

// note : you always used to do this mistake => you did not call function so, 
// don't miss to call the function getData() after adding logic


async function getData(city){
         
      try{

        let apiKey = "e559ffcfc8bcaa8c6fee12e1d700926b"
       
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          
        let data = await fetch(api); //1st promise
        
        let fetchedData = await data.json(); //2nd promise
         
        // console.log(fetchedData);
       return  showWeather(fetchedData);
        
      }
      catch(error){
          
        console.log("something went wrong! please try again later", error);

      }

}


let weather = document.querySelector("#weather");
let input = document.querySelector("#search-bar");
let btn = document.querySelector("#btn");

btn.addEventListener('click' , ()=>{
     
    getData(input.value);
 
     // h1.innerHTML = text;
     // reset input
     input.value = " ";
 });
 

let showWeather = (data) => {

  if(data.cod = 404){
     weather.innerHTML = `
      <h2> city name not found </h2>

     `

  }
   
    weather.innerHTML = `
   
    <h2>Weather in <span id="city">${data.name}</span></h2>
    <div class="h1-text">${data.main.temp}</span>°C</div>
    <div id="weather-icon">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">    
    <div id="descripition">${data.weather[0].main}</div>
    </div>
    <div>humidity : <span id="humidity"> ${data.main.humidity}</span>%</div>
    <div id="wind">Wind speed: ${data.wind.speed}km/h</div>
  </div>

    `
}

// innerHTML will render the html element
// innerText print as it is text

// step 2: add event listener
// step 3: use .value to print input text in element


// when we add text in input and click button getData(whatever we add text in input) 
// getData(input text) <= will run 
// in short means => when we click btn we need to run that function of getData() 
//  => input.value whatever it wll search on basis