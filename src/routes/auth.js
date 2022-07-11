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

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('Logged In')
  res.send(201)
})

module.exports = router
