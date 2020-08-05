document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM is here")

});

function formatMoney(value){


    value = Math.ceil(value * 100) / 100
    console.log(value)
    
    value = value.toFixed(2)
    return "$" + value
}

function formatSplit(value) {
    if(value === 1) {
        return value +  " person"
    }
    else {
        return value + " people"
    }
}

function update() {//grabbing the values here to be updated and calling it in the 
    //listener
    let bill = Number(document.getElementById('yourBill').value)
    let tipInput = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)
    
    // console.log({bill, tipInput, split}) //when you console log curly brackets its sets it to an object
    let tipValue = bill * (tipInput / 100)
    let tipEach = tipValue /split;
    let newBillEach = (bill + tipValue) / split
    let tipPercent = document.getElementById("tipPercent")
    tipPercent.innerHTML = tipInput + "%"


    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(bill + tipValue)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billPerson').innerHTML = formatMoney(newBillEach)
    document.getElementById('tipPerson').innerHTML = formatMoney(tipEach)
 

}

    let container = document.getElementById('container')
container.addEventListener('input', update) //referenced the update function but not invoke it

