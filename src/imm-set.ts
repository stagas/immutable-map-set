export class ImmSet<T> extends Set<T> {
  constructor(values?: readonly T[] | Set<T> | ImmSet<T> | null) {
    super()
    if (values)
      for (const value of values)
        this.mutateAdd(value)
  }
  toJSON() {
    return [...this]
  }
  // @ts-ignore
  add(value: T): ImmSet<T> {
    return new ImmSet(this).mutateAdd(value)
  }
  mutateAdd(value: T): this {
    return super.add(value)
  }
  // @ts-ignore
  delete(value: T): ImmSet<T> {
    const set = new ImmSet(this)
    set.mutateDelete(value)
    return set
  }
  mutateDelete(value: T): boolean {
    return super.delete(value)
  }
  clear(): ImmSet<T> {
    return new ImmSet()
  }
}
