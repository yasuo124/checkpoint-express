const express = require('express')
const app = express()

app.use(express.static('views'))

const checkTime = (req,res,next)=>{
    var doorOpen = false 
    var currentDate = new Date()

    if (currentDate.getHours()>9 && currentDate.getHours()<17 && currentDate.getDay()>=1 && currentDate.getDay()<=5) {
        doorOpen = true
    }

    if (doorOpen) {
        next()
    }else{
        res.sendFile(__dirname+'/views/timeOut.html')
    }
}

app.use(checkTime)



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/views/contact.html')
})

app.get('/services', (req,res)=>{
    res.sendFile(__dirname + '/views/services.html')
})

app.listen(5000, ()=>{console.log("Server is running")})