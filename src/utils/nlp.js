// src/utils/nlp.js

const hindiMap = {
  "जोड़ो": "add",
  "हटाओ": "remove",
  "खरीदो": "buy",
  "दूध": "milk",
  "सेब": "apple",
  "केला": "banana",
  "पानी": "water",
  "ब्रेड": "bread"
}

const wordToNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
}

function replaceWordNumbers(text) {
  let result = text
  Object.keys(wordToNumber).forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, "g")
    result = result.replace(regex, wordToNumber[word])
  })
  return result
}
function normalizeHindi(text) {
  let t = text
  Object.keys(hindiMap).forEach(k => {
    t = t.replace(k, hindiMap[k])
  })
  return t
}

function extractQuantity(text) {
  const match = text.match(/\d+/)
  return match ? parseInt(match[0]) : 1
}

function extractItem(text) {
  return text
    .replace(/add|buy|remove|search|find/g, "")
    .replace(/\d+/g, "")
    .trim()
}

export function parseCommand(text, language) {
    let input = replaceWordNumbers(text.toLowerCase())

  if (language === "hi") {
    input = normalizeHindi(input)
  }

  const quantity = extractQuantity(input)

  if (input.includes("add") || input.includes("buy")) {
    return { action: "add", item: extractItem(input), quantity }
  }

  if (input.includes("remove")) {
    return { action: "remove", item: extractItem(input) }
  }

  if (input.includes("search") || input.includes("find")) {
    return { action: "search", item: extractItem(input) }
  }

  return { action: "unknown" }
}