import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click", (clickEvent) => {
    const clickedElement = clickEvent.target;
    window.alert(`${clickedElement.dataset.city}`)
})

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}" data-city="${walker.city}" >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

