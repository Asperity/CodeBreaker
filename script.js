function giveInstruction()
{
    const para = document.createElement("p");
    para.textContent = "The rules of the game are: You get 7 chances to guess the correct 3 numbered code. If your answer is incorrect. The system will tell you if your answer is too high or too low respectively. GOOD LUCK!";
    document.body.appendChild(para);
}

const button=document.querySelector("button");

button.addEventListener("click", giveInstruction);
