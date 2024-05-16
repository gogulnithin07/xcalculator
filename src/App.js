import { useState } from "react";
import styles from "./App.module.css";
export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const arr = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    ["C", 0, "=", "/"],
  ];
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>React Calculator</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput((c) => c + e.target.value)}
        />
        <div>{output}</div>
        <div className={styles.buttons}>
          {arr.flat().map((val, index) => {
            return (
              <Button
                key={crypto.randomUUID()}
                setOutput={setOutput}
                text={val}
                input={input}
                setInput={setInput}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
function Button({ text, input, setInput, setOutput }) {
  let inputVal;
  function handleClick(e) {
    inputVal = e.target.innerText;
    if (inputVal === "=" && input.length === 0) {
      setOutput("Error");
    } else {
      if (inputVal === "C") {
        setInput((c) => "");
        setOutput((c) => "");
      } else if (inputVal === "=") {
        setOutput((c) => eval(input));
      } else {
        if (
          ["+", "-", "*", "/"].includes(input.charAt(input.length - 1)) &&
          isNaN(inputVal)
        ) {
        } else {
          setInput((c) => c + inputVal);
        }
      }
    }
  }
  return (
    <button onClick={(e) => handleClick(e)} className={styles.btn}>
      {text}
    </button>
  );
}
