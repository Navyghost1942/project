import db from '../helpers/db'

export const getcoffees = async (skip, take) => {
  const count = await db.coffee.count()
  const coffees = await db.coffee.findMany({
    skip,
    take,
  })
  return { count, coffees }
}

export const getcoffee = async (id) =>
  db.coffee.findUnique({ where: { coffeeId: id } })

export const addcoffee = async (coffeeData) =>
  db.coffee.create({ data: { ...coffeeData } })

export const updatecoffee = async (id, coffeeData) => {
  const coffee = await getcoffee(id)
  if (coffee) {
    return db.coffee.update({
      where: { coffeeId: id },
      data: { ...coffee, ...coffeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deletecoffee = async (id) =>
  db.coffee.delete({ where: { coffeeId: id } })