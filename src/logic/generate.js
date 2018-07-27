import { SHARK, FISH } from '../const'

let id = 0

const getId = () => {
  id = id + 1
  return id
}

const fish = () => ({ id: getId(), type: FISH, age: 0 })

const shark = () => ({ id: getId(), type: SHARK, lifeforce: 3 })

const createTorus = (width = 3, height = 3) => {
  const array = Array.from({ length: height * width })
  return { width, height, array }
}

export { fish, shark, createTorus }
