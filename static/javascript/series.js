
const shows = document.querySelectorAll(".series")
const checkbox = document.querySelectorAll(".checkbox")
const msg = document.querySelector("#filtermsg")
let checkedStyles = 0

console.log(shows)
console.log(checkbox)

shows.forEach(element => {
    element.addEventListener('click', () => {
        checkbox.forEach(element => {
            if(element.checked == true){ 
                checkedStyles++;
            }
            else{}; // anders stijl naar beneden}
            })
            check();                                                   
        })
    console.log(checkedStyles)
    checkedStyles = 0
})




function check (){ // check funtie
    console.log(checkedStyles)
    if(checkedStyles > 0){ // als er geen stijl is geselecteerd. Haal dan de classlist hidden weg
        msg.classList.add("hidden")
        checkedStyles = 0;
    } 
    else{
        msg.classList.remove("hidden")  // als er wel een stijl is geselecteerd voeg dan de classlist hidden toe
        checkedStyles = 0;
    }   
}   