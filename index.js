const app = require('./src/app')
const port = 80

app.listen(port, () => {
    console.log(`Estamos escuchando ${port}`)
})