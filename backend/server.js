require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const supportWorkUserRoutes = require('./routes/supportWorkUser')
const trainingProfileRoutes = require('./routes/trainingProfile')
const messageRoutes = require('./routes/message');
const jobPostingRoutes = require('./routes/jobPosting');
const POCRoutes = require('./routes/POC');
const projectRoutes = require('./routes/projects');

// express app
const app = express()

// Middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/user',userRoutes)
app.use('/api/supportWork',supportWorkUserRoutes)
app.use('/api/training',trainingProfileRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/jobPostings',jobPostingRoutes)
app.use('/api/poc',POCRoutes)
app.use('/api/project',projectRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('listening on port',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })

