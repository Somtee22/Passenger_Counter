

//  let count = 5 

//  count = count + 1

// console.log(count)

let welcomeEl = document.getElementById("welcome-el")


let name = "Dear user"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name


let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
} 
