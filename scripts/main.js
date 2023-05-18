import { createGuestsHTML } from "./guests.js";
import { createServicesHTML } from "./services.js";
import { areaList } from "./areas.js"

let guestsHTML = createGuestsHTML()
let servicesHTML = createServicesHTML()
let areaHTML = areaList()

/* let parentHTMLElement = document.querySelector('.mainBodyLeft')
parentHTMLElement.innerHTML = servicesHTML + areaHTML
 */

/* parentHTMLElement = document.querySelector('.mainBodyRight')
parentHTMLElement.innerHTML = guestsHTML
 */


const mainContainer = document.querySelector(".main");

const applicationHTML = `
<section class="left-aligned">

<article class="areaServices">
${createServicesHTML()}
</article>

<article class="areas">
${areaList()}
</article>
</section>
<section class="mainBodyRight">
<article class="guests">
<h2 class="guest-header"></h2>
${createGuestsHTML()}
</article>
</section>
`;
mainContainer.innerHTML = applicationHTML;
