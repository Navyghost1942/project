import { v4 as uuid } from 'uuid'

const coffees = []

export const getCoffees = () => coffees

export const getCoffee = (id) => {
    return coffees.find((coffee) => coffee.id === id)
}

export const addCoffee = (coffee) => {
    const id = uuid()
    coffees.push({ id, ...coffee })
}

export const updateCoffee = (id, coffee) => {
    const databaseCoffee = getCoffee(id)
    if (databaseCoffee) {
        const coffeeIndex = coffees.findIndex((p) => p.id === id)
        coffees[coffeeIndex] = { id, ...coffee }
    }
}

export const deleteCoffee = (id) => {
    const coffeeIndex = coffees.findIndex((p) => p.id === id )
    if (coffeeIndex !== -1) {
        coffees.splice(coffeeIndex, 1)
    }
}