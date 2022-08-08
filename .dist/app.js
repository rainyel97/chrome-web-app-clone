const hidden_Value = "hidden";
const MAX_NUM = document.querySelector(".secondLine input");
const CHOOSE_NUM = document.querySelector(".thirdLine input");

const playButton = document.querySelector(".thirdLine button")
const choseAndMachine = document.querySelector(".choseAndMachine")
const result = document.querySelector(".result");

function numberSubmit(event) {
    event.preventDefault();
    const maxNum = parseInt(MAX_NUM.value);
    const chooseNum = parseInt(CHOOSE_NUM.value);
    const machineNum = Math.ceil(Math.random() * maxNum);
    choseAndMachine.innerText = `You chose: ${chooseNum},the machine chose: ${machineNum}`;
    
    if(chooseNum === machineNum) {
        result.innerText = "You won!";
    } else {
        result.innerText = "You lost!"
    }
    choseAndMachine.classList.remove(hidden_Value);
    result.classList.remove(hidden_Value);
}

playButton.addEventListener("click" , numberSubmit);
