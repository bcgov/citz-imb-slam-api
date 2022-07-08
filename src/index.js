const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const authRoute = require('./routes/auth')

const app = express()

const PORT = 3001

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(cookieParser())
app.use(session({
  secret: 'someRandomString',
  resave: false,
  saveUninitialized: false
}))

app.use('/api/v1/auth', authRoute)

app.use((req, res, next) => {
  if (req.session.user) next()

  res.send(401)
})

app.get('/api/v1', (req, res) => {
  return res.send({ message: 'ok' })
})

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

