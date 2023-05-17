


























import { areaList } from "./areas.js"



const mainContainer = document.querySelector("#container")


const applicationHTML = `
<section id="areas">
${areaList()}
</section>
<aside id="guestList">

</aside>`

mainContainer.innerHTML = applicationHTML
