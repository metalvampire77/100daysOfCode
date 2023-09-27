const arr = [1,2,3,4,5,6]

//map

const arr1 = arr.map(multiByTwo = (num) => {
    return num*2
})

//print
arr1.forEach(num => {
    console.log(num)
})

//filter

const arr2 = arr.filter(divideByTwo = (num) => {
    return num%2===0
})

//print

arr2.forEach((num) => console.log(num))

//find

const val = arr2.find((num) => {
    return num > 2
})

console.log(val)