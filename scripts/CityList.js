import { getCities, getWalkers } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    if (clickTarget.dataset.type === "city") {
        // use city id to get list of walkers in that city
        const allWalkers = getWalkers();
        const foundWalkers = allWalkers.filter(({cityId}) => cityId === parseInt(clickTarget.dataset.id));
        let walkersString = "These walkers are servicing this city:\n";
        walkersString += foundWalkers.map((walker) => walker.name).join("\n");
        window.alert(walkersString);
    }
})

export const CityList = () => {
    const cities = getCities();
    let citiesHTML = "<ul>"
    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-id="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

