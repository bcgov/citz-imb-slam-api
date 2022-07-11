const passport = require('passport')
const { GitHubStrategy } = require('passport-github2')

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET
}))
