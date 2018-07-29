import { checkLeft, checkDown, checkUp, checkRight, getDirections } from './navigation'
import { FISH } from '../const'
import { createTorus } from './generate'

describe('torus creation', () => {
  it('creates an array of length 1 if size is 1x1', () => {
    expect(createTorus(1, 1).array).toHaveLength(1)
  })

  it('creates an array of length 4 size is 2x2', () => {
    expect(createTorus(2, 2).array).toHaveLength(4)
  })

  it('creates an array of length 6 size is 3x2', () => {
    expect(createTorus(3, 2).array).toHaveLength(6)
  })

  it('creates an array of length 4 size is 2x3', () => {
    expect(createTorus(2, 3).array).toHaveLength(6)
  })
})

describe('torus navigation', () => {
  const height = 3
  const width = 6

  const navigationCheck = (check, pos, others) => {
    const torus = createTorus(width, height)
    torus.array[pos] = FISH
    others && others.forEach(o => (torus.array[o] = FISH))
    return check(torus, pos)
  }

  describe('check left', () => {
    it('returns the left index if in rightmost position and index is not occupied', () => {
      const pos = width - 1
      const check = navigationCheck(checkLeft, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(4)
    })

    it('returns the rightmost index if in leftmost position and index is not occupied', () => {
      const pos = 0
      const check = navigationCheck(checkLeft, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(5)
    })

    it('returns occupant when next index is occupied', () => {
      const pos = 1
      const others = [0]
      const check = navigationCheck(checkLeft, pos, others)
      expect(check.location).toEqual(0)
      expect(check.occupant).toEqual(FISH)
    })
  })

  describe('check down', () => {
    it('returns the next down index if in topmost position and index is not occupied', () => {
      const pos = 0
      const check = navigationCheck(checkDown, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(6)
    })

    it('returns the topmost index if in bottommost position and index is not occupied', () => {
      const pos = 12
      const check = navigationCheck(checkDown, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(0)
    })

    it('returns occupant when next index is occupied', () => {
      const pos = 0
      const others = [6]
      const check = navigationCheck(checkDown, pos, others)
      expect(check.location).toEqual(6)
      expect(check.occupant).toEqual(FISH)
    })
  })

  describe('check up', () => {
    it('returns the next up index if in bottommost position and index is not occupied', () => {
      const pos = 12
      const check = navigationCheck(checkUp, pos)
      expect(check.location).toEqual(6)
      expect(check.occupant).toBeFalsy()
    })

    it('returns the bottommost index if in upmost position and index is not occupied', () => {
      const pos = 0
      const check = navigationCheck(checkUp, pos)
      expect(check.location).toEqual(12)
      expect(check.occupant).toBeFalsy()
    })

    it('returns occupant when next index is occupied', () => {
      const pos = 6
      const others = [0]
      const check = navigationCheck(checkUp, pos, others)
      expect(check.location).toEqual(0)
      expect(check.occupant).toEqual(FISH)
    })
  })

  describe('check right', () => {
    it('returns the right index if in leftmost position and index is not occupied', () => {
      const pos = 0
      const check = navigationCheck(checkRight, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(1)
    })

    it('returns the leftmost index if in rightmost position and index is not occupied', () => {
      const pos = width - 1
      console.log(pos)
      const check = navigationCheck(checkRight, pos)
      expect(check.occupant).toBeFalsy()
      expect(check.location).toEqual(0)
    })

    it('returns occupant when next index is occupied', () => {
      const pos = 0
      const others = [1]
      const check = navigationCheck(checkRight, pos, others)
      expect(check.location).toEqual(1)
      expect(check.occupant).toEqual(FISH)
    })
  })
})

describe('deciding direction', () => {
  it('returns an array of four functions', () => {
    expect(getDirections()).toHaveLength(4)
  })

  it('should not include duplicates', () => {
    const directionNames = getDirections().map(dir => dir.name)
    expect(new Set(directionNames).size).toEqual(4)
  })
})
