import { Array } from 'core-js'

const createTorus = (height, width) => {
  const array = Array.from({ length: height * width })
  return { width, height, array }
}

const moveLeft = (torus, pos) => {
  const { array: previous, width } = torus
  const array = [...previous]
  array[pos] = false
  array[(pos === 0 ? width : pos) - 1] = true
  return { ...torus, array }
}

const moveDown = (torus, pos) => {
  const { array: previous, height, width } = torus
  const array = [...previous]
  array[pos] = false
  array[(pos + height) % (width * height)] = true
  return { ...torus, array }
}

const moveUp = (torus, pos) => {
  const { array: previous, height, width } = torus
  const array = [...previous]
  array[pos] = false
  array[(pos - height < 0 ? height * width : pos) - height] = true
  console.log(previous)
  console.log(array)
  return { ...torus, array }
}

const moveRight = (torus, pos) => {
  const { array: previous, width } = torus
  const array = [...previous]
  array[pos] = false
  array[(pos + 1) % width] = true
  return { ...torus, array }
}

export { createTorus, moveLeft, moveDown, moveUp, moveRight }
