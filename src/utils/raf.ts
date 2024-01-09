export const rAF =
  requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000 / 60)
  }

export const cancelRAF =
  cancelAnimationFrame ||
  function (id: number) {
    clearTimeout(id)
  }

export const doubleRaf = (fn: () => void) => {
  rAF(() => rAF(fn))
}
