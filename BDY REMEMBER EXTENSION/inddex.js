let remember=[]   
const ulEL = document.getElementById("ulEL")     
const input =document.getElementById("inp")        
const show= document.getElementById("btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("remember") || "[]")
if (leadsFromLocalStorage.length > 0){
    remember=leadsFromLocalStorage
    render(remember)
}
show.addEventListener("click",function(){
     remember.push(input.value)
    input.value=""
    render(remember)  
    localStorage.setItem("remember", JSON.stringify(remember) ) 
})
const dlt =document.getElementById("dlt")
dlt.addEventListener("dblclick",function(){
    localStorage.clear()
    remember=[]
    render(remember)
})
function render(leads){
 let elite = ""
 for(let i = 0; i < leads.length; i++){
   elite += `<li>${leads[i]}</li>`
 }
 ulEL.innerHTML = elite
}