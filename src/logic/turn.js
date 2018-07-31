import { FISH, SHARK } from '../const'
import { getDirections } from './navigation'

const takeTurn = (torus, player) => {
  const directions = Object.values(getDirections()).map(direction => direction(torus, player.location))
  const viableOptions = filterOptions(player, directions).sort(({ occupant }, _) => (occupant ? -1 : 1))
  const option = viableOptions.length > 0 ? viableOptions[0] : { occupant: undefined, location: player.location }
  return { ...torus, array: makeMove(torus, player, option) }
}

const filterOptions = ({ occupant: player }, options) => {
  switch (player.type) {
    case FISH:
      return options.filter(({ occupant }) => occupant === undefined)
    case SHARK:
      return options.filter(({ occupant }) => occupant === undefined || occupant.type !== player.type)
    default:
      return options
  }
}

const makeMove = ({ array }, current, next) => {
  const { occupant: player } = current
  if (current.location !== next.location) {
    player.age = player.age + 1
  }
  switch (player.type) {
    case FISH:
      array[current.location] =
        current.location !== next.location && player.age % player.spawningAge === 0 ? player.spawn(player) : undefined
      array[next.location] = player
      return array
    case SHARK:
      console.log(player)
      console.log(next.occupant)
      const energy = next.occupant && next.occupant.type === FISH ? 1 : -1
      player.lifeforce = player.lifeforce + energy

      array[current.location] =
        current.location !== next.location && player.age % player.spawningAge === 0 ? player.spawn(player) : undefined
      array[next.location] = player.lifeforce > 0 ? player : undefined
      return array
    default:
      return array
  }
}

export default takeTurn
