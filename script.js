const userChoiceMenu = document.querySelector("#userChoice");
const playBtn = document.querySelector("#playbtn");
const output = document.querySelector("#output");

playBtn.addEventListener("click", () => {
    
    const random = Math.floor(Math.random() * 3) + 1;

    let comp = "";

    if(random === 1){
        comp = "rock"
    } else if(random === 2){
        comp = "paper"
    } else{
        comp = "scissors"
    }
    
    console.log(`computer: ${comp}`)

    const userChoice = userChoiceMenu.value;
    if(userChoice === comp){
        output.innerHTML = `It is a draw! You both chose ${userChoice}`
    } else if (comp === "rock" && userChoice === "paper"){
        output.innerHTML = "You win! Paper beats rock!"
    } else if (comp === "rock" && userChoice === "scissors"){
        output.innerHTML = "You lose! Rock beats scissors!"
    } else if (comp === "paper" && userChoice === "rock"){
        output.innerHTML = "You lose! Paper beats rock!"
    } else if (comp === "paper" && userChoice === "scissors"){
        output.innerHTML = "You win! Scissors beats paper!"
    } else if (comp === "scissors" && userChoice === "rock"){
        output.innerHTML = "You win! Rock beats scissors!"
    } else if (comp === "scissors" && userChoice === "paper"){
        output.innerHTML = "You lose! Scissors beats paper!"
    }

})