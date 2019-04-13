const express = require('express')
const config =- require('./config.json')

const app = express()
const PORT = process.env.PORT  || 5000

// some initial routes
const usersGroupRouter = express.Router()


usersGroupRouter.route('/groups')
    .get((req,res) => {
        const responseJSON = {hello : config.appName }
        res.json(responseJSON)
    })
app.use('/api',usersGroupRouter)
app.get('/',(req,res) => {
    res.get(`server is running on port ${PORT} `)
})

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})