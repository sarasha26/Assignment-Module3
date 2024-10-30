let num1
let num2


num1 = parseInt(prompt('Enter the first number'))
num2 = parseInt(prompt('Enter the second number'))

document.write('<h3> The Larger Number Application </h3>')

if(num1 > num2){
    document.write(`The larger number is ${num1}`)
} else if(num2 > num1){
    document.write(`The larger number is ${num2}`)
}else if(num1 == num2){
    document.write(`Both are equal`)
}else{
    document.write('Enter a valid number')
}

