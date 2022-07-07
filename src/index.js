const app = require('express')()
const cors = require('cors')

const PORT = 3001
app.use(cors({ origin: '*' }))
app.get('/api/v1', (req, res) => res.send({ message: 'ok' }))

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

