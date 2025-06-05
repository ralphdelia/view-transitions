import {
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

export default function ShuffleExample() {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const shuffle = <T,>(arr: T[]): T[] =>
    arr.toSorted(() => Math.random() - 0.5);

  const handleShuffle = () => {
    startTransition(() => setNumbers(shuffle));
  };

  return (
    <>
      <button onClick={handleShuffle}>Shuffle</button>
      <div className="grid-container">
        {numbers.map((n) => {
            return (
              <ViewTransition name={`view-transition-${n}`} key={n}>
                <article className="number">{n}</article>
              </ViewTransition>
            );
          })}
      </div>
    </>
  );
};
