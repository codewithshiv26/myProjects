 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js"
 import { getDatabase,
           ref,
           push,
           onValue,
            remove } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js"

const firebaseConfig = {
databaseURL: "https://leadstracker-c56a4-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")
// let container=[]    
const inputEl=document.getElementById("input")
const saveEl=document.getElementById("save")
const ulEL = document.getElementById("ulEL")
const deletebtn=document.getElementById("delete-btn")

onValue(referenceInDB, function(snapshot){
   const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }  else (
        ulEL.innerHTML="   "
    )
})

deletebtn.addEventListener("dblclick",function(){
    remove(referenceInDB)
    ulEL.innerHTML= " "
})

saveEl.addEventListener("click",function(){
    push(referenceInDB, inputEl.value)
    inputEl.value=""
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