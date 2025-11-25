import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    if (clickTarget.dataset.type === "city") {
        window.alert(`${clickTarget.dataset.walkername} is servicing this city`)
    }
})

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

