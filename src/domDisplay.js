import { container } from "./querySelector";

// Responsible for displaying items via DOM
export function weatherDesc(description) {
    let descContainer = document.querySelector("#description");

    descContainer.textContent = "Weather: " + description;
}

export function temp(temperature) {
    let tempContainer = document.querySelector("#temp");

    tempContainer.textContent = "Temperature: " + temperature;
}

export function feelsLike(tempFeel) {
    let tempFeelContainer = document.querySelector("#tempFeel");

    tempFeelContainer.textContent = "Feels like: " + tempFeel;
}

// Responsible for clearing DOM elements when API is called
