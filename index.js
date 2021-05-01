const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/formData.routes')

const mongoConnectionURI = `mongodb://127.0.0.1/formData`

mongoose.connect(mongoConnectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const app = express()
app.use(express.json())


app.get('/health', async (req, res) => {
    res.status(200).send({
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    })
})

app.use(routes)

app.listen(3000, () => {
    console.log("Server up on " + 3000)
})