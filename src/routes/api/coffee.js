import { Router } from 'express'

import {
  getCoffee,
  getCoffees,
  addCoffee,
  updateCoffee,
  deleteCoffee,
} from '../../models/coffee'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, Coffees } = await getCoffees(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(Coffees)
})

router.get('/:id', async (req, res) => {
  const Coffee = await getCoffee(req.params.id)
  if (Coffee) {
    res.send(Coffee)
  } else {
    res.status(404).send({ msg: 'Coffee not found' })
  }
})

router.post('/', async (req, res) => {
  const Coffee = await addCoffee(req.body)
  res.send(Coffee)
})

router.put('/:id', async (req, res) => {
  const Coffee = await updateCoffee(req.params.id, req.body)
  if (Coffee) {
    res.send(Coffee)
  } else {
    res.status(404).send({ msg: 'Coffee not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const Coffee = await deleteCoffee(req.params.id)
  if (Coffee) {
    res.send(Coffee)
  } else {
    res.status(404).send({ msg: 'Coffee not found' })
  }
})

export default router