const express = require('express')
const app = express()
const port = 3000
const csv = require('csv-parser')
const fs = require('fs');
const results = [];


express.json()
app.get('/data/country/:country', (req, res)=>{
    const {country} = req.params
    fs.createReadStream(`country_data/${country}.csv`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        const data1 = {
            country: results[0].location,
            date: results.map(function(result){
                return result.date
            }),
            vaccine: results.map(function(result){
                return result.vaccine
            }),
            total_vaccinations: results.map(function(result){
                return result.total_vaccinations
            }),
            people_vaccinated: results.map(function(result){
                return result.people_vaccinated
            }),
            people_fully_vaccinated: results.map(function(result){
                return result.people_fully_vaccinated
            }),
        } 
        res.json(data1)
    });
})

app.listen(port, ()=>{
    console.log("Server on http://localhost:3000")
})