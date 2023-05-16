import { createGuestsHTML } from "./guests.js";

let guestsHTML = createGuestsHTML()

let parentHTMLElement = document.querySelector('#container')
parentHTMLElement.innerHTML = guestsHTML