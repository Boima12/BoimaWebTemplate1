const express = require('express')
require('dotenv').config({ path: '.env' })

const connectDB = require('./db/connect.js')
const notFoundMiddleware = require('./middleware/not_found.js')
const errorHandlerMiddleware = require('./middleware/error_handler.js')
const towers = require('./routes/towers.js')

const app = express()

// middleware
// app.use(express.json())
app.use(express.static('./public'))

// Enable CORS (for development only, can be remove if put frontend into ./public)
app.use(cors({
    origin: 'http://localhost:5173',    // assuming your frontend runs on this origin
    credentials: true,               
}));

// routes
app.use('/api/v1/towers', towers)

// errors handling
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()