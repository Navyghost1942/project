import { Router } from 'express'


import persons from './persons'
import companies from './coffee'
import departments from './departments'
import employees from './employees'

const router = Router()

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)
router.use('/companies', companies)
router.use('/departments', departments)
router.use('/employees', employees)

export default router
