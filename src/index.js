const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
require('./strategies/github')

console.log('index.js')
const authRoute = require('./routes/auth')

const app = express()

const PORT = 3001

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use(session({
  secret: 'someRandomString',
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`)
  next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/auth', authRoute)

app.use((req, res, next) => {
  console.log('req.user:', req.user)
  if (req.user) next()
  else res.send(401)
})

app.get('/api/v1', (req, res) => {
  return res.send({ message: 'ok' })
})

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

