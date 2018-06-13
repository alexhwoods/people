import { SequenceMatcher } from 'difflib'

const makeGraph = (vertices, weightFunction) => {
  let edges = []
  const seen = vertices.reduce((obj, key) => {
    obj[key] = [] // eslint-disable-line no-param-reassign
    return obj
  }, {})

  vertices.forEach(u => {
    vertices.forEach(v => {
      if (v !== u && !seen[u].includes(v)) {
        edges = edges.concat([{ u, v, weight: weightFunction(u, v) }])
        seen[v] = seen[v].concat([u])
      }
    })
  })

  return { vertices, edges }
}

const similarity = (x, y) => new SequenceMatcher(null, x, y).ratio()

export default words => {
  const { edges } = makeGraph(words, similarity)
  edges.sort((a, b) => b.weight - a.weight)
  return edges.filter(({ weight }) => weight > 0.8)
}
