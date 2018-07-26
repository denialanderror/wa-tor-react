import { createTorus, moveLeft, moveDown, moveUp, moveRight } from './torus'

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

  const simulateTorus = (pos, move) => {
    const torus = createTorus(height, width)
    torus.array[pos] = true
    return move(torus, pos)
  }

  describe('moving left', () => {
    it('moves left one if in rightmost position', () => {
      const pos = width - 1
      const torus = simulateTorus(pos, moveLeft)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[1]).toBeTruthy()
    })

    it('moves returns to the rightmost position if in leftmost space', () => {
      const pos = 0
      const torus = simulateTorus(pos, moveLeft)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[2]).toBeTruthy()
    })
  })

  describe('moving down', () => {
    it('moves down one if in topmost position', () => {
      const pos = 0
      const torus = simulateTorus(pos, moveDown)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[3]).toBeTruthy()
    })

    it('returns to the topmost position if in bottommost space', () => {
      const pos = (height - 1) * width
      const torus = simulateTorus(pos, moveDown)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[0]).toBeTruthy()
    })
  })

  describe('moving up', () => {
    it('moves up one if in bottommost position', () => {
      const pos = (height - 1) * width
      const torus = simulateTorus(pos, moveUp)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[3]).toBeTruthy()
    })

    it('returns to the bottommost position if in upmost space', () => {
      const pos = 0
      const torus = simulateTorus(pos, moveUp)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[6]).toBeTruthy()
    })
  })

  describe('moving right', () => {
    it('moves right one if in leftmost position', () => {
      const pos = 0
      const torus = simulateTorus(pos, moveRight)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[1]).toBeTruthy()
    })

    it('returns to the leftmost position if in rightmost space', () => {
      const pos = width - 1
      const torus = simulateTorus(pos, moveRight)
      expect(torus.array[pos]).toBeFalsy()
      expect(torus.array[0]).toBeTruthy()
    })
  })
})
