import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cards from "./database/dbCards"

// App config
const app = express()
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:S3eNF8W5flyslZl3@cluster0.lih7i.mongodb.net/tinderdb?retryWrites=true&w=majority"

// Middlewares
app.use(express.json())
app.use(cors())

// DB Config
mongoose.connect(connection_url, {
    autoIndex: true,
})

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello world!')
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err: string, data: string) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err: string, data: string) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})