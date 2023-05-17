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



document.addEventListener('click', (clickEvt) => {
    //declartaions
    let itemClicked = clickEvt.target
    let alertString = ''
    let alertAreas = []

    //checks if user clicked on a service
    if (itemClicked.dataset.type === 'service') {
        for (const service of services) {
            if (service.id === parseInt(itemClicked.dataset.id)) {
                for (const serviceLog of serviceLogs) {
                    if (serviceLog.serviceId === service.id) {
                        for (const area of areas) {
                            if (serviceLog.areaId === area.id) {
                                
                                alertAreas.push(area.name)
                            }
                        }
                    }
                }

                //start building the string from the previous array
                let index = 1
                alertString += `${service.name} is avalible in `
                for (const alertArea of alertAreas) {
                    //checks length of array for listing grammar rules
                    if(alertAreas.length === 1){
                        alertString += `${alertArea}.`
                    }else if (index === alertAreas.length) {
                    
                        alertString += `and ${alertArea}.`
                    } else {
                        alertString += `${alertArea} `
                    }
                    index++
                }

            }
            
        }
    //display window alert
    window.alert(alertString)
    }
}
)
