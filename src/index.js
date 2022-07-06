const app = require('express')()
const PORT = 3001

app.get('/', (req, res) => res.send('ok'))

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

