import { useState } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { startTransition } from "react";

import "./App.css";

function App() {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [reverse, setReverse] = useState<boolean>(false);

  const orderedNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Math.random() < 0.5) {
      orderedNumbers.push(numbers[i]);
    } else {
      orderedNumbers.unshift(numbers[i]);
    }
  }

  const reverseHandler = () => {
    startTransition(() => {
      setReverse((curr) => !curr);
    });
  };

  return (
    <>
      <button onClick={reverseHandler}>Shuffle</button>
      <section>
        {orderedNumbers.map((n) => {
          return (
            <ViewTransition name={`view-transition-${n}`}>
              <span className="number">{n}</span>
            </ViewTransition>
          );
        })}
      </section>
    </>
  );
}

export default App;
