import { getWalkers } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const clickedElement = clickEvent.target;

    if (clickedElement.dataset.type === "walker") {
        window.alert(`${clickedElement.dataset.city}`)
    }
})

export const Walkers = () => {
    const walkers = getWalkers()
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

