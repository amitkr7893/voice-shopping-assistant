export function getSuggestions(history) {
  if (history.includes("milk")) return ["bread", "butter"]
  if (history.includes("rice")) return ["dal"]
  return []
}

export function getSeasonalItems() {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 5) return ["mango", "watermelon"]
  if (month >= 9 && month <= 11) return ["orange", "apple"]
  return []
}

export function getSubstitutes(items) {
  const map = {
    milk: ["almond milk", "soy milk"],
    bread: ["brown bread"]
  }

  const subs = []
  items.forEach(i => {
    if (map[i.name]) subs.push(...map[i.name])
  })
  return subs
}