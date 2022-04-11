export function sum(...args) {
  if (args.length === 0) {
    throw Error('sum required at least 1 argument')
  }
  console.log()
  return args.reduce((result, current) => result + current, 0);
}
