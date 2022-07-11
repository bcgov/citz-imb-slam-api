const { request } = require('express')
const passport = require('passport')
const { Strategy } = require('passport-local')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  console.log(id)
  done(null, { username: 'scott.toews@gmail.com', password: 'pass', id })
})

passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
  console.log(email)
  console.log(password)
  if (!email || !password) {
    console.log('Failed Authenticate')
    done(new Error('Missing Credentials'), null)
  }

  console.log('Authenticated Successfully')

  done(null, { username: email, password, id: '1' })
}))
