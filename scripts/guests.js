import { getGuests } from "./database.js"

//declarations
const guests = getGuests()

//makes and returns html
export const createGuestsHTML = () =>{
    let html = "<div><h2>Current Park Guests</h2>"

    html+= '<ul>'

    for (const guest of guests) {
        html+=`<li data-type="guest">${guest.name}</li>`
    }
    html+= `</ul></div>`

    return html

}