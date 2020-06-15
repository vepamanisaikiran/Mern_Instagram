const express = require('express')
const app = express()
const PORT = 5000

const customMiddleware = (req,res,next)=>{
    console.log('middleware exceuted')
    next() //if no next it will not go 
}

//app.use(customMiddleware) for all the routes

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/about',customMiddleware,(req,res)=>{
    res.send("about page")
})


app.listen(PORT,()=>{
    console.log('server is running on',PORT)
})