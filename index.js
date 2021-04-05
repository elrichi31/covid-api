const express = require('express')
const app = express()
const dataRoute = require('./routes/dataCountry')
const authRoute = require('./routes/auth')
require('dotenv').config()
// Routes
app.use(express.json())
express.json()
app.use('/api/data/country', dataRoute)
app.use('/api/login', authRoute )
// Initialization
app.listen(process.env.PORT, ()=>{
    console.log(`Server on http://localhost:${process.env.PORT}`)
})