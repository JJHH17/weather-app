import "./styles.css";
import { inputField, submitButton } from "./querySelector";

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
        console.log(response.currentConditions.conditions);
        console.log(response.currentConditions.temp);
        console.log(response.currentConditions.feelslike);
      })

      .catch(err => {
        console.error(err);
        console.log("Please enter a valid entry");
      });
}