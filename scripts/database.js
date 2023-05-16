// guests array, areas array, services array
// each array containing object with properties

const database = {
    guests: [
        {id: 1, name: "Oliver Blackwood", areaId: 1},
        {id: 2, name: "Ava Thompson", areaId: 2},
        {id: 3, name: "Lucas Peterson", areaId: 3},
        {id: 4, name: "Benjamin Wilson", areaId: 1},
        {id: 5, name: "Amelia Parker", areaId: 4},
        {id: 6, name: "Alexander Anderson", areaId: 5},
        {id: 7, name: "Olivia Taylor", areaId: 6},
        {id: 8, name: "William Cooper", areaId: 3},
        {id: 9, name: "Sophia Jenkins", areaId: 1},
        {id: 10, name: "James Murphy", areaId: 6},
        {id: 11, name: "Samuel Brooks", areaId: 2},
        {id: 12, name: "Emily Turner", areaId: 4},
        {id: 13, name: "Daniel Carter", areaId: 5},
        {id: 14, name: "Abigail Ross", areaId: 3},
        {id: 15, name: "Joseph Henderson", areaId: 1},
        {id: 16, name: "Grace Foster", areaId: 6},
        {id: 17, name: "Michael Edwards", areaId: 6},
        {id: 18, name: "Lily Reed", areaId: 2},
        {id: 19, name: "David Collins", areaId: 4},
        {id: 20, name: "Scarlett Butler", areaId: 6},
        {id: 21, name: "Matthew Smith", areaId: 3},
        {id: 22, name: "Chole Baker", areaId: 5},
        {id: 23, name: "Madison Price", areaId: 4},
        {id: 24, name: "Andrew Young", areaId: 1},
        {id: 25, name: "Victoria King", areaId: 6},
        {id: 26, name: "Ryan Lion", areaId: 2},
        {id: 27, name: "Kim Hill", areaId: 5},
        {id: 28, name: "Sophia Wok", areaId: 5},
        {id: 29, name: "Noah Chirstmas", areaId: 1},
        {id: 30, name: "Emma Hudson", areaId: 2}
    ],
    areas: [
        {id: 1, name: "Chamfort River"},
        {id: 2, name: "Lost Wolf Hiking Trail"},
        {id: 3, name: "Lodge"},
        {id: 4, name: "Gander River"},
        {id: 5, name: "Campgrounds"},
        {id: 6, name: "Pine Bluffs Trails"}
    ],
    services: [
        {id: 1, name: "Rafting"},
        {id: 2, name: "Canoeing"},
        {id: 3, name: "Fishing"},
        {id: 4, name: "Hiking"},
        {id: 5, name: "Picnicking"},
        {id: 6, name: "Rock Climbing"},
        {id: 7, name: "Lodging"},
        {id: 8, name: "Parking"},
        {id: 9, name: "Information"},
        {id: 10, name: "Zip Lines"}
    ],
    serviceLogs: [
        {id: 1, areaId: 1, serviceId: 1},
        {id: 2, areaId: 1, serviceId: 2},
        {id: 3, areaId: 1, serviceId: 3},
        {id: 4, areaId: 2, serviceId: 4},
        {id: 5, areaId: 2, serviceId: 5},
        {id: 6, areaId: 2, serviceId: 6},
        {id: 7, areaId: 3, serviceId: 7},
        {id: 8, areaId: 3, serviceId: 8},
        {id: 9, areaId: 3, serviceId: 9},
        {id: 10, areaId: 3, serviceId: 5},
        {id: 11, areaId: 4, serviceId: 3},
        {id: 12, areaId: 4, serviceId: 4},
        {id: 13, areaId: 5, serviceId: 9},
        {id: 14, areaId: 5, serviceId: 7},
        {id: 15, areaId: 5, serviceId: 8},
        {id: 16, areaId: 6, serviceId: 4},
        {id: 17, areaId: 6, serviceId: 5},
        {id: 18, areaId: 6, serviceId: 10}
    ]
}

// export each of the 4 arrays
export const getAreas = () => {
    return database.areas.map(area =>({...area}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServiceLogs = () =>{
    return database.serviceLogs.map(serviceLog => ({...serviceLog}))
}