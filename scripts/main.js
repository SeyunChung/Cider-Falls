import { createGuestsHTML } from "./guests.js";
import { createServicesHTML } from "./services.js";

let guestsHTML = createGuestsHTML()
let servicesHTML = createServicesHTML()

let parentHTMLElement = document.querySelector('#container')
parentHTMLElement.innerHTML = guestsHTML + servicesHTML
//make note of new closing div tag