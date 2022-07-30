import { ImmMap, ImmSet } from '../src'

describe('suite', () => {
  describe('ImmMap', () => {
    it('works', () => {
      const map = new ImmMap([[1, 2]])
      const res = map.set(3, 4)
      expect(map.has(1)).toBe(true)
      expect(map.has(3)).toBe(false)
      expect(res.has(3)).toBe(true)
      expect(res).toBeInstanceOf(ImmMap)
      expect(map).not.toBe(res)
      expect(map).toMatchSnapshot()
      expect(res).toMatchSnapshot()
      const del = res.delete(1)
      expect(del).toBeInstanceOf(ImmMap)
      expect(res).toMatchSnapshot()
      expect(del).toMatchSnapshot()
      expect(del).not.toBe(res)
      const cleared = del.clear()
      expect(cleared).not.toBe(del)
      expect(del).toMatchSnapshot()
      expect(cleared).toBeInstanceOf(ImmMap)
      expect(cleared).toMatchSnapshot()
    })
  })

  describe('ImmSet', () => {
    it('works', () => {
      const set = new ImmSet([1, 2])
      const res = set.add(3)
      expect(set.has(1)).toBe(true)
      expect(set.has(3)).toBe(false)
      expect(res.has(3)).toBe(true)
      expect(res).toBeInstanceOf(ImmSet)
      expect(set).not.toBe(res)
      expect(set).toMatchSnapshot()
      expect(res).toMatchSnapshot()
      const del = res.delete(1)
      expect(del).toBeInstanceOf(ImmSet)
      expect(res).toMatchSnapshot()
      expect(del).toMatchSnapshot()
      expect(del).not.toBe(res)
      const cleared = del.clear()
      expect(cleared).not.toBe(del)
      expect(del).toMatchSnapshot()
      expect(cleared).toBeInstanceOf(ImmSet)
      expect(cleared).toMatchSnapshot()
    })
  })
})
