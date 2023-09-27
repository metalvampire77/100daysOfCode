const stocks = {
    fruit : ['apple','strawberry','banana'],
    liquid : ['water','ice'],
    holder : ['cone','stick'],
    toppings : ['chocolate','candies']
}

let shopOpen = true

const order = (time,work) => {
    return new Promise((resolve,reject) => {
        if(shopOpen){
            setTimeout(() => {
                resolve(work())
            },time)
        }
        else reject(console.log(`shop is closed`))
    })
}

order(2000,() => {
    console.log(`${stocks.fruit[0]} was selected`)
})
    .then(() => {
        return order(0,() => {
            console.log(`production has started`)
        })
    })

    .then(() => {
        return order(2000,() => {
            console.log(`the fruit was chopped`)
        })
    })

    .then(() => {
        return order(1000,() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`)
        })
    })

    .then(() => {
        return order(1000,() => {
            console.log(`machine started`)
        })
    })

    .then(() => {
        return order(2000,() => {
            console.log(`${stocks.holder[0]} is selected`)
        })
    })

    .then(() => {
        return order(3000,() => {
            console.log(`${stocks.toppings[0]} is selected`)
        })
    })

    .then(() => {
        return order(2000,() => {
            console.log(`ice cream is served`)
        })
    })