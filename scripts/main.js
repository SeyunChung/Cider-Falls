import { createGuestsHTML } from "./guests.js";
import { createServicesHTML } from "./services.js";
import { areaList } from "./areas.js"

let guestsHTML = createGuestsHTML()
let servicesHTML = createServicesHTML()
let areaHTML = areaList()

let parentHTMLElement = document.querySelector('.mainBodyLeft')
parentHTMLElement.innerHTML = servicesHTML + areaHTML


parentHTMLElement = document.querySelector('.mainBodyRight')
parentHTMLElement.innerHTML = guestsHTML

