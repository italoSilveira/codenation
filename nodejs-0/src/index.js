'use strict'

const fibonacci = () => {
    let fibonacciArray = [0,1]
    let nextValue = 0
    let index = 1
    while(nextValue < 350){
        nextValue = fibonacciArray[index] + fibonacciArray[index - 1]
        fibonacciArray.push(nextValue)
        index += 1
    }
    return fibonacciArray
}

const isFibonnaci = (num) => {
    let fibonacciArray = fibonacci()
    return fibonacciArray.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
