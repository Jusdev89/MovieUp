import express from 'express'
const router = express.Router()

import Showtimes from 'showtimes'

router.get('/', ( request, response ) => response.render('index') )

router.post('/get-theaters', ( request, response ) => {
  const { zipcode } = request.body
  const api = new Showtimes(zipcode, {})

  api.getTheaters((error, theaters) => {
    // response.send(theaters)
    response.render('list-theaters', { theaters })
  })
})

export default router
