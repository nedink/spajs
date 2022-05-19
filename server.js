const express = require('express')
const path = require('path')

const app = express()

// Whenever the path has '/static' in it, serve the `static/` dir as usual
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')))

// For any path, go to the root and send back index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

listener = app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${listener.address().port}`))