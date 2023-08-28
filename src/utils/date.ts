export function isValidDate (d: unknown): boolean {
  return Object.prototype.toString.call(d) === '[object Date]'
}
