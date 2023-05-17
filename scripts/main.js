import { areaList } from "./areas.js"
import { createGuestsHTML } from "./guests.js"


const mainContainer = document.querySelector("#container")


const applicationHTML = `
<section id="areas">
${areaList()}
</section>
<aside id="guestList">
${createGuestsHTML()}
</aside>`

mainContainer.innerHTML = applicationHTML
