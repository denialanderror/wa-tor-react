import { SHARK, FISH } from '../const'
import { getDirections } from './navigation'

const hunt = (torus, pos) => {
  const options = Object.values(getDirections())
    .map(direction => direction(torus, pos))
    .filter(({ occupant }) => occupant === undefined || occupant.type !== SHARK)
    .sort(({ occupant }, _) => (occupant ? -1 : 1))

  const option = options.length > 0 ? options[0] : { occupant: undefined, location: pos }

  const { array } = torus
  const entity = array[pos]
  const energy = option.occupant && option.occupant.type === FISH.type ? 1 : -1
  entity.lifeforce = entity.lifeforce + energy

  array[pos] = undefined
  array[option.location] = entity.lifeforce > 0 ? entity : undefined

  return { ...torus, array }
}

export { hunt }
