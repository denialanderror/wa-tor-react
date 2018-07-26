import { Array } from 'core-js'

const createTorus = (height, width) => {
  const array = Array.from({ length: height * width })
  return { width, height, array }
}

const check = (array, index) => (array[index] ? -1 : index)

const checkLeft = ({ array, width }, pos) => check(array, (pos === 0 ? width : pos) - 1)

const checkDown = ({ array, width, height }, pos) => check(array, (pos + height) % (width * height))

const checkUp = ({ array, width, height }, pos) => check(array, (pos - height < 0 ? height * width : pos) - height)

const checkRight = ({ array, width }, pos) => check(array, (pos + 1) % width)

export { createTorus, checkLeft, checkDown, checkUp, checkRight }
