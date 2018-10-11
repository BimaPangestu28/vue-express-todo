const connection    =   require('../../database')

module.exports = (req, res) => {
    const sql       =   "INSERT INTO todos VALUES(?, ?, ?)"
    const values    =   [null, req.body.name, null]

    connection.query(sql, values, (err, result) => {
        res.end(JSON.stringify(result))
    })
}