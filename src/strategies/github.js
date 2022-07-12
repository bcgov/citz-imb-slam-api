require('dotenv').config()
const passport = require('passport')
const { Strategy } = require('passport-github2')

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))
passport.use(new Strategy({
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: process.env.GITHUB_CALLBACKURL
},
  (accessToken, refreshToken, profile, done) => {
    console.log('GitHub Strategy', { accessToken, refreshToken, profile })
    return done(err, profile)
  }
))
