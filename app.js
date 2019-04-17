const routeOptions = {
  A: ['B', 'D', 'G'],
  B: ['A', 'E', 'F'],
  C: ['F', 'H'],
  D: ['A', 'F'],
  E: ['B', 'G'],
  F: ['B', 'C', 'D'],
  G: ['A', 'E'],
  H: ['C']
}

const main = () => {
  const queue = ['A'],
    steps = []
  while (queue.length) {
    steps.push(queue[0])
    routeOptions[queue[0]].map(route => {
      if (!queue.includes(route) && !steps.includes(route)) {
        queue.push(route)
      }
    })
    queue.shift()
  }
  console.log(steps)
}

main()
