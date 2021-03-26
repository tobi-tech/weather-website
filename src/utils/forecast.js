const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5263b93424b531f873cd9f4f9c8dddad&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "&units=m"
    request( {url, json: true}, (error, { body } = {} ) => {

        if (error) {
            callback("Unable to connect to the weather services!", undefined)

        } else if (body.error) {
            callback("Unable to find location", undefined)

        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees!")
        }
    })
}


module.exports = forecast