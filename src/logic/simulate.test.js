import simulate from './simulate'
import { fish, shark, createTorus } from './generate'
import { FISH, SHARK } from '../const'

describe('simulate', () => {
  const populateTorus = locationMap => {
    const torus = createTorus()
    const { array } = torus
    Object.entries(locationMap).forEach(([index, value]) => (array[index] = value))
    return { ...torus, array }
  }

  it('simulates a round with space to move', () => {
    const torus = populateTorus({ 1: shark(), 4: shark(), 8: shark() })
    const { array } = simulate(torus)
    const sharks = array.filter(e => e).filter(({ type }) => type === SHARK)
    expect(sharks).toHaveLength(3)
    sharks.forEach(shark => expect(shark.lifeforce).toEqual(2))
  })

  it('simulates a round with no space to move', () => {
    const torus = populateTorus({
      0: fish(),
      1: fish(),
      2: fish(),
      3: fish(),
      4: fish(),
      5: fish(),
      6: fish(),
      7: fish(),
      8: fish()
    })
    const { array } = simulate(torus)
    const fishes = array.filter(e => e).filter(({ type }) => type === FISH)
    expect(fishes).toHaveLength(9)
    fishes.forEach(fish => expect(fish.age).toEqual(0))
  })

  it('simulates a fish swimming and spawning', () => {
    const torus = populateTorus({ 4: fish() })
    const { array } = simulate(simulate(simulate(torus)))
    const fishes = array
      .filter(e => e)
      .filter(({ type }) => type === FISH)
      .sort((a, b) => a.age - b.age)
    expect(fishes).toHaveLength(2)
    expect(fishes[0].age).toEqual(0)
    expect(fishes[1].age).toEqual(3)
  })
})
