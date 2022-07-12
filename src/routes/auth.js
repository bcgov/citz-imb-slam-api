const { Router } = require('express')
const passport = require('passport')


const router = Router()

//bcrypt for hashing paswords

// router.post('/login', (request, response) => {
//   const { username, password } = request.body
//   if (username && password) {
//     if (request.session.user) {
//       response.send(request.session.user)
//     } else {
//       request.session.user = {
//         username
//       }
//       response.send(request.session)
//     }
//   } else response.send(401)
// })

router.get('/github', passport.authenticate('github'))

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  console.log('callback')
})

module.exports = router
