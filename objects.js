const person = {
    name : "midhun",
    age: 20,
    address : "banglore"
}

//destructuring an object

const { name , age , address} = person

//converting object to array of keys
const arr = Object.keys(person)
console.log(arr)

//you can also use object.values() to show values
const values = Object.values(person)
console.log(values)

//converting object to array of keys and values
const keyValue = Object.entries(person)
console.log(keyValue)