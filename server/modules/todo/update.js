const connection    =   require('../../database')

module.exports      =   (req, res) => {
    const id        =   req.params.id
    const datas     =   req.body
    const table     =   req.body.table
    const result    =   []
    let   set       =   ''
    let   index     =   1

    for(let i in datas) result.push([i, datas[i]])

    result.forEach((s) => {
        if(s[0] != 'table') {
            if(index < result.length)
                set += `${s[0]}='${s[1]}', `
            else
                set += `${s[0]}='${s[1]}'`
        }

        index++
    })

    const sql       =   `UPDATE ${table} SET ${set} WHERE id=${id}`
    
    connection.query(sql, (err, result) => {
        res.end(JSON.stringify(result))
    })
}