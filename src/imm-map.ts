export class ImmMap<K, V> extends Map<K, V> {
  constructor(entries?: readonly (readonly [K, V])[] | Map<K, V> | ImmMap<K, V> | null) {
    super()
    if (entries)
      for (const [key, value] of entries)
        this.mutateSet(key, value)
  }
  toJSON() {
    return [...this]
  }
  // @ts-ignore
  set(key: K, value: V): ImmMap<K, V> {
    return new ImmMap(this).mutateSet(key, value)
  }
  mutateSet(key: K, value: V): this {
    return super.set(key, value)
  }
  // @ts-ignore
  delete(key: K): ImmMap<K, V> {
    const map = new ImmMap(this)
    map.mutateDelete(key)
    return map
  }
  mutateDelete(key: K): boolean {
    return super.delete(key)
  }
  clear(): ImmMap<K, V> {
    return new ImmMap()
  }
}
