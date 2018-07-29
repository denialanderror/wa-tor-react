const getOccupant = (array, index) => {
  return { occupant: array[index], location: index }
}

const checkLeft = ({ array, width }, pos) => getOccupant(array, (pos === 0 ? width : pos) - 1)

const checkDown = ({ array, width, height }, pos) => getOccupant(array, (pos + width) % (width * height))

const checkUp = ({ array, width, height }, pos) =>
  getOccupant(array, (pos - width < 0 ? height * width - pos : pos) - width)

const checkRight = ({ array, width }, pos) => getOccupant(array, ((pos + 1) % width === 0 ? pos - width : pos) + 1)

const getDirections = () => {
  const directions = [checkLeft, checkDown, checkUp, checkRight]
  const shuffled = []

  while (shuffled.length < directions.length) {
    const index = Math.floor(Math.random() * directions.length)

    if (shuffled.indexOf(directions[index]) === -1) {
      shuffled.push(directions[index])
    }
  }

  return shuffled
}

export { getOccupant, checkLeft, checkDown, checkUp, checkRight, getDirections }
