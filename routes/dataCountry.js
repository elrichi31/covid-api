const dataRoute = require('express').Router()
const csv = require('csv-parser')
const fs = require('fs');
const passport = require('passport');
const results = []
dataRoute.get('/:country',async function(req, res, next) {
    passport.authenticate('basic', (error, user) => {
        try{
            if(error || !user){
                return res.send("unauthorized")
            }
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
        } catch(error){
            next(error)
        }
    })(req, res, next)
})

module.exports = dataRoute