type Object = Record<string, unknown>

export const isObject = (item: unknown): item is Object =>
  !!item && typeof item == 'object' && item !== null && !Array.isArray(item)

export const mergeDeep = <T extends Object[]>(...objects: T) =>
  objects.reduce((prev, current) => {
    Object.keys(current).forEach((key) => {
      // Check if both are arrays
      if (Array.isArray(prev[key]) && Array.isArray(current[key])) {
        // Concatenate arrays
        prev[key] = Array.from(
          new Set((prev[key] as unknown[]).concat(current[key]))
        )
        // Check if both are objects
      } else if (isObject(prev[key]) && isObject(current[key])) {
        // Recursive mergeDeep objects
        prev[key] = mergeDeep(prev[key] as Object, current[key] as Object)
      } else {
        // Otherwise create/override key
        prev[key] = current[key]
      }
    })
    return prev
  }, {})
