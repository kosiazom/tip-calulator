document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM is here")

});



function update() {//grabbing the values here to be updated and calling it in the 
    //listener
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)
    
    // console.log({bill, tipInput, split}) //when you console log curly brackets its sets it to an object
    let tipValue = bill * (tipPercent / 100)
    let tipEach = tipValue /split;
    let newBillEach = (bill + tipValue) / split
    console.log(newBillEach)  
}

    let container = document.getElementById('container')
container.addEventListener('input', update) //referenced the update function but not invoke it

