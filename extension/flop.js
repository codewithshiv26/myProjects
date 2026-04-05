let container=[]    
const inputEl=document.getElementById("input")
const saveEl=document.getElementById("save")
const ulEL = document.getElementById("ulEL")
const deletebtn=document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("container") || "[]")
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    container=leadsFromLocalStorage
    render(container)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        container.push(tabs[0].url)
        localStorage.setItem("container", JSON.stringify(container) )
        render(container)
    })

    
})


deletebtn.addEventListener("click",function(){
    localStorage.clear()
    container=[]
    render(container)
    console.log("clicked")
})

saveEl.addEventListener("click",function(){
    container.push(inputEl.value)
    console.log(container)
    inputEl.value=""
    render(container)  
    localStorage.setItem("container", JSON.stringify(container) ) 
})
function render(leads){
 let elite=""
for(let i=0; i<leads.length;i++){
elite+= `
<li>
    <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
</li>
`
console.log(elite)
}
ulEL.innerHTML=elite
}