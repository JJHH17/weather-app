import "./styles.css";
import { inputField, submitButton } from "./querySelector";
import { weatherDesc, temp, feelsLike } from "./domDisplay";

submitButton();

// API call function
export function getWeather(location) { 
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
        "method": "GET",
        "mode": "cors",
        "headers": {
        }
        })
        
      .then(function(response) {
        return response.json();
      })

      .then(function(response) {
        // Getting the data we need (subject to change)
        console.log(response.currentConditions);
        weatherDesc(response.currentConditions.conditions);
        temp(response.currentConditions.temp);
        feelsLike(response.currentConditions.feelslike);
      })

      .catch(err => {
        console.error(err);
        console.log("Please enter a valid entry");
      });
}