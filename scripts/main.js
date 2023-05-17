import { createGuestsHTML } from "./guests.js";
import { createServicesHTML } from "./services.js";
import { areaList } from "./areas.js"

let guestsHTML = createGuestsHTML()
let servicesHTML = createServicesHTML()
let areaHTML = areaList()

let parentHTMLElement = document.querySelector('#container')
parentHTMLElement.innerHTML = guestsHTML + servicesHTML + areaHTML