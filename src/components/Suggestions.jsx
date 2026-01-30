export default function Suggestions({ history, seasonal, substitutes }) {
  return (
    <div className="section">
      <h4>Suggestions</h4>

      {history.length > 0 && (
        <>
          <strong>Based on history</strong>
          <ul className="suggestion-list">
            {history.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      )}

      {seasonal.length > 0 && (
        <>
          <strong>Seasonal</strong>
          <ul className="suggestion-list">
            {seasonal.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}

      {substitutes.length > 0 && (
        <>
          <strong>Substitutes</strong>
          <ul className="suggestion-list">
            {substitutes.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}