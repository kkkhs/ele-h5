export function createBEM(name: string) {
  return (el?: string, mods?: Record<string, boolean>) => {
    let result = `${name}${el ? `__${el}` : ''}`

    if (mods) {
      const modsStr = Object.keys(mods)
        .filter((mod) => mods[mod])
        .map((mod) => ` ${result}--${mod}`)
        .join('')
      result += modsStr
    }

    return result
  }
}

export function createNamespace(name: string) {
  const prefixedName = `op-${name}`
  return [prefixedName, createBEM(prefixedName)] as const
}
