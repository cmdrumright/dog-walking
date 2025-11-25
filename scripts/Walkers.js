import { getWalkers, getCities } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const clickedElement = clickEvent.target;

    if (clickedElement.dataset.type === "walker") {
        window.alert(`${clickedElement.dataset.city}`)
    }
})

export const Walkers = () => {
    const walkers = getWalkers()
    const cities = getCities()

    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        const city = cities.find(({id}) => id === walker.cityId)
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${city.name}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

