import { SHARK, FISH } from '../const'
import { shark, fish, createTorus } from './generate'
import takeTurn from './turn'
import { getOccupant } from './navigation'

describe('fish', () => {
  const populateTorus = locationMap => {
    const torus = createTorus()
    const { array } = torus
    Object.entries(locationMap).forEach(([index, value]) => (array[index] = value))
    return { ...torus, array }
  }

  describe('shoaling', () => {
    it('moves if there is a free space', () => {
      const torus = populateTorus({ 0: shark(), 5: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 5))
      expect(array[5]).toBeFalsy()
      expect(array.filter(e => e).filter(({ type }) => type === SHARK)).toHaveLength(1)
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(1)
    })

    it('cannot move into a space occupied by another fish', () => {
      const torus = populateTorus({ 1: fish(), 3: fish(), 4: fish(), 5: fish(), 7: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 4))
      expect(array[4] && array[4].type).toEqual(FISH)
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(5)
    })

    it('cannot move into a space occupied by a shark', () => {
      const torus = populateTorus({ 1: shark(), 3: shark(), 4: fish(), 5: shark(), 7: shark() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 4))
      expect(array[4] && array[4].type).toEqual(FISH)
      expect(array.filter(e => e).filter(({ type }) => type === SHARK)).toHaveLength(4)
    })

    it('spawns a new fish once it reaches breeding age and there is room to move', () => {
      const torus = populateTorus({ 4: { type: FISH, age: 2 } })
      const { array } = takeTurn(torus, getOccupant(torus.array, 4))
      expect(array[4] && array[4].type).toEqual(FISH)
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(2)
    })

    it('does not age if it cannot move to spawn', () => {
      const torus = populateTorus({ 1: shark(), 3: shark(), 4: { type: FISH, age: 2 }, 5: shark(), 7: shark() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 4))
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(1)
      expect(array[4] && array[4].age).toEqual(2)
    })
  })
})
