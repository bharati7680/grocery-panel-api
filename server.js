require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')
const port = 3000


mongoose.connect(process.env.DB_URL)
        .then(() => {
            app.listen(port, () => {
                console.log(`App listening on port ${port}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })