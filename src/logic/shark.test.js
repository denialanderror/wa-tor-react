import { SHARK, FISH } from '../const'
import { shark, fish, createTorus } from './generate'
import takeTurn from './turn'
import { getOccupant } from './navigation'

describe('shark', () => {
  const populateTorus = locationMap => {
    const torus = createTorus()
    const { array } = torus
    Object.entries(locationMap).forEach(([index, value]) => (array[index] = value))
    return { ...torus, array }
  }

  describe('hunting', () => {
    it('hunts fish if nearby', () => {
      const torus = populateTorus({ 0: shark(), 2: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 0))
      expect(array[0]).toBeFalsy()
      expect(array[2].type).toEqual(SHARK)
    })

    it('hunts fish if the other side of the torus', () => {
      const torus = populateTorus({ 2: shark(), 0: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 2))
      expect(array[2]).toBeFalsy()
      expect(array[0].type).toEqual(SHARK)
    })

    it('moves if no fish nearby', () => {
      const torus = populateTorus({ 0: shark(), 5: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 0))
      expect(array[0]).toBeFalsy()
      expect(array.filter(e => e).filter(({ type }) => type === SHARK)).toHaveLength(1)
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(1)
    })

    it('eats only one fish if multiple are found', () => {
      const torus = populateTorus({ 0: fish(), 1: shark(), 2: fish() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 1))
      expect(array[1]).toBeFalsy()
      expect(array.filter(e => e).filter(({ type }) => type === SHARK)).toHaveLength(1)
      expect(array.filter(e => e).filter(({ type }) => type === FISH)).toHaveLength(1)
    })

    it('cannot move into a space occupied by another shark', () => {
      const torus = populateTorus({ 1: shark(), 3: shark(), 4: shark(), 5: shark(), 7: shark() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 4))
      expect(array[4] && array[4].type).toEqual(SHARK)
      expect(array.filter(e => e).filter(({ type }) => type === SHARK)).toHaveLength(5)
    })

    it('will expend lifeforce if no fish are eaten', () => {
      const torus = populateTorus({ 0: shark() })
      const { array } = takeTurn(torus, getOccupant(torus.array, 0))
      const entity = array.filter(e => e).filter(({ type }) => type === SHARK)[0]
      expect(entity.lifeforce).toEqual(2)
    })

    it('will die if lifeforce is depleted', () => {
      const torus = populateTorus({ 0: { type: SHARK, lifeforce: 0 } })
      const { array } = takeTurn(torus, getOccupant(torus.array, 0))
      expect(array.filter(e => e)).toHaveLength(0)
    })
  })
})
