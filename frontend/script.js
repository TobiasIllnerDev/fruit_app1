const backendUrl = "http://127.0.0.1:8000/fruits/";
const fruitList = document.querySelector("#fruits");
const statusMessage = document.querySelector("#status");

async function loadFruits() {
    try {
        const response = await fetch(backendUrl);
        if (!response.ok) {
            throw new Error(`HTTP-Fehler: ${response.status}`);
        }
        const fruits = await response.json();
        console.log("Früchte vom Backend:", fruits);

        fruitList.replaceChildren();
        for (const fruit of fruits) {
            const item = document.createElement("li");
            item.textContent = `${fruit.name} – ${fruit.gewicht} g – ${fruit.farbe}`;
            fruitList.appendChild(item);
        }
        statusMessage.textContent = `${fruits.length} Früchte geladen.`;
    } catch (error) {
        console.error("Früchte konnten nicht geladen werden:", error);
        statusMessage.textContent = "Früchte konnten nicht geladen werden. Bitte prüfe, ob das Backend auf Port 8000 läuft.";
    }
}

loadFruits();
