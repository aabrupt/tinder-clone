import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express()
const port = process.env.PORT || 8001

// Middlewares

// DB Config
// admin: S3eNF8W5flyslZl3

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello world!')
})

//Listener
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})