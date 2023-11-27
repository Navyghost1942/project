import { Router } from 'express'

import {
  getcoffee,
  getcoffees,
  addcoffee,
  updatecoffee,
  deletecoffee,
} from '../../models/coffee'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, coffee } = await getcoffees(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(coffee)
})

router.get('/:id', async (req, res) => {
  const coffee = await getcoffee(req.params.id)
  if (coffee) {
    res.send(coffee)
  } else {
    res.status(404).send({ msg: 'coffee not found' })
  }
})

router.post('/', async (req, res) => {
  const coffee = await addcoffee(req.body)
  res.send(coffee)
})

router.put('/:id', async (req, res) => {
  const coffee = await updatecoffee(req.params.id, req.body)
  if (coffee) {
    res.send(coffee)
  } else {
    res.status(404).send({ msg: 'coffee not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const coffee = await deletecoffee(req.params.id)
  if (coffee) {
    res.send(coffee)
  } else {
    res.status(404).send({ msg: 'coffee not found' })
  }
})

export default router