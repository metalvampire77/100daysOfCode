const color = ["black",2,"blue"]

color.forEach(item=>{
    console.log(item)
})

color.push("green")
color.pop()

for (let index = 0; index < color.length; index++) {
    console.log(color[index])
}

console.log(typeof(color))