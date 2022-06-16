import { SHARK, FISH } from '../const'

let id = 0

const getId = () => {
  id = id + 1
  return id
}

const fish = (spawningAge = 3, age = 0) => {
  const entity = { id: getId(), type: FISH, age, spawningAge }
  return { ...entity, spawn: (parent) => ({ ...parent, id: getId(), age: 0 }) }
}

const shark = (spawningAge = 3, lifeforce = 3, age = 0) => {
  const entity = { id: getId(), type: SHARK, age, spawningAge, lifeforce }
  return { ...entity, spawn: (parent) => ({ ...parent, id: getId(), lifeforce, age: 0 }) }
}

const createTorus = (width = 3, height = 3) => {
  const array = Array.from({ length: height * width })
  return { width, height, array }
}

export { fish, shark, createTorus }
