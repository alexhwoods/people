export default (word, numChars) =>
  (word.length < numChars ? word : `${word.substring(0, numChars - 3)}...`)
