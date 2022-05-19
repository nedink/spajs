const express = require('express')
const path = require('path')

const app = express()

// for any path, go to the root and send back index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'index.html'))
})

listener = app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${listener.address().port}`))