
const EletIndex = require('./controllers/elect/index')


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("<h1 style='text-align:center;margin-top:150px; '>Start API</h1>")
    })

    app.get('/get-stock',EletIndex.stock)

}