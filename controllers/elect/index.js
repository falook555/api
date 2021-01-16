
exports.stock = (req, res, next) => {
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT * FROM stock `
        connection.query(sql, (err, results) => {
            if (err) return console.log(err)
            res.send(results)
        })
    })
}
