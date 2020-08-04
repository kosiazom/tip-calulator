document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM is here")

});



function update() {//grabbing the values here to be updated and calling it in the 
    //listener
    let bill = document.getElementById('yourBill').value
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    // console.log({bill, tipInput, split}) //when you console log curly brackets its sets it to an object
    let tipValue = bill * (tipInput/100)
}

    let container = document.getElementById('container')
container.addEventListener('input', update) //referenced the update function but not invoke it

