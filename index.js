let userInput = document.getElementById("number")
let outputElement = document.getElementById("outputId")

function EvenOrOdd(){
    if(userInput.value===""){
        alert("Please Provide Number")
        return false
    }

    if (userInput.value%2 === 0){
        outputElement.innerHTML = "it is a Even Number"  
    }else{
        outputElement.innerHTML = "it is a Odd Number"
    }
}