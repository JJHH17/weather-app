import { getWeather } from "./index";

// Gets input field
export function inputField() {
    const input = document.querySelector("#location");
    return input;
}

// Gets submit button
export function submitButton(location) {
    const submitBtn = document.querySelector("#submitBtn");
    const search = inputField();

    submitBtn.addEventListener("click", () => {
        getWeather(search.value);
    })

    return submitBtn;
}

// User fills out form
// Presses button
// Form input is fed into API function