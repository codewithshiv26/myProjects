// document.getElementById("count-el").innerText = 5
// function incriment(){
//     console.log(This Button Click)
// }

let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save")
let clearEl= document.getElementById("clear-btn")
console.log(clearEl)
console.log(saveEl)

console.log(countEl)

let count = 0
function increment() {
    
    count = count + 1
    countEl.textContent = count
}
function clearAll(){
   count = 0
    countEl.textContent = count
    saveEl.textContent="Previous Entries: "
}
function save(){
    let countstr = count+" - "
    saveEl.textContent+=countstr
    console.log(count)
    countEl.textContent=0
    count=0 
}

