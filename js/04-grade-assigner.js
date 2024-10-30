let score

while(true){
    score = parseInt(prompt('Enter score'))
    if(score >= 1 && score <= 100){
        break
    }
}

switch(true){

    case (score >= 60 && score <= 69):
        console.log('You received a D')
        break
    
    case (score >= 70 && score <= 79):
        console.log('You received a C')
        break
    
    case (score >= 80 && score <= 89):
        console.log('You received a B')
        break
    
    case (score >= 90 && score <= 100):
        console.log('You received a A')
        break

    default:
        console.log('You received an F')
        break
    
}