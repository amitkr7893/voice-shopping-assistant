import { useEffect, useState } from "react";
import VoiceInput from "./components/VoiceInput";
import ShoppingList from "./components/ShoppingList";
import Suggestions from "./components/Suggestions";
import { parseCommand } from "./utils/nlp";
import { categoryMap } from "./utils/categories";
import { addItem, getItems, removeItem } from "./utils/firestore";
import {
  getSuggestions,
  getSeasonalItems,
  getSubstitutes,
} from "./utils/suggestions";
import { PRODUCTS } from "./utils/product";

export default function App() {
  const [items, setItems] = useState([]);
  const [language, setLanguage] = useState("en");
  const [message, setMessage] = useState("");
  const [heard, setHeard] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleCommand = async (text) => {
    setHeard(text);
    setSearchResults([]);

    const result = parseCommand(text, language);

    /* ---------------- ADD ---------------- */
    if (result.action === "add") {
      if (!result.item) {
        setMessage("Could not understand item");
        return;
      }

      const normalizedItem = result.item.toLowerCase();

      const isValidProduct = PRODUCTS.some((p) =>
        normalizedItem.includes(p)
      );

      if (!isValidProduct) {
        setMessage("Item not recognized. Please try a known product.");
        return;
      }

      await addItem({
        name: normalizedItem,
        quantity: result.quantity,
        category: categoryMap[normalizedItem] || "Other",
      });

      setMessage(`Added ${result.quantity} ${normalizedItem}`);
      loadItems();
    }

    /* ---------------- REMOVE ---------------- */
    if (result.action === "remove") {
      const item = items.find((i) => i.name === result.item);

      if (!item) {
        setMessage("Item not found");
        return;
      }

      await removeItem(item.id);
      setMessage(`Removed ${result.item}`);
      loadItems();
    }

    /* ---------------- SEARCH ---------------- */
    if (result.action === "search") {
      const found = items.filter((i) =>
        i.name.includes(result.item)
      );

      setSearchResults(found);
      setMessage(`Found ${found.length} item(s)`);
    }
  };

  return (
    <div className="container">
      <h2>Voice Shopping Assistant</h2>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>

      <VoiceInput onCommand={handleCommand} language={language} />

      <div className="status">
        <p>🎙️ Heard: {heard || "—"}</p>
        <p>{message}</p>
      </div>

      <ShoppingList items={searchResults.length ? searchResults : items} />

      <Suggestions
        history={items.map((i) => i.name)}
        seasonal={getSeasonalItems()}
        substitutes={getSubstitutes(items)}
      />
    </div>
  );
}