import db from '../helpers/db'

export const getCoffees = async (skip, take) => {
  const count = await db.Coffee.count()
  const Coffees = await db.Coffee.findMany({
    skip,
    take,
  })
  return { count, Coffees }
}

export const getCoffee = async (id) =>
  db.Coffee.findUnique({ where: { coffeeId: id } })

export const addCoffee = async (CoffeeData) =>
  db.Coffee.create({ data: { ...CoffeeData } })

export const updateCoffee = async (id, CoffeeData) => {
  const Coffee = await getCoffee(id)
  if (Coffee) {
    return db.Coffee.update({
      where: { coffeeId: id },
      data: { ...Coffee, ...CoffeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteCoffee = async (id) =>
  db.Coffee.delete({ where: { coffeeId: id } })