import { getWeather } from "./index";

// Responsible for getting DOM elements

// Gets input field
export function inputField() {
    const input = document.querySelector("#location");

    return input;
}

// Gets submit button
export function submitButton() {
    const submitBtn = document.querySelector("#submitBtn");
    const search = inputField();

    submitBtn.addEventListener("click", () => {
        getWeather(search.value);
    })

    return submitBtn;
}

export function container() {
    const container = document.querySelector("#appContainer");
    return container;
}

export function loadingItem() {
    const loadingElement = document.querySelector("#loadingScreen");
    return loadingElement;
}