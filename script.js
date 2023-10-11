const button=document.querySelector("#button");

button.addEventListener("click", giveInstruction);
function start()
{
    number = document.getElementById("number");
    numVar = 7
    
}
function giveInstruction()
{
    const para = document.createElement("p");
    para.textContent = "The rules of the game are: You get 7 chances to guess the correct 3 numbered code. If your answer is incorrect. The system will tell you if your answer is too high or too low respectively. GOOD LUCK!";
    document.body.appendChild(para);
}

function decrement()
{
    number.innerHTML = numVar--; 
}

const button3=document.querySelector("#button3");

button3.addEventListener("click", guess);

function guess()
{
    answer = Math.floor(Math.random()*999)+1;
    alert("GAME HAS BEGUN");
    i = 0;
    while(i < 1)
    {
        const guess = prompt("enter a guess");
        if(`${guess}` == answer)
        {
            alert("YOU WIN");
            i++;
        }
        else if(`${guess}` > answer)
        {
            alert("TOO HIGH");
            decrement();
        }
        else if(`${guess}` < answer)
        {
            alert("TOO LOW");
            decrement();
        }
        else
        {
            alert("INPUT A NUMBER");
            decrement();
        }
        
        if(numVar < 0)
        {
            alert("YOU LOSE");
            i++;
        }
    }

    
}









