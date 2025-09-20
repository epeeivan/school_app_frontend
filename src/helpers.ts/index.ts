export function isMobile() {
  return window.innerWidth < 1024 ? true : false
}

export function doWhenScreenIsResized(callback = () => {}) {
  window.addEventListener('resize', () => {
    callback()
  })
}
