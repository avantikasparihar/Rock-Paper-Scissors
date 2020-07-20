let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randNo = Math.floor(Math.random() * 3);
    return choices[randNo];
}

function cnvt(letter) {
    if (letter === 'r') 
        return "Rock";
    if (letter === 'p')
        return "Paper";
    return "Scissors";
}

function wins(user, comp) {
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${cnvt(user)}${smallUserWord} beats ${cnvt(comp)}${smallCompWord}, You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow') }, 400);
}

function loses(user, comp) {
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${cnvt(user)}${smallUserWord} loses to ${cnvt(comp)}${smallCompWord}, You lose...`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow') }, 400);
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${cnvt(user)}${smallUserWord} equals ${cnvt(comp)}${smallCompWord}, It's a draw.`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('grey-glow') }, 400);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();