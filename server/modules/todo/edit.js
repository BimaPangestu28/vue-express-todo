const connection    =   require('../../database')

module.exports      =   (req, res) => {
    const id        =   req.params.id
    const sql       =   `SELECT * FROM todos WHERE id=${id}`

    connection.query(sql, (err, result) => {
        res.end(JSON.stringify(result))
    })
}