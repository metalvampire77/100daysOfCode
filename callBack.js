function fetchData(callback){
    const data = "hi this is temp data"
    callback(data)
}


fetchData(function(result){
    console.log(result)
})