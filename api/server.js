// const express= require('express')
// const mongoose = require('mongoose')
// const app = express()
// const userRoute= require('./route/userRoute')
// var bodyParser = require('body-parser');
// const cors = require('cors')


// app.use('/api/users', userRoute)
// app.use(express.json())
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));


// const connect = async()=>{
//     try {
//         await mongoose.connect('mongodb://0.0.0.0:27017/hostel')
//         console.log('Connected to MongoDB')
//     } catch (error) {
//         console.log(error)
//     }
// }

// app.listen(5000,()=>{
//     connect()
//     console.log('Backend running at http://localhost:5000/')
// })

const express= require('express')
const mongoose= require('mongoose') 
const userRoute= require('./routes/userRoute')
const authRoute= require('./routes/authRoute')
const cookieParser = require('cookie-parser')
const dotenv= require("dotenv")
const cors = require('cors')



const app= express()
// dotenv.config();
require("dotenv").config();

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.use((err,req,res,next)=>{
    const errStatus= err.status || 500
    const errMessage = err.message || "Something went wrong !"

    return res.status(errStatus).send(errMessage)
})


async function connect(){
try{
    await mongoose.connect('mongodb://0.0.0.0:27017/hostel')
    console.log("Connected to MongoDB")
}catch(error){
    console.log(error)
     }
}
    


app.listen(8800,()=>{
    connect()
    console.log("Backend server is running at http://localhost:8800/")
})