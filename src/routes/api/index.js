import { Router } from 'express'



import coffee from './coffee'

const router = Router()

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

router.use('/coffee', coffee)




export default router
