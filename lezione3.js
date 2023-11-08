const prova = function() {
    const x = document.getElementById("task");

const y = document.createElement("p")
y.innertext = document.getElementById("task")
}
const bottone = document.getElementById("btn")
bottone.addEventListener("click", prova)


function aggiungi() {
    const paragrafo = document.createElement("p")
    paragrafo.innerText = document.getElementById("task")
    const contenitore = document.querySelector("#task")
    contenitore.appendChild(paragrafo)
}

document.getElementById("btn").addEventListener("click", aggiungi);