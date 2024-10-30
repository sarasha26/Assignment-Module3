let coinFlip
let choice

//Set coinFlip variable to a random number between 0 and 9
let randomNum = Math.round(Math.random() * 10)
coinFlip = randomNum

choice = prompt('Enter Heads or Tails')
//  document.write(`The random number is: ${coinFlip} <br>`)

if(choice.toLowerCase() == 'heads'){
    if(coinFlip < 5){
        alert(`The flip was heads and you chose ${choice}...you win!`)
    }else {
        alert(`The flip was tails but you chose ${choice}...you lose!`)
    }
    
} else if(choice.toLowerCase() == 'tails'){
    if(coinFlip < 5){
        alert(`The flip was heads but you chose ${choice}...you lose!`)
    }else {
        alert(`The flip was tails and you chose ${choice}...you win!`)
    }

}



