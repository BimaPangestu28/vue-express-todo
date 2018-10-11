const connection    =   require('../../database')

module.exports = (req, res) => {
    const sql    =   "SELECT * FROM todos"

    connection.query(sql, (err, rows) => {
        res.end(JSON.stringify(rows))
    })
}