const csv = require('csv-parser')
const fs = require('fs');
const results = [];
function getInfo(country){
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
        //parsedata = data1
        getData(data1)
    });
}
function getData(data){
    return data
}


module.exports = getInfo