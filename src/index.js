const app = require('express')()
const PORT = 3001

app.get('/api/v1', (req, res) => res.send('ok'))

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

