export default string => {
  const letters = new Set(string)
  return [...letters].map(letter => ({
    value: letter,
    count: string.split('').filter(y => y === letter).length,
  }))
}
