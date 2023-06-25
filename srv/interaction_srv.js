module.exports = (srv) => {
    srv.on('READ', 'test', async req => {
        return {"requested": "YES"}
    })
}