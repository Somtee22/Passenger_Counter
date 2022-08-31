

//  let count = 5 

//  count = count + 1

// console.log(count)

let welcomeEl = document.getElementById("welcome-el")


let greeting = "Welcome"

welcomeEl.innerText = greeting 

welcomeEl.innerText += "👋"


let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countString = count + " - "

    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
}