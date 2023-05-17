// import
import { getAreas, getGuests, getServiceLogs, getServices } from "./database.js"
// store copy of areas, guests, serviceLogs, services
const areas = getAreas()
const guests = getGuests()
const serviceLogs = getServiceLogs()
const services = getServices()



/* export const areaList = () => {
    let html = "<ol>"

    for (const area of areas) {
        html += `<li data-id="${area.id}" 
        data-name="${area.name}" 
        data-type="area" 
        >
        ${area.name}</li>`
    }

    html += "</ol>"
    return html
} */

export const areaList = () => areaHTML(areas)

const areaHTML = (areaObj) => {
    let areasHTML = `<h1 class="title">Areas</h1><div class="imageContainer">`
    for (const area of areaObj) {
        if(area.id < 4){
            areasHTML += `<div id="area--${area.id}" data-type="area">${area.name}</div>`
        } 
    }
    areasHTML += `</div><div class="imageContainer">`
    for (const area of areaObj) {
        if(area.id > 3){
            areasHTML += `<div id="area--${area.id}" data-type="area">${area.name}</div>`
        }
    }
    areasHTML += `</div>`
    return areasHTML
}
 
