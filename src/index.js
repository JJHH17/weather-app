import "./styles.css";
import { submitButton, loadingItem } from "./querySelector";
import { weatherDesc, temp, feelsLike, callLocation, getIcon } from "./domDisplay";

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
        loadingItem().style.display = "block";
        return response.json();
      })

      .then(function(response) {

        // Removing loading elements
        loadingItem().style.display = "none";

        // Getting the data we need
        console.log(response);

        callLocation(response.resolvedAddress);

        weatherDesc(response.currentConditions.conditions);

        getIcon(response.currentConditions.icon);

        temp(response.currentConditions.temp);

        feelsLike(response.currentConditions.feelslike);
      })

      .catch(err => {
        console.error(err);
        console.log("Please enter a valid entry");
      });
}