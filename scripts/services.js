import { getAreas, getServiceLogs, getServices } from "./database.js"

//declarations
let services = getServices()
let serviceLogs = getServiceLogs()
let areas = getAreas()


//creates and returns html
export const createServicesHTML = () => {
    let html = `<div><p>Park Services: </p> `
    let index = 1

    for (const service of services) {
        //conditional to check if current service is last service in array
        if (index === services.length) {
            html += `<p data-type="service" data-id="${service.id}">${service.name}</p>`
        } else {
            html += `<p data-type="service" data-id="${service.id}">${service.name}, </p>`
        }

        index++
    }


    html += `</div>`

    return html
}


/* //click event is what you were working on :P
document.addEventListener('click', (clickEvt) => {
    let itemClicked = clickEvt.target
    if()
}
)
 */