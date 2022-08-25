const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.get('api/goals', (req, res) => {
    res.json({message: 'Get goals baby!'})
})

app.listen(port, () => console.log(`server started on port ${port}`))