const app = require('./app')
const PORT = process.env.PORT || 3005
const hostName = '127.0.0.1'

app.listen(PORT, () => {
    console.log(`server is running at http://${hostName}:${PORT}`)
})