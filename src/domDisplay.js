import { container } from "./querySelector";

// Responsible for displaying items via DOM
export function weatherDesc(description) {
    let descContainer = document.createElement("div");

    descContainer.textContent = description;

    container().appendChild(descContainer);
}