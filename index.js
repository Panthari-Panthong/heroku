const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.listen(port)
app.listen(() => console.log(`Listening on : ${port}`))