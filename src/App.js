import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("Translation");
  const [userInput, setUserInput] = useState("");

  const emojiDictionary = {
    "🙈": "See-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "🍇": "Grapes",
    "🍌": "Banana",
    "🏳️": "white-flag",
    "🏴": "black-flag",
  };

  const emojiList = Object.keys(emojiDictionary);
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];
    setUserInput(userInput);
    if (!meaning) {
      setErr(true);
    } else {
      setErr(false);
    }
    setMeaning(meaning);
  };

  const handleClick = (item) => {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
    setErr(false);
    setUserInput("");
  };

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input type="text" onChange={handleChange}></input>
      <h2>{userInput}</h2>
      {err && <h2>Sorry this emoji is not in our database</h2>}
      <h2>{meaning}</h2>
      <ul className="emoji-list">
        {emojiList.map((item) => {
          return (
            <li key={item} onClick={() => handleClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
