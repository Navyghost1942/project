/*import { Router } from 'express'



import coffee from './coffee'

const router = Router()

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

router.use('/coffee', coffee)




export default router*/

import { Router } from "express"
import basicAuth from 'express-basic-auth'


import Coffees from "./coffee"
const router = Router()

router.use(basicAuth({
    users: {[process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD}
}),
)



router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})


router.use('/coffee', Coffees)
export default router
