import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    const walkerId = clickTarget.dataset.walkerforeignkey;
    const allWalkers = getWalkers();
    const foundWalker = allWalkers.find(({id}) => id === parseInt(walkerId));
    window.alert(`This pet is being walked by ${foundWalker.name}`)

})

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerforeignkey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

