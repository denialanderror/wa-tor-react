import { createTorus, checkLeft, checkDown, checkUp, checkRight } from './torus'

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
  const width = 3

  const navigationCheck = (check, pos, others) => {
    const torus = createTorus(height, width)
    torus.array[pos] = true
    others && others.forEach(o => (torus.array[o] = true))
    return check(torus, pos)
  }

  describe('check left', () => {
    it('returns the left index if in rightmost position and index is not occupied', () => {
      const pos = width - 1
      expect(navigationCheck(checkLeft, pos)).toEqual(1)
    })

    it('returns the rightmost index if in leftmost position and index is not occupied', () => {
      const pos = 0
      expect(navigationCheck(checkLeft, pos)).toEqual(2)
    })

    it('returns -1 when next index is occupied', () => {
      const pos = 1
      const others = [0]
      expect(navigationCheck(checkLeft, pos, others)).toEqual(-1)
    })
  })

  describe('check down', () => {
    it('returns the next down index if in topmost position and index is not occupied', () => {
      const pos = 0
      expect(navigationCheck(checkDown, pos)).toEqual(3)
    })

    it('returns the topmost index if in bottommost position and index is not occupied', () => {
      const pos = (height - 1) * width
      expect(navigationCheck(checkDown, pos)).toEqual(0)
    })

    it('returns -1 when next index is occupied', () => {
      const pos = 0
      const others = [3]
      expect(navigationCheck(checkDown, pos, others)).toEqual(-1)
    })
  })

  describe('check up', () => {
    it('returns the next up index if in bottommost position and index is not occupied', () => {
      const pos = (height - 1) * width
      expect(navigationCheck(checkUp, pos)).toEqual(3)
    })

    it('returns the bottommost index if in upmost position and index is not occupied', () => {
      const pos = 0
      expect(navigationCheck(checkUp, pos)).toEqual(6)
    })

    it('returns -1 when next index is occupied', () => {
      const pos = 3
      const others = [0]
      expect(navigationCheck(checkUp, pos, others)).toEqual(-1)
    })
  })

  describe('check right', () => {
    it('returns the right index if in leftmost position and index is not occupied', () => {
      const pos = 0
      expect(navigationCheck(checkRight, pos)).toEqual(1)
    })

    it('returns the leftmost index if in rightmost position and index is not occupied', () => {
      const pos = width - 1
      expect(navigationCheck(checkRight, pos)).toEqual(0)
    })

    it('returns -1 when next index is occupied', () => {
      const pos = 0
      const others = [1]
      expect(navigationCheck(checkRight, pos, others)).toEqual(-1)
    })
  })
})
