let userScore = 0;
let compScore = 0;

const tools = document.querySelectorAll(".tool");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#userScore");
const comp_score = document.querySelector("#compScore");



const checkWinner = (userChoice, compChoice) => {
    if(userChoice === "Rock"){
        if(compChoice === userChoice){
            msg.innerText = `It was Draw`;
            msg.style.backgroundColor = "black"; 
        }
        else if(compChoice === "Scissors"){
            msg.innerText =  `You Won! ${userChoice} beats ${compChoice}`;
            userScore++;
            user_score.innerText = userScore;
            msg.style.backgroundColor = "green"; 
        }
        else if(compChoice === "Paper"){
            msg.innerText =  `You Lost! ${compChoice} beats ${userChoice}`;
            compScore++;
            comp_score.innerText = compScore;
            msg.style.backgroundColor = "red"; 
        }
    }

    if(userChoice === "Paper"){
        if(compChoice === userChoice){
            msg.innerText = `It was Draw`;
            msg.style.backgroundColor = "black"; 
        }
        else if(compChoice === "Scissors"){
            msg.innerText =  `You Lost! ${compChoice} beats ${userChoice}`;
            compScore++;
            comp_score.innerText = compScore;
            msg.style.backgroundColor = "red"; 
        }
        else if(compChoice === "Rock"){
            msg.innerText =  `You Won! ${userChoice} beats ${compChoice}`;
            userScore++;
            user_score.innerText = userScore;
            msg.style.backgroundColor = "green"; 
        }
    }

    
    if(userChoice === "Scissors"){
        if(compChoice === userChoice){
            msg.innerText = `It was Draw`;
            msg.style.backgroundColor = "black"; 
        }
        else if(compChoice === "Paper"){
            msg.innerText =  `You Won! ${userChoice} beats ${compChoice}`;
            userScore++;
            user_score.innerText = userScore;
            msg.style.backgroundColor = "green"; 
        }
        else if(compChoice === "Rock"){
            msg.innerText =  `You Lost! ${compChoice} beats ${userChoice}`;
            compScore++;
            compScore.innerText = compScore;
            msg.style.backgroundColor = "red"; 
        }
    }


}

const genCompTool = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    choiceIdx = Math.floor(Math.random() * 3);
    return choices[choiceIdx];
}

const playGame = (userTool) => {
      // user choice
      console.log("User choice is : ", userTool);
      

      // generate computer choice
      compTool = genCompTool();
      console.log("Comp choice is : ", compTool);

      checkWinner(userTool, compTool);
      
}

tools.forEach((tool) => {
   tool.addEventListener("click", () => {
        userTool = tool.getAttribute("id");
        playGame(userTool);
    });
});