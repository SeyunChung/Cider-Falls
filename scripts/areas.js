// import
import { getAreas, getGuests, getServiceLogs, getServices } from "./database.js"

// store copy of areas, guests, serviceLogs, services
const areas = getAreas()
const guests = getGuests()
const serviceLogs = getServiceLogs()
const services = getServices()

  export const areaList = () => {
    let areaHtml = `<ul>`;
    for (const area of areas) {
      areaHtml += `<li data-type="area" data-id="${area.id}" data-name="${area.name}"> ${area.name} </li>`;
      for (const serviceLog of serviceLogs) {
        if (area.id === serviceLog.areaId) {
          for (const service of services) {
            if (serviceLog.serviceId === service.id) {
              areaHtml += `<div data-type="serviceLog" data-id="${serviceLog.id}" data-areaId="${serviceLog.areaId}"> ${service.name}<br>`;
            }
          }
        }
      }
      areaHtml += ``;
    }
    areaHtml += `</ul>`;
    return areaHtml;
  };
  
  document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    let counter = 0;
    if (itemClicked.dataset.type === "area") {
      let clickedId = itemClicked.dataset.id;
  
      for (const guest of guests) {
        if (parseInt(clickedId) === guest.areaId) {
          counter++;
        }
      }
      window.alert(
        `${itemClicked.dataset.name} has ${counter} guests in the area`
      );
    }
  }); 
  

