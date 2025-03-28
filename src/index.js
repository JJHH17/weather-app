import "./styles.css";

function getWeather(location) { 
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
        "method": "GET",
        "headers": {
        }
        })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
      
}

console.log(getWeather("venice"));