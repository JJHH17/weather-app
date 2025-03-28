import { container } from "./querySelector";

// Responsible for displaying items via DOM
export function weatherDesc(description) {
    let descContainer = document.createElement("div");

    descContainer.textContent = "Weather: " + description;

    container().appendChild(descContainer);
}

export function temp(temperature) {
    let tempContainer = document.createElement("div");

    tempContainer.textContent = "Temperature: " + temperature;

    container().appendChild(tempContainer);
}

export function feelsLike(tempFeel) {
    let tempFeelContainer = document.createElement("div");

    tempFeelContainer.textContent = "Feels like: " + tempFeel;

    container().appendChild(tempFeelContainer);
}

// Responsible for clearing DOM elements when API is called