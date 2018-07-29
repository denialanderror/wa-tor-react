import takeTurn from './turn'
import { getOccupant } from './navigation'

const simulate = currentState => {
  const ids = currentState.array
    .filter(it => it)
    .map(({ id }) => id)
    .sort((a, b) => a - b)

  let nextState = currentState
  for (const id of ids) {
    const index = getById(nextState.array, id)
    if (index > -1) {
      const player = getOccupant(nextState.array, index)
      nextState = takeTurn(nextState, player)
    }
  }
  return nextState
}

const getById = (array, target) => array.findIndex(element => element && element.id === target)

export default simulate
